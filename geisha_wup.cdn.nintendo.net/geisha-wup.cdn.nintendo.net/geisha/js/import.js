(function() {
    var PRESET_KEY = 'eshop_zoom_preset';
    var activePreset = localStorage.getItem(PRESET_KEY) || 'fit-screen';
    var scale = 1.0;
    
    var designWidth = 1280;
    var designHeight = 720;
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    switch (activePreset) {
        case 'fit-width':
            scale = winWidth / designWidth;
            break;
        case 'fit-height':
            scale = winHeight / designHeight;
            break;
        case 'fit-screen':
            scale = Math.min(winWidth / designWidth, winHeight / designHeight);
            break;
        case '125':
            scale = 1.25;
            break;
        case '150':
            scale = 1.5;
            break;
        case '200':
            scale = 2.0;
            break;
        case '100':
        default:
            scale = 1.0;
            break;
     }
 
     if (!scale || scale <= 0 || isNaN(scale)) scale = 1.0;
 
     var style = document.createElement('style');
    style.id = 'fout-prevention-zoom';
    var offsetStyle = '';
    var scaledHeight = designHeight * scale;
    if (winHeight > scaledHeight) {
        var offset = Math.floor((winHeight - scaledHeight) / 2 / scale);
        offsetStyle = 'margin-top: ' + offset + 'px !important;';
    }
    style.innerHTML = 'body { zoom: ' + scale + ' !important; width: 1280px !important; margin: 0 auto !important; position: relative !important; overflow-x: hidden !important; ' + offsetStyle + ' }';
    
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.documentElement.appendChild(style);
    }

    var script = document.createElement('script');
    script.src = 'js/ui_scaler.js';
    script.async = true;
    if (document.head) {
        document.head.appendChild(script);
    } else {
        document.documentElement.appendChild(script);
    }
})();

document.write('<script type="text/javascript" src="js/libs/jquery/jquery.min.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/libs/plugins/url/jquery.url.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/libs/jquery/jquery.tmpl.min.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/functions/extensions.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/functions/functions.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
//NUP1.1以降使用
document.write('<script type="text/javascript" src="js/libs/plugins/jquery.mockjax.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/libs/underscore.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/libs/backbone.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/functions/wood.define.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/functions/wood.jsext.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/functions/wood.price.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
//ここまで

document.write('<script type="text/javascript" src="js/functions/setup.js" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/libs/plugins/jquery.crypt.js?ts=1465872859469" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/wood/analytics_util.js?ts=1465872859469" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
document.write('<script type="text/javascript" src="js/wood/analytics.js?ts=1465872859469" onerror="wiiuErrorViewer.openByCode(1119000);wiiuBrowser.jumpToHomeButtonMenu();"></script>');
