import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Keep track of bound iframe documents and their cleanups
    const iframeCleanups = new Map<Document, () => void>();

    const handleMouseMove = (clientX: number, clientY: number) => {
      setPosition({ x: clientX, y: clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsGrabbing(true);
    };

    const handleMouseUp = () => {
      setIsGrabbing(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleTouchStart = () => {
      setIsVisible(false);
    };

    // Bind listeners to main window
    const onMouseMove = (e: MouseEvent) => handleMouseMove(e.clientX, e.clientY);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('touchstart', handleTouchStart);

    // Setup function for individual iframe document
    const setupIframe = (iframe: HTMLIFrameElement) => {
      try {
        const win = iframe.contentWindow;
        if (!win) return;

        const doc = iframe.contentDocument || win.document;
        if (!doc) return;

        // Check if this specific document has already been bound
        if ((doc as any).__cursorBound) return;
        (doc as any).__cursorBound = true;

        console.log("[CustomCursor] Binding to iframe document:", doc.location.href);

        // Inject CSS stylesheet to hide default cursor
        const styleId = 'custom-cursor-hide-style';
        const injectStyle = () => {
          if (!doc.getElementById(styleId)) {
            const style = doc.createElement('style');
            style.id = styleId;
            style.textContent = `
              html, body, *, button, a, [role="button"], input, select, textarea {
                cursor: none !important;
              }
            `;
            const target = doc.head || doc.body || doc.documentElement;
            target?.appendChild(style);
            console.log("[CustomCursor] Injected cursor-hide style into iframe document:", doc.location.href);
          }
        };

        // Run immediately
        injectStyle();

        // Monitor if the style tag gets removed or replaced by application scripts, and re-inject it
        const iframeObserver = new MutationObserver(injectStyle);
        iframeObserver.observe(doc.documentElement, { childList: true, subtree: true });

        // Translate iframe mouse coordinates to parent window space
        const getParentCoords = (e: MouseEvent) => {
          const rect = iframe.getBoundingClientRect();
          return {
            x: rect.left + e.clientX,
            y: rect.top + e.clientY,
          };
        };

        const onIframeMouseMove = (e: MouseEvent) => {
          const coords = getParentCoords(e);
          handleMouseMove(coords.x, coords.y);
        };

        doc.addEventListener('mousemove', onIframeMouseMove);
        doc.addEventListener('mousedown', handleMouseDown);
        doc.addEventListener('mouseup', handleMouseUp);
        doc.addEventListener('mouseleave', handleMouseLeave);
        doc.addEventListener('mouseenter', handleMouseEnter);
        doc.addEventListener('touchstart', handleTouchStart);

        // Store cleanup callback for component unmount or reload
        iframeCleanups.set(doc, () => {
          try {
            iframeObserver.disconnect();
            doc.removeEventListener('mousemove', onIframeMouseMove);
            doc.removeEventListener('mousedown', handleMouseDown);
            doc.removeEventListener('mouseup', handleMouseUp);
            doc.removeEventListener('mouseleave', handleMouseLeave);
            doc.removeEventListener('mouseenter', handleMouseEnter);
            doc.removeEventListener('touchstart', handleTouchStart);
          } catch (err) {
            // Ignore if document was already destroyed
          }
        });
      } catch (err) {
        console.warn("[CustomCursor] Failed to bind custom cursor to iframe:", err);
      }
    };

    // Watch for load event and handle existing documents
    const handleIframeAdd = (iframe: HTMLIFrameElement) => {
      if ((iframe as any).__loadListenerAttached) return;
      (iframe as any).__loadListenerAttached = true;

      const onLoad = () => setupIframe(iframe);
      iframe.addEventListener('load', onLoad);

      // Clean up load listener on unmount
      const win = iframe.contentWindow;
      const key = iframe.contentDocument || win?.document || ({} as any);
      const currentCleanup = iframeCleanups.get(key);
      iframeCleanups.set(key, () => {
        if (currentCleanup) currentCleanup();
        iframe.removeEventListener('load', onLoad);
      });

      // Try setting up immediately if document exists and is ready
      try {
        if (iframe.contentDocument) {
          setupIframe(iframe);
        }
      } catch (e) {
        // Cross-origin boundary check fallback
      }
    };

    // Bind to existing iframes in DOM
    const existingIframes = document.querySelectorAll('iframe');
    existingIframes.forEach((iframe) => handleIframeAdd(iframe as HTMLIFrameElement));

    // Monitor for future iframes added dynamically
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeName === 'IFRAME') {
              handleIframeAdd(node as HTMLIFrameElement);
            } else if (node instanceof HTMLElement) {
              const found = node.querySelectorAll('iframe');
              found.forEach((iframe) => handleIframeAdd(iframe as HTMLIFrameElement));
            }
          });
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up all bindings on unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('touchstart', handleTouchStart);
      
      observer.disconnect();

      iframeCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  if (!isVisible) return null;

  // The custom cursor tip hotspot is at (48, 10) in the 128x128 image.
  // We scale the offsets dynamically based on cursorSize.
  const cursorSize = 72;
  const xOffset = cursorSize * (48 / 128);
  const yOffset = cursorSize * (10 / 128);

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    pointerEvents: 'none',
    zIndex: 999999,
    transform: `translate3d(${position.x - xOffset}px, ${position.y - yOffset}px, 0)`,
    willChange: 'transform',
  };

  const imageSrc = isGrabbing
    ? '/local-assets/cursor/Player%201%20Cursor%20Grab.png'
    : '/local-assets/cursor/Player%201%20Cursor.png';

  return (
    <img
      src={imageSrc}
      alt="Custom Cursor"
      style={cursorStyle}
    />
  );
};
