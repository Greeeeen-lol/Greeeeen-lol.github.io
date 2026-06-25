/**
 * custom-featured-banners.js
 * --------------------------------------------------------------------------
 * Renders a "Featured" banner strip at the top of the eShop home page, built
 * from the platform server catalog (/platform/manifest). Each title's eShop
 * banner art lives on the server (/platform/assets/game-banners/<id>.png);
 * clicking a banner opens that title's about page.
 *
 * The eShop home is rendered by Backbone (Wood.Controller.Index), which rebuilds
 * #el-top after we load. A MutationObserver re-inserts the strip whenever it gets
 * wiped, so the banners survive route/redraws.
 */
(function () {
  'use strict';

  var STRIP_ID = 'cfb-strip';
  var catalog = null;

  function injectStyles() {
    if (document.getElementById('cfb-styles')) return;
    var css = '' +
      '#' + STRIP_ID + '{list-style:none;margin:0 0 18px 0;padding:18px 20px;' +
      'background:linear-gradient(180deg,#f6f6f6,#e9e9e9);border-bottom:1px solid #d8d8d8;}' +
      '#' + STRIP_ID + ' .cfb-head{font:600 18px/1 "Roboto",Arial,sans-serif;color:#333;margin:0 0 12px 4px;' +
      'display:flex;align-items:center;gap:8px;}' +
      '#' + STRIP_ID + ' .cfb-head:before{content:"";width:5px;height:18px;background:#ff7300;border-radius:2px;display:inline-block;}' +
      '#' + STRIP_ID + ' .cfb-row{display:flex;gap:16px;overflow-x:auto;padding:4px 4px 10px;scroll-snap-type:x mandatory;}' +
      '#' + STRIP_ID + ' .cfb-card{flex:0 0 auto;width:320px;height:172px;border-radius:12px;overflow:hidden;' +
      'box-shadow:0 4px 12px rgba(0,0,0,.18);cursor:pointer;position:relative;scroll-snap-align:start;' +
      'transition:transform .15s ease,box-shadow .15s ease;background:#cfd8dc;}' +
      '#' + STRIP_ID + ' .cfb-card:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.28);}' +
      '#' + STRIP_ID + ' .cfb-card img{width:100%;height:100%;object-fit:cover;display:block;}' +
      '#' + STRIP_ID + ' .cfb-name{position:absolute;left:0;right:0;bottom:0;padding:8px 12px;color:#fff;' +
      'font:600 15px/1.1 "Roboto",Arial,sans-serif;background:linear-gradient(180deg,transparent,rgba(0,0,0,.7));}';
    var s = document.createElement('style');
    s.id = 'cfb-styles';
    s.textContent = css;
    document.head.appendChild(s);
  }

  function buildStrip() {
    var ul = document.createElement('ul');
    ul.id = STRIP_ID;
    var head = document.createElement('div');
    head.className = 'cfb-head';
    head.textContent = 'Featured';
    ul.appendChild(head);

    var row = document.createElement('div');
    row.className = 'cfb-row';
    catalog.forEach(function (g) {
      if (!g.banner) return;
      var card = document.createElement('div');
      card.className = 'cfb-card';
      card.setAttribute('data-title-id', g.titleId);
      var img = document.createElement('img');
      img.src = g.banner;
      img.alt = g.name || g.titleId;
      img.onerror = function () { card.style.display = 'none'; };
      var name = document.createElement('div');
      name.className = 'cfb-name';
      name.textContent = g.name || '';
      card.appendChild(img);
      card.appendChild(name);
      card.addEventListener('click', function () {
        window.location.href = 'gameaboutpage.html?title=' + encodeURIComponent(g.titleId);
      });
      row.appendChild(card);
    });
    ul.appendChild(row);
    return ul;
  }

  function place() {
    if (!catalog || document.getElementById(STRIP_ID)) return;
    // Prefer the top-main list; fall back to the top wrapper.
    var host = document.getElementById('el-top') ||
               document.querySelector('.top-main') ||
               document.querySelector('#wrapper.js-top') ||
               document.body;
    if (!host) return;
    injectStyles();
    host.insertBefore(buildStrip(), host.firstChild);
  }

  function start() {
    fetch('/platform/manifest')
      .then(function (r) { return r.json(); })
      .then(function (m) {
        catalog = (m && Array.isArray(m.catalog)) ? m.catalog : [];
        place();
        // Re-insert whenever Backbone rebuilds the home content.
        var obs = new MutationObserver(function () {
          if (!document.getElementById(STRIP_ID)) place();
        });
        obs.observe(document.body, { childList: true, subtree: true });
      })
      .catch(function (e) { console.error('[featured-banners] failed:', e); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
