(function() {
    // Guard to ensure scaler is only initialized once
    if (window.eshopUiScalerInitialized) return;
    window.eshopUiScalerInitialized = true;

    console.log("eShop UI Scaler initializing (16:9 Lock, no button)...");

    // CSS styling block to reset html/body backgrounds
    var styleContent = `
        html {
            background-color: #eeeeee !important;
            height: 100%;
            margin: 0;
            padding: 0;
        }
    `;

    // Inject styling
    var styleElement = document.createElement('style');
    styleElement.id = 'eshop-scaler-styles';
    styleElement.innerHTML = styleContent;
    document.head.appendChild(styleElement);

    // Scaling Logic (Lock to 16:9 Screen Fit)
    function applyZoom() {
        if (!document.body) return;

        // Reset default body properties to ensure uniform scaling behavior
        document.body.style.width = '1280px';
        document.body.style.margin = '0 auto';
        document.body.style.position = 'relative';
        document.body.style.overflowX = 'hidden';

        var designWidth = 1280;
        var designHeight = 720;
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;

        // Force 'fit-screen' 16:9 scaling
        var scale = Math.min(winWidth / designWidth, winHeight / designHeight);
        if (!scale || scale <= 0 || isNaN(scale)) scale = 1.0;

        // Apply zoom using standard or fallback property
        if ('zoom' in document.body.style) {
            document.body.style.zoom = scale;
            document.body.style.transform = '';
            document.body.style.transformOrigin = '';
        } else {
            // Fallback for browsers that don't support zoom property natively
            document.body.style.transform = 'scale(' + scale + ')';
            document.body.style.transformOrigin = 'top center';
        }

        // Handle vertical centering of the 720px design container when window height exceeds it
        var scaledHeight = designHeight * scale;
        if (winHeight > scaledHeight) {
            var offset = Math.floor((winHeight - scaledHeight) / 2 / scale);
            document.body.style.marginTop = offset + 'px';
        } else {
            document.body.style.marginTop = '0px';
        }
    }

    // Run setup immediately if DOM is ready, otherwise queue it
    function run() {
        applyZoom();
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        run();
    } else {
        window.addEventListener('DOMContentLoaded', run);
    }

    window.addEventListener('load', run);
    window.addEventListener('resize', applyZoom);

})();
