// jshint debug:true
// jshint devel:true

(function(exports) {
var Wood = exports.Wood;
var Util = Wood.AnalyticsUtil;

var SEND_DELAY = 1; // ほかのJSのブロックをしてしまうため若干Delayさせる
var APP_JUMP_KEY = 'analytics_appjump';
function Analytics() {
    this.dataLayer = exports.dataLayer || [];
    exports.dataLayer = this.dataLayer;
    this.sessionStorage = Util.isWiiU ? wiiuSessionStorage : exports.sessionStorage;
    this._isSent = null;
    this.setAccountInfo();
    // Wood.log('>>>> Analytics:' + JSON.stringify(this.dataLayer, null, 2));
};

Analytics.prototype = {
    
    _send: function() {
        if (this._isSent) {
            return;
        }
        setTimeout(function(){
            /* jshint eqeqeq: false */
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TNPGB6');
            /* jshint eqeqeq: true */
        }, SEND_DELAY);
        this._isSent = true;
    },

    _addAttr : function(attr) {
        this.dataLayer.push(attr);
    },

    _addEvent: function(eventName, attr) {
        this._addAttr($.extend({
            event: eventName
        }, attr));
    },

    _addEventOrAttr:function(eventName, attr) {
        if (this._isSent) {
            this._addEvent(eventName, attr);
        } else {
            this._addAttr(attr);
        }
    },

    setAccountInfo: function() {
        this._addAppJumpEvent();
        this._addEventOrAttr('login', {
            regionCd: Util.getRegionType(),
            uId: Util.getHashedPID(),
            upc01: Util.getAge(),
            upc02: Util.getGender(),
            uCountry: Util.getCountry(),
            uLanguage: Util.getLanguage()
        });
        this._send();
    },

    sendVirtualPV: function(id, attr) {
        this._addEvent('virtualPV', $.extend({
            virtualPage: id
        }, attr));
    },

    addTitleViewAttr: function(titleId) {
        this._addAttr({
            ecommerce: {
                detail: {
                    products: [{
                        id: titleId
                    }]
                }
            }
        });
        return this;
    },
    
    addFromAttr: function(from) {
        this._addAttr({ from: from });
        return this;
    },
    
    addDirectoryAttr: function(directory) {
        if (directory) {
            this.addFromAttr('id_' + directory.id);
        }
        return this;
    },

    addShelfAttr: function(directory, shelf_kind) {
        if (directory) {
            var alias = directory.alias;
            var name = directory.name;
            var alias_or_name;
            if (alias) {
                alias_or_name = 'ALIAS:' + alias;
            } else {
                alias_or_name = 'NAME:' + name;
            }
            this._addAttr({
                shelf: alias_or_name,
                directory_index: directory.index
            });
        }
        // feature の場合はfromにセットしない
        var FROM_KIND_MAP = {
            OwnedCoupon: 'owned_coupon',
            Search: 'search'
        };
        this.addFromAttr(FROM_KIND_MAP[shelf_kind]
            || (directory ? ('id_' + directory.id) : 'feature'));
        
        return this;
    },

    saveAppJumpAttr: function(param) {
        param = param || {};
        var scene = param.scene;
        var srcTitleId  = param.src_title_id;
        var launcherType = param.launcher_type;
        var from = null;
        if (scene) {
            // Not Source Detail Information
            if (srcTitleId && !launcherType) {
                launcherType = '(Not specified)';
            }
            // Pure Application Jump
            if (scene !== 'top') {
                from = 'app_jump';
            }
        }
        // アプリジャンプのパラメータはすぐ遷移してしまうので、
        // sessionStorageに保存して遷移後送る
        this.sessionStorage.setItem(APP_JUMP_KEY, JSON.stringify({
            from: from,
            srcTitleId: srcTitleId,
            launcherType: launcherType
        }));
    },
    
    _addAppJumpEvent: function() {
        var appJumpAttrStr = this.sessionStorage.getItem(APP_JUMP_KEY);
        if (!appJumpAttrStr) {
            return this;
        }
        // sessionStorageに保存したアプリジャンプのパラメータがあればセット
        this.sessionStorage.removeItem(APP_JUMP_KEY);
        var appJumpAttr = JSON.parse(appJumpAttrStr);
        if (appJumpAttr.launcherType === "caffeine_killer") {
            // キラー通知のときのみ送信
            this._addEvent('kntf', {
                launcher_type: "caffeine_killer",
                src_title_id: appJumpAttr.srcTitleId
            });
        }
        return this;
    },

    sendMoviePlay: function(id) {
        this._addEvent('play_movie', {
            playMovieID: id
        });
    },

    sendPurchaseAttr: function(param) {
        var attr = this._createEcommerceAttr('Purchase', param);
        this._addAttr(attr);
        this.sendVirtualPV('VP_PurchaseCompletion');
    },

    sendPurchaseConfirmAttr: function (id) {
        var products = [{
            id: id
        }];

        var self = this;
        var _add = function (name) {
            var attr = {
                ecommerce: {}
            };
            attr.ecommerce[name] = {
                products: products
            };
            self._addAttr(attr);
        };

        _add('add');
        this.sendVirtualPV('VP_Purchase_AddCart');
        _add('checkout');
        this.sendVirtualPV('VP_PurchaseConfirmation');
    },

    _createEcommerceAttr: function(affiliation, param) {
        var coupon;
        if (param.couponCode) {
            coupon = 'CODE_' + param.couponCode;
        } else if (param.couponInstanceCode) {
            // クーポンコードが存在(共通クーポン)する場合は不要
            coupon = 'OWNED_COUPON_' + param.couponInstanceCode;
        } else {
            coupon = 'DID_NOT_USE_COUPON';
        }
        var isEUR = Util.getRegionType() === 'eu';
        return {
            currency: param.currency || null,
            ecommerce: {
                purchase: {
                    actionField: {
                        id: '' + param.trans_id,
                        affiliation: affiliation,
                        revenue: param.price
                    },
                    products: [{
                        id: param.id,
                        coupon: coupon,
                        dimension2: isEUR && param.businessType || null,
                        price: param.price,
                        quantity: "1"
                    }]
                }
            }
        };
    },
    
    sendError: function(errorCode) {
        this._addEvent('event_error', {
            errorCode: errorCode
        });
    }
};

Wood.Analytics = new Analytics();
})(window);
