disableUserOperation();
sessionStorage.removeItem('localized_text');
sessionStorage.removeItem('resource_key');

/*
 * common processing each screen
 */

//common variable
var samuraiOriginBase = '../../samurai-wup.cdn.nintendo.net/samurai/';
var samuraiBase = samuraiOriginBase;

var ninjaBase = '../../ninja.wup.shop.nintendo.net/ninja/';

if (!isWiiU) {
    // AWS ninjaでPCからの接続を実現する SEE #29035
    var samurai_base_pc = localStorage.getItem('samurai_base');
    if (samurai_base_pc) {
        samuraiOriginBase = samurai_base_pc;
        samuraiBase = samurai_base_pc;
    }
    var ninja_base_pc = localStorage.getItem('ninja_base');
    if (ninja_base_pc) {
        ninjaBase = ninja_base_pc;
    }
}

//error prefix
var prefixSamurai = 110;
var prefixNinja = 107;
var prefixCcif = 126;
var prefixOther = 111;

// embedded error codes
var errorCodeCloseApplication = 1119000;
var errorCodeRetriable = 1119001;
var errorCodeUnderMaintenance = 1119002;
var errorCodeServiceFinished = 1119003;
var errorCodeForBrowserLocked = 1990503;

// timeout
$.ajaxSetup({
	timeout: 55000
});
// 国言語設定
var country;
var lang;

if (isWiiU) {

    lang = $.localStorage().getItem('lang');

    var countrySetting = wiiuSystemSetting.getCountry();
    processJsxError(countrySetting);
    country = countrySetting.code;

} else {
    if ($.localStorage().getItem('lang') == null || $.localStorage().getItem('lang').length == 0) {
        lang = "ja";
    } else {
        lang = $.localStorage().getItem('lang');
    }

    country = $.sessionStorage().getItem('country');
    if (country == null || country.length == 0) {
        country = "JP";
    }
}


// key of message resource file
var resourceKey;
if ($.sessionStorage().getItem('resource_key') == null || $.sessionStorage().getItem('resource_key').length == 0) {

    getResourceKey(country, lang);

    $.sessionStorage().setItem('resource_key', resourceKey);

} else {
    resourceKey = $.sessionStorage().getItem('resource_key');
}

//async
var initialized = false;
var script_onload;

setTimeout(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'js/functions/async.js';
    script.onload = function() {
        if (!initialized) {
            initialized = true;
            script_onload();
        }
    };
    script.onreadystatechange = function() {
        if (!initialized) {
            switch (script.readyState) {
            case 'loaded':
            case 'complete':
                initialized = true;
                script_onload();
                break;
            }
        }
    };

    var head = document.getElementsByTagName('head')[0] ||
               document.documentElement;
    head.appendChild(script);
}, 0);

if (initialized) {
    async();
} else {
    script_onload = function() {
        async();
    };
}

$(function() {
    //menubar
    $('#sel_menu_bar').html('<ul>' +
        '<li id="top_link_01" class="top">'+
        '<div data-href="./#top" class="se" data-se-label="SE_WAVE_OK_SUB">'+
        '<span data-message="common01_01_038"><!-- 〓Top --></span>'+
        '</div>'+
        '</li>'+
        '<li id="top_link_02" class="menu">'+
        '<div data-href="always01_01.html" class="se" data-se-label="SE_WAVE_OK_SUB">'+
        '<img src="image/img_unknown_MiiIcon.png" width="70" height="70"/><br/>'+
        '<span data-message="common01_01_002"><!-- 〓My Menu --></span>'+
        '</div>'+
        '</li>'+
        '<li id="top_link_03" class="balance">'+
        '<div data-href="money01_01.html" class="se" data-se-label="SE_WAVE_OK_SUB">'+
        '<span data-message="common01_01_020"><!-- 〓Balance --></span>'+
        '<span id="balance"></span>'+
        '</div>'+
        '</li>'+
        '<li id="top_link_04" class="search">'+
        '<div data-href="always02_01.html" class="se" data-se-label="SE_WAVE_OK_SUB">'+
        '<span data-message="common01_01_003"><!-- 〓Search --></span>'+
        '</div>'+
        '</li>'+
        '<li id="top_link_05" class="back">'+
        '<div data-href="#" class="se" data-se-label="SE_WAVE_BACK">'+
        '<span data-message="common01_01_001"><!-- 〓Back --></span>'+
        '</div>'+
        '</li>'+
        '<li id="top_link_06" class="exit">'+
        '<div data-href="./#top" class="se" data-se-label="SE_WAVE_EXIT">'+
        '<span data-message="common01_01_010"><!-- 〓Exit --></span>'+
        '</div>'+
        '</li>'+
        '<li id="top_link_07" class="sb_close"><div data-href="" data-message="common01_01_008"></div></li>' +
        '</ul>');
    //セッション切れエラーメッセージ
    $('<div style="display:none;"><span id="dialog_msg_invalid_session" data-message="error01_01"></span></div>').appendTo('body');
    localize(resourceKey);
    //common sound effect
    commonSE();
    //ninjaセッション保持
    sessionKeepAlive();
});

//historyBackで戻ってきたときに必ずユーザ操作禁止を解除する
$(window).bind('pageshow', function(e){
    //メディアプレイヤーを閉じる
    if(isWiiU) {
        window.wiiu.videoplayer.end();
    }
    if (e.originalEvent && e.originalEvent.persisted) {
        $.print('[pageshow] from back');
        isUserOperationEnabled = null;
        enableUserOperation();
    }
});
