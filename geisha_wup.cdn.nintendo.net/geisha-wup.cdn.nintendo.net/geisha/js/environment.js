// ==========================================
// Wii U Browser Mocks for Browser/Offline execution
// ==========================================

// Override user agent to look like an authentic Wii U NintendoBrowser
try {
    Object.defineProperty(navigator, 'userAgent', {
        get: function () {
            return 'Mozilla/5.0 (Nintendo WiiU) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.4.2.13 NintendoBrowser/4.3.2.11274.US wood/1.5.0';
        },
        configurable: true
    });
} catch (e) {
    console.warn("Failed to override navigator.userAgent:", e);
}

// 1. wiiuLocalStorage mock
if (typeof window.wiiuLocalStorage === 'undefined') {
    window.wiiuLocalStorage = {
        getItem: function(key) { return localStorage.getItem(key); },
        setItem: function(key, val) { localStorage.setItem(key, val); },
        removeItem: function(key) { localStorage.removeItem(key); },
        clear: function() { localStorage.clear(); },
        write: function() { console.log("[wiiuLocalStorage Mock] write called"); }
    };
}

// Pre-populate default language if not set
if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ja');
}

// 2. wiiuSessionStorage mock
if (typeof window.wiiuSessionStorage === 'undefined') {
    window.wiiuSessionStorage = {
        getItem: function(key) { return sessionStorage.getItem(key); },
        setItem: function(key, val) { sessionStorage.setItem(key, val); },
        removeItem: function(key) { sessionStorage.removeItem(key); },
        clear: function() { sessionStorage.clear(); }
    };
}

// 3. wiiuNNA mock
if (typeof window.wiiuNNA === 'undefined') {
    window.wiiuNNA = {
        principalId: 12345678,
        principalIdHashKey: "hashkey",
        gender: "male",
        birthday: "2000-01-01",
        isMailAddressValidated: function() { return "true"; },
        getServiceToken: function() {
            return { error: false, ServiceToken: "mock_service_token_12345" };
        },
        refreshVirtualAccount: function() {
            return { error: false };
        }
    };
}

// 4. wiiuSystemSetting mock
if (typeof window.wiiuSystemSetting === 'undefined') {
    window.wiiuSystemSetting = {
        getRegion: function() { return { error: false, code: "JPN" }; },
        getCountry: function() { return { error: false, code: "JP" }; },
        getLanguage: function() { return { error: false, code: "ja" }; },
        getUTC: function() { return { error: false, epochMilliSeconds: Date.now().toString() }; },
        getLocalTime: function() {
            var d = new Date();
            return {
                error: false,
                year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDate(),
                hour: d.getHours(),
                minute: d.getMinutes(),
                second: d.getSeconds()
            };
        },
        getParentalControlForEShop: function() { return { error: false, isLocked: false }; },
        getParentalControlForGamePlay: function() { return { error: false, isLocked: false, age: 0 }; },
        getEShopInitialized: function() { return { error: false, initialized: true }; },
        setEShopInitialized: function(val) { return { error: false }; }
    };
}

// 5. wiiuDevice mock
if (typeof window.wiiuDevice === 'undefined') {
    window.wiiuDevice = {
        isDrc: function() { return true; },
        getAocContentIndexList: function(title_id) { return { indexes: [] }; },
        getTitleInstallState: function(title_id) { return 0; }
    };
}

// 6. wiiuEC mock
if (typeof window.wiiuEC === 'undefined') {
    window.wiiuEC = {
        getTitleInstallInfo: function(title_id, version) {
            return { error: false, downloadMedia: "USB", installSize: "65535", storageSize: "9493802" };
        },
        getAocInstallInfo: function(title_id, version, json) {
            return { error: false, downloadMedia: "USB", installSize: "65535", storageSize: "9493802" };
        },
        getDownloadTaskListState: function() { return { error: false, tasks: [] }; },
        registerTitleDownloadTask: function(title_id, version) { return { error: false }; },
        registerPatchTitleDownloadTask: function(title_id) { return { error: false }; },
        registerAocDownloadTask: function(title_id, version, json) { return { error: false }; },
        ticketDownloadSync: function(ticket) { return { error: false }; },
        needsSystemUpdate: function() { return { error: false, update: false }; },
        needsSystemUpdateUsingCache: function() { return { error: false, update: false }; },
        getSendIvsState: function() { return { error: false, status: "success" }; },
        sendIvsAsync: function() { return { error: false }; },
        startTicketSync: function() { return { error: false }; },
        getDeviceCountry: function() { return { error: false, country: "JP" }; },
        setDeviceCountry: function(country) { return { error: false }; }
    };
}

// 7. wiiuBOSS mock
if (typeof window.wiiuBOSS === 'undefined') {
    window.wiiuBOSS = {
        isRegisteredBossTask: function() { return false; },
        registerBossTask: function(lang) { return true; },
        unregisterBossTask: function() { return true; }
    };
}

// 8. wiiuNfc mock
if (typeof window.wiiuNfc === 'undefined') {
    window.wiiuNfc = {
        startPolling: function(a, b) { return true; },
        cancel: function() { return true; },
        getMessage: function() { return null; },
        getResponse: function() { return null; }
    };
}

// 9. wiiuDialog mock
if (typeof window.wiiuDialog === 'undefined') {
    window.wiiuDialog = {
        alert: function(msg, btn) { window.alert(msg); },
        confirm: function(msg, btn1, btn2) { return window.confirm(msg); },
        showLoading: function(msg) { console.log("[wiiuDialog Mock] showLoading:", msg); },
        hideLoading: function() { console.log("[wiiuDialog Mock] hideLoading"); }
    };
}

// 10. wiiuErrorViewer mock
if (typeof window.wiiuErrorViewer === 'undefined') {
    window.wiiuErrorViewer = {
        openByCodeAndMessage: function(code, msg) { window.alert("Error Code: " + code + "\n" + msg); },
        openByCode: function(code) { window.alert("Error Code: " + code); }
    };
}

// 11. wiiuBrowser mock (Close / HOME integration)
if (typeof window.wiiuBrowser === 'undefined') {
    window.wiiuBrowser = {
        jumpToHomeButtonMenu: function() {
            console.log("[wiiuBrowser Mock] jumpToHomeButtonMenu called");
            if (window.parent && typeof window.parent.postMessage === 'function') {
                window.parent.postMessage({ type: 'eshop-close' }, '*');
            }
        },
        closeApplication: function() {
            console.log("[wiiuBrowser Mock] closeApplication called");
            if (window.parent && typeof window.parent.postMessage === 'function') {
                window.parent.postMessage({ type: 'eshop-close' }, '*');
            }
        },
        returnToCaller: function() {
            console.log("[wiiuBrowser Mock] returnToCaller called");
            if (window.parent && typeof window.parent.postMessage === 'function') {
                window.parent.postMessage({ type: 'eshop-close' }, '*');
            }
        },
        lockHomeButtonMenu: function(lock) {
            console.log("[wiiuBrowser Mock] lockHomeButtonMenu called:", lock);
        },
        lockPowerButton: function(lock) {
            console.log("[wiiuBrowser Mock] lockPowerButton called:", lock);
        },
        lockUserOperation: function(lock) {
            console.log("[wiiuBrowser Mock] lockUserOperation called:", lock);
        },
        prohibitLoadingIcon: function(lock) {
            console.log("[wiiuBrowser Mock] prohibitLoadingIcon called:", lock);
        },
        showLoadingIcon: function(show) {
            console.log("[wiiuBrowser Mock] showLoadingIcon called:", show);
        },
        endStartUp: function(bgm) {
            console.log("[wiiuBrowser Mock] endStartUp called:", bgm);
        },
        canHistoryBack: function() {
            return window.history.length > 1;
        },
        setMessageLanguage: function(lang) {
            console.log("[wiiuBrowser Mock] setMessageLanguage called:", lang);
        },
        jumpToUpdate: function() {
            console.log("[wiiuBrowser Mock] jumpToUpdate called");
        }
    };
}

// 12. wiiuSound mock (SFX / BGM playing)
if (typeof window.wiiuSound === 'undefined') {
    window.wiiuSound = {
        playSoundByName: function(name, num) {
            console.log("[wiiuSound Mock] playSoundByName (delegated):", name, num);
            
            // Post message to the parent window (Wii U menu context) to play the sound
            if (window.parent && typeof window.parent.postMessage === 'function') {
                window.parent.postMessage({ type: 'eshop-sound', name: name, num: num }, '*');
            }
        },
        stopNfcSound: function() {
            console.log("[wiiuSound Mock] stopNfcSound called");
        }
    };
}

// 13. wiiuKeyboard mock
if (typeof window.wiiuKeyboard === 'undefined') {
    window.wiiuKeyboard = {
        setUserDictionary: function(json) {
            console.log("[wiiuKeyboard Mock] setUserDictionary called:", json);
            return { error: false };
        },
        setLanguage: function(lang) {
            console.log("[wiiuKeyboard Mock] setLanguage called:", lang);
            return { error: false };
        }
    };
}

// 14. wiiu.videoplayer mock
if (typeof window.wiiu === 'undefined') {
    window.wiiu = {};
}
if (typeof window.wiiu.videoplayer === 'undefined') {
    window.wiiu.videoplayer = {
        end: function() {
            console.log("[wiiu.videoplayer Mock] end called");
        }
    };
}


(function() {
    var designWidth = 1280;
    var designHeight = 720;
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var scale = Math.min(winWidth / designWidth, winHeight / designHeight);
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

window.Wood = window.Wood || {};
window.Wood.isWiiU = true;
if (window.Wood.UserAgent) {
    window.Wood.UserAgent.prototype.isWood = function() { return true; };
    window.Wood.UserAgent.prototype.getWoodVersion = function() { return "1.5"; };
    window.Wood.UserAgent.prototype.isLatestVersionOrLater = function() { return true; };
}
window.Wood.geishaSkipNup = function(){
    return false;
};

console.log("environment.js loaded!");

// eShop templates represented as string variables
var redeemTemplates = '<script type="text/template" id="main">\n' +
  '<div id="top03_01">\n' +
  '  <div id="sb_cont">\n' +
  '    <div id="header_common">\n' +
  '      <h1 data-message="top03_01_001">Redeem Code</h1>\n' +
  '    </div>\n' +
  '    <div id="contents_common">\n' +
  '      <div id="simple_box">\n' +
  '        <p class="manual_free_txt" data-message="top03_01_002"></p>\n' +
  '        <p class="manual_free_txt" data-message="top03_01_003" style="margin-top:15px; color:#555;"></p>\n' +
  '        <div class="input-area" style="margin: 30px 0; text-align: center;">\n' +
  '          <input type="text" name="redeem_num" value="" placeholder="" keyboard="full" minlength="16" maxlength="16" class="textbox" style="font-size:24px; padding:10px; width:450px; text-align:center; border: 2px solid #ccc; border-radius: 5px;" />\n' +
  '        </div>\n' +
  '        <div class="btn-area" style="text-align: center;">\n' +
  '          <a href="#" id="evt_redeem" class="se" data-se-label="SE_WAVE_OK" style="display:inline-block; background:#ff6600; color:#fff; text-decoration:none; padding:15px 40px; font-size:22px; border-radius:5px; font-weight:bold;">\n' +
  '            <span id="sel_redeem_next">Next</span>\n' +
  '          </a>\n' +
  '        </div>\n' +
  '      </div>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '  <div style="display:none">\n' +
  '    <span id="str_input">Please enter</span>\n' +
  '    <span id="str_redeem_num" data-message="top03_01_007">ダウンロード番号をPlease enter</span>\n' +
  '    <span id="dialog_msg_unused_char" data-message="top03_01_009"></span>\n' +
  '    <span id="dialog_msg_invalid" data-message="top03_01_009"></span>\n' +
  '    <span id="dialog_ok" data-message="common01_01_006">OK</span>\n' +
  '    <span id="dialog_msg_block_prepaid" data-message="top03_01_006"></span>\n' +
  '    <span id="dialog_msg" data-message="top03_01_005"></span>\n' +
  '  </div>\n' +
  '</div>\n' +
  '</script>';

var newsTemplates = '<script type="text/template" id="main">\n' +
  '<div id="top02_01">\n' +
  '  <div id="sb_cont">\n' +
  '    <div id="header_common">\n' +
  '      <h1 data-message="top01_01_001">News</h1>\n' +
  '    </div>\n' +
  '    <div id="contents_common">\n' +
  '      <div id="sel_list" class="news-list-container"></div>\n' +
  '      <div id="sel_detail" class="news-detail-container" style="display:none;"></div>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '  <div style="display:none">\n' +
  '    <span id="str_new" data-message="top02_01_002">NEW</span>\n' +
  '  </div>\n' +
  '</div>\n' +
  '</script>\n' +
  '<script type="text/template" id="template_news_list">\n' +
  '  <div class="news-item" style="border-bottom: 1px solid #ccc; padding: 15px 10px;">\n' +
  '    <a href="{{= url_detail }}" class="evt_show_detail se" data-detail="{{= url_detail }}" data-se-label="SE_WAVE_OK" style="text-decoration:none; color:#333; font-size:20px; display:block;">\n' +
  '      <span class="news-title">{{= str_title }}</span>\n' +
  '      {{ if (is_new) { }}<span class="sel-new label-new" style="background:#ff3366; color:#fff; font-size:12px; padding:2px 6px; border-radius:3px; margin-left:10px;">{{= str_new }}</span>{{ } }}\n' +
  '    </a>\n' +
  '  </div>\n' +
  '</script>\n' +
  '<script type="text/template" id="template_news_detail">\n' +
  '  <div id="{{= id_news }}" class="news-detail-item" style="display:none; padding: 20px;">\n' +
  '    <h2 class="news-detail-headline" style="font-size:24px; color:#ff6600; margin-bottom:15px;">{{= str_title }}</h2>\n' +
  '    <div class="news-detail-content" style="font-size:18px; line-height:1.6;">{{= str_content }}</div>\n' +
  '  </div>\n' +
  '</script>';

var shelfMain = '<script type="text/template" id="main">\n' +
  '<div id="shelf01_01">\n' +
  '  <div id="header">\n' +
  '    <h1 id="el-header"></h1>\n' +
  '    <div id="el-filter" class="filter">\n' +
  '      <div class="filter-category" style="display:none;">\n' +
  '        <span data-message="common01_01_060">Ranking Type:</span>\n' +
  '        <select id="el-category" disabled="disabled"></select>\n' +
  '      </div>\n' +
  '      <div class="filter-refine" style="display:none;">\n' +
  '        <span data-message="common01_01_061">Filter By:</span>\n' +
  '        <select id="el-refine" disabled="disabled"></select>\n' +
  '      </div>\n' +
  '      <div class="filter-sort">\n' +
  '        <select id="el-sort" disabled="disabled"></select>\n' +
  '      </div>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '  <div id="main">\n' +
  '    <ul id="shelf-list" class="list-item" data-isloaded="false">\n' +
  '      <p class="loading" data-message="common01_01_068">Loading...</p>\n' +
  '    </ul>\n' +
  '  </div>\n' +
  '  <div class="pagenation"></div>\n' +
  '</div>\n' +
  '<div id="sel_menu_bar"></div>\n' +
  '<div style="display:none">\n' +
  '  <span id="no_result" class="no-result" data-message="shelf01_01_005">No titles found matching your search criteria.<br>Please try different settings.</span>\n' +
  '  <span id="str_purchased" class="bought" data-message="common01_01_012"></span>\n' +
  '  <span id="str_unreleased" class="no_sale" data-message="common01_01_016"></span>\n' +
  '  <span id="str_termination" class="no_sale" data-message="common01_01_058"></span>\n' +
  '  <span id="str_check_at_retailer" class="no_sale" data-message="common01_01_073"></span>\n' +
  '  <span id="str_check_at_tiger" class="no_sale" data-message="common01_01_074"></span>\n' +
  '  <span id="str_search" data-message="shelf01_01_001">Search Results</span>\n' +
  '  <span id="str_new" data-message="common01_01_046"></span>\n' +
  '  <span id="str_sale" data-message="common01_01_047"></span>\n' +
  '  <span id="str_owned_coupon" data-message="common01_01_084"></span>\n' +
  '  <span id="str_pre_order" data-message="common01_01_077"></span>\n' +
  '  <span id="str_conditional_sale" data-message="common01_01_070"></span>\n' +
  '  <span id="str_buy" data-message="common01_01_011_03"></span>\n' +
  '  <span id="str_DL" data-message="common01_01_082"></span>\n' +
  '  <span id="str_movie" data-message="shelf01_01_004"></span>\n' +
  '  <span id="str_in_app_purchase" data-message="common01_01_083"></span>\n' +
  '  <span id="str_to" data-message="common01_01_085"></span>\n' +
  '  <span id="str_total" data-message="shelf01_01_002"></span>\n' +
  '  <span id="str_all" data-message="shelf02_01_007"></span>\n' +
  '  <span id="str_tax_included"><span class="tax-included" data-message="buy02_01_004"></span></span>\n' +
  '  <span id="str_tax_included_au"><span class="tax-included" data-message="buy02_01_004_02"></span></span>\n' +
  '  <span id="str_wishlist" data-message="data01_01_025_02"></span>\n' +
  '  <span id="str_wishlist_done" data-message="data01_01_045"></span>\n' +
  '  <span id="dialog_msg_wish" data-message="data01_01_043"></span>\n' +
  '  <span id="dialog_later" data-message="common01_01_028"></span>\n' +
  '  <span id="dialog_watch" data-message="common01_01_027"></span>\n' +
  '  <span id="str_sort_non" data-message="shelf02_01_015">No Selection</span>\n' +
  '  <span id="str_sort_new" data-message="shelf02_01_011">Release Date</span>\n' +
  '  <span id="str_sort_score" data-message="shelf02_01_014">User Rating</span>\n' +
  '  <span id="str_sort_name" data-message="shelf02_01_012">Title Name</span>\n' +
  '</div>\n' +
  '</script>\n' +
  '<script type="text/template" id="template_header">\n' +
  '  <span>{{= str_header }}</span> <span class="total">{{= str_total }}</span>\n' +
  '</script>\n' +
  '<script type="text/template" id="template_header_non_desc">\n' +
  '  <span>{{= str_header }}</span> <span class="total">{{= str_total }}</span>\n' +
  '</script>\n' +
  '<script type="text/template" id="template_header_coupon">\n' +
  '  <span>{{= coupon_name }}</span> <span class="discount">{{= discount_rate }}</span> <span class="total">{{= str_total }}</span>\n' +
  '</script>\n' +
  '<script type="text/template" id="template_header_search">\n' +
  '  <span>{{= str_header }}</span> <span class="total">{{= str_total }}</span>\n' +
  '</script>\n' +
  '<script type="text/template" id="template_sort">\n' +
  '  <option id="{{= id_sort }}" value="{{= param_value }}">&zwj;{{= str_sort }}</option>\n' +
  '</script>';

// On startup, populate templates in localStorage
(function() {
    console.log("Injecting templates into localStorage...");
    localStorage.setItem("tmpl_redeem", JSON.stringify({
        version: "1.3",
        template: redeemTemplates
    }));
    localStorage.setItem("tmpl_news", JSON.stringify({
        version: "1.1",
        template: newsTemplates
    }));
    
    // Dynamically retrieve original jQuery templates from shelf02_01.html to build full shelf template
    try {
        var shelfOriginalHtml = "";
        $.ajax({
            url: "shelf02_01.html",
            async: false,
            dataType: "text",
            success: function(data) {
                shelfOriginalHtml = data;
            }
        });
        
        var shelfJqueryTemplates = "";
        var matches = shelfOriginalHtml.match(/<script id="template_[^"]+" type="text\/x-jquery-tmpl">[\s\S]*?<\/script>/g);
        if (matches) {
            shelfJqueryTemplates = matches.join("\n");
        }
        var fullShelfTemplate = shelfMain + "\n" + shelfJqueryTemplates;
        localStorage.setItem("tmpl_shelf", JSON.stringify({
            version: "2.4",
            template: fullShelfTemplate
        }));
        console.log("Templates injected successfully!");
    } catch(e) {
        console.error("Failed to inject shelf templates dynamically:", e);
    }
})();

// Intercept all $.ajax requests for offline/local rendering
(function() {
    // Load database.js synchronously if not already loaded
    if (!window.GameDatabase) {
        $.ajax({
            url: "js/database.js",
            dataType: "script",
            async: false
        });
    }

    // Dictionary of mock titles built from our GameDatabase
    var mockTitles = {};
    if (window.GameDatabase) {
        Object.keys(window.GameDatabase).forEach(function(key) {
            var g = window.GameDatabase[key];
            var dev = g.content_type || "WUP";
            var platName = dev === "WUP" ? "Wii U" : "Nintendo 3DS";
            var ratingSys = (g.rating && g.rating.indexOf("ESRB:") === 0) ? "ESRB" : "CERO";
            var ratingVal = g.rating ? g.rating.replace(/^(ESRB:|CERO:)\s*/, "") : "E";
            
            mockTitles[key] = {
                "id": g.id,
                "name": g.name,
                "platform": {"name": platName, "device": dev},
                "publisher": {"name": g.publisher},
                "icon_url": g.image,
                "release_date_on_eshop": g.release_date,
                "eshop_sales": true,
                "retail_sales": false,
                "demo_available": false,
                "aoc_available": false,
                "rating_info": {"rating_system": {"name": ratingSys}, "rating": {"name": ratingVal}},
                "price": {
                    "eshop_sales_status": "onsale",
                    "price": {
                        "regular_price": {"id": g.id, "raw_value": "0", "amount": "Free", "currency": "USD"}
                    }
                }
            };
        });
    }

    // Helper function to extract query parameters from the URL
    function getQueryParam(url, paramName) {
        paramName = paramName.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + paramName + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Helper to get parameters checking URL and settings.data (which could be string or object)
    function getParam(url, settings, paramName) {
        var val = getQueryParam(url, paramName);
        if (val !== null) return val;
        if (settings && settings.data) {
            if (typeof settings.data === 'string') {
                return getQueryParam("?" + settings.data, paramName);
            } else if (typeof settings.data === 'object') {
                return settings.data[paramName];
            }
        }
        return null;
    }

    // Helper to generate a ranking response for a specific category ID and filter (WUP / CTR)
    function getRankingResponse(rankingId, filter) {
        var titlesList = [];
        var wupKeys = [];
        var ctrKeys = [];
        
        Object.keys(mockTitles).forEach(function(k) {
            var t = mockTitles[k];
            if (t.platform.device === "CTR") {
                ctrKeys.push(t);
            } else {
                wupKeys.push(t);
            }
        });

        if (filter === "CTR") {
            titlesList = ctrKeys;
        } else {
            titlesList = wupKeys;
        }
        
        // Slightly reorder contents for recommended (ID 3) vs best sellers (ID 1)
        if (rankingId == 3) {
            titlesList = titlesList.slice().reverse();
        }
        
        var contentArray = [];
        for (var i = 0; i < titlesList.length; i++) {
            var t = titlesList[i];
            contentArray.push({
                "index": i + 1,
                "title": {
                    "id": t.id,
                    "name": t.name,
                    "platform": t.platform,
                    "publisher": t.publisher,
                    "icon_url": t.icon_url,
                    "release_date_on_eshop": t.release_date_on_eshop,
                    "eshop_sales": t.eshop_sales,
                    "retail_sales": t.retail_sales,
                    "demo_available": t.demo_available,
                    "aoc_available": t.aoc_available,
                    "rating_info": t.rating_info
                }
            });
        }
        
        return {
            "ranking": {
                "id": Number(rankingId),
                "name": rankingId == 1 ? "Best Sellers" : "Recommended",
                "type": rankingId == 1 ? "best_seller" : "recommend",
                "contents": {
                    "content": contentArray
                }
            }
        };
    }

    var originalAjax = $.ajax;
    $.ajax = function(settings) {
        if (settings && settings.url) {
            var url = settings.url;
            console.log("Intercepted AJAX call to:", url);
            
            // Check if it is a mocked API endpoint
            var mockResponse = null;
            
            // Commented out to load the authentic news.html file merged from new files
            // if (url.indexOf('/news') !== -1) {
            //     mockResponse = {"news":{"news_entry":[{"id":1,"headline":"任天堂eショップの更新情報","description":"任天堂eショップへようこそ！新着ゲームや体験版、割引キャンペーン情報などをお届けします。\\n[マリオのゲームはこちら](title:20010000000001)\\n[セール対象ソフト](shelf:1)","images":null},{"id":2,"headline":"【重要】サービス終了に関するお知らせ","description":"ニンテンドーeショップのサービス終了についてのご案内です。\\n詳細は公式ホームページをご確認ください。","images":null}]}};
            // }

            if (url.indexOf('/redeemable_card/!check') !== -1) {
                mockResponse = {"redeemable_card":{"number":"1234567890123456","pre_order":false,"contents":{"content":[{"title":{"id":"20010000026074"}}]}}};
            } else if (url.indexOf('/id_pair') !== -1) {
                mockResponse = {"title_id_pairs":{"title_id_pair":[{"ns_uid":"20010000026074","title_id":"0005000002607400","type":"title"}]}};
            } else if (url.indexOf('/platforms') !== -1) {
                mockResponse = {"platforms":{"length":2,"platform":[{"id":1,"name":"Wii U"},{"id":2,"name":"Nintendo 3DS"}]}};
            } else if (url.indexOf('/country/') !== -1) {
                mockResponse = {
                    "country_detail": {
                        "iso_code": "JP",
                        "name": "Japan",
                        "default_language_code": "ja",
                        "language_selectable": false,
                        "region_code": "JPN",
                        "max_cash": {
                            "amount": "120,000円",
                            "currency": "JPY",
                            "raw_value": "120000"
                        },
                        "loyalty_system_available": false,
                        "legal_payment_message_required": true,
                        "legal_business_message_required": true,
                        "tax_excluded_country": false,
                        "tax_free_country": false,
                        "prepaid_card_available": true,
                        "credit_card_available": false,
                        "credit_card_store_available": false,
                        "jcb_security_code_available": false,
                        "nfc_available": false,
                        "coupon_available": true,
                        "my_coupon_available": true,
                        "price_format": {
                            "positive_prefix": "",
                            "positive_suffix": "円",
                            "negative_prefix": "-",
                            "negative_suffix": "円",
                            "formats": {
                                "format": "#,###,###,###"
                            }
                        },
                        "default_timezone": "+09:00",
                        "eshop_available": true
                    }
                };
            } else if (url.indexOf('/genres') !== -1) {
                mockResponse = {"genres":{"length":3,"genre":[{"id":1,"name":"Action"},{"id":2,"name":"RPG"},{"id":3,"name":"Shooter"}]}};
            } else if (url.indexOf('/publishers') !== -1) {
                mockResponse = {"publishers":{"length":2,"publisher":[{"id":1,"name":"Nintendo"},{"id":2,"name":"Third Party"}]}};
            } else if (url.indexOf('/rankings') !== -1) {
                // Mock rankings category list
                mockResponse = {
                    "rankings": {
                        "ranking": [
                            {
                                "id": 1,
                                "name": "Best Sellers",
                                "filters": {
                                    "filter": [
                                        {"id": "WUP", "name": "Wii U"},
                                        {"id": "CTR", "name": "Nintendo 3DS"}
                                    ]
                                }
                            },
                            {
                                "id": 3,
                                "name": "Recommended",
                                "filters": {
                                    "filter": [
                                        {"id": "WUP", "name": "Wii U"},
                                        {"id": "CTR", "name": "Nintendo 3DS"}
                                    ]
                                }
                            }
                        ]
                    }
                };
            } else if (url.indexOf('/ranking/') !== -1) {
                // Mock individual ranking category details (contains games list)
                var parts = url.split('/ranking/');
                var rid = parts[1] ? parts[1].split('?')[0].split('/')[0] : "1";
                var filter = getParam(url, settings, "filter") || "WUP";
                mockResponse = getRankingResponse(rid, filter);
            } else if (url.indexOf('/titles') !== -1 || url.indexOf('/contents') !== -1 || url.indexOf('/directory/') !== -1) {
                var requestedIds = [];
                var titleQuery = getParam(url, settings, "title[]");
                if (titleQuery) {
                    requestedIds = titleQuery.split(',');
                } else {
                    var titleSingle = getParam(url, settings, "title");
                    if (titleSingle) {
                        requestedIds = [titleSingle];
                    }
                }
                
                var matchedTitles = [];
                if (requestedIds.length > 0) {
                    for (var i = 0; i < requestedIds.length; i++) {
                        var tid = requestedIds[i];
                        if (mockTitles[tid]) {
                            matchedTitles.push(mockTitles[tid]);
                        }
                    }
                }
                
                if (matchedTitles.length === 0) {
                    for (var key in mockTitles) {
                        matchedTitles.push(mockTitles[key]);
                    }
                }
                
                var contentArray = matchedTitles.map(function(t) {
                    return {
                        "title": {
                            "id": t.id,
                            "name": t.name,
                            "platform": t.platform,
                            "publisher": t.publisher,
                            "icon_url": t.icon_url,
                            "release_date_on_eshop": t.release_date_on_eshop,
                            "eshop_sales": t.eshop_sales,
                            "retail_sales": t.retail_sales,
                            "demo_available": t.demo_available,
                            "aoc_available": t.aoc_available,
                            "rating_info": t.rating_info
                        }
                    };
                });
                
                mockResponse = {
                    "contents": {
                        "total": contentArray.length,
                        "content": contentArray
                    },
                    "directory": {
                        "name": "Recommended Games",
                        "description": "Here is a list of recommended custom games.",
                        "component": "any",
                        "contents": {
                            "total": contentArray.length,
                            "content": contentArray
                        }
                    }
                };
            } else if (url.indexOf('/online_prices') !== -1) {
                var titleQuery = getParam(url, settings, "title[]");
                var ids = titleQuery ? titleQuery.split(',') : ["20010000020451"];
                
                var priceList = [];
                for (var i = 0; i < ids.length; i++) {
                    var tid = ids[i];
                    var t = mockTitles[tid] || mockTitles["20010000020451"];
                    priceList.push({
                        "title_id": isNaN(tid) ? tid : Number(tid),
                        "eshop_sales_status": t.price.eshop_sales_status,
                        "price": t.price.price
                    });
                }
                mockResponse = {
                    "online_prices": {
                        "online_price": priceList
                    }
                };
            } else if (url.indexOf('/directories') !== -1) {
                mockResponse = {
                    "directories": {
                        "directory": [
                            {
                                "id": 1001,
                                "type": "single",
                                "name": "Minecraft",
                                "banner_url": "https://kanzashi-wup.cdn.nintendo.net/i/03b79bb2e593a932ec342fb913a992426b40f2b171a7fedf2cdb1a709026a673.jpg",
                                "banner_width": 1056,
                                "banner_height": 330,
                                "index": 1,
                                "new": false,
                                "contents": {
                                    "content": [
                                        {
                                            "title": {
                                                "id": "20010000020451"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                };
            } else if (url.indexOf('/owned_coupons') !== -1) {
                mockResponse = {"coupons":[]};
            } else if (url.indexOf('/wishlist') !== -1) {
                mockResponse = {"wishlist":[]};
            } else if (url.indexOf('/shared_title_ids') !== -1) {
                mockResponse = {"owned_titles":{"owned_title":[]},"owned_wii_titles":{"owned_title":[]}};
            } else if (url.indexOf('/session/!open') !== -1) {
                mockResponse = {"session_config":{"pid":"12345678","account_id":"player_id","age":20,"mii":{"name":"Player","icon_url":"image/img_unknown_MiiIcon.png"},"parental_controls":{"parental_control":{"isLocked":false}}}};
            } else if (url.indexOf('/title/') !== -1) {
                var parts = url.split('/title/');
                var tid = parts[1] ? parts[1].split('?')[0].split('/')[0] : "";
                
                // Real captured titles - let them fall through to the file system (except public_status)
                if (tid === "20010000020451" || tid === "20010000003005") {
                    if (url.indexOf('/public_status') !== -1) {
                        mockResponse = {"title_public_status":{"public_status":"PUBLIC"}};
                    } else {
                        mockResponse = null; // Let it fall through
                    }
                } else {
                    if (url.indexOf('/ec_info') !== -1) {
                        mockResponse = {"title_ec_info":{}};
                    } else if (url.indexOf('/public_status') !== -1) {
                        mockResponse = {"title_public_status":{"public_status":"PUBLIC"}};
                    } else {
                        var t = mockTitles[tid] || mockTitles["20010000026074"];
                        mockResponse = {
                            "title": {
                                "id": t.id,
                                "name": t.name,
                                "platform": t.platform,
                                "publisher": t.publisher,
                                "icon_url": t.icon_url,
                                "release_date_on_eshop": t.release_date_on_eshop,
                                "eshop_sales": t.eshop_sales,
                                "retail_sales": t.retail_sales,
                                "demo_available": t.demo_available,
                                "aoc_available": t.aoc_available,
                                "rating_info": t.rating_info
                            }
                        };
                    }
                }
            } else if (url.indexOf('/title_owner') !== -1) {
                mockResponse = {"title_owner":{}};
            } else if (url.indexOf('/current') !== -1) {
                var balRaw = parseInt(sessionStorage.getItem('balance_raw') || '0', 10);
                var balFmt = '¥' + balRaw.toLocaleString();
                mockResponse = '<?xml version="1.0" encoding="UTF-8"?><balance><amount>' + balFmt + '</amount><raw_value>' + balRaw + '</raw_value></balance>';
            } else if (url.indexOf('/owned_titles') !== -1 || url.indexOf('/shared_titles') !== -1) {
                var owned = [];
                try {
                    var sess = JSON.parse(sessionStorage.getItem('ninja_session') || '{}');
                    if (Array.isArray(sess.purchasedTitles)) {
                        owned = sess.purchasedTitles;
                    }
                } catch(e) {}
                
                if (owned.length === 0) {
                    try {
                        owned = JSON.parse(localStorage.getItem('downloaded_games') || '[]');
                    } catch(e) {}
                }
                
                var total = owned.length;
                var xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><owned_titles total="' + total + '">';
                owned.forEach(function(tid) {
                    xml += '<owned_title><id>' + tid + '</id></owned_title>';
                });
                xml += '</owned_titles>';
                mockResponse = xml;
            } else if (url.indexOf('/transactions') !== -1) {
                mockResponse = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><transactions total="0"></transactions>';
            }
            
            if (mockResponse !== null) {
                console.log("Mocking response for:", url);
                var parsedResponse = mockResponse;
                if (typeof mockResponse === 'string' && mockResponse.indexOf('<?xml') === 0) {
                    parsedResponse = $.parseXML(mockResponse);
                }
                var d = $.Deferred();
                if (settings.success) settings.success(parsedResponse);
                d.resolve(parsedResponse);
                return d.promise();
            }
            
            // Rewrite remote URLs to local folders for unmocked resources
            url = url.replace(/https:\/\/ninja\.wup\.shop\.nintendo\.net\/ninja\//gi, '../../ninja.wup.shop.nintendo.net/ninja/');
            url = url.replace(/https:\/\/samurai\.wup\.shop\.nintendo\.net\/samurai\//gi, '../../samurai-wup.cdn.nintendo.net/samurai/');
            url = url.replace(/https:\/\/samurai-wup\.cdn\.nintendo\.net\/samurai\//gi, '../../samurai-wup.cdn.nintendo.net/samurai/');
            
            var parts = url.split('?');
            var path = parts[0];
            var query = parts[1] ? '?' + parts[1] : '';
            
            if (path.indexOf('.html') === -1 && 
                path.indexOf('.js') === -1 && 
                path.indexOf('.css') === -1 && 
                path.indexOf('.png') === -1 && 
                path.indexOf('.gif') === -1 && 
                path.indexOf('.jpg') === -1 && 
                path.indexOf('.xml') === -1 &&
                path.indexOf('.json') === -1) {
                
                if (path.endsWith('/')) {
                    path = path.slice(0, -1);
                }
                path = path + '.html';
            }
            settings.url = path + query;
        }
        return originalAjax.apply(this, arguments);
    };
})();

// Global standalone page navigation intercepts and overrides
(function() {
    function checkHash() {
        var hash = window.location.hash;
        if (hash.indexOf("#redeem") === 0) {
            window.location.hash = ""; // Clear hash to prevent loops
            window.location.href = "redeem.html";
        } else if (hash === "#mymenu" || hash === "#top_link_02") {
            window.location.hash = "";
            window.location.href = "always01_01.html";
        } else if (hash.indexOf("#news") === 0) {
            var idMatch = hash.match(/[?&]id=(\d+)/);
            var query = idMatch ? "?id=" + idMatch[1] : "";
            window.location.hash = "";
            window.location.href = "news.html" + query;
        } else if (hash.indexOf("#title") === 0) {
            var titleMatch = hash.match(/[?&]title=(\d+)/);
            var query = titleMatch ? "?title=" + titleMatch[1] : "";
            window.location.hash = "";
            window.location.href = "gameaboutpage.html" + query;
        } else if (hash.indexOf("#shelf") === 0) {
            window.location.hash = "";
            window.location.href = "shelf02_01.html";
        }
    }
    
    // Listen to hash changes in SPA
    window.addEventListener("hashchange", checkHash);
    $(document).ready(checkHash);
    
    // Override openMymenu in the Wood framework to perform page redirect instead of popup
    if (window.Wood) {
        if (Wood.Controller && Wood.Controller.Base) {
            Wood.Controller.Base.prototype.openMymenu = function() {
                window.location.href = "always01_01.html";
            };
        }
        if (Wood.Controller && Wood.Controller.Index) {
            Wood.Controller.Index.prototype.openMymenu = function() {
                window.location.href = "always01_01.html";
            };
        }
        if (Wood.Modules && Wood.Modules.Controller && Wood.Modules.Controller.Base && Wood.Modules.Controller.Base.Mymenu) {
            Wood.Modules.Controller.Base.Mymenu.prototype.openMymenu = function() {
                window.location.href = "always01_01.html";
            };
        }
    }

    // Hook the exit button in the eShop's footer menu bar to close the application
    $(document).ready(function() {
        $(document).on('click', '#top_link_06, .exit', function(e) {
            var href = $(this).attr('data-href') || $(this).find('[data-href]').attr('data-href') || $(this).closest('[data-href]').attr('data-href');
            if (!href || href === "") {
                e.preventDefault();
                console.log("[environment.js] Exit button clicked with no data-href. closing application...");
                if (window.wiiuBrowser && typeof window.wiiuBrowser.jumpToHomeButtonMenu === 'function') {
                    window.wiiuBrowser.jumpToHomeButtonMenu();
                }
            }
        });
    });
})();