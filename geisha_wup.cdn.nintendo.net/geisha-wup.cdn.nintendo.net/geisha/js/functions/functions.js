// エラー処理ステータス定数
var ERROR_NOT_PROCESSED = 0;
var ERROR_MESSAGE_SHOWN = 1;
// タイムアウト(ミリ秒)
var TIMEOUT = 60000;
var isUserOperationEnabled;
var isAjaxFailToCloseInThisPage;

// メニューバーのBボタン押下時描画反転反映のための時間。
var MENUBAR_B_BOUNCE = 300;

// price functions
function isPositivePrice(price){
    if(price != null){
        if(price.match(/^[0-9]+[\.]?[0-9]*$/) !== null){
            return true;
        }
    }
    return false;
}
function isNegativePrice(price){
    if(price != null){
        if(price.match(/^-[0-9]+[\.]?[0-9]*$/) !== null && !isZeroPrice(price)){
            return true;
        }
    }
    return false;
}
function isZeroPrice(price){
    if(price != null){
        return price.match(/^[-]?[0]+[\.]?[0]*$/) !== null;
    }else{
        return false;
    }
}
function priceAbs(price){
    if(isZeroPrice(price)){
        return price;
    }else if(isPositivePrice(price)){
        return price;
    }else if(isNegativePrice(price)){
        return price.slice(1);
    }else{
        return null;
    }
}
function getDecimalPoint(price){
    if(price.indexOf(".")>=0)
        return (price.length-1) - price.indexOf(".");
    return 0;
}
function getPaddingInt(price, digit_point){
    var res = price.replace('.','');
    for(var i=0; i<digit_point; i++){
        res += '0';
    }
    return parseInt(res, 10);
}
function addDot(price, decimal_point){
    var price_abs = priceAbs(price);
    var res = price_abs;
    if(decimal_point>0){
        if(price_abs.length <= decimal_point){
            var top = '0.';
            for(var i=0; i<(decimal_point-price_abs.length); i++){
                top += '0';
            }
            res = top + price_abs;
        }else{
            var idx = price_abs.length - decimal_point;
            res = price_abs.substring(0,idx) + '.' + price_abs.substring(idx);
        }
    }
    if(isNegativePrice(price)){
        res = '-' + res;
    }
    return res;
}
function priceAdd(price1, price2){
    p1_abs = priceAbs(price1);
    p2_abs = priceAbs(price2);
    if(p1_abs == null || p2_abs == null)
        return null;
    p1_negative = isNegativePrice(price1);
    p2_negative = isNegativePrice(price2);
    var digits1 = getDecimalPoint(p1_abs);
    var digits2 = getDecimalPoint(p2_abs);
    var max_digits = Math.max(digits1, digits2);
    // 小数点を消し、桁を揃えた整数を作る
    var p1_pad_int = getPaddingInt(p1_abs.replace('.',''), max_digits-digits1);
    var p2_pad_int = getPaddingInt(p2_abs.replace('.',''), max_digits-digits2);
    var result_int = ((p1_negative)?-1:1)*p1_pad_int + ((p2_negative)?-1:1)*p2_pad_int;
    var result_str = String(result_int);
    // 結果に小数点を付けて返す
    result_str = addDot(result_str, max_digits);
    return result_str;
}
function priceSub(price1, price2){
    var price2_inv;
    if(isNegativePrice(price2)){
        price2_inv = price2.slice(1);
    }else if(isPositivePrice(price2)){
        price2_inv = '-' + price2;
    }
    if(price2_inv !== undefined){
        return priceAdd(price1, price2_inv);
    }else{
        return null;
    }
}

//クイックソート
function quickSort(order_arr,left,right){

    var i = left;
    var j = right;
    var pivot = order_arr[Math.floor((left + right) / 2)];
    var temp;

    while(true){
        while (order_arr[i] < pivot) i++;
        while (pivot < order_arr[j]) j--;
        if (i >= j) break;
            temp = order_arr[i];
            order_arr.splice(i,1,order_arr[j]);
            order_arr.splice(j,1,temp);
            i++;
            j--;
    }

    if(left<i-1) quickSort(order_arr,left,i-1);
    if(j+1<right) quickSort(order_arr,j+1,right);
    return order_arr.join(',');

}
//メニューバー
function MenuBar(screen_type,ref,replace_flg){
    "use strict";
    //表示メニュー出しわけ
    /**
     * @param screen_type
     * 1,指定なし => デフォルト
     * 2 => トップページ
     * 3 => メニュー
     * 4 => 残高
     * 5 => 検索
     * 6 => 購入
     * @param ref
     * リファラーURL
     * @param replace_flg
     * true => ジャンプ時に履歴を残さないようにする
     */

    var self = this;
    this.referrer =undefined;
    if(ref!==undefined){
        self.referrer = ref;
    }
    var type = screen_type;
    var x_btn = true;
    var y_btn = true;
    var b_btn = true;
    var plus_btn = true;
    var minus_btn = true;
    this.init = function(type){
    //タップイベント初期化
    $('#top_link_01 > div').unbind();
    $('#top_link_03 > div').unbind();
    $('#top_link_02 > div').unbind();
    $('#top_link_03 > div').unbind();
    $('#top_link_04 > div').unbind();
    $('#top_link_05 > div').unbind();
    $('#top_link_07 > div').unbind();
    $('#top_link_07').unbind();
    switch(type){
        case 1:
            //デフォルト（その他）
            $('#top_link_01').show();
            $('#top_link_02').show();
            $('#top_link_03').show();
            $('#top_link_04').show();
            $('#top_link_05').show();
            $('#top_link_06').hide();
            $('#top_link_07').hide();
            $('#sel_menu_bar').children().attr('id','ft_navi');
            $('#top_link_02, #top_link_03, #top_link_04').removeClass('off');
            $('#top_link_02 > div').data('href','always01_01.html').addClass('se');
            $('#top_link_03 > div').data('href', '').addClass('se');
            $('#top_link_04 > div').data('href','always02_01.html').addClass('se');
        break;
        case 2:
            //トップページ
            $('#top_link_01').show();
            $('#top_link_02').show();
            $('#top_link_03').show();
            $('#top_link_04').show();
            $('#top_link_05').hide();
            $('#top_link_06').show();
            $('#top_link_07').hide();
            $('#top_link_01').removeClass('off').addClass('on');
            $('#sel_menu_bar').children().attr('id','ft_navi');
            $('#top_link_01 > div').removeAttr('data-href').removeClass('se');
            x_btn = false;
            b_btn = false;
        break;
        case 3:
            //メニュー
            $('#top_link_01').show();
            $('#top_link_02').show();
            $('#top_link_03').show();
            $('#top_link_04').show();
            $('#top_link_05').show();
            $('#top_link_06').hide();
            $('#top_link_07').hide();
            $('#top_link_02').removeClass('off').addClass('on');
            $('#sel_menu_bar').children().attr('id','ft_navi');
            $('#top_link_02 > div').removeAttr('data-href').removeClass('se');
            y_btn = false;
        break;
        case 4:
            //残高
            $('#top_link_01').show();
            $('#top_link_02').show();
            $('#top_link_03').show();
            $('#top_link_04').show();
            $('#top_link_05').show();
            $('#top_link_06').hide();
            $('#top_link_07').hide();
            $('#top_link_02, #top_link_04').removeClass('on').addClass('off');
            $('#top_link_03').removeClass('off').addClass('on');
            $('#sel_menu_bar').children().attr('id','ft_navi');
            $('#top_link_02 > div').removeAttr('data-href').removeClass('se');
            $('#top_link_03 > div').removeAttr('data-href').removeClass('se');
            $('#top_link_04 > div').removeAttr('data-href').removeClass('se');
            y_btn = false;
            plus_btn = false;
            minus_btn = false;
        break;
        case 5:
            //検索
            $('#top_link_01').show();
            $('#top_link_02').show();
            $('#top_link_03').show();
            $('#top_link_04').show();
            $('#top_link_05').show();
            $('#top_link_06').hide();
            $('#top_link_07').hide();
            $('#top_link_04').removeClass('off').addClass('on');
            $('#sel_menu_bar').children().attr('id','ft_navi');
            $('#top_link_04 > div').removeAttr('data-href').removeClass('se');
            minus_btn = false;
        break;
        case 6:
            //同じページ中でメニューボタンを書き替えて無効にした場合、
            //aタグのタッチエフェクトが残ってしまう問題があるため、
            //メニューのhtmlを挿入し直すことで暫定対処する。
            $('#sel_menu_bar').html($('#sel_menu_bar').html());
            //購入
            $('#top_link_01').show();
            $('#top_link_02').show();
            $('#top_link_03').show();
            $('#top_link_04').show();
            $('#top_link_05').show();
            $('#top_link_06').hide();
            $('#top_link_07').hide();
            $('#top_link_02, #top_link_03, #top_link_04').removeClass('on').addClass('off');
            $('#sel_menu_bar').children().attr('id','ft_navi');
            $('#top_link_02 > div').removeAttr('data-href').removeClass('se');
            $('#top_link_03 > div').removeAttr('data-href').removeClass('se');
            $('#top_link_04 > div').removeAttr('data-href').removeClass('se');
            y_btn = false;
            plus_btn = false;
            minus_btn = false;
        break;
        case 7:
            //閉じる
            $('#top_link_01').hide();
            $('#top_link_02').hide();
            $('#top_link_03').hide();
            $('#top_link_04').hide();
            $('#top_link_05').hide();
            $('#top_link_06').hide();
            $('#top_link_07').show();
            $('#ft_navi').removeAttr('id');
            x_btn = false;
            y_btn = false;
            plus_btn = false;
            minus_btn = false;
            break;
        case 8:
            //購入完了
            $('#top_link_01').show();
            $('#top_link_02').show();
            $('#top_link_03').show();
            $('#top_link_04').show();
            $('#top_link_05').hide();
            $('#top_link_06').show();
            $('#top_link_07').hide();
            $('#top_link_02, #top_link_03, #top_link_04').removeClass('on').addClass('off');
            $('#sel_menu_bar').children().attr('id','ft_navi');
            $('#top_link_02 > div').removeAttr('data-href').removeClass('se');
            $('#top_link_03 > div').removeAttr('data-href').removeClass('se');
            $('#top_link_04 > div').removeAttr('data-href').removeClass('se');
            y_btn = false;
            plus_btn = false;
            minus_btn = false;
            b_btn = false;
            break;
        default:
            //デフォルト（その他）
            $('#top_link_01').show();
            $('#top_link_02').show();
            $('#top_link_03').show();
            $('#top_link_04').show();
            $('#top_link_05').show();
            $('#top_link_06').hide();
            $('#top_link_07').hide();
            $('#sel_menu_bar').children().attr('id','ft_navi');
        break;
    }

    // Mii画像のセット
    var ninja = getNinjaSession();
    var mii = ninja ? ninja.mii : null;
    if (mii && mii.icon_url) {
        $('#top_link_02 img').attr('src', mii.icon_url);
    }

    //閉じるボタンに対するサウンドイベントのセット
    if(type===7){
        $('#top_link_07').buttonAClick().click(function(){
            if(isWiiU) {
                wiiuSound.playSoundByName('SE_WAVE_BACK', 1);
            }
        });
    }

    //残高取得
    getBalance();

    //あなただけ割引アテンションを表示
    var $attention_area = $('#ft_navi .menu span');
    if ($.sessionStorage().getItem('has_unread_owned_coupon') === 'true') {
        $attention_area.addClass('attention-mark');
    } else {
        $attention_area.removeClass('attention-mark');
    }

    if(x_btn) {
        $('#top_link_01 > div').click(function(e){
            e.preventDefault();
            location.href = $(this).data('href');
        });
    }
    if(y_btn) {
        $('#top_link_02 > div').click(function(e){
            e.preventDefault();
            if(replace_flg){
                location.replace($(this).data('href'));
            }else{
                location.href = $(this).data('href');
            }
        });
    }
    //残高ボタンをメニューから直接押した場合は、リファラ情報を消す(BTS-895)
    if(plus_btn){
        $('#top_link_03 > div').click(function(e){
            $.sessionStorage().removeItem('buying_section');
            $.sessionStorage().removeItem('money_referrer');
            e.preventDefault();
            if(replace_flg){
                location.replace("money01_01.html");
            }else{
                location.href = "money01_01.html";
            }
        });
    }
    if(minus_btn) {
        $('#top_link_04 > div').click(function(e){
            e.preventDefault();
            if(replace_flg){
                location.replace($(this).data('href'));
            }else{
                location.href = $(this).data('href');
            }
        });
    }
    //ボタンイベント
    $('body').buttonX(function() {
        if(x_btn) {
            if(isWiiU) {
                wiiuSound.playSoundByName('SE_WAVE_HWKEY_MENU_TRG', 1);
            }
            $('#top_link_01 > div').click();
        }
    }).buttonY(function() {
        if(y_btn) {
            if(isWiiU) {
                wiiuSound.playSoundByName('SE_WAVE_HWKEY_MENU_TRG', 1);
            }
            $('#top_link_02 > div').click();
        }
    }).buttonPlus(function() {
        if(plus_btn) {
            if(isWiiU) {
                wiiuSound.playSoundByName('SE_WAVE_HWKEY_MENU_TRG', 1);
            }
            $('#top_link_03 > div').click();
        }
    }).buttonMinus(function() {
        if(minus_btn) {
            if(isWiiU) {
                wiiuSound.playSoundByName('SE_WAVE_HWKEY_MENU_TRG', 1);
            }
            $('#top_link_04 > div').click();
        }
    });
    };
    //戻るボタンイベント
    this.initBackEvt = function(ref){
        if(!b_btn) {
            return;
        }

        function navigate() {
            //戻る先がリファラーの場合
            if (ref!==undefined) {
                location.replace(ref);
            } else {
                historyBack();
            }
        }

        var self = this;
        var $back = $('#top_link_05 > div').unbind();

        $('body').buttonB(function() {
            if(isWiiU) {
                wiiuSound.playSoundByName('SE_WAVE_HWKEY_MENU_TRG', 1);
                wiiuSound.playSoundByName('SE_WAVE_BACK', 1);
            }
            self.applyButtonBEffect(navigate);
        });

        $back.click(function(e){
            e.preventDefault();
            self.applyButtonBEffect(navigate);
        });

        this.setTouchEvents();
    };
    this.changeBackEvt = function(callback, arg){
        var self = this;
        var $body = $('body');
        var $back = $('#top_link_05').removeClass('on');

        $body.unbind('keydown').buttonB(function() {
            self.applyButtonBEffect();
        });

        self.init(self.type);
        self.setTouchEvents();
        return callback(arg);
    };

    // Bボタン押下時の反転描画
    // legal07_02、money04_01など、changeBackEvtでBボタンをカスタマイズしてる場合にも呼び出し。
    this.applyButtonBEffect = function(callback) {
        var $back = $('#top_link_05').addClass('on');

        setTimeout(function() {
            $back.removeClass('on');
            if (typeof callback === 'function') {
                callback();
            }
        }, MENUBAR_B_BOUNCE);
    };

    // メニューバーは空間ナビを当てないため、clickイベントなどの付与が必要。
    this.setTouchEvents = function() {
        var self = this;
        var buttons = $('#sel_menu_bar').find('[data-href]');
        buttons.each(function(i, button) {
            var $el = $(button);

            $el.on('click', function(e) {
                $el.parent().addClass('on');
                var url = $el.data('href');
                if (url && url !== '#') {
                    location.href = url;
                }
            }).on('touchstart', function(e) {
                $el.parent().addClass('on');
                wiiuSound.playSoundByName('SE_WAVE_HWKEY_MENU_TRG', 1);
            }).on('touchend', function(e) {
                $el.parent().removeClass('on');
            });
        });
    };


    this.init(type);
    this.initBackEvt(self.referrer);
}
/**
 * function getBalance
 * 残高取得・保存
 *
 * @param {object} element jQueryセレクター
 *
 */

function getBalance(element, async_flg) {
    if ($.sessionStorage().getItem('balance') != null && $.sessionStorage().getItem('balance_raw') != null) {
        var balance = $.sessionStorage().getItem('balance');
        //メキシコ＄の場合はスペースを挿入
        var amount;
        if(country==='MX'){
            amount = balance.replace('MX$','MX$ ');
        }else{
            amount = balance;
        }
        $('#balance').text(amount);
        if (element) {
            var selector = element;
            selector.text(amount);
        }
    } else {
        var async = true;
        if(async_flg !== undefined){
            async = async_flg;
        }
        // 残高表示
        $.ajaxExt({
            url : ninjaBase + 'ws/my/balance/current',
            type : 'GET',
            data : {'lang' : lang},
            async : async,
            dataType : 'xml',
            xhrFields: {
                withCredentials: true
            },
            error: function(xhr, text){
                var error_code = $(xhr.responseText).find('code').text();
                var error_msg = $(xhr.responseText).find('message').text();
                setErrorHandler(prefixNinja, error_code, error_msg);
            },
            success : function(xml, status) {
                if (status != 'success') return;
                var amount;
                //メキシコ＄の場合はスペースを挿入
                if(country==='MX'){
                    amount = $(xml).find('amount').text().replace('MX$','MX$ ');
                }else{
                    amount = $(xml).find('amount').text();
                }
                $.print('SUCCESS getBalance() async='+async);
                $.sessionStorage().setItem('balance', amount);
                $.sessionStorage().setItem('balance_raw', $(xml).find('raw_value').text());
                $('#balance').text($.sessionStorage().getItem('balance'));
                if (element) {
                    var selector = element;
                    selector.text(amount);
                }
            }
        });
    }
}

function split_print(str){
    // wiiuDebug.print での出力文字数制限回避
    var temp_str = str;
    var NUM = 200;
    while (temp_str){
        $.print(temp_str.substr(0, NUM));
        temp_str = temp_str.substr(NUM);
    }
}
//ninjaセッション保持
function sessionKeepAlive(){
    //更新頻度
    var interval = 3600000;//ミリ秒
    //更新フラグ
    var update_flg = false;

    //現在日時取得
    var current_time = new DateWrapper().getUTC();
    //更新判定
    if($.sessionStorage().getItem('keep_alive_modified')!==null){
        //前回更新有
        var last_time = Number($.sessionStorage().getItem('keep_alive_modified'));
        if((current_time-last_time) > interval){
            update_flg = true;
        }
    }else{
        //初回更新
        update_flg = true;
    }
    if(update_flg){
        //残高更新
        $.sessionStorage().removeItem('balance');
        $.sessionStorage().removeItem('balance_raw');
        getBalance();
        $.print('session keep alive update');
        //更新日時を保存
        $.sessionStorage().setItem('keep_alive_modified', String(current_time));
    }
}

//切断やタイムアウトのなどの共通エラーハンドリングを行うajax関数のラッパー
var ajax_request_aborted = false; //エラーを2回以上表示させないためのフラグ
var ignore_ajax_error    = false;
$.ajaxExt = function(obj){
    var error_func = obj.error;
    //Ajax中にページ遷移が発生した場合はリクエストを全てabortする
    obj.beforeSend = function(xhr) {
        $(window).bind('beforeunload', function(){
            $.print('[Ajax Warning] request cancelled by user operation. url='+obj.url);
            xhr.abort();
        });
    };
    obj.error = function(xhr, text){

        $.print("handleAjaxError(old) called:");
        $.print(" - xhr.readyState: " + xhr.readyState);
        $.print(" - text: " + text);
        $.print(" - statusText: " + xhr.statusText);
        $.print(" - url: " + obj.url);
        $.print(" - data: " + JSON.stringify(obj.data));

        //ユーザキャンセルによりabortした後で稀に発生する場合がある。このエラーは無視する。
        if(xhr.readyState===0 && text==='abort'){
            $.print('[Ajax Error] request aborted: url=' + obj.url + ' text='+text+' statusText=' + xhr.statusText);
            xhr.abort();
        //タイムアウトまたは接続断
        }else if(xhr.readyState===0){
            if(text==='timeout'){
                //タイムアウト
                $.print('[Ajax Error] Timeout occurred: url=' + obj.url + ' text='+text+' statusText=' + xhr.statusText);
            }else{
                //接続断などでブラウザ側でキャンセルされた場合
                $.print('[Ajax Error] request cancelled: url=' + obj.url + ' text='+text+' statusText=' + xhr.statusText);
            }
            //初回起動シーケンスでタイムアウト系エラーが発生した場合はアプリを終了する
            if(isAjaxFailToCloseInThisPage === true){
                // エラー終了
                $.showError(errorCodeCloseApplication);
                if(isWiiU) {
                    // functions.js内はTimeout入れた挙動が呼び出し元に依存するため、入れない
                    wiiuBrowser.jumpToHomeButtonMenu();
                }
                return;
            }
            //タイムアウト系エラーは2回以上連続表示させない
            if(!ajax_request_aborted && !ignore_ajax_error){
                $.showError(errorCodeRetriable);
            }
            //ホームボタンが禁止されている場合があるので解除する
            enableHomeButton();
            //トップ遷移前に他のボタンを押されないようにユーザ操作を禁止する
            disableUserOperation();
            location.href='./#top';
            ajax_request_aborted = true;
            xhr.abort();
            //残りの処理が実行されて問題が起きないように、例外を発生させてスクリプトの実行を停止する
            throw new Error('Exception to stop the script in this page.');
        //503エラー
        }else if(xhr.status === 503){
            $.showError(errorCodeUnderMaintenance);
            // functions.js内はTimeout入れた挙動が呼び出し元に依存するため、入れない
            wiiuBrowser.jumpToHomeButtonMenu();
        }else{
            error_func(xhr, text);
        }
    };
    $.ajax(obj);
}

$.getXml = function(obj,flg){
    var defer = $.Deferred();
    var url;
    var type;
    var data;
    var async;

    url = obj.url;
    type = obj.type;
    data = obj.data;
    if(flg){
        async = true;
    }else{
        async = false;
    }

    var isNinja = url.indexOf(ninjaBase) === 0;

    $.ajaxExt({
        url:url,
        type:type,
        data : data,
        dataType:'xml',
        async: async,
        success: defer.resolve,
        xhrFields: {
            withCredentials: isNinja
        },
        error: defer.reject,
        complete: obj.complete
    });

    return defer.promise();
};

/**
 *
 * JS拡張のエラーチェックを行う。エラーが起きたら終了する。
 *
 * @param resultObject js拡張のレスポンスのJSONオブジェクト。エラー時はerror.codeが存在する。
 */
function processJsxError(resultObject) {
    if(resultObject===undefined){
        return;
    }
	if(isWiiU && resultObject.error) {
        enableHomeButton();
        enableUserOperation();

        var error_code = resultObject.error.code;

        // 特定のコードではダイアログを出さない
        // SEE #10890
        if (error_code === 1050606 || // 追加コンテンツが壊れているため
                                      // 登録が出来ません。
            error_code === 1114640    // 同じソフトのほかの追加コンテンツが
                                      // インストールに失敗しているため､
        ) {
            return;
        }

        $.showError(error_code);

        /**
         * 特定のコードではダイアログを出した後にそのまま進める
         * SEE #4997
         */
        if (error_code === 1114550) {
            return;
        }

        /** JS拡張でのエラーは基本的にはアプリ終了する。
         *  正し、いくつかのエラーコードに関しては特別に history back する。
         *  レスポンスの retriable フラグでこれを判別しようという話も
         *  あったが、使われ無さそうという事で無くなった。
         *  SEE #3573
         */
        $.print('processJsxError: error=' + error_code);
        var shutdown = true;
        if (
            error_code === 1114641 || // このソフトの別の追加コンテンツが
                                      // インストール準備中かインストール中
            error_code === 1114692 || // 登録済みタスクがエラー
            error_code === 1114693    // このソフトの別の追加コンテンツが
                                      // インストール準備中かインストール中
        ) {
            shutdown = false;
        }

        if (shutdown) {
            wiiuBrowser.jumpToHomeButtonMenu();
        } else {
            historyBack();
        }
	}
}

// JS 拡張の結果オブジェクトを受け取って、AOC破損を表す
// エラーかどうかを判定する。SEE #10890, #11202
function isAOCBroken(response) {
    if (!response || !response.error) {
        $.print('isAOCBroken: false');
        return false;
    }
    if (response.error.code === 1050606 ||
        response.error.code === 1114640) {
        $.print('isAOCBroken: true');
        return true;
    }
    $.print('isAOCBroken: false');
    return false;
}

/**
 * リトライ可能判定付きのJS拡張のエラーチェックを行う。
 * リトライ不可エラーが起きたら終了する。リトライ可能エラーが起きたらtrueを返す。
 *
 * @param resultObject js拡張のレスポンスのJSONオブジェクト。エラー時はerror.codeが存在する。
 * @return リトライ可能エラーの場合 true
 */
function processJsxRetriableError(resultObject) {
    if(resultObject===undefined){
        return true;
    }
	if(isWiiU && resultObject.error) {
        enableHomeButton();
        enableUserOperation();
        $.showError(resultObject.error.code);
		if(resultObject.retry) {
			return true;
		} else {
                        // functions.js内はTimeout入れた挙動が呼び出し元に依存するため、入れない
			wiiuBrowser.jumpToHomeButtonMenu();
		}
	}
	return false;
}

/**
 * エラーのメッセージ表示処理を行う。
 *
 * @param prefix 3桁のサーバエラーのprefix。codeを7桁指定する場合は無視される。
 * @param code エラーコード (4桁のサーバエラーコード、または7桁のエラーコード)
 * @param msg エラーメッセージ
 * @param callback エラー表示後に処理を返すcallback関数。引数に処理ステータスが入る。
 *
 */
function setErrorHandler(prefix,code,msg,callback){
    $.print('[setErrorHandler]prefix='+prefix+',code='+code+',msg='+msg);
    var error_code = code;
    var error_msg = msg;
    var prefix_code;
    if(prefix!==undefined){
        prefix_code = prefix;
    }else{
        prefix_code = prefixOther;
    }
    if(code!==undefined && code.length == 7){
        //7桁のエラーコードはJS拡張エラーとしてprefixをつけない
        prefix_code = '';
    }
    var top_redirector = function() {
        location.href = 'index.html#top';
        throw new Error('error top_redirector stopper');
    };
    /*
     * [error_type]
     * 1 -> 汎用2
     * 2 -> 専用2
     * [code_display]
     * 0 -> 非表示
     * 1 -> 表示
     * [dialog_type]
     * 1 -> ボタン付きダイアログ(confirm) -> callbackに処理させる
     * 2 -> 通常ダイアログ(showerror)
     */
    var difine_code = [];
    difine_code['3011'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['3021'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3025'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3026'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3027'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3028'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3051'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3052'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3053'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3054'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3055'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3056'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3057'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3058'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3100'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3101'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3102'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3103'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3104'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3105'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3106'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3107'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3108'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3109'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3110'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3111'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3112'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3113'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3114'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3115'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3116'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3117'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3118'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3120'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3121'] = {'error_type': 2, 'code_display': 0, 'dialog_type': 2};
    difine_code['3122'] = {'error_type': 2, 'code_display': 0, 'dialog_type': 2};
    difine_code['3123'] = {'error_type': 1, 'code_display': 0, 'dialog_type': 2};
    difine_code['3124'] = {'error_type': 2, 'code_display': 0, 'dialog_type': 1};
    difine_code['3125'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['3150'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3151'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3152'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3153'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3154'] = {'error_type': 2, 'code_display': 0, 'dialog_type': 2};
    difine_code['3155'] = {'error_type': 2, 'code_display': 0, 'dialog_type': 2};
    difine_code['3160'] = {'error_type': 2, 'code_display': 0, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3161'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3170'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['3171'] = {'error_type': 2, 'code_display': 0, 'dialog_type': 2};
    difine_code['3180'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['3190'] = {'error_type': 2, 'code_display': 0, 'dialog_type': 1};
    difine_code['3191'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3200'] = {'error_type': 1, 'code_display': 0, 'dialog_type': 2};
    difine_code['3210'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3260'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3261'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3262'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3263'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3264'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3265'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3266'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3267'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3268'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3271'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3301'] = {'error_type': 2, 'code_display': 0, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['3278'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['3279'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['5997'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['6542'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6561'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6568'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6591'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['6635'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['6644'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['6804'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6805'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6810'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['6811'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6812'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6813'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6814'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['6815'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6830'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['6831'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['6834'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6835'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6836'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6837'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6838'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6941'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6942'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6943'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['6989'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7401'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7402'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['7403'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7499'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7501'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7503'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7506'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['7507'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7509'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['7510'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['7511'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7514'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7515'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['7516'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7519'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7530'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7532'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['7534'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['7535'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['7536'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['7537'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9001'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['9003'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['9006'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9007'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['9009'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['9010'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['9011'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['9014'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['9015'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9019'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['9030'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['9032'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9034'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9035'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2, 'common_callback': top_redirector};
    difine_code['9036'] = {'error_type': 2, 'code_display': 1, 'dialog_type': 2};
    difine_code['9037'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9600'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9601'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9610'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9611'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9612'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9613'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9614'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9615'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9620'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9621'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9630'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9631'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9632'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9640'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9641'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};
    difine_code['9642'] = {'error_type': 1, 'code_display': 1, 'dialog_type': 2};

    //エラーパターン取得
    var define = difine_code[error_code];
    if(define !== undefined){

    	if(define.dialog_type === 1) {
	    	// 2択の場合は共通処理でボタンテキストを処理できないので、呼び出し元に任せる
    		// この場合callbackの指定は必須
	    	return callback(ERROR_NOT_PROCESSED);
    	}

        if(define.code_display===1){
        	// エラーコード表示なのでshowErrorを使う

            if((error_code!=='' && error_code!==undefined)){

                if((error_msg!=='' && error_msg!==undefined)){
                    $.showError(prefix_code+error_code,error_msg);
                }else{
                    $.showError(prefix_code+error_code);
                }
                if(define.common_callback!==undefined){
                    //共通のコールバックがある場合はそちらを実行する
                    return define.common_callback(ERROR_MESSAGE_SHOWN);
                }else if(callback!==undefined) {
                	return callback(ERROR_MESSAGE_SHOWN);
            	}else {
            		return;
            	}

            }else{
                //エラーコード表示なのに2択だったりエラーコードがないのは、予期しない状態なのでエラー終了する
            	$.print('[ERROR] error code is not defined.');
                $.showError(errorCodeCloseApplication);
                // functions.js内はTimeout入れた挙動が呼び出し元に依存するため、入れない
                wiiuBrowser.jumpToHomeButtonMenu();
            }
        }else{
        	// エラーコードは出さないので無視する
            if((error_msg!=='' && error_msg!==undefined)){
                if(callback!==undefined) {
                    //エラーコード非表示のエラー表示は呼び出し元に任せる
                	return callback(ERROR_NOT_PROCESSED);
            	}else {
            		return;
            	}
            }else{
                //エラーメッセージがないのは予期しない状態なのでエラー終了する
            	$.print('[ERROR] error message is not defined.');
                $.showError(errorCodeCloseApplication);
                // functions.js内はTimeout入れた挙動が呼び出し元に依存するため、入れない
                wiiuBrowser.jumpToHomeButtonMenu();
            }
        }
    }

    //定義済みエラーパターンに該当しない場合 (終了するエラー)
    $.print('[ERROR] error code is not defined.(error code not display)');
    if(error_code === '3010'){
        //セッション切れエラー
    	error_msg = $('#dialog_msg_invalid_session').text();
    	if(error_msg != '') {
            $.showError(prefix_code+error_code, error_msg);
    	} else {
    		// エラーメッセージがとれずにこのエラーが発生することがあるらしいので、workaround
    		$.showError(errorCodeCloseApplication);
    	}
    }else if((error_code!=='' && error_code!==undefined) && (error_msg!=='' && error_msg!==undefined)){
    	// エラーコード、エラーメッセージがセットで指定されるパターン
        $.showError(prefix_code+error_code,error_msg);
    }else if((error_code!=='' && error_code!==undefined) && (prefix_code !== prefixSamurai && prefix_code !== prefixNinja)){
    	// エラーコードのみ、メッセージはエラービューアもち、のパターン
        $.showError(prefix_code+error_code);
    }else{
        $.showError(errorCodeCloseApplication);
    }

    if(isWiiU){
        // functions.js内はTimeout入れた挙動が呼び出し元に依存するため、入れない

        // 古いクライアント（1.6NUP以前）がアクセスしてく可能性があるので、
        // jumpToHomeButtonMenu が無い場合には closeApplication する
        if (wiiuBrowser.jumpToHomeButtonMenu) {
            wiiuBrowser.jumpToHomeButtonMenu();
        } else {
            wiiuBrowser.closeApplication();
        }
    }else{
		//セッション切れエラーはトップに行っても無限ループしてしまうので止める
    	if(error_code != '3010') {
    		location.href="./#top";
    	}
    }
}
function setPlaceholder(elm,str){
    var element = elm;
    var placeholder = str;
    if($(element).is('input[type="text"]')){
            $(element).attr('value',placeholder);
            $(element).focus(function (){
                if ( $(this).val() === placeholder ) {
                    $(this).val('');
                }
            });
            $(element).blur(function (){
                if ( $(this).val() === '' ) {
                    $(this).val(placeholder);
                }
            });
    }
}
/*
 * 同一HTML上で画面を切替える
 * 引数に画面id名を配列で指定する
 * 切り替える画面要素はidで指定すること
 */
function SwitchScreen(array){
    var self = this;
    this.screen = [];

    if($.isArray(array) && array.length >0){
        $.each(array,function(key,value){
            self.screen[key] = value;
        });
    }
    this.change = function(name){
        $.each(self.screen,function(key,value){
            if(value==name){
                $('#'+name).show();
            }else{
                $('#'+value).hide();
            }
        });
        $('html,body').animate({ scrollTop: $('html,body').offset().top }, 0);
    };

}
// メッセージ差し込み
function localize(resourceKey, enable_uo) {
    if(enable_uo === undefined){
        enable_uo = true;
    }
    $.ajaxExt({
      type : 'GET',
      url : './message/messages-' + resourceKey + '.xml',
      dataType : 'xml',
      async: false,
      error: function(xhr, text) {
    	if(enable_uo) {
            enableUserOperation();
            enableHomeButton();
        }
        if(xhr.readyState===0 && text!=='timeout'){
            xhr.abort();
        } else {
            enableUserOperation();
	        //メッセージがとれないのは予期しない状態なのでエラー終了にする
	        $.showError(errorCodeCloseApplication);
	        if(isWiiU) {
                    // functions.js内はTimeout入れた挙動が呼び出し元に依存するため、入れない
	            wiiuBrowser.jumpToHomeButtonMenu();
	        }
        }
      },
      success : function(data) {
        $('entry', data).each(function() {
          $('[data-message="' + $(this).attr('key') + '"]', document).html($(this).text());
        });
        $('#wrap').show();
        if(enable_uo){
            enableUserOperation();
            enableHomeButton();
        }
      }
    });
}

//ショップ用リージョン取得
function getShopRegion(){
    setCountryInfo();
    var region;
    if(country === 'AU' || country === 'NZ'){
        return 'AUS';
    }
    if(isWiiU) {
        var res = wiiuSystemSetting.getRegion();
        processJsxError(res);
        return res.code;
    } else { // 非Wii Uでは適当なリージョンを返す
        if(country === 'JP'){
            return 'JPN';
        }else if(country === 'US' || country === 'CA' || country == "MX" || country == "BR"){
            return 'USA';
        }else{
            return 'EUR';
        }
    }
}

/**
 * 国・言語に対応するリソースキーを取得する。リソースキーはリージョン別言語の処理に利用する。
 * @param country ISO国コード
 * @param lang ISO言語コード
 */
function getResourceKey(country, lang) {

    //TODO 中韓台対応 (2nd以降)
    var region = getShopRegion();
    if (region == "USA") {
        resourceKey = lang + "_US";
    } else if (region === 'AUS' && lang === 'en') {
        resourceKey = lang + "_AU";
    } else {
        resourceKey = lang;
    }
    return resourceKey;
}

//関数処理時間計測
function functionTimeLog(script){

  var time_start;
  var time_stop;
  var total_time;
  var res;

  time_start = new Date();

  eval(script);

  time_stop = new Date();

  total_time = (parseFloat(time_stop.getMinutes())*60000
   + parseFloat(time_stop.getSeconds()*1000)
   + parseFloat(time_stop.getMilliseconds()) )
   -( parseFloat(time_start.getMinutes())*60000
   + parseFloat(time_start.getSeconds()*1000)
   + parseFloat(time_start.getMilliseconds()) );
  res = Math.round(total_time);

  //log
  $.print(script+' : '+res + '[ms]');
}
/**
 * function setParamsURL ※encode有
 *
 * @param {array} params URLパラメータ値
 * @return {string} QueryString ?以降のURLパラメータ
 */
function setParamsEncodeURL(params){
    var str = '', amp = '';
        if(!params) return '';
        for( i in params){
            str = str + amp + i + '=' + encodeURI(params[i]);
            amp = '&';
        }
    return str;
}
function setParamsEncodeCURL(params){
    var str = '', amp = '';
    if(!params) return '';
    for( i in params){
        str = str + amp + i + '=' + encodeURIComponent(params[i]);
        amp = '&';
    }
    return str;
}
function setParamsURL(params){
    var str = '', amp = '';
        if(!params) return '';
        for( i in params){
            str = str + amp + i + '=' + params[i];
            amp = '&';
        }
    return str;
}

//URLパラメータ取得
function parseParam(){
    var hash = [];
    var param;
    if(param = location.search){
        var parray = param.replace('?','').split('&');
        for(var i=0;i<parray.length;i++){
            var n = parray[i].split('=');
            hash[n[0]] = n[1];
        }
    }else{
        return false;
    }
    return hash;
}
//フォーム系のSE
function commonSE(){
    if(isWiiU) {
        $(document).on('click', '.se', function() {
            if($(this).data('se-label')!==undefined){
                wiiuSound.playSoundByName($(this).data('se-label'), 1);
            }
            return true;
        }).on('touchstart', '.se', function() {
            wiiuSound.playSoundByName('SE_WAVE_DRC_TOUCH_TRG', 1);
            return true;
        }).on('touchstart', 'input[type="submit"]', function() {
            wiiuSound.playSoundByName('SE_WAVE_DRC_TOUCH_TRG', 1);
        }).on('click', 'input[type="submit"]', function() {
            wiiuSound.playSoundByName('SE_WAVE_OK', 1);
        }).on('touchstart', 'input[type="reset"]', function() {
            wiiuSound.playSoundByName('SE_WAVE_DRC_TOUCH_TRG', 1);
        }).on('click', 'input[type="reset"]', function() {
            wiiuSound.playSoundByName('SE_WAVE_RESET', 1);
        }).on('click', 'input[type="checkbox"]:not(:checked)', function() {
            wiiuSound.playSoundByName('SE_WAVE_CHECKBOX_UNCHECK', 1);
        }).on('click', 'input[type="checkbox"]:checked', function() {
            wiiuSound.playSoundByName('SE_WAVE_CHECKBOX_CHECK', 1);
        }).on('touchstart', 'label:has(input[type="radio"])', function() {
            wiiuSound.playSoundByName('SE_WAVE_DRC_TOUCH_TRG', 1);
        }).on('click', 'label:has(input[type="radio"])', function() {
            wiiuSound.playSoundByName('SE_WAVE_RADIOBUTTON_CHECK', 1);
        });
    }

}
//BGM
function setBGM(seq){
    if(isWiiU) {
    if(seq!=null){
        var seq_name = seq;
        switch(seq_name){
            case'main':
                wiiuSound.playSoundByName('BGM_WAVE_MAIN', 3);
                break;
            case'setting':
                wiiuSound.playSoundByName('BGM_WAVE_SETTING', 3);
                break;
            case'boot':
            	wiiuSound.playSoundByName('BGM_WAVE_BOOT_0', 3);
            	break;
            default:
                wiiuSound.playSoundByName('BGM_WAVE_MAIN', 3);
            	break;
        }
    }
    }
}
//容量変換
function convertSize(title_size){
    var res = {};
    var unit = null;
    var size = parseInt(title_size, 10);
    // 小数第二位まで表現可能な値
    var second_decimal_integer = 0;

    //容量単位変換
    if (size <= 10239948) { // 9999.949… KB 以下
        // (size / 1024.0) * 100.0
        second_decimal_integer = Math.floor(size / 10.24);
        unit = 'KB';

        // 最低 1.0 KB
        if (second_decimal_integer < 100) {
            second_decimal_integer = 100;
        }
    } else if (size <= 10485707571) {  // 9999.949… MB 以下
        // (size / 1024.0 / 1024.0) * 100.0
        second_decimal_integer = Math.floor(size / 10485.76);
        unit = 'MB';
    } else {
        // (size / 1024.0 / 1024.0 / 1024.0) * 100.0
        second_decimal_integer = Math.floor(size / 10737418.24);
        unit = 'GB';
    }

    // 小数第二位を四捨五入。XXX += 0.05
    second_decimal_integer += 5;
    if (second_decimal_integer > 999999){
        // 計算誤差で整数部が 5 桁以上になる場合は無理やり 9999.9 にする
        second_decimal_integer = 999999;
    }

    second_decimal_integer /= 10;
    size = Math.floor(second_decimal_integer / 10) + "." +
        Math.floor(second_decimal_integer % 10);

    res.size = size;
    res.unit = unit;

    // 小数点は言語で分かれる
    // ピリオド：日本、US英語、スペイン語、EU英語、ポルトガル語
    // カンマ：USフランス、ポルトガル語、EUフランス、スペイン、ドイツ、イタリア、オランダ、ロシア語
    var REGION_PREFIX = {
        JPN: 'JP_',
        USA: 'US_',
        EUR: 'EU_',
        AUS: 'EU_' // AUSはEU扱いする
    };
    var prefix = REGION_PREFIX[getShopRegion()];
    var region_lang = prefix + lang;

    if (!/(JP_ja|US_en|US_es|EU_en|EU_pt)/.test(region_lang)) {
        res.size = res.size.replace(".", ",");
    }

    return res;
}

//購入フロー情報初期化
function initPurchaseInfo() {
    "use strict";

    $.sessionStorage().removeItem('buying_title_id');
    $.sessionStorage().removeItem('buying_coupon_instance_code');
    $.sessionStorage().removeItem('buying_type');
    $.sessionStorage().removeItem('buying_section');
    $.sessionStorage().removeItem('buying_aoc');
    $.sessionStorage().removeItem('buying_ticket');
    $.sessionStorage().removeItem('buying_shortfall');

    $.sessionStorage().removeItem('get_common_info');
    $.sessionStorage().removeItem('get_title_info');
    $.sessionStorage().removeItem('get_aoc_info');
    $.sessionStorage().removeItem('get_ticket_info');
    $.sessionStorage().removeItem('get_demo_info');
    $.sessionStorage().removeItem('buying_seq_rating');
    $.sessionStorage().removeItem('buying_seq_attention');
    $.sessionStorage().removeItem('buying_seq_size');
    $.sessionStorage().removeItem('buying_seq_balance');
    $.sessionStorage().removeItem('buying_seq_purchase');

    $.sessionStorage().removeItem('money_referrer');
    $.sessionStorage().removeItem('addr_referrer');

    $.sessionStorage().removeItem('title_name');
    $.sessionStorage().removeItem('title_icon');
    $.sessionStorage().removeItem('rating_flg');
    $.sessionStorage().removeItem('rating_age');
    $.sessionStorage().removeItem('rating_sys');
    $.sessionStorage().removeItem('notes_flg');

    $.sessionStorage().removeItem('title_size_unit');
    $.sessionStorage().removeItem('title_size_str');
    $.sessionStorage().removeItem('title_dl_media');
    $.sessionStorage().removeItem('title_display_size_str');
    $.sessionStorage().removeItem('title_display_size_unit');
    $.sessionStorage().removeItem('title_free_flg');
    $.sessionStorage().removeItem('size_over_flg');
    $.sessionStorage().removeItem('title_dl_items');
    $.sessionStorage().removeItem('title_redl_flg');
    $.sessionStorage().removeItem('title_release_date');
    $.sessionStorage().removeItem('title_in_app_purchase');
    $.sessionStorage().removeItem('title_pre_order_flg');
    $.sessionStorage().removeItem('titile_owned_coupon_flg');
    $.sessionStorage().removeItem('title_lowest_price');

    $.sessionStorage().removeItem('current_balance');
    $.sessionStorage().removeItem('current_balance_str');
    $.sessionStorage().removeItem('post_balance');
    $.sessionStorage().removeItem('post_balance_str');

    $.sessionStorage().removeItem('title_price_str');
    $.sessionStorage().removeItem('title_discount_price_id');
    $.sessionStorage().removeItem('title_regular_price_id');
    $.sessionStorage().removeItem('title_tax');
    $.sessionStorage().removeItem('title_tax_str');
    $.sessionStorage().removeItem('title_taxin_price');
    $.sessionStorage().removeItem('title_taxin_price_str');

    var aoc_id = [];
    if($.sessionStorage().getItem('aoc_id_list')!==null){
        aoc_id = $.sessionStorage().getItem('aoc_id_list').split(',');
        $.each(aoc_id,function(key,value){
            $.sessionStorage().removeItem('aoc_name_'+value);
            $.sessionStorage().removeItem('aoc_size_unit_'+value);
            $.sessionStorage().removeItem('aoc_size_str_'+value);
            $.sessionStorage().removeItem('aoc_free_flg_'+value);
            $.sessionStorage().removeItem('aoc_price_'+value);
            $.sessionStorage().removeItem('aoc_price_str_'+value);
            $.sessionStorage().removeItem('aoc_tax_str_'+value);
            $.sessionStorage().removeItem('aoc_taxin_price_str_'+value);
            $.sessionStorage().removeItem('aoc_redl_flg_'+value);

            $.sessionStorage().removeItem('_nsig_aoc_taxin_price_'+value);
        });
    }
    $.sessionStorage().removeItem('aoc_id_list');
    $.sessionStorage().removeItem('aocs_free_flg');
    $.sessionStorage().removeItem('aocs_dl_media');
    $.sessionStorage().removeItem('aocs_total_size');
    $.sessionStorage().removeItem('aocs_total_size_str');
    $.sessionStorage().removeItem('aocs_total_size_unit');
    $.sessionStorage().removeItem('aocs_price_str');
    $.sessionStorage().removeItem('aocs_price_id');
    $.sessionStorage().removeItem('aocs_discount_id');
    $.sessionStorage().removeItem('aocs_tax');
    $.sessionStorage().removeItem('aocs_tax_str');
    $.sessionStorage().removeItem('aocs_taxin_price');
    $.sessionStorage().removeItem('aocs_taxin_price_str');
    $.sessionStorage().removeItem('aoc_dl_items');
    $.sessionStorage().removeItem('aoc_same_variation_items');
    $.sessionStorage().removeItem('aoc_update_flg');
    $.sessionStorage().removeItem('aocs_all_redl_flg');
    $.sessionStorage().removeItem('buying_aoc_id_list');

    $.sessionStorage().removeItem('ticket_id');
    $.sessionStorage().removeItem('ticket_name');
    $.sessionStorage().removeItem('ticket_free_flg');
    $.sessionStorage().removeItem('ticket_price_str');
    $.sessionStorage().removeItem('ticket_price_id');
    $.sessionStorage().removeItem('ticket_regular_price_id');
    $.sessionStorage().removeItem('ticket_discount_price_id');
    $.sessionStorage().removeItem('ticket_tax');
    $.sessionStorage().removeItem('ticket_tax_str');
    $.sessionStorage().removeItem('ticket_taxin_price');
    $.sessionStorage().removeItem('ticket_taxin_price_str');

    $.sessionStorage().removeItem('demo_id');
    $.sessionStorage().removeItem('demo_name');
    $.sessionStorage().removeItem('demo_icon');
    $.sessionStorage().removeItem('demo_dl_items');
    $.sessionStorage().removeItem('size_over_flg');
    $.sessionStorage().removeItem('demo_dl_media');
    $.sessionStorage().removeItem('demo_size_str');
    $.sessionStorage().removeItem('demo_size_unit');
    $.sessionStorage().removeItem('demo_display_size_str');
    $.sessionStorage().removeItem('demo_display_size_unit');

    $.sessionStorage().removeItem('pin_code_checked_money');
    $.sessionStorage().removeItem('withdrawal_agreed');
    $.sessionStorage().removeItem('auto_billing_contract_id');
    $.sessionStorage().removeItem('auto_billing_title_id');
    $.sessionStorage().removeItem('coupon_code');
}

//クレカ残高追加フローのセッション情報初期化
function initCardInfo(){
    "use strict";
    $.sessionStorage().removeItem('addbal_cc');
    $.sessionStorage().removeItem('addbal_cc_str');
    $.sessionStorage().removeItem('ccard_registration');
    $.sessionStorage().removeItem('cc_pass');
    $.sessionStorage().removeItem('cc_type');
    $.sessionStorage().removeItem('postal_code');
    $.sessionStorage().removeItem('request_id');
    $.sessionStorage().removeItem('application_id');
    $.sessionStorage().removeItem('credit_card_update');
}

/**
 * title_id=>nsUid変換
 * エラーコードは4桁で設定される。エラービューアに渡す時はninja用のprefixを設定すること。
 *
 * @param title_id カンマ区切りのtitleId
 * @return ns_uidの配列、またはサーバエラーオブジェクト(error.code_no, error_message)
 */
function convertTitleidToNsuid(title_id){
    var res = {};
    //変換
    var req_obj = {
        url  : ninjaBase + 'ws/titles/id_pair',
        type : 'GET',
        data : {
            'title_id[]' : title_id,
            'lang' : lang
        }
    };
    $.getXml(req_obj)
        .done(
        function(xml){
            res.ns_uid = [];
            $(xml).find('title_id_pair').each(function(i){
                res.ns_uid[i] = $(this).children('ns_uid').text();
            });
        }
        )
        .fail(
        function(xml){
        	var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();

            res.error.code_no = error_code;
            res.error.message = error_msg;
        }
    );
    return res;
}

/**
 * nsUid=>title_id変換
 * エラーコードは4桁で設定される。エラービューアに渡す時はninja用のprefixを設定すること。
 *
 * @param ns_uid カンマ区切りのnsUid
 * @return ns_uidの配列、またはサーバエラーオブジェクト(error.code_no, error_message)
 */
function convertNsuidToTitleid(ns_uid){
    var res = {};
    //変換
    var req_obj = {
        url  : ninjaBase + 'ws/titles/id_pair',
        type : 'GET',
        data : {
            'ns_uid[]' : ns_uid,
            'lang' : lang
        }
    };
    $.getXml(req_obj)
        .done(
        function(xml){
            res.title_id = [];
            $(xml).find('title_id_pair').each(function(i){
                res.title_id[i] = $(this).children('title_id').text();
            });
        }
        )
        .fail(
        function(xml){
        	var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();

            res.error.code_no = error_code;
            res.error.message = error_msg;
        }
    );
    return res;
}

/**
 * title_id, version, content_size 取得
 * エラーコードは4桁で設定される。エラービューアに渡す時はninja用のprefixを設定すること。
 *
 * @param nsuid タイトルのnsUid
 * @return ns_uidの配列、またはサーバエラーオブジェクト(error.code_no, error_message)
 */
function getTitleEcInfo(nsuid){
    var res = {};
    var req_obj = {
        url  : ninjaBase + 'ws/' + country + '/title/'+ nsuid +'/ec_info',
        type : 'GET',
        data : {'lang':lang}
    };
    //ajax
    $.getXml(req_obj)
        .done(
        function(xml){
            var $info = $(xml).find('title_ec_info');
            res.title_id = $info.children('title_id').text();
            res.content_size = $info.children('content_size').text();
            res.title_ver = $info.children('title_version').text();
        }
    )
        .fail(
        function(xml){
            res.error = {};
        	var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();

            res.error.code_no = error_code;
            res.error.message = error_msg;
        }
    );
return res;
}
//追加コンテンツ用nsuid=>title_id変換ver取得
function convertAOCNsuidToTitleid(nsuid){
    var res = {};
    var info = [];
    var req_obj = {
        url  : ninjaBase + 'ws/' + country + '/title/'+ nsuid +'/datatitlesVersion',
        type : 'GET',
        data :{'lang':lang}
    };
    //ajax
    $.getXml(req_obj)
        .done(
        function(xml){
            $(xml).find('title_ec_info').each(function(i){
                info[i] = {'title_id':$(this).children('title_id').text(),'title_ver':$(this).children('title_version').text()};
            });
            res = info;
        }
    )
        .fail(
        function(xml){
            res.error = {};
        	var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();

            res.error.code_no = error_code;
            res.error.message = error_msg;
        }
    );
    return res;
}
//戻る処理
var backCount = 0;
function historyBack(disable_uo){
    if(backCount == 0){
        if(disable_uo === true) disableUserOperation();
        backCount++;
        if(isWiiU){
            var res = wiiuBrowser.canHistoryBack();
            if(res===true){
                history.back();
                throw new Error('functions.js#historyBack stopper');
            }else{
                location.replace('./#top');
                throw new Error('functions.js#historyBack stopper');
            }
        }else{
            history.back();
            throw new Error('functions.js#historyBack stopper');
        }
    }
}
//国設定保存
function setCountryInfo(){
    if($.sessionStorage().getItem('max_cash_str')===null ||
        $.sessionStorage().getItem('max_cash')===null ||
        $.sessionStorage().getItem('loyalty_system_available')===null ||
        $.sessionStorage().getItem('prepaid_card_available')===null ||
        $.sessionStorage().getItem('credit_card_available')===null ||
        $.sessionStorage().getItem('nfc_available')===null ||
        $.sessionStorage().getItem('coupon_available')===null ||
        $.sessionStorage().getItem('my_coupon_available')===null ||
        $.sessionStorage().getItem('legal_payment_message_required')===null ||
        $.sessionStorage().getItem('legal_business_message_required')===null ||
        $.sessionStorage().getItem('time_based_restrictions')===null ||
        $.sessionStorage().getItem('tax_excluded_country')===null){
        $.ajaxExt({
            url : ninjaBase + 'ws/country/'+country,
            type : 'GET',
            data :{'lang':lang},
            async : false,
            dataType : 'xml',
            xhrFields: {
             withCredentials: true
         },
         error : function(xhr, text) {
            var error_code = $(xhr.responseText).find('code').text();
            var error_msg = $(xhr.responseText).find('message').text();
            setErrorHandler(prefixNinja, error_code, error_msg, function(){});
        },
        success : function(xml) {
            var $country = $(xml).find('country_detail');
            $.sessionStorage().setItem('max_cash_str',$country.children('max_cash').children('amount').text());
            $.sessionStorage().setItem('max_cash',$country.children('max_cash').children('raw_value').text());
            $.sessionStorage().setItem('loyalty_system_available',$country.children('loyalty_system_available').text());
            $.sessionStorage().setItem('prepaid_card_available',$country.children('prepaid_card_available').text());
            $.sessionStorage().setItem('credit_card_available',$country.children('credit_card_available').text());
            $.sessionStorage().setItem('nfc_available',$country.children('nfc_available').text());
            $.sessionStorage().setItem('coupon_available',$country.children('coupon_available').text());
            $.sessionStorage().setItem('my_coupon_available',$country.children('my_coupon_available').text());
            $.sessionStorage().setItem('legal_payment_message_required', $country.children('legal_payment_message_required').text());
            $.sessionStorage().setItem('legal_business_message_required', $country.children('legal_business_message_required').text());
            $.sessionStorage().setItem('tax_excluded_country', $country.children('tax_excluded_country').text());
            var items = [];
            $(xml).find('time_based_restriction').each(function(){
                var item = {'rating_system_id':$(this).children('rating_system_id').text(),
                'rating_id':$(this).children('rating_id').text(),
                'age':$(this).children('age').text(),
                'start_time':$(this).children('start_time').text(),
                'end_time':$(this).children('end_time').text()};
                items.push(item);
            });
            $.sessionStorage().setItem('time_based_restrictions',JSON.stringify(items));
        }
    });
}
}

function applyTaxText(element, price) {
    // see#7349 #8366 内税対象に税無も含まれるため対象国を除外
    // JPは税込非表示とする
    // Wood.DomUtil.applyTaxTextの旧コード対応

    // (税込)表示判定
    if ($.sessionStorage()
        .getItem('tax_excluded_country') === 'false' &&
        country !== 'NZ' &&
        country !== 'RU' &&
        country !== 'TR' &&
        country !== 'JP') {
        // AUのみメッセージを変更
        if (country === 'AU') {
            element.html(price + ' ' + $('#str_tax_included_au').html());
        } else {
            element.html(price + ' ' + $('#str_tax_included').html());
        }
    } else {
        element.text(price);
    }
}

// device order list を同期処理で更新する
// SEE #3786
function reloadDeviceOrderList(option) {
    var async = false;
    var order_arr = [];

    var device_order_list     = [];
    var device_order_list_rvc = [];

    var req_obj_order = {
        url  : ninjaBase+'ws/my/shared_title_ids',
        type : 'GET'
    };
    //ajax
    $.getXml(req_obj_order, async)
    .done(
        function(xml){
            var eshop = $('eshop', xml);
            var owned_titles     = $('owned_titles', eshop);
            var owned_wii_titles = $('owned_wii_titles', eshop);

            $('owned_title', owned_titles).each(function(i) {
                device_order_list.push($(this).attr('id'));
            });
            $('owned_title', owned_wii_titles).each(function(i) {
                device_order_list_rvc.push($(this).attr('id'));
            });

            $.localStorage().setItem('device_order_list'
                , device_order_list.join(','));
            $.localStorage().setItem('device_order_list_rvc'
                , device_order_list_rvc.join(','));

            // 更新日時を保存
            var current_time = (new Date()).getTime().toString();
            $.localStorage().setItem('device_order_list_modified'
                , current_time);

            //ホームボタン禁止
            disableHomeButton();

            // 購入の電源禁止区間からくることがあるので
            // その場合は save しない SEE #4837
            var no_save = (option && option.no_save && isWiiU);
            if (!no_save) {
                $.save();
            }

            // ホームボタン禁止解除
            // no_enable_home が指定されていたら HOME ボタンを復帰させない
            if (!option || !option.no_enable_home) {
                enableHomeButton();
            }
            $.print('SUCCESS :localStorage() device order list saved!');
        }
    )
    .fail(
        function(xml){
            var error_code = $(xml.responseText).find('code').text();
            var error_msg  = $(xml.responseText).find('message').text();
            setErrorHandler(prefixNinja, error_code, error_msg);
        }
    );
}

// 与えられた ns_uid を自分が持っているかどうか判定する
// 旧 checkTitleOwnedBySelf（含む getOrderList）
function isTitleOwnedBySelf(ns_uid) {
    var owned = false;
    var req_obj = {
        url  : ninjaBase + 'ws/my/title/' + ns_uid + '/owned_status',
        type      : 'GET',
        data      : { owned_by : 'SELF' },
		dataType  : 'xml',
		xhrFields : { withCredentials: true }
    };
    $.getXml(req_obj)
        .done(
            function(xml) {
                var flag = $(xml).find('is_owned').text();
                owned = (flag === "true");
            }
        )
        .fail(
            function(xml) {
                var error_code = $(xml.responseText).find('code').text();
                var error_msg  = $(xml.responseText).find('message').text();
                setErrorHandler(prefixNinja, error_code, error_msg
                    , function(){ location.replace('./#top'); });
            }
        );
    return owned;
}

//クラニン利用国チェック
function checkLoyalty(){
    "use strict";
    var chk_flg = true;
    setCountryInfo();
    if($.sessionStorage().getItem('loyalty_system_available')==='false'){
        chk_flg = false;
    }
    return chk_flg;
}
//クレカ利用国チェック
function checkCCard(){
    "use strict";
    var chk_flg = true;
    setCountryInfo();
    if($.sessionStorage().getItem('credit_card_available')==='false'){
        chk_flg = false;
    }
    return chk_flg;
}
//プリカ利用国チェック
function checkPCard(){
    "use strict";
    var chk_flg = true;
    setCountryInfo();
    if($.sessionStorage().getItem('prepaid_card_available')==='false'){
        chk_flg = false;
    }
    return chk_flg;
}
//外税チェック
function checkTaxExcluded(){
    "use strict";
    var chk_flg = true;
    setCountryInfo();
    if($.sessionStorage().getItem('tax_excluded_country')==='false'){
        chk_flg = false;
    }
    return chk_flg;
}
// NFC利用可能か
function isNfcAvailable(){
    setCountryInfo();
    return $.sessionStorage().getItem('nfc_available')==='true';
}
// クーポンが利用可能か
function isCouponAvailable(){
    setCountryInfo();
    return $.sessionStorage().getItem('coupon_available')==='true';
}
// クーポンが利用可能か
function isMyCouponAvailable(){
    setCountryInfo();
    return $.sessionStorage().getItem('my_coupon_available')==='true';
}

// クーポンが利用可能か
function isOwnedCouponAvailable(){
    setCountryInfo();
    return true; // TODO API対応がきたら置き換える SEE #29774
}

function getParentalControlForEShopIsLocked() {
    //ペアレンタルロックがかかっているか
    var is_locked = false;
    if(isWiiU){
        var res = wiiuSystemSetting.getParentalControlForEShop();
        processJsxError(res);
        is_locked = res.isLocked;
    }else{
        is_locked = true; // 非Wii Uではとりあえずロック
    }
    return is_locked;
}

// ペアレンタルチェック(残高)
function checkParentalControlForEShop(){
    if(!getParentalControlForEShopIsLocked()){
        return true;
    }
    //すでにPINコード入力に成功したか
    if($.sessionStorage().getItem('pin_code_checked_for_eshop') == 'true'){
        return true;
    }
    return false;
}

function getParentalControlForGamePlay() {
    if (isWiiU) {
        var res = wiiuSystemSetting.getParentalControlForGamePlay();
        processJsxError(res);
        return res;
    } else {
        return {
            'isLocked': true,
            'age': '18' //PC版は18歳を返す
        };
    }
}
// ペアレンタルチェック(年齢)
function checkParentalControlForGamePlay(rating_age){
    //rating_ageが空文字またはNaNの場合、レーティング未定義としてチェックOKにする
    if(rating_age === undefined || rating_age === null || rating_age === '' || isNaN(rating_age)){
        return true;
    }
    //ペアレンタルロックがかかっているか
    var is_locked = false;

    var res = getParentalControlForGamePlay();
    $.print('PARENTAL CHECK(AGE) rating:'+rating_age+', age:'+res.age);
    is_locked = res.isLocked;
    var parental_age = parseInt(res.age,10);
    //CTRとWiiUのレーティング仕様に違いがあるため
    //AU,NZのレーティング「M」が13の場合は14に変更する
    if((country === 'AU' || country === 'NZ') &&
        parental_age===13 ){
        parental_age = 14;
    }
    if(parseInt(rating_age,10) <= parental_age){
        //レーティングの年齢制限よりペアレン設定年齢が上ならロックしない
        is_locked = false;
    }

    if(!is_locked){
        return true;
    }
    //すでにPINコード入力に成功したか
    if($.sessionStorage().getItem('pin_code_checked') == 'true'){
        return true;
    }
    return false;
}

//AGEゲート
function checkAgeGate(buy_method, rating_sys_id, rating_age, title_id){
    //rating_ageが空文字またはNaNの場合、レーティング未定義としてチェックOKにする
    if(rating_age === null || rating_age === '' || isNaN(rating_age)){
        return true;
    }
    var chk_flg = true;
    var do_check_rating = false;
    var age = $.sessionStorage().getItem('age');
    // リージョン情報取得
    var region = getShopRegion();

    switch(buy_method){
    case 0: // buyから来ていない
        if(region == "JPN" || region == "AUS" || region == "USA"){
            do_check_rating = true;
        }else if(region == "EUR"){
            do_check_rating = false;
        }
        break;
    case 1: // 購入
        if(region == "EUR" || region == "USA"){
            do_check_rating = false;
        }else if(region == "JPN" || region == "AUS"){
            do_check_rating = true;
        }
        break;
    case 2: // 再受信
        if(region == "JPN" || region == "EUR" || region == "USA"){
            do_check_rating = false;
        }else if(region == "AUS"){
            // 豪州では年齢チェックを行う
            do_check_rating = true;
        }
        break;
    case 3: // 引き換え
        if(region == "JPN" || region == "EUR" || region == "USA"){
            do_check_rating = false;
        }else if(region == "AUS"){
            do_check_rating = true;
        }
        break;
    }
    if(do_check_rating){
        if((rating_sys_id == '201' && rating_age == '18') || // CERO_Z
           (rating_sys_id == '202' && rating_age == '17') || // ESRB_M
           (rating_sys_id == '202' && rating_age == '18') || // ESRB_AO
           ((rating_sys_id == '208' || rating_sys_id == '308') && rating_age == '18'))   // OFLC(AGCB)_R18
        {
            if(parseInt(age,10) < parseInt(rating_age,10)){
                chk_flg = false;
            }
        } else if( ((rating_sys_id == '209' || rating_sys_id == '309') && rating_age == '15')) {
            //OFLC.NZのみR13～R18のレーティングが18歳未満閲覧不可
            if(parseInt(age,10) < 18){
                chk_flg = false;
            }
        }
    }
    return chk_flg;
}

function checkUnderAge(){
    // 日本版かどうか
    setCountryInfo();
    if(country != 'JP'){
        return 0; // OK
    }
    // アカウントの年齢が18歳以上か
    if(Number($.sessionStorage().getItem('age')) >= 18){
        return 0; // OK
    }
    // ペアレンタルロックがかかっているか
    var is_locked = false;
    if(isWiiU){
        var res = wiiuSystemSetting.getParentalControlForEShop();
        processJsxError(res);

        is_locked = res.isLocked;

    }else{
        is_locked = true; // 非Wii Uではとりあえずロック
    }
    if(!is_locked){
        return 1; // ペアレン非設定
    }
    // カード情報が登録済みか
    var has_credit_card = false;
    var req_obj = {
        url  : ninjaBase+'ws/my/credit_card',
        type : 'GET'
    };
    //ajax
    $.getXml(req_obj)
        .done(
            function(xml){
                has_credit_card = true;
            }
        )
        .fail(
            function(xml){
                var error_code = $(xml.responseText).find('code').text();
                var error_msg = $(xml.responseText).find('message').text();
                if(error_code !== '3180'){
                    setErrorHandler(prefixNinja, error_code, error_msg, function(){
                        location.href('./#top');
                    });
                }
            }
    );
    if(!has_credit_card){
        return 2; // クレジットカード未登録
    }
    return 0; // OK
}


/*
 * 未成年ユーザチェック
 */
function routeViaCheckUnderAge(url, success_fn) {
    var res_underage = checkUnderAge();
    if(res_underage === 1){
        $.alert($('#dialog_msg_parental').text(), $('#dialog_ok').text());
        historyBack();
    }else if(res_underage === 2){
        var seq = encodeURIComponent(url.attr('file')+'?'+url.attr('query'));
        location.replace('legal01_01.html?seq='+seq+'#underage');
        throw new Error('redirect to legal01_01#underage');
    }else if (success_fn) {
        success_fn();
    }
}

function getCouponCodeUrlQuery() {
    // sessionStorageに保存しているクーポンコードから buy01_01のURLパラメータを作成
    // 追加する前提なので&をつけて返す
    var coupon_code = $.sessionStorage().getItem('coupon_code');
    if (coupon_code) {
        return '&coupon_code=' + encodeURIComponent(coupon_code);
    }
    var coupon_ins = $.sessionStorage().getItem('buying_coupon_instance_code');
    if (coupon_ins) {
        return '&coupon_ins=' + encodeURIComponent(coupon_ins);
    }
    return '';
}

//ホームボタン禁止解除
function enableHomeButton() {
	if(isWiiU){
		wiiuBrowser.lockHomeButtonMenu(false);
	}
}

//ホームボタン禁止
function disableHomeButton() {
	if(isWiiU){
		wiiuBrowser.lockHomeButtonMenu(true);
	}
}

// 電源ボタン禁止
function disablePowerButton() {
	if (isWiiU) {
		wiiuBrowser.lockPowerButton(true);
	}
}

//ユーザ操作禁止解除
function enableUserOperation() {
    $.print('[ Enable User Operation ]');
    //未ロック状態で解除しようとするとチラつきが発生するため、ロックされているか判定する
    //(ページ遷移前からロックされている場合は判別できないので、同ページ内で明示的にロックされていた場合だけ)
    if(isWiiU && isUserOperationEnabled !== true){
        wiiuBrowser.lockUserOperation(false);
    }
    isUserOperationEnabled = true;
}

//ユーザ操作禁止
function disableUserOperation() {
    $.print('[ Disable User Operation ]');
    if(isWiiU && isUserOperationEnabled !== false){
        wiiuBrowser.lockUserOperation(true);
    }
    isUserOperationEnabled = false;
}

// 電源ボタン禁止解除
function enablePowerButton() {
	if (isWiiU) {
		wiiuBrowser.lockPowerButton(false);
	}
}

function showLoadingIcon() {
    if (isWiiU) {
        wiiuBrowser.prohibitLoadingIcon(false);
    }
}
function hideLoadingIcon() {
    if (isWiiU) {
        wiiuBrowser.prohibitLoadingIcon(true);
    }
}

// DRCが接続されている場合はtrue、それ以外はfalseが返ります。
function isDrc() {
    if (isWiiU) {
        return wiiuDevice.isDrc();
    } else {
        return true;
    }
}

function curtainOpen() {
    $.print('[ curtainOpen ]');
    if (isWiiU && typeof wiiuCurtain !== 'undefined') {
        wiiuCurtain.open();
    }
}

function curtainClose() {
    $.print('[ curtainClose ]');
    if (isWiiU && typeof wiiuCurtain !== 'undefined') {
        wiiuCurtain.close();
    }
}

// DRCが接続されていることを確認する。
// 接続されておらず、ダイアログで「やめる」を選んだ場合はback_urlに戻る
// 接続されていることを確認したらtrueを返す
function checkConnectitonOfDrc(back_url) {
    if (!isDrc()) {
        // DRCが接続されていないとき
        var is_ok = $.confirm(
            $('#dialog_msg_drc').text(),
            $('#dialog_cancel').text(),
            $('#dialog_msg_ok').text());

        if (is_ok) {
            // OK を押した後、再度DRCが接続されているか確認する
            return checkConnectitonOfDrc(back_url);
        } else {
            $.print('back_url: ' + back_url);
            if (back_url) {
                location.replace(back_url);
            } else {
                historyBack();
            }
            return false;
        }
    }
    return true;
}

// ページを開いているとき、「Wii U GamePadで入力を進めてください。」の画像を表示する SEE #14207
function showRequestDrc(back_url) {
    // 遷移先画面が見えるのを防ぐ SEE #14846
    $('body').addClass('display_cover');

    if (checkConnectitonOfDrc(back_url)){
        curtainOpen();
        $('body').removeClass('display_cover');
        $(window).on('beforeunload', function(e) {
            curtainClose();
            return undefined; // onbeforeunload イベントのダイアログを出さないようにする
        });
    }
}

//バージョン取得
function getWoodVersion(){
    var varsion_str = window.navigator.userAgent;
    var m = varsion_str.match(/wood\/([0-9]\.[0-9])/);
    if(m!==null && m.length === 2){
        $.print("getVersion=" + parseFloat(m[1]));
        return parseFloat(m[1]);
    }else{
        return 0;
    }
}

//日付関数の誤差を修正するラッパークラス
function DateWrapper(){
    var self = this;
    var utc_time, utc_offset;
    var date = new Date();
    if(isWiiU){
        var isOldVersion = (wiiuSystemSetting.getLocalTime !== undefined) && (getWoodVersion() < 1.1);
        system_utc = wiiuSystemSetting.getUTC();
        processJsxError(system_utc);
        if(isOldVersion){
            //旧バージョンの場合は9時間足す
            utc_time = parseInt(system_utc.epochMilliSeconds,10) + 9*60*60*1000;
            //getUTCとgetLocalTimeの差分からUTCオフセットを計算
            var system_localtime = wiiuSystemSetting.getLocalTime();
            processJsxError(system_localtime);
            utc_offset = parseInt(system_utc.epochMilliSeconds-system_localtime.epochMilliSeconds, 10);
        }else{
            utc_time = parseInt(system_utc.epochMilliSeconds,10);
            utc_offset = date.getTimezoneOffset() * 60 * 1000; //ミリ秒に変換
        }
    }else{
        utc_time = date.getTime();
        utc_offset = date.getTimezoneOffset() * 60 * 1000;
    }
    this.getUTC = function(){
        return utc_time;
    };
    this.getUTCOffset = function(){
        return utc_offset;
    };
    this.getUTCHours = function(){
        var d = new Date(utc_time);
        return d.getUTCHours();
    };
    this.getUTCMinutes = function(){
        var d = new Date(utc_time);
        return d.getUTCMinutes();
    };
    this.getLocalTime = function(){
        return self.getUTC() - self.getUTCOffset();
    };
    this.getHours = function(){
        var d = new Date(self.getLocalTime());
        return d.getUTCHours();
    };
    this.getMinutes = function(){
        var d = new Date(self.getLocalTime());
        return d.getUTCMinutes();
    };
    this.getSeconds = function(){
        var d = new Date(self.getLocalTime());
        return d.getUTCSeconds();
    };
    // $.print('getUTC=' + this.getUTC());
    // $.print('getUTCOffset=' + this.getUTCOffset());
    // $.print('getUTCHours=' + this.getUTCHours());
    // $.print('getUTCMinutes=' + this.getUTCMinutes());
    // $.print('getLocalTime=' + this.getLocalTime());
    // $.print('getHours=' + this.getHours());
    // $.print('getMinutes=' + this.getMinutes());
}

//独自のlazyload関数
function lazyload(selector){
    "use strict";
    $(selector).on("error", function(){
        if($(this).data('placeholder')!==undefined){
            $(this).attr('src',$(this).data('placeholder'));
        }
    });
    $(selector).each(function(){
        if($(this).data('loaded') === undefined || $(this).data('loaded') === 'placeholder'){
            var self = this;
            setTimeout(function(){
                var old_url = $(self).attr('src');
                var new_url = 'placeholder';
                if($(self).data('original') !== undefined && $(self).data('original')!== ''){
                    new_url = $(self).data('original');
                    $(self).attr('src', new_url);
                    $(self).data('placeholder', old_url);
                }
                $(self).data('loaded', new_url);
            },0);
        }
    });
}

function criticalAction(fn) {
    if (isWiiU) {
        wiiuBrowser.lockHomeButtonMenu(true);
        wiiuBrowser.lockPowerButton(true);
    }

    fn();

    if (isWiiU) {
        wiiuBrowser.lockHomeButtonMenu(false);
        wiiuBrowser.lockPowerButton(false);
    }
}


function getNinjaSession() {
    return JSON.parse($.sessionStorage().getItem('ninja_session'));
}

function clearLocalStorageWithPrefix(prefix) {
    var storage = isWiiU ? wiiuLocalStorage : window.localStorage;
    var length  = isWiiU ? storage.length() : storage.length;

    $.print('clearLocalStorageWithPrefix: ' + length);

    for (var i = 0; i < length; i++) {
        var key = storage.key(i);
        $.print('key: ' + key);
        if (key && key.match('^' + prefix)) {
            $.print(' - remove: ' + key);
            storage.removeItem(key);
        }
    }
}

/**
 * Get Dirctory Param
 * [memo] wood/modules/controller/base/beacon.js getDirectoryBeaconParam
 * @method getDirctoryParam
 * @return {Object} Dirctory Param
 */
function getDirctoryParam() {
    var beacon_str = $.url().param('beacon');
    if (beacon_str) {
        var beacon = JSON.parse(decodeURIComponent(beacon_str));
        return beacon.directory;
    }
    return null;
}
