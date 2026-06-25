
// getAocInstallInfo した際に 4640 エラーが返ってきた場合（AOC破損）
// にはタスク登録しないようにするためのフラグ
// SEE #11202
var is_aocinfo_broken = false;

$(function(){
    "use strict";

    var analytics = {
        confirm: function() {
            var param = $.url().param();
            Wood.Analytics.sendPurchaseConfirmAttr(param.title);
        },
        setStorage: function(type, purchaseId, nsuid, price, currency, business_type) {
            var param = $.url().param();
            $.sessionStorage().setItem('_nsig_buy_page_type',  param.type);
            $.sessionStorage().setItem('_nsig_buy_page_title', param.title);
            $.sessionStorage().setItem('_nsig_buy_type',       (type       !== null) ? type       : '');
            $.sessionStorage().setItem('_nsig_buy_purchaseId', (purchaseId !== null) ? purchaseId : '');
            $.sessionStorage().setItem('_nsig_buy_nsuid',      (nsuid      !== null) ? nsuid      : '');
            $.sessionStorage().setItem('_nsig_buy_price',      (price      !== null) ? price      : '0');
            $.sessionStorage().setItem('_nsig_buy_currency',   (currency   !== null) ? currency   : 'XXX');
            $.sessionStorage().setItem('_nsig_buy_business_type', (business_type !== null) ? business_type : '');
            // 予約販売 SEE #17913
            var is_pre_order = $.sessionStorage().getItem('title_pre_order_flg')==='true';
            $.sessionStorage().setItem('_nsig_buy_order_type', is_pre_order ? 'pre-order' : 'normal');
            // クーポン対応 SEE #26735
            var coupon_code = $.sessionStorage().getItem('coupon_code');
            $.sessionStorage().setItem('_nsig_buy_coupon_code', coupon_code || '');
            // あなただけ割引対応 SEE #30081
            var coupon_id = $.sessionStorage().getItem('_coupon_id_' +
            $.sessionStorage().getItem('buying_coupon_instance_code'));
            $.sessionStorage().setItem('_nsig_buy_coupon_id', coupon_id || '');
        }
    };
// -------------------------------------------------
// main
// -------------------------------------------------

    // 改正特商法対応
    function show_jp_legal_description () {
        if (country === 'JP') {
            $('#jp_legal_sales_end').show();
            if($.sessionStorage().getItem('title_pre_order_flg')==='true') {
                $('#jp_legal_service_pre_prder').show();
            } else {
                $('#jp_legal_service_normal').show();
            }
        }
    }

    // 購入APIの結果XMLの中から発行番号を取り出す
    function get_privilege_infos(xml) {

        $.print("check privilege ---");
        $.print((new XMLSerializer).serializeToString(xml));

        var privilege_infos = [];
        $("privilege_info", $(xml).find("privilege_infos")).each(function() {
            var code   = $("privilege_code", this);
            var device = code.attr('device');
            var type   = code.attr('type');
            var is_other_type = (type === 'other');

            var code_text = code.text();
            // 特典コードタイプが一般（'other'）のとき以外は
            // 特典コード(code_text) のカンマ区切りに対応 refs #9413
            if (!!code_text.match(/,/) && !is_other_type) {
                code_text = code_text.split(/,/)[1];
            }

            var priv = {
                description: $("privilege_description", this).text().replace(/\n/g, "<br />"),
                code: code_text,
                is_jumpable: (device === 'WUP' && !is_other_type),
                str_redeem: $('#str_redeem2').text()
            }
            $.print("priv: " + JSON.stringify(priv));
            privilege_infos.push(priv);
        });
        return privilege_infos;
    }

   // index.html で設定してる NUPチェックスキップフラグを確認する
   function isNUPCheckRequired() {
       if (isWiiU) {
           if ("1" !== wiiuSessionStorage.getItem("skip_nup_assert")) {
               return true;
           }
       }
       return false;
   }

    // 欧州「撤回権」クーリングオフ対応
    function confirmWithdrawal() {
        var ss = $.sessionStorage();
        var withdrawal_agreed = ss.getItem('withdrawal_agreed')==='true';
        var is_free = ss.getItem('title_free_flg') ==='true' ||
                      ss.getItem('aocs_free_flg')  ==='true' ||
                      ss.getItem('ticket_free_flg')==='true';
        var is_redl = ss.getItem('title_redl_flg')   ==='true' ||
                      ss.getItem('aocs_all_redl_flg')==='true';
        var is_update = ss.getItem('aoc_update_flg') ==='true';
        var is_redeem = ss.getItem('redeem_num')!==null;
        // EURリージョンかつ有料のとき
        // この関数は複数回呼ばれることがあるが、2回目以降はスルー
        if (getShopRegion() === 'EUR' &&
            !is_free && !is_redl && !is_redeem && !is_update && !withdrawal_agreed) {
            var agree = $.confirm($('#dialog_msg_withdrawal').text(),
                $('#dialog_cancel').text(), $('#dialog_agree').text());

            if (!agree) {
                abortToBack();
                return;
            }
            ss.setItem('withdrawal_agreed', 'true');
        }
    }

    //set menubar
    var menu_bar = new MenuBar(6);
    //set screen
    var screen_arr = [];
    screen_arr.push('buy01_01','buy01_02','buy01_03','buy01_07','buy02_01','buy02_02','buy02_03');

    var screen = new SwitchScreen(screen_arr);
    screen.change();

    //get param
    //initialize session storage
    initPurchaseInfo();

    var type = $.url().param('type');
    var title_id = $.url().param('title');
    var coupon_id;
    var coupon_instance_code = $.url().param('coupon_ins') || '';
    var buying_section = $.url().param('buying_section');
    var seq = $.url().param('seq');

    // クーポン対応
    var coupon_code_str = $.url().param('coupon_code');
    if (coupon_code_str) {
        $.sessionStorage().setItem('coupon_code',
            decodeURIComponent(coupon_code_str));
    }

    // 予約販売対応 #17639 #19027
    if ($.url().param('pre_order') === 'true') {
        $.sessionStorage().setItem('title_pre_order_flg', 'true');
    }

    //遷移元がtop03_01、またはlegal01以外からの遷移の場合は引換券のsessionStorage削除
    if(seq!=='redeem' && buying_section!=='law'){
        $.sessionStorage().removeItem('redeem_num');
        $.sessionStorage().removeItem('redeem_title_id');
    }
    if(type!==undefined && title_id!==undefined &&
        (type==='title' || type==='aoc' || type==='ticket' || type==='demo' || type==='auto_billing')){
        $.sessionStorage().setItem('buying_type',type);
        $.sessionStorage().setItem('buying_title_id',title_id);
        if (coupon_instance_code) {
            coupon_id = $.sessionStorage().getItem('_coupon_id_' + coupon_instance_code);
            $.sessionStorage().setItem('buying_coupon_instance_code', coupon_instance_code);
        }
        var from_coupon02 = !!coupon_id &&
            !!$.sessionStorage().getItem('_owned_coupon_' + coupon_id);
        $.sessionStorage().setItem('buy_from_coupon02', from_coupon02 + '');
        //second transition
        if(buying_section!==undefined){
            switch(buying_section){
                case('addr')  : //住所設定画面より遷移
                case('bal')   : //残高追加画面より遷移
                case('card')  : //不足分残高追加画面（クレカ）より遷移
                case('iccard'): //不足分残高追加画面（NFC）より遷移
                case('fund')  : //資金決済法画面より遷移
                case('law')   : //法令に基づく表示画面より遷移
                    $.sessionStorage().setItem('buying_seq_rating','true');
                    $.sessionStorage().setItem('buying_seq_attention','true');
                    $.sessionStorage().setItem('buying_seq_size','true');
                    $.sessionStorage().setItem('withdrawal_agreed', 'true');
                    sequenceHandler(type);
                    break;
                case('coupon'): //クーポン入力画面より遷移
                case('owned_coupon'): //あなただけ割引選択画面より遷移
                    $.sessionStorage().setItem('buying_seq_rating','true');
                    $.sessionStorage().setItem('buying_seq_attention','true');
                    sequenceHandler(type);
                    break;
                default:
                    //レーティングチェック
                    sequenceHandler(type);
                    break;
            }
            //first transition
        }else{
            //レーティングチェック
            sequenceHandler(type);
        }
    //irregular
    }else{
        $.showError(errorCodeRetriable);
        abortToBack();
    }
// -------------------------------------------------
// event
// -------------------------------------------------
    //トップ　このページの履歴を残さない
    $('#top_link_01 > div').buttonAClick().click(function(){
        location.replace($(this).data('href'));
    });

    //buy01_01
    $('.evt_next').buttonAClick().click(function(e){
        e.preventDefault();
        wood.jsExt.playSound('SE_WAVE_OK', 1);
        //ページスクロール制御解除
        $('#sb_cont').removeClass('scroll_escape');
        $.sessionStorage().setItem('buying_seq_rating','true');

        var coupon_type = $("input[name='coupon_type']:checked").val();
        if (coupon_type === 'owned_coupon') {
            // TODO タイトル以外でクーポンを対応する場合はtypeを変える
            location.replace('coupon03_01.html?type=title&item=' +
                $.sessionStorage().getItem('buying_title_id'));
        } else if(coupon_type === 'coupon_code') {
            // TODO タイトル以外でクーポンを対応する場合はtypeを変える
            location.replace('coupon01_01.html?type=title&item=' +
                $.sessionStorage().getItem('buying_title_id'));
        } else {
            sequenceHandler($.sessionStorage().getItem('buying_type'));
        }
    });

    //buy01_02
    $('#evt_data_manage').buttonAClick().click(function(e){
        e.preventDefault();
        //ページスクロール制御解除
        $('#sb_cont').removeClass('scroll_escape');
        //本体設定へ
        wood.jsExt.playSound('SE_WAVE_JUMP', 1);
        if(isWiiU){

            wiiuBrowser.jumpToDataManage();
        }else{
            //PCの場合
            location.replace('./#top');
        }
    });
    //buy01_03
    //残高追加クリック
    $('#evt_pcard a').buttonAClick().click(function(e){
        e.preventDefault();
        //ページスクロール制御解除
        $('#sb_cont').removeClass('scroll_escape');
        switch($.sessionStorage().getItem('buying_type')){
            case('title'):
                location.replace('money01_01.html?type=title'+
                                  '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                  '&buying_section=bal');
            break;
            case('aoc'):
                location.replace('money01_01.html?type=aoc'+
                                  '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                  '&buying_section=bal'+
                                  '&aoc[]='+ $.sessionStorage().getItem('aoc_id_list'));
            break;
            case('ticket'):
                location.replace('money01_01.html?type=ticket'+
                                  '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                  '&buying_section=bal'+
                                  '&ticket='+ $.sessionStorage().getItem('ticket_id'));
            break;
            default:
            break;
        }
    });
    //クレジットカードで残高不足分追加クリック
    $('#evt_ccard a').buttonAClick().click(function(e){
        e.preventDefault();
        //ページスクロール制御解除
        $('#sb_cont').removeClass('scroll_escape');
        switch($.sessionStorage().getItem('buying_type')){
            case('title'):
                location.replace('money03_01.html?type=title'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=card'+
                    '&amount='+ $.sessionStorage().getItem('buying_shortfall'));
            break;
            case('aoc'):
                location.replace('money03_01.html?type=aoc'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=card'+
                    '&aoc[]='+ $.sessionStorage().getItem('aoc_id_list')+
                    '&amount='+ $.sessionStorage().getItem('buying_shortfall'));
            break;
            case('ticket'):
                location.replace('money03_01.html?type=ticket'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=card'+
                    '&ticket='+ $.sessionStorage().getItem('ticket_id')+
                    '&amount='+ $.sessionStorage().getItem('buying_shortfall'));
            break;
            default:
            break;
        }
    });
    //電子マネーで残高不足分追加クリック
    $('#evt_iccard a').buttonAClick().click(function(e){
        e.preventDefault();
        //ページスクロール制御解除
        $('#sb_cont').removeClass('scroll_escape');
        switch($.sessionStorage().getItem('buying_type')){
            case('title'):
                location.replace('money06_01.html?type=title'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=iccard'+
                    '&amount='+ $.sessionStorage().getItem('buying_shortfall'));
            break;
            case('aoc'):
                location.replace('money06_01.html?type=aoc'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=iccard'+
                    '&aoc[]='+ $.sessionStorage().getItem('aoc_id_list')+
                    '&amount='+ $.sessionStorage().getItem('buying_shortfall'));
            break;
            case('ticket'):
                location.replace('money06_01.html?type=ticket'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=iccard'+
                    '&ticket='+ $.sessionStorage().getItem('ticket_id')+
                    '&amount='+ $.sessionStorage().getItem('buying_shortfall'));
            break;
            default:
            break;
        }
    });
    //buy01_07
    $('#evt_attention').buttonAClick().click(function(e){
        e.preventDefault();
        wood.jsExt.playSound('SE_WAVE_OK', 1);
        //ページスクロール制御解除
        $('#sb_cont').removeClass('scroll_escape');
        $.sessionStorage().setItem('buying_seq_attention','true');
        sequenceHandler($.sessionStorage().getItem('buying_type'));
    });
    //buy02_01
    $('.evt_purchase').buttonAClick().click(function(e){
        e.preventDefault();
        wood.jsExt.playSound('SE_WAVE_DECIDE', 1);
        $.sessionStorage().setItem('buying_seq_purchase','true');
        sequenceHandler($.sessionStorage().getItem('buying_type'));
    });
    //資金決済法
    $('#evt_settlement_law').buttonAClick().click(function(e){
        e.preventDefault();
        switch($.sessionStorage().getItem('buying_type')){
            case('title'):
                location.replace('legal04_01.html?type=title'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=fund');
                break;
            case('aoc'):
                location.replace('legal04_01.html?type=aoc'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=fund'+
                    '&aoc[]='+ $.sessionStorage().getItem('aoc_id_list'));
                break;
            case('ticket'):
                location.replace('legal04_01.html?type=ticket'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=fund'+
                    '&ticket='+ $.sessionStorage().getItem('ticket_id'));
                break;
            case('demo'):
                location.replace('legal04_01.html?type=demo'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&demo='+ $.sessionStorage().getItem('demo_id') +
                    '&buying_section=fund');
                break;
            default:
                break;
        }
    });
    //法令に基づく表示
    $('#evt_trade_law').buttonAClick().click(function(e){
        e.preventDefault();
        switch($.sessionStorage().getItem('buying_type')){
            case('title'):
                location.replace('legal03_01.html?type=title'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=law');
                break;
            case('aoc'):
                location.replace('legal03_01.html?type=aoc'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=law'+
                    '&aoc[]='+ $.sessionStorage().getItem('aoc_id_list'));
                break;
            case('ticket'):
                location.replace('legal03_01.html?type=ticket'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&buying_section=law'+
                    '&ticket='+ $.sessionStorage().getItem('ticket_id'));
                break;
            case('demo'):
                location.replace('legal03_01.html?type=demo'+
                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                    '&demo='+ $.sessionStorage().getItem('demo_id') +
                    '&buying_section=law');
                break;
            default:
                break;
        }
    });

// -------------------------------------------------
// sequence
// -------------------------------------------------
    //sequenceHandler
    function sequenceHandler(type){
        //ユーザ操作禁止
        disableUserOperation();
        switch(type){
            //通常タイトル購入
            case'title':
                if($.sessionStorage().getItem('get_common_info')!=='true'){
                    getTitleCommonInfo($.sessionStorage().getItem('buying_title_id'));
                }
                if($.sessionStorage().getItem('get_title_info')!=='true' &&
                   $.sessionStorage().getItem('get_common_info')==='true'){
                    getTitleInfo($.sessionStorage().getItem('buying_title_id'));
                }

                if($.sessionStorage().getItem('get_common_info')==='true' &&
                   $.sessionStorage().getItem('get_title_info')==='true' &&
                   $.sessionStorage().getItem('buying_seq_rating')!=='true'){
                    //レーティングチェック
                    seqTitleCheckRating();
                }else{
                    confirmWithdrawal();
                    $('body').removeClass('display_cover');
                    if($.sessionStorage().getItem('buying_seq_size')!=='true'){
                        //容量チェック
                        seqTitleCheckSize();
                    }else{
                        if($.sessionStorage().getItem('buying_seq_balance')!=='true' &&
                           $.sessionStorage().getItem('title_redl_flg')!=='true'){
                            //残高チェック
                            seqTitleCheckBalance();
                        }else{
                            if($.sessionStorage().getItem('buying_seq_purchase')==='true'){
                                //ホームボタン禁止
                                disableHomeButton();
                                disablePowerButton();
                                //購入処理
                                seqTitlePurchase();
                                break;
                            }else{
                                //購入前確認画面
                                seqTitlePurchaseConfirm();
                            }
                        }
                    }
                }
                //ホームボタン、ユーザ操作禁止解除
                enableUserOperation();
                enableHomeButton();
                enablePowerButton();
            break;
            //追加コンテンツ購入
            case'aoc':
                if($.sessionStorage().getItem('get_common_info')!=='true'){
                    getTitleCommonInfo($.sessionStorage().getItem('buying_title_id'));
                }
                if($.sessionStorage().getItem('get_aoc_info')!=='true' &&
                   $.sessionStorage().getItem('get_common_info')==='true'){
                    var aoc_id = [];
                    if ($.url().param('aoc[]') !== undefined) {
                        aoc_id = decodeURIComponent($.url().param('aoc[]')).split(',');
                    }
                    getAOCInfo($.sessionStorage().getItem('buying_title_id'),aoc_id);
                }
                //購入追加コンテンツ、更新がない場合は不正遷移
                if($.sessionStorage().getItem('aoc_id_list')===null && $.sessionStorage().getItem('aoc_update_flg')===null){
                    $.showError(errorCodeRetriable);
                    abortToBack();
                }
                //更新のみチェック
                var aoc_update_only = false;
                if($.sessionStorage().getItem('aoc_id_list')===null && $.sessionStorage().getItem('aoc_update_flg')==='true'){
                    $.sessionStorage().setItem('buying_seq_balance','true');
                    aoc_update_only = true;
                    $.print("aoc_update_only: true");
                } else {
                    $.print("aoc_update_only: false");
                }

                // R-dash AOC 対応
                var title_ec_info = getTitleEcInfo(title_id);
                if (title_ec_info.error) {
                    if (title_ec_info.error.code_no !== undefined && title_ec_info.error.message !== undefined) {
                        $.showError(prefixNinja + title_ec_info.error.code_no, title_ec_info.error.message);
                    } else {
                        $.showError(errorCodeRetriable);
                    }
                    abortToBack();
                }
                var title_id_64bit = title_ec_info.title_id;
                var REDPRO_JP = "0005000010101C00";
                var REDPRO_IDS = [REDPRO_JP, "0005000010101D00", "0005000010101E00"];
                var is_redpro = false;
                $.each(REDPRO_IDS, function(key, value) {
                    if (value === title_id_64bit) {
                        is_redpro = true;
                    }
                });
                if (is_redpro) {
                    if (isWiiU) {
                        var patch_title_id = titleId2PatchTitleId(title_id_64bit);
                        var title_info = wiiuDevice.getTitleInstallState(patch_title_id);
                        processJsxError(title_info);
                        var RDASH_PATCH_VERSION = 48;

                        // バージョンが低いか
                        var is_lower_version = (parseInt(title_info.version, 10) <= RDASH_PATCH_VERSION);
                        var is_limited_installed = function() {
                            if (title_id_64bit === REDPRO_JP) {
                                // 販促キャンペーン対応における redpro のRダッシュ対応 SEE #15232
                                // 日本版なら、限定版がインストールされているか確認する
                                var LIMITED_REDPRO_JP = "0005000010185200";
                                var res = wiiuDevice.getTitleInstallState(LIMITED_REDPRO_JP);
                                processJsxError(res);
                                // 限定版がインストールされていればtrueを返す
                                return res.installed;
                            }
                            return false;
                        };
                        var can_buy_rdash = !is_lower_version || is_limited_installed();
                        if (!can_buy_rdash) {
                            $.alert($('#dialog_msg_latest_version').text(), $('#dialog_msg_ok').text());
                            abortToBack();
                        }
                    }
                }

                if($.sessionStorage().getItem('get_common_info')==='true' &&
                   $.sessionStorage().getItem('get_aoc_info')==='true' &&
                   $.sessionStorage().getItem('buying_seq_rating')!=='true'){

                    $.print("--- before seqAOCCheckRating");
                    //レーティングチェック
                    seqAOCCheckRating();
                    $.print("--- after seqAOCCheckRating: " + $.sessionStorage().getItem('buying_title_id'));

                    // In-Disc AOC 対応 #5871
                    $.print("--- In-Disc AOC Check");
                    $.print("--- aoc_update_only: " + aoc_update_only);
                    if (isWiiU && wiiuDevice.getTicketInfo && !aoc_update_only) {

                        $.print("Indisc AOC info");
                        $.print(" - Parent: " + title_id);

                        var aoc_same_variation_items =
                            JSON.parse($.sessionStorage().getItem('aoc_same_variation_items'));

                        // In-Disc AOC の確認が必要かどうかのフラグ
                        var requires_indisc_aoc_confirm = false;

                        $.each(aoc_same_variation_items, function() {
                            var aoc_title_id = this.title_id;
                            $.print(" --> aoc: " + aoc_title_id);

                            var ticket_info = wiiuDevice.getTicketInfo(aoc_title_id);
                            if (ticket_info) {
                                $.print(" --> hasCommonTicket:   " + ticket_info.hasCommonTicket);
                                $.print(" --> hasPersonalTicket: " + ticket_info.hasPersonalTicket);
                            }

                            if (ticket_info && ticket_info.hasCommonTicket) {

                                requires_indisc_aoc_confirm = true;
                                return false;
                            }
                        });

                        if (requires_indisc_aoc_confirm) {
                            var indisc_aoc_confirmed = $.confirm(
                                $('#dialog_msg_indisc_aoc').text(),
                                $('#dialog_back_indisc_aoc').text(),
                                $('#dialog_purchase_indisc_aoc').text());

                            if (!indisc_aoc_confirmed) {
                                abortToBack();
                            }
                        }
                    }

                }else{ // TODO 他の条件(異常系)を顧慮する必要はない？
                    confirmWithdrawal();
                    $('body').removeClass('display_cover');
                    if($.sessionStorage().getItem('buying_seq_attention')!=='true'){
                        //注意画面遷移
                        seqAOCAttention();
                    }else{
                        if($.sessionStorage().getItem('buying_seq_size')!=='true'){
                            //容量チェック
                            seqAOCCheckSize();
                        }else{
                            if($.sessionStorage().getItem('buying_seq_balance')!=='true' &&
                               $.sessionStorage().getItem('aocs_all_redl_flg')!=='true'){
                                //残高チェック
                                seqAOCCheckBalance();
                            }else{
                                if($.sessionStorage().getItem('buying_seq_purchase')==='true'){
                                    //ホームボタン禁止
                                    disableHomeButton();
                                    disablePowerButton();
                                    //購入処理
                                    seqAOCPurchase();
                                    break;
                                }else{
                                    //購入前確認画面
                                    seqAOCPurchaseConfirm();
                                }
                            }
                        }
                    }
                }
                //ホームボタン、ユーザ操作禁止解除
                enableUserOperation();
                enableHomeButton();
                enablePowerButton();

                $.print('sequenceHandler aoc case end');
            break;
            //利用券購入
            case'ticket':
                if($.sessionStorage().getItem('get_common_info')!=='true'){
                    getTitleCommonInfo($.sessionStorage().getItem('buying_title_id'));
                }
                if($.sessionStorage().getItem('get_ticket_info')!=='true' &&
                   $.sessionStorage().getItem('get_common_info')==='true'){
                    var ticket_id = $.url().param('ticket');
                    var is_redeem = ($.sessionStorage().getItem('redeem_num')!==null);
                    getTicketInfo($.sessionStorage().getItem('buying_title_id'),ticket_id, is_redeem);
                }
                if($.sessionStorage().getItem('get_common_info')==='true' &&
                   $.sessionStorage().getItem('get_ticket_info')==='true' &&
                   $.sessionStorage().getItem('buying_seq_rating')!=='true'){
                    //レーティングチェック
                    seqTicketCheckRating();
                }else{
                    confirmWithdrawal();
                    $('body').removeClass('display_cover');
                    if($.sessionStorage().getItem('buying_seq_attention')!=='true'){
                        //注意画面遷移
                        seqTicketAttention();
                    }else{
                        if($.sessionStorage().getItem('buying_seq_balance')!=='true'){
                            //残高チェック
                            seqTicketCheckBalance();
                        }else{
                            if($.sessionStorage().getItem('buying_seq_purchase')==='true'){
                                //ホームボタン禁止
                                disableHomeButton();
                                disablePowerButton();

                                //購入処理
                                seqTicketPurchase();
                                break;
                            }else{
                                //購入前確認画面
                                seqTicketPurchaseConfirm();
                            }
                        }
                    }
                }
                //ホームボタン、ユーザ操作禁止解除
                enableUserOperation();
                enableHomeButton();
                enablePowerButton();
            break;
            //体験版購入
            case'demo':
                if($.sessionStorage().getItem('get_demo_info')!=='true'){
                    var demo_id = $.url().param('demo');
                    getDemoInfo(demo_id);
                }
                if($.sessionStorage().getItem('get_demo_info')==='true' &&
                   $.sessionStorage().getItem('buying_seq_rating')!=='true'){
                    //レーティングチェック
                    seqDemoCheckRating();
                }else{
                    $('body').removeClass('display_cover');
                    if($.sessionStorage().getItem('buying_seq_size')!=='true'){
                        //容量チェック
                        seqDemoCheckSize();
                    }else{
                        if($.sessionStorage().getItem('buying_seq_purchase')==='true'){
                            //ホームボタン禁止
                            disableHomeButton();
                            disablePowerButton();
                            //購入処理
                            seqDemoPurchase();
                            break;
                        }else{
                            //購入前確認画面
                            seqDemoPurchaseConfirm();
                        }
                    }
                }
                //ホームボタン、ユーザ操作禁止解除
                enableUserOperation();
                enableHomeButton();
                enablePowerButton();
            break;
            // 継続課金
            case 'auto_billing':
                if($.sessionStorage().getItem('get_common_info')!=='true'){
                    getTitleCommonInfo($.sessionStorage().getItem('buying_title_id'));
                    getTicketsInfo($.sessionStorage().getItem('buying_title_id'));
                }
                if($.sessionStorage().getItem('get_common_info')==='true' &&
                   $.sessionStorage().getItem('buying_seq_rating')!=='true'){
                    //レーティングチェック
                    seqTicketCheckRating();
                }else{
                    confirmWithdrawal();
                    $('body').removeClass('display_cover');
                    if($.sessionStorage().getItem('buying_seq_attention')!=='true'){
                        //注意画面遷移
                        seqTicketAttention();
                    }else{
                        var contract_id = $.url().param('contract');
                        $.sessionStorage().setItem('auto_billing_contract_id', '' + contract_id);
                        $.sessionStorage().setItem('auto_billing_title_id', '' + title_id);
                        $.sessionStorage().setItem('required_check_under_age', 'true');
                        location.replace('money03_02.html');
                    }
                }
                //ホームボタン、ユーザ操作禁止解除
                enableUserOperation();
                enableHomeButton();
                enablePowerButton();
            break;
        }
    }

    function titleId2PatchTitleId(title_id){
        // 下から9桁目をEに置換
        return title_id.replace(/.(.{8})$/,"E$1");
    }

    //buy01_01 sequence
    function seqTitleCheckRating(){
        if($.sessionStorage().getItem('buying_title_id')!==null){
            var rating_flg = ($.sessionStorage().getItem('rating_flg')==='true')? true: false;
            var rating_age = parseInt($.sessionStorage().getItem('rating_age'),10);
            var rating_sys = parseInt($.sessionStorage().getItem('rating_sys'),10);
            var rating_id = parseInt($.sessionStorage().getItem('rating_id'),10);
            var notes_flg = ($.sessionStorage().getItem('notes_flg')==='true')? true: false;


            //レーティング情報取得
            var title_id = $.sessionStorage().getItem('buying_title_id');
            //AGEゲート
            var res_age;
            if(rating_flg){
                //引換
                if($.sessionStorage().getItem('redeem_num')!==null){
                    res_age = checkAgeGate(3,rating_sys,rating_age,title_id);
                    //再受信
                }else if($.sessionStorage().getItem('title_redl_flg')==='true'){
                    res_age = checkAgeGate(2,rating_sys,rating_age,title_id);
                    //通常購入
                }else{
                    res_age = checkAgeGate(1,rating_sys,rating_age,title_id);
                }
            }else{
                res_age = true;
            }
            if(!res_age){
                $.alert($('#dialog_msg_age').text(),$('#dialog_msg_ok').text());
                abortToBack();
            }else{
                var res_parental_eshop,res_parental_play,url = $.url();
                //再受信、無料、引換時はペアレンタルチェック(残高)をスキップ
                //インストールが完了してる時に対応 #14229
                if(($.sessionStorage().getItem('redeem_num')!==null && $.sessionStorage().getItem('redeem_title_id')!==null) ||
                    $.sessionStorage().getItem('title_free_flg')==='true' ||
                    $.sessionStorage().getItem('title_redl_flg')==='true' ||
                    $.sessionStorage().getItem('title_redl_flg')==='false'){
                    res_parental_eshop = true;
                }else{
                    //ペアレンタルコントロール(残高)
                    res_parental_eshop = checkParentalControlForEShop();
                }
                if(!res_parental_eshop){
                    location.replace('legal01_01.html?seq='+encodeURIComponent(url.attr('file')+'?'+url.attr('query'))+'#eshop');
                }else{
                    //ペアレンタルコントロール(年齢)
                    if(rating_flg){
                        res_parental_play = checkParentalControlForGamePlay(rating_age);
                    }else{
                        res_parental_play = true;
                    }
                    if(!res_parental_play){
                        location.replace('legal01_01.html?seq='+encodeURIComponent(url.attr('file')+'?'+url.attr('query'))+'#gameplay');
                    }else{
                        //本体にDL済みかチェック
                        if($.sessionStorage().getItem('title_redl_flg')==='false'){
                            //OKボタンより遷移元へ
                            $.alert($('#dialog_msg_DL').text(),$('#dialog_msg_ok').text());
                            abortToBack();
                            return;
                        }else if($.sessionStorage().getItem('title_redl_flg')==='true'){
                            //再受信ボタンより続行
                            if(!isTitleOwnedBySelf(title_id)){ //自分以外が所有している場合のみ表示
                                var res = $.confirm($('#dialog_msg_reDL').text(),$('#dialog_back').text(),$('#dialog_msg_reDL_ok').text());
                                if(!res){
                                    abortToBack();
                                    return;
                                }
                            }
                        }
                        $('body').removeClass('display_cover');
                        if(rating_flg || notes_flg || canUseCoupon()){
                            //ページ表示処理
                            screen.change('buy01_01');
                            showCouponType();
                            $('.header_common h1').text($('#str_pre_confirm').text());
                        }else{
                            $.sessionStorage().setItem('buying_seq_rating','true');
                            sequenceHandler($.sessionStorage().getItem('buying_type'));
                        }
                    }
                }
            }

        }else{
            $.showError(errorCodeRetriable);
            abortToBack();
        }
    }
    //buy01_02 sequence
    function seqTitleCheckSize(){
        //空き容量チェック
        if($.sessionStorage().getItem('size_over_flg')==='true'){
            //タイトル情報
            var str_title = $.sessionStorage().getItem('title_name');
            var url_icon = $.sessionStorage().getItem('title_icon');
            var str_size_info,str_size_unit,str_media_info,media_type;
            //容量単位取得
            if($.sessionStorage().getItem('title_size_unit')==='GB'){
                str_size_unit = $('#str_gb').html();
            }else if($.sessionStorage().getItem('title_size_unit')==='MB'){
                str_size_unit = $('#str_mb').html();
            }else if($.sessionStorage().getItem('title_size_unit')==='KB'){
                str_size_unit = $('#str_kb').html();
            }
            str_size_info = $('#str_install').html().replace('%{0}',$.sessionStorage().getItem('title_size_str')+' '+str_size_unit);
            var title_dl_media = $.sessionStorage().getItem('title_dl_media');
            if (title_dl_media === 'NAND') {
                media_type = $('#str_media_nand').html();
            }else{
                media_type = $('#str_media_usb').html();
            }
            str_media_info = title_dl_media
                ? $('#str_media').html().replace('%{s}',media_type)
                : '';

            $('.sel_title_name').html(str_title);
            $('.sel_title_img').attr('src',url_icon);
            $('#sel_media').html(str_media_info);
            $('#sel_title_size').html(str_size_info);

            //ページ表示処理
            screen.change('buy01_02');
            $('.header_common h1').text($('#str_pre_confirm').text());
        }else{
            $.sessionStorage().setItem('buying_seq_size','true');
            sequenceHandler($.sessionStorage().getItem('buying_type'));
        }
    }
    //buy01_03 sequence
    function seqTitleCheckBalance(){
        //残高チェック
        var balance_flg = false;
        if($.sessionStorage().getItem('redeem_num')!==null){
          $.sessionStorage().setItem('buying_seq_balance','true');
            sequenceHandler($.sessionStorage().getItem('buying_type'));
        }else{
            var bal_amount;
            var amount;
            //タイトル価格取得
            var res = getTitlePrice($.sessionStorage().getItem('buying_title_id'));
            //住所設定に行く場合はここでreturn
            if(res!==true) return;
            amount = $.sessionStorage().getItem('title_taxin_price_str');
            bal_amount = $.sessionStorage().getItem('current_balance_str');

            //check balance
            if(isPositivePrice($.sessionStorage().getItem('post_balance'))){
                $.sessionStorage().setItem('buying_seq_balance','true');
                sequenceHandler($.sessionStorage().getItem('buying_type'));
            }else{
                //残高、ソフト金額取得
                $('#buy01_03 dd:eq(0)').text(bal_amount);
                $('#buy01_03 dd:eq(1)').text(amount);
                var post_raw = priceAbs($.sessionStorage().getItem('post_balance'));
                $.sessionStorage().setItem('buying_shortfall',post_raw);
                //クレジットカードチェック
                if(checkCCard()){
                    //クレカボタン表示
                    $('#evt_ccard').show();
                }else{
                    // 欧州でクレジットカード不可になった際の対応 SHOPN-3377
                    if (getShopRegion() === 'EUR') {
                        $('#sel_ccard_disabled, .ccard_disabled_eu').show();
                    } else if (getShopRegion() === 'AUS') {
                        $('#sel_ccard_disabled, .ccard_disabled_au').show();
                    }
                }
                //NFC利用可能か
                if(isNfcAvailable()){
                    //電子マネーボタン表示
                    $('#evt_iccard').show();
                }
                //資金決済法ボタン出し分け
                if($.sessionStorage().getItem('legal_payment_message_required') === 'true'){
                    $('#sel_settlement_law').show();
                }
                //ページ表示処理
                screen.change('buy01_03');
                $('.header_common h1').text($('#str_pre_confirm').text());
                //ページスクロール制御
                $('#sb_cont').addClass('scroll_escape');
            }
        }
    }
    //buy02_01 sequence
    function seqTitlePurchaseConfirm(){
        //特商法ボタン出し分け
        if($.sessionStorage().getItem('legal_business_message_required') === 'true'){
            $('#specific_trade_law').show();
        }
        var str_balance_before_data,str_balance_after_data,str_title,url_icon;
        str_title = $.sessionStorage().getItem('title_name');
        url_icon = $.sessionStorage().getItem('title_icon');

        showUsingCoupon();

        $('h2.sel_title_name').html(str_title);
        $('img.sel_title_img').data('original',url_icon);
        var str_size_unit,html_size_data;
        //容量単位取得
        if($.sessionStorage().getItem('title_display_size_unit')==='GB'){
            str_size_unit = $('#str_gb').html();
        }else if($.sessionStorage().getItem('title_display_size_unit')==='MB'){
            str_size_unit = $('#str_mb').html();
        }else if($.sessionStorage().getItem('title_display_size_unit')==='KB'){
            str_size_unit = $('#str_kb').html();
        }
        html_size_data = $.sessionStorage().getItem('title_display_size_str')+' '+str_size_unit;

        // FIXME: price_is_free と free_flg があってかなり複雑になっています
        // price_is_free は価格があって且つそれが無料のケース、free_flg は
        // それに加えて再受信や引き換え等「結果としてお金がかからない」ケースでも
        // true になります。これらは表示上区別する必要があるのでフラグも
        // 別になっています。 SEE #10325
        var price_is_free = isZeroPrice(
            $.sessionStorage().getItem('title_taxin_price'));

        $.print('seqTitlePurchaseConfirm: title_taxin_price='
            + $.sessionStorage().getItem('title_taxin_price'));
        $.print('seqTitlePurchaseConfirm: price_is_free=' + price_is_free);

        //購入種類
        var free_flg=false;
        //再受信
        if($.sessionStorage().getItem('title_redl_flg')==='true'){
            $.print("seqTitlePurchaseConfirm: (free) title_redl_flg");
            free_flg = true;
            $('.evt_purchase').text($('#str_btn_dl_free').text());
        //引換券
        }else if($.sessionStorage().getItem('redeem_num')!==null){
            $.print("seqTitlePurchaseConfirm: (free) redeem_num");
            free_flg = true;
            $('.evt_purchase').text($('#str_btn_dl_free').text());
        //無料
        }else if(price_is_free){
            $.print("seqTitlePurchaseConfirm: (free) title_free_flg");
            free_flg = true;
            $('.evt_purchase').text($('#str_btn_dl_free').text());
        //通常
        }else{
            $.print("seqTitlePurchaseConfirm: (not free)");
            $('#bfr_message').show();
            if(country === 'JP' && $.sessionStorage().getItem('title_pre_order_flg')!=='true') {
                $('#bfr_not_cancelable_message').show();
            }
        }

        // 予約
        if ($.sessionStorage().getItem('title_pre_order_flg')==='true') {
            var format_date = function(format, date){
                var date_arr = date.split("-");
                return format.replace('%{yyyy}', date_arr[0])
                    .replace('%{mm}', date_arr[1])
                    .replace('%{dd}', date_arr[2]);
            };

            var release_date = format_date($('#bfr_release_date p').html(),
                $.sessionStorage().getItem('title_release_date'));

            $('#bfr_release_date p').html(release_date);
            $('#bfr_release_date').show();

            var ss = $.sessionStorage();
            var is_free = ss.getItem('title_free_flg') ==='true';
            var is_redl = ss.getItem('title_redl_flg') ==='true';
            var is_redeem = ss.getItem('redeem_num')!==null;
            // 基本的にメッセージを表示するが、
            // JPかつ無料・引き換え・再受信のときは表示しない
            if (!(country === 'JP' && (is_free || is_redl | is_redeem || price_is_free))) {
                $('#bfr_pre_order_message').show();
            }
        }

        if(free_flg){
            // SEE #24395 無料タイトルにおけるアプリ内課金
            //確認画面
            $('#template_title_free').tmpl({
                'str_description' : $('#str_btn_dl_free').text(),
                'str_size'      : $('#str_size').text(),
                'html_size_data' : html_size_data
            }).appendTo('#reminder_content');

            //確認詳細画面
            if ($.sessionStorage().getItem('title_in_app_purchase') === 'true') {
                $('#template_detail_free').tmpl({
                    'str_description' : $('#str_in_app_purchase').text(),
                    'str_free'      : '',
                    'str_detail'    : $('#str_detail').text()
                }).appendTo('#reminder_content_detail');
            }
            $('.sel_color').removeClass('orange');
        //新規購入
        }else{
            var str_price_taxin_data = $.sessionStorage().getItem('title_taxin_price_str');
            //外税
            if(checkTaxExcluded()){
                //確認画面
                var str_price_data = $.sessionStorage().getItem('title_price_str');
                var str_tax_data = $.sessionStorage().getItem('title_tax_str');
                $('#template_title_taxex').tmpl({
                    'str_price'      : $('#str_price').text(),
                    'str_price_data' : str_price_data,
                    'str_tax'        : $('#str_tax').text(),
                    'str_tax_data'   : str_tax_data,
                    'str_total'      : $('#str_total').text(),
                    'str_total_data' : str_price_taxin_data,
                    'str_size'       : $('#str_size').text(),
                    'html_size_data'  : html_size_data
                }).appendTo('#reminder_content');
                //確認詳細画面
                str_balance_before_data = $.sessionStorage().getItem('current_balance_str');
                str_balance_after_data = $.sessionStorage().getItem('post_balance_str');
                $('#template_detail_taxex').tmpl({
                    'str_balance_before'      : $('#str_balance_before').text(),
                    'str_balance_before_data' : str_balance_before_data,
                    'str_price'               : $('#str_price').text(),
                    'str_price_data'          : str_price_data,
                    'str_tax'                 : $('#str_tax').text(),
                    'str_tax_data'            : str_tax_data,
                    'str_total'               : $('#str_total').text(),
                    'str_total_data'          : str_price_taxin_data,
                    'str_balance_after'       : $('#str_balance_after').text(),
                    'str_balance_after_data'  : str_balance_after_data,
                    'str_detail'              : $('#str_detail').text()
                }).appendTo('#reminder_content_detail');
            //内税
            }else{
                var price_tax = $.sessionStorage().getItem('title_tax');
                var str_price_taxin = '';
                if(!isZeroPrice(price_tax)){
                    //AU表記変更
                    if(country === 'AU' || country === 'NZ'){
                        str_price_taxin = $('#str_price_taxin_AU').text();
                    }else{
                        str_price_taxin = $('#str_price_taxin').text();
                    }
                }
                //確認画面
                $('#template_title_taxin').tmpl({
                    'str_price'            : $('#str_total_price').text(),
                    'str_price_taxin'      : str_price_taxin,
                    'str_price_taxin_data' : str_price_taxin_data,
                    'str_size'             : $('#str_size').text(),
                    'html_size_data' : html_size_data
                }).appendTo('#reminder_content');
                //確認詳細画面
                str_balance_before_data = $.sessionStorage().getItem('current_balance_str');
                str_balance_after_data = $.sessionStorage().getItem('post_balance_str');
                $('#template_detail_taxin').tmpl({
                    'str_balance_before'      : $('#str_balance_before').text(),
                    'str_balance_before_data' : str_balance_before_data,
                    'str_price'               : $('#str_total_price').text(),
                    'str_price_taxin'         : str_price_taxin,
                    'str_price_taxin_data'    : str_price_taxin_data,
                    'str_balance_after'       : $('#str_balance_after').text(),
                    'str_balance_after_data'  : str_balance_after_data,
                    'str_detail'              : $('#str_detail').text()
                }).appendTo('#reminder_content_detail');
                show_jp_legal_description();
            }
        }
        //ページ表示処理
        analytics.confirm();
        screen.change('buy02_01');
        lazyload('img.sel_title_img');
        $('.header_common h1').text($('#str_final_confirm').text());
    }
    //buy02_03 sequence
    function seqTitlePurchase(){
        if($.sessionStorage().getItem('buying_title_id')!==null){
            screen.change('buy02_02');
            $('#sel_menu_bar').hide();//メニューバー
            if($.sessionStorage().getItem('title_redl_flg')==='true'){
                seqTitlePurchaseComplete('redl');
                enableHomeButton();
                enablePowerButton();
            }else{
                var title_id = $.sessionStorage().getItem('buying_title_id');
                var redeem_num = $.sessionStorage().getItem('redeem_num');

                //引換券
                if(redeem_num!==null){
                    var req_free = {
                        url  : ninjaBase + 'ws/' + country + '/title/' + title_id +'/!redeem',
                        type : 'POST',
                        data : {
                            'card_number' : redeem_num
                        }
                    };
                    //ajax
                    $.getXml(req_free,true)
                        .done(
                        function(xml){
                            var DL_ticket = $(xml).find('ticket_id').text();
                            var tran_id = $(xml).find('transaction_id').text();
                            var integrated_account = $(xml).find('integrated_account').text();
                            var privilege_infos = get_privilege_infos(xml);
                            reloadDeviceOrderList({
                                no_save: true,
                                no_enable_home: true
                            });

                            //お気に入りリスト更新
                            clearLocalStorageWithPrefix('_wishlist');

                            if (isWiiU) {
			                    wiiuLocalStorage.write();
                            }
                            $.sessionStorage().removeItem('redeem_num');

                            // #3986 BTS2141 DLタスク登録中の
                            // 予期せぬホームボタン解除の可能性を考慮して
                            // 再度禁止する
                            disableHomeButton();

                            //チケットDL
                            if(isWiiU){
                                var res = wiiuEC.ticketDownloadSync(DL_ticket);
                                processJsxError(res);
                            }
                            seqTitlePurchaseComplete('redeem', tran_id, integrated_account);

                            if (privilege_infos.length > 0) {
                                $.sessionStorage().setItem('privilege_infos_' + tran_id,
                                    JSON.stringify(privilege_infos));
                            }

                            enableHomeButton();
                            enablePowerButton();
                        }
                    )
                        .fail(
                        function(xml){
                            initPurchaseInfo();
                            //ホームボタン、ユーザ操作禁止解除
                            enableUserOperation();
                            enableHomeButton();
                            enablePowerButton();
                            var error_code = $(xml.responseText).find('code').text();
                            var error_msg = $(xml.responseText).find('message').text();
                            setErrorHandler(prefixNinja, error_code, error_msg, function(){
                                switch(error_code){
                                    case '3051'://3051 ECGS_CONNECTION_FAILURE
                                    case '3052'://3052 ECGS_BAD_RESPONSE
                                    case '3150'://3150 NEI_TITLE_DISABLE_DOWNLOAD
                                        abortToTop();
                                        break;
                                    case '3154'://3154 NEI_TITLE_ALREADY_OWNED
                                        $.alert(error_msg, $('#dialog_msg_ok').text());
                                        //購入リスト追加
                                        reloadDeviceOrderList({ no_save: true });
                                        //お気に入りリスト更新
                                        clearLocalStorageWithPrefix('_wishlist');
                                        if (isWiiU) {
			                                wiiuLocalStorage.write();
                                        }
                                        abortToBack();
                                        break;
                                    case '3101'://3101 NEI_ECARD_GUNIT_REDEEMED
                                    case '3103'://3103 NEI_ECARD_GUNIT_REVOKED
                                    case '3104'://NEI_ECARD_CASH_UNEXPECTED_STATUS
                                    case '3105'://NEI_ECARD_CASH_REDEEMED
                                    case '3106'://NEI_ECARD_CASH_INACTIVE
                                    case '3107'://NEI_ECARD_CASH_REVOKED
                                    case '3108'://NEI_REDEEM_TITLE_NOT_RELEASE
                                    case '3110'://NEI_ECARD_CASH_CURRENCY_MISMATCH
                                    case '3111'://NEI_ECARD_FOR_NINTENDO_POINT
                                    case '3152'://NEI_ONLINE_PRICE_CHANGED
                                        abortToBack();
                                        break;
                                    case '6811'://6811 PAS_ACCOUNT_EXPIRED
                                    case '6812'://6812 PAS_ACCOUNT_REVOKED
                                    case '6813'://6813 PAS_ACCOUNT_NOT_ACTIVATED
                                    case '6814'://6814 PAS_ACCOUNT_NOT_USABLE
                                    case '6815'://6815 PAS_ACCOUNT_IS_USED_ONCE
                                    case '6830'://6830 PAS_INVALID_ECARD
                                    case '6831'://6831 PAS_ECARD_COUNTRY_CODE
                                    case '6834'://6834 PAS_POS_IF_BUSY
                                    case '6835'://6835 PAS_POS_SERVER_BUSY
                                    case '6836'://6836 PAS_POS_URL_ERROR
                                    case '6837'://6837 PAS_POS_AUTH_ERROR
                                    case '6838'://6838 PAS_POS_SERVER_ERROR
                                        abortToBack();
                                        break;
                                    default:
                                        abortToBack();
                                        break;
                                }
                            });
                        }
                    );
                    //通常タイトル
                }else{
                    //価格ID取得
                    var req_data,req_url;

                    if($.sessionStorage().getItem('title_discount_price_id')!==null){
                        req_url = ninjaBase + 'ws/' + country + '/title/' + title_id +'/!purchase?lang='+lang;
                        req_data = {'price_id':$.sessionStorage().getItem('title_regular_price_id'),
                            'discount_id' : $.sessionStorage().getItem('title_discount_price_id')
                        };
                    }else{
                        req_url = ninjaBase + 'ws/' + country + '/title/' + title_id +'/!purchase?lang='+lang;
                        req_data = {'price_id':$.sessionStorage().getItem('title_regular_price_id')};
                    }
                    var coupon_code = $.sessionStorage().getItem('coupon_code');
                    if (coupon_code) {
                        req_data.coupon_code = coupon_code;
                    }
                    var coupon_ins = $.sessionStorage().getItem('buying_coupon_instance_code');
                    var is_free =
                        $.sessionStorage().getItem('title_free_flg')==='true' ||
                        $.sessionStorage().getItem('title_redl_flg')==='true' ||
                        $.sessionStorage().getItem('title_redl_flg')==='false';
                    if (coupon_ins && !is_free) {
                        // あなただけ割引
                        req_data.coupon_instance_code = coupon_ins;
                    }
                    $.print("seqTitlePurchase ---");
                    $.print(JSON.stringify(req_data));
                    var req_title = {
                        url  : req_url,
                        type : 'POST',
                        data : req_data,
                        complete : function(){
                            //失敗・成功に関わらず、リクエスト終了後にセッションの残高情報を消去
                            $.sessionStorage().removeItem('balance');
                            $.sessionStorage().removeItem('balance_raw');
                        }
                    };
                    //ajax
                    $.getXml(req_title,true)
                        .done(
                        function(xml){
                            split_print((new XMLSerializer).serializeToString(xml));
                            var post_balance_str = $(xml).find('post_balance').children('amount').text();
                            var post_balance = $(xml).find('post_balance').children('raw_value').text();
                            var tran_id = $(xml).find('transaction_id').text();
                            var integrated_account = $(xml).find('integrated_account').text();
                            var DL_ticket = $(xml).find('ticket_id').text();
                            var privilege_infos = get_privilege_infos(xml);
                            //残高更新
                            $('#balance').text(post_balance_str);
                            $.sessionStorage().setItem('balance',post_balance_str);
                            $.sessionStorage().setItem('balance_raw',post_balance);
                            //購入リスト追加
                            if($.sessionStorage().getItem('title_redl_flg')!=='true'){
                                reloadDeviceOrderList({
                                    no_save: true,
                                    no_enable_home: true
                                });
                                //お気に入りリスト更新
                                clearLocalStorageWithPrefix('_wishlist');
                                if (isWiiU) {
			                        wiiuLocalStorage.write();
                                }
                            }
                            analytics.setStorage(
                                'soft',
                                ['T', $(xml).find('transaction_id').text()].join('_'),   // purchaseid
                                $.sessionStorage().getItem('buying_title_id'),           // product
                                $.sessionStorage().getItem('title_taxin_price'),         // price
                                $(xml).find('post_balance').children('currency').text(), // currency
                                $(xml).find('business_type').text()
                            )

                            // #3986 BTS2141 DLタスク登録中の
                            // 予期せぬホームボタン解除の可能性を考慮して
                            // 再度禁止する
                            disableHomeButton();

                            //チケットDL
                            if(isWiiU){
                                var res = wiiuEC.ticketDownloadSync(DL_ticket);
                                processJsxError(res);
                            }
                            seqTitlePurchaseComplete('title', tran_id, integrated_account);

                            if (privilege_infos.length > 0) {
                                $.sessionStorage().setItem('privilege_infos_' + tran_id,
                                    JSON.stringify(privilege_infos));
                            }

                            enableHomeButton();
                            enablePowerButton();
                        }
                    )
                        .fail(
                        function(xml){
                            initPurchaseInfo();
                            //ホームボタン、ユーザ操作禁止解除
                            enableUserOperation();
                            enableHomeButton();
                            enablePowerButton();
                            var error_code = $(xml.responseText).find('code').text();
                            var error_msg = $(xml.responseText).find('message').text();
                            setErrorHandler(prefixNinja, error_code, error_msg, function(){
                                switch(error_code){
                                    case '3123'://3123 NEI_ACCOUNT_HAS_NO_TAX_LOCATION_ID
                                    	// FIXME 1.5 NUPの時にエラー処理を再検討すること
                                    	// US/CA以外の国で、自動でtaxLocationIdを更新する処理はprepurchase_infoにしかないので
                                    	// purchaseの際はJP等でも3124が返ってくる。
                                    	if(country !== 'US' && country !== 'CA') {
                                    	    $.showError(errorCodeRetriable);
                                    		abortToBack();
                                            break;
                                        }

                                    	//住所設定画面へ遷移
                                        location.replace('legal07_02.html?type=title'+
                                            '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                            '&buying_section=addr');
                                        break;
                                    case '3150'://3150 NEI_TITLE_DISABLE_DOWNLOAD
                                    case '3151'://3151 NEI_NO_ONLINE_PRICE
                                    case '3053'://3053 ECGS_CONNECTION_FAILURE
                                        abortToTop();
                                        break;
                                    case '3152'://3152 NEI_ONLINE_PRICE_CHANGED
                                        abortToBack();
                                        break;
                                    case '3124'://3124 NEI_INVALID_TAX_LOCATION_ID

                                    	// FIXME 1.5 NUPの時にエラー処理を再検討すること
                                    	// US/CA以外の国で、自動でtaxLocationIdを更新する処理はprepurchase_infoにしかないので
                                    	// purchaseの際はJP等でも3124が返ってくる。
                                    	if(country !== 'US' && country !== 'CA') {
                                    	    $.showError(errorCodeRetriable);
                                    		abortToBack();
                                            break;
                                        }

                                    	//住所設定画面へ遷移
                                        location.replace('legal07_02.html?type=title'+
                                            '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                            '&buying_section=addr');
                                        break;
                                    case '3125': // NEI_TAX_LOCATION_ID_CHANGED (#10020)
                                        abortToBack();
                                        break;
                                    case '3154'://3154 NEI_TITLE_ALREADY_OWNED
                                        $.alert(error_msg, $('#dialog_msg_ok').text());
                                        //購入リスト追加
                                        reloadDeviceOrderList({ no_save: true });
                                        //お気に入りリスト更新
                                        clearLocalStorageWithPrefix('_wishlist');
                                        if (isWiiU) {
			                                wiiuLocalStorage.write();
                                        }
                                        abortToBack();
                                        break;
                                    case '3260': // NEI_COUPON_NOT_FOUND
                                    case '3261': // NEI_COUPON_NOT_SUPPORT_COUNTRY
                                    case '3262': // NEI_COUPON_NOT_TARGET
                                    case '3263': // NEI_COUPON_ALREADY_USED
                                    case '3264': // NEI_COUPON_ALREADY_FREE
                                    case '3266': // NEI_MY_COUPON_NOT_ENABLE
                                        abortToBack();
                                        break;
                                    case '3267': // NEI_MY_COUPON_EXPIRED
                                    case '3268': // NEI_MY_COUPON_ALREADY_USED
                                        abortToTop();
                                        break;
                                    case '6810'://6810 PAS_NOT_ENOUGH_MONEY
                                        abortToBack();
                                        break;
                                    case '7534'://7534 ECS_VCSPAS_INVALID_TAX_LOCATION_ID
                                        if(country==='US' || country==='CA'){
                                            //住所設定画面へ遷移
                                            location.replace('legal07_02.html?type=title'+
                                                '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                                '&buying_section=addr');
                                        }else{
                                            abortToTop();
                                        }
                                        break;
                                    default:
                                        abortToBack();
                                        break;
                                }
                            });
                        }
                    );
                }
            }
        }else{
            $.showError(errorCodeRetriable);
            abortToBack();
        }
    }
    //購入完了後
    function seqTitlePurchaseComplete(type, tran_id, integrated_account){

        //NUPチェック
        if (isNUPCheckRequired()) {
            var result = wiiuEC.needsSystemUpdate();
            processJsxError(result);
            if (result.update) {
                $.print("System Update is needed.");

                var doUpdate = $.confirm($('#dialog_msg_update').text(), $('#dialog_back').text(), $('#dialog_update').text());

                if(doUpdate) {
                    wiiuBrowser.jumpToUpdate();
                } else {
                    wiiuBrowser.jumpToHomeButtonMenu();
                }
            }
        }

        //DLアイテムがなければタスクを積まない
        var has_registered_task = '';
        if($.sessionStorage().getItem('title_dl_items')!==null){
            has_registered_task = '&has_registered_task=true';
            if(isWiiU){
                //ダウンロードタスク取得
                var res_task = wiiuEC.getDownloadTaskListState();
                processJsxError(res_task);
                if(res_task.remainingTaskNum > 0){
                    //titleID、バージョン取得
                    var dl_obj = JSON.parse($.sessionStorage().getItem('title_dl_items'));
                    var title_id = String(dl_obj[0].title_id);
                    //DLタスク登録
                    var res_dl_task = wiiuEC.registerTitleDownloadTask(title_id,String(dl_obj[0].title_version));
                    processJsxError(res_dl_task);

                    // パッチDLタスクを積む（エラーチェックはしない）
                    wiiuEC.registerPatchTitleDownloadTask(title_id);

                    // 予約販売なら自動更新リストにタイトルを追加する SEE #17913
                    if ($.sessionStorage().getItem('title_pre_order_flg')==='true') {
                        var res_update_task = wiiuEC.registerAutoUpdateList(title_id);
                        processJsxError(res_update_task);
                    }

                    //ダウンロードタスクが一杯
                }else{
                    $.alert($('#dialog_msg_full').text(),$('#dialog_msg_ok').text());
                }
            }
        }
        //initialize session storage
        initPurchaseInfo();

        var is_integrated_account = integrated_account
            ? '&integrated_account=' + integrated_account : '';
        var is_redeem = '&is_redeem=true';

        //購入完了画面へ
        switch(type){
        case 'redl':
            if(tran_id !== undefined && tran_id !== ""){
                location.replace('buy02_03.html?tran_id=' + tran_id + has_registered_task);
            }else{
                location.replace('buy02_03.html?type=noreceipt' + has_registered_task);
            }
            break;
        case 'redeem':
            if(tran_id !== undefined && tran_id !== ""){
                location.replace('buy02_03.html?tran_id=' + tran_id
                    + has_registered_task
                    + is_integrated_account
                    + is_redeem
                    + '&referrer=' + encodeURIComponent('./#top'));
            }else{
                location.replace('buy02_03.html?type=noreceipt'
                    + has_registered_task
                    + is_redeem
                    + '&referrer=' + encodeURIComponent('./#top'));
            }
            break;
        case 'title':
            if(tran_id !== undefined){
                location.replace('buy02_03.html?tran_id='
                    + tran_id
                    + has_registered_task
                    + is_integrated_account);
            }else{
                location.replace('buy02_03.html' + has_registered_task.replace('&', '?')
                    + is_integrated_account);
            }
            break;
        default:
            //enableUserOperation();
            break;
        }
    }

    function seqAOCCheckRating(){
        if($.sessionStorage().getItem('buying_title_id')!==null){
            var rating_flg = ($.sessionStorage().getItem('rating_flg')==='true')? true: false;
            var rating_age = parseInt($.sessionStorage().getItem('rating_age'),10);
            var rating_sys = parseInt($.sessionStorage().getItem('rating_sys'),10);
            var rating_id = parseInt($.sessionStorage().getItem('rating_id'),10);

            var redl_cnt = 0;
            var installed_flg = false;
            if($.sessionStorage().getItem('aoc_id_list')!==null){

                //再受信、インストール済みチェック
                var aoc_arr = $.sessionStorage().getItem('aoc_id_list').split(',');
                for(var i=0; i<aoc_arr.length; i++){
                    //本体に1つでもDL済みかチェック
                    if($.sessionStorage().getItem('aoc_redl_flg_'+aoc_arr[i])==='false'){
                        installed_flg = true;
                    //再受信カウント
                    }else if($.sessionStorage().getItem('aoc_redl_flg_'+aoc_arr[i])==='true'){
                        redl_cnt++;
                    }
                }
            }
            //レーティング情報取得
            var title_id = $.sessionStorage().getItem('buying_title_id');
            //AGEゲート
            var res_age;
            if(rating_flg){
                //引換
                if($.sessionStorage().getItem('redeem_num')!==null){
                    res_age = checkAgeGate(3,rating_sys,rating_age,title_id);
                //再受信
                }else if(redl_cnt > 0){
                    res_age = checkAgeGate(2,rating_sys,rating_age,title_id);
                }else{
                    res_age = checkAgeGate(1,rating_sys,rating_age,title_id);
                }
            }else{
                res_age = true;
            }
            if(!res_age){
                $.alert($('#dialog_msg_age').text(),$('#dialog_msg_ok').text());
                abortToBack();
            }else{
                //無料、すべて再受信、引換、更新のみの場合はペアレンタルチェック(残高)をスキップ
                var res_parental_eshop,res_parental_play,url = $.url();
                if($.sessionStorage().getItem('aocs_free_flg')==='true'
                    || $.sessionStorage().getItem('aocs_all_redl_flg')==='true'
                    || $.sessionStorage().getItem('redeem_num')!==null
                    || ($.sessionStorage().getItem('aoc_id_list')===null
                        && $.sessionStorage().getItem('aoc_update_flg')==='true')){
                    res_parental_eshop = true;
                }else{
                    //ペアレンタルコントロール(残高)
                    res_parental_eshop = checkParentalControlForEShop();
                }
                if(!res_parental_eshop){
                    location.replace('legal01_01.html?seq='+encodeURIComponent(url.attr('file')+'?'+url.attr('query'))+'#eshop');
                    throw new Error('redirect to legal01_01#eshop');
                }else{
                    //ペアレンタルコントロール(年齢)
                    if(rating_flg){
                        res_parental_play = checkParentalControlForGamePlay(rating_age);
                    }else{
                        res_parental_play = true;
                    }
                    if(!res_parental_play){
                        location.replace('legal01_01.html?seq='+encodeURIComponent(url.attr('file')+'?'+url.attr('query'))+'#gameplay');
                        throw new Error('redirect to legal01_01#gameplay');
                    }else{
                        if(installed_flg){
                            //OKボタンより遷移元へ
                            $.alert($('#dialog_msg_DL').text(),$('#dialog_msg_ok').text());
                            abortToBack();
                            return;
                        }
                        if(redl_cnt > 0){
                            //再受信ボタンより続行
                            var res = $.confirm($('#dialog_msg_reDL').text(),$('#dialog_back').text(),$('#dialog_msg_reDL_ok').text());
                            if(!res){
                                abortToBack();
                                return;
                            }
                        }
                        $('body').removeClass('display_cover');
                        if(rating_flg || $('#buy_about_this p').size() >0){
                            //ページ表示処理
                            screen.change('buy01_01');
                            $('.header_common h1').text($('#str_pre_confirm').text());
                        }else{
                            $.sessionStorage().setItem('buying_seq_rating','true');
                            sequenceHandler($.sessionStorage().getItem('buying_type'));
                        }
                    }
                }
            }

        }else{
            $.showError(errorCodeRetriable);
            abortToBack();
        }
    }
    function seqAOCAttention(){
        $.print('seqAOCAttention called');

        //ページ表示処理
        var str_attention = $('#str_aoc_attention').html().replace(/%{title}/g,$.sessionStorage().getItem('title_name'));
        $('#sel_attention').html(str_attention);
        screen.change('buy01_07');
        $('.header_common h1').text($('#str_pre_confirm').text());
        //ページスクロール制御
        $('#sb_cont').addClass('scroll_escape');

        $.print('seqAOCAttention end');
    }
    function seqAOCCheckSize(){
        $.print('seqAOCCheckSize called');

        //空き容量チェック
        if($.sessionStorage().getItem('size_over_flg')==='true'){
            //タイトル情報
            var str_title = $.sessionStorage().getItem('title_name');
            var url_icon = $.sessionStorage().getItem('title_icon');
            var str_size_info,str_size_unit,str_media_info,media_type;
            //容量単位取得
            if($.sessionStorage().getItem('aocs_total_size_unit')==='GB'){
                str_size_unit = $('#str_gb').html();
            }else if($.sessionStorage().getItem('aocs_total_size_unit')==='MB'){
                str_size_unit = $('#str_mb').html();
            }else if($.sessionStorage().getItem('aocs_total_size_unit')==='KB'){
                str_size_unit = $('#str_kb').html();
            }

            str_size_info = $('#str_install').html().replace('%{0}',$.sessionStorage().getItem('aocs_total_size_str')+' '+str_size_unit);
            var aocs_dl_media = $.sessionStorage().getItem('aocs_dl_media');
            if (aocs_dl_media === 'NAND') {
                media_type = $('#str_media_nand').html();
            }else{
                media_type = $('#str_media_usb').html();
            }
            str_media_info = aocs_dl_media
                ? $('#str_media').html().replace('%{s}',media_type)
                : '';

            $('.sel_title_name').html(str_title);
            $('.sel_title_img').attr('src',url_icon);
            $('#sel_media').html(str_media_info);
            $('#sel_title_size').html(str_size_info);

            //ページ表示処理
            screen.change('buy01_02');
            $('.header_common h1').text($('#str_pre_confirm').text());
        }else{
            $.sessionStorage().setItem('buying_seq_size','true');
            sequenceHandler($.sessionStorage().getItem('buying_type'));
        }

        $.print('seqAOCCheckSize end');
    }
    //buy01_03 sequence
    function seqAOCCheckBalance(){
        $.print('seqAOCCheckBalance called');

        if ($.sessionStorage().getItem('redeem_num')!==null) {
            $.sessionStorage().setItem('buying_seq_balance', 'true');
            sequenceHandler($.sessionStorage().getItem('buying_type'));
            return;
        }

        //残高チェック
        var balance_flg = false;
        var bal_amount;
        var amount;
        //追加コンテンツ価格取得
        getAocPriceList($.sessionStorage().getItem('buying_title_id'),$.sessionStorage().getItem('buying_aoc_id_list'));
        amount = $.sessionStorage().getItem('aocs_taxin_price_str');
        bal_amount = $.sessionStorage().getItem('current_balance_str');
        //check balance
        if(isPositivePrice($.sessionStorage().getItem('post_balance'))){
            $.sessionStorage().setItem('buying_seq_balance','true');
            sequenceHandler($.sessionStorage().getItem('buying_type'));
        }else{
            //残高、ソフト金額取得
            $('#buy01_03 dd:eq(0)').text(bal_amount);
            $('#buy01_03 dd:eq(1)').text(amount);
            var post_raw = priceAbs($.sessionStorage().getItem('post_balance'));
            $.sessionStorage().setItem('buying_shortfall',post_raw);
            //クレジットカードチェック
            if(checkCCard()){
                //クレカボタン表示
                $('#evt_ccard').show();
            }
            //NFC利用可能か
            if(isNfcAvailable()){
                //電子マネーボタン表示
                $('#evt_iccard').show();
            }
            //資金決済法ボタン出し分け
            if($.sessionStorage().getItem('legal_payment_message_required') === 'true'){
                $('#sel_settlement_law').show();
            }
            //ページ表示処理
            screen.change('buy01_03');
            $('.header_common h1').text($('#str_pre_confirm').text());
            //ページスクロール制御
            $('#sb_cont').addClass('scroll_escape');
        }

        $.print('seqAOCCheckBalance end');
    }
    //buy02_01 sequence
    function seqAOCPurchaseConfirm(){
        $.print('seqAOCPurchaseConfirm start');

        //特商法ボタン出し分け
        if($.sessionStorage().getItem('legal_business_message_required') === 'true'){
            $('#specific_trade_law').show();
        }
        $('#sel_main_title').show();
        var str_balance_before_data,str_balance_after_data,str_title,url_icon;
        str_title = $.sessionStorage().getItem('title_name');
        url_icon = $.sessionStorage().getItem('title_icon');

        $('h2.sel_title_name').html(str_title);
        $('img.sel_title_img').data('original',url_icon);

        var str_size_unit,html_size_data;
        //トータル容量単位取得
        if($.sessionStorage().getItem('aocs_total_size_unit')==='GB'){
            str_size_unit = $('#str_gb').html();
        }else if($.sessionStorage().getItem('aocs_total_size_unit')==='MB'){
            str_size_unit = $('#str_mb').html();
        }else if($.sessionStorage().getItem('aocs_total_size_unit')==='KB'){
            str_size_unit = $('#str_kb').html();
        }else{
            str_size_unit = '';
        }
        html_size_data = $.sessionStorage().getItem('aocs_total_size_str')+' '+str_size_unit;
        var aoc_arr;
        if($.sessionStorage().getItem('aoc_id_list')!==null){
            aoc_arr = $.sessionStorage().getItem('aoc_id_list').split(',');
        }
        //購入種類
        var free_flg = false,str_free='',str_scroll='',str_description='';
        var is_redeem  = false;
        // 更新のみの場合に表示を切り替えるためのフラグ
        // SEE #3646
        var is_update  = false;
        var str_redeem = '';

        //再受信のみ
        if($.sessionStorage().getItem('aocs_all_redl_flg')==='true'){
            free_flg = true;
            $('.evt_purchase').text($('#str_btn_redl').text());
            str_description = $('#str_purchased').text();
            $('#sel_header').removeClass('hero').removeClass('ob');
            $('#sel_header p').remove();
            str_scroll = $('#str_scroll').html();
        //引換券
        }else if($.sessionStorage().getItem('redeem_num')!==null){
            free_flg  = true;
            is_redeem = true;
            $('.evt_purchase').text($('#str_btn_dl').text());
            str_description = $('#str_redeem').text();

            // str_description は free_flg の分岐の中で上書き
            // されてしまうので、別の変数にとって置く
            // FIXME: 変数の shadowing 自体を無くす
            str_redeem = $('#str_redeem').text();
        //無料
        }else if($.sessionStorage().getItem('aocs_free_flg')==='true'){
            free_flg = true;
            $('.evt_purchase').text($('#str_btn_dl').text());
            str_description = $('#str_total_price').text();
            str_free = $('#str_free').text();
            $('#sel_header').removeClass('hero').removeClass('ob');
            $('#sel_header p').remove();
            str_scroll = $('#str_scroll').html();
        //更新のみ
        }else if($.sessionStorage().getItem('aoc_id_list')===null && $.sessionStorage().getItem('aoc_update_flg')==='true'){
            //BTS1917 更新のみ時に法令に基づく表示ボタンを非表示にする
            $('#specific_trade_law').hide();

            $('#bfr_message').show();
            $('#bfr_message p').text($('#str_update_confirm').text());
            free_flg  = true;
            is_update = true;
            $('.evt_purchase').text($('#dialog_update').text());
            str_description = $('#str_aoc_update').text();
        }else{
            $('#bfr_message').show();
            if(country === 'JP') {
                $('#bfr_not_cancelable_message').show();
            }
            $('#sel_header').removeClass('hero').removeClass('ob');
            $('#sel_header p').remove();
            str_scroll = $('#str_scroll').html();
        }

        //更新チェック
        var str_include_update = '';
        if($.sessionStorage().getItem('aoc_update_flg')==='true'){
            str_include_update = $('#str_inc_update').text();
        }
        //再受信のみ、無料、更新
        if(free_flg){
            //確認画面
            if (!is_redeem) {
                $('#template_aoc_free').tmpl({
                    'str_description' : str_description,
                    'str_free'             : str_free,
                    'str_size'      : $('#str_total_size').text(),
                    'html_size_data' : html_size_data,
                    'str_include_update'   : str_include_update,
                    'str_scroll'               : str_scroll
                }).appendTo('#reminder_content');
            }
            //再DLと無料、引き換えはアイテムを表示
            if($.sessionStorage().getItem('aocs_all_redl_flg')==='true' ||
               $.sessionStorage().getItem('aocs_free_flg')==='true' ||
               is_redeem){
                $.each(aoc_arr,function(key,value){
                    var str_aoc_name = $.sessionStorage().getItem('aoc_name_'+value);
                    var str_aoc_size = $.sessionStorage().getItem('aoc_size_str_'+value);
                    var aoc_redl_flg = $.sessionStorage().getItem('aoc_redl_flg_'+value);
                    var aoc_free_flg = $.sessionStorage().getItem('aoc_free_flg_'+value);
                    var str_size_unit,html_size_data;
                    //容量単位取得
                    if($.sessionStorage().getItem('aoc_size_unit_'+value)==='GB'){
                        str_size_unit = $('#str_gb').html();
                    }else if($.sessionStorage().getItem('aoc_size_unit_'+value)==='MB'){
                        str_size_unit = $('#str_mb').html();
                    }else if($.sessionStorage().getItem('aoc_size_unit_'+value)==='KB'){
                        str_size_unit = $('#str_kb').html();
                    }
                    html_size_data = str_aoc_size+' '+str_size_unit;
                    var str_description,str_free='';
                    if(aoc_redl_flg==='true'){
                        str_description = $('#str_purchased').text();
                    }else{
                        str_description = $('#str_price').text();
                        str_free = $('#str_free').text();
                    }
                    var detail = $('#template_aoc_detail_free').tmpl({
                        'aoc_title'           : str_aoc_name,
                        'str_description'     : str_description,
                        'str_free'            : str_free,
                        'str_size'            : $('#str_size').text(),
                        'str_redeem'          : str_redeem,
                        'html_size_data'      : html_size_data,
                        'is_redeem'           : is_redeem
                    });
                    if(aoc_free_flg==='true' &&
                      (aoc_redl_flg==='false' || aoc_redl_flg===null) && !is_redeem && !is_update){
                        $('.sel_color_aoc', detail).removeClass('orange');
                    }
                    detail.appendTo('#aoc_detail');
                });
            }
            //確認詳細画面
            $('#template_detail_free').tmpl({
                'str_description' : str_description,
                'is_redeem'       : is_redeem,
                'str_redeem'      : str_redeem,
                'str_free'        : str_free,
                'str_detail'      : $('#str_detail').text()
            }).appendTo('#reminder_content_detail');
            if(!is_update && ($.sessionStorage().getItem('aocs_all_redl_flg')!=='true' ||
                ($.sessionStorage().getItem('aoc_id_list')===null && $.sessionStorage().getItem('aoc_update_flg')==='true'))){
                $('.sel_color').removeClass('orange');
            }
        //購入、更新を含む
        }else{
            var str_aocs_taxin_price = $.sessionStorage().getItem('aocs_taxin_price_str');
            //外税
            if(checkTaxExcluded()){
                //確認画面
                var str_aocs_price_data = $.sessionStorage().getItem('aocs_price_str');
                var str_aocs_tax_data = $.sessionStorage().getItem('aocs_tax_str');
                $('#template_aoc_tax_ex').tmpl({
                    'str_price'          : $('#str_price').text(),
                    'str_price_data'     : str_aocs_price_data,
                    'str_tax'            : $('#str_tax').text(),
                    'str_tax_data'       : str_aocs_tax_data,
                    'str_total'          : $('#str_total').text(),
                    'str_total_data'     : str_aocs_taxin_price,
                    'str_size'           : $('#str_total_size').text(),
                    'html_size_data'     : html_size_data,
                    'str_include_update' : str_include_update,
                    'str_scroll'         : str_scroll
                }).appendTo('#reminder_content');
                //AOC詳細
                $.each(aoc_arr,function(key,value){
                    var str_aoc_name = $.sessionStorage().getItem('aoc_name_'+value);
                    var str_aoc_size = $.sessionStorage().getItem('aoc_size_str_'+value);
                    var aoc_redl_flg = $.sessionStorage().getItem('aoc_redl_flg_'+value);
                    var aoc_free_flg = $.sessionStorage().getItem('aoc_free_flg_'+value);
                    //容量単位取得
                    if($.sessionStorage().getItem('aoc_size_unit_'+value)==='GB'){
                        str_size_unit = $('#str_gb').html();
                    }else if($.sessionStorage().getItem('aoc_size_unit_'+value)==='MB'){
                        str_size_unit = $('#str_mb').html();
                    }else if($.sessionStorage().getItem('aoc_size_unit_'+value)==='KB'){
                        str_size_unit = $('#str_kb').html();
                    }
                    html_size_data = str_aoc_size+' '+str_size_unit;
                    if(aoc_redl_flg==='true'){
                        //再ダウンロード
                        $('#template_aoc_detail_free').tmpl({
                            'aoc_title'            : str_aoc_name,
                            'str_description'     : $('#str_purchased').text(),
                            'str_free'             : str_free,
                            'str_size'             : $('#str_size').text(),
                            'html_size_data'      : html_size_data
                        }).appendTo('#aoc_detail');
                    }else if(aoc_free_flg==='true'){
                        //無料
                        var detail = $('#template_aoc_detail_free').tmpl({
                            'aoc_title'            : str_aoc_name,
                            'str_description'     : $('#str_price').text(),
                            'str_free'             : $('#str_free').text(),
                            'str_size'             : $('#str_size').text(),
                            'html_size_data'      : html_size_data
                        }).appendTo('#aoc_detail');
                        $('.sel_color_aoc', detail).removeClass('orange');
                    }else{
                        var str_aoc_price = $.sessionStorage().getItem('aoc_price_str_'+value);
                        var str_aoc_tax = $.sessionStorage().getItem('aoc_tax_str_'+value);
                        var str_aoc_taxin_price = $.sessionStorage().getItem('aoc_taxin_price_str_'+value);

                        $('#template_aoc_detail_taxex').tmpl({
                            'aoc_title'            : str_aoc_name,
                            'str_price'      : $('#str_price').text(),
                            'str_price_data' : str_aoc_price,
                            'str_tax'        : $('#str_tax').text(),
                            'str_tax_data'   : str_aoc_tax,
                            'str_total'      : $('#str_total').text(),
                            'str_total_data' : str_aoc_taxin_price,
                            'str_size'             : $('#str_size').text(),
                            'html_size_data'        : html_size_data
                        }).appendTo('#aoc_detail');
                    }
                });
                //確認詳細画面
                str_balance_before_data = $.sessionStorage().getItem('current_balance_str');
                str_balance_after_data = $.sessionStorage().getItem('post_balance_str');
                $('#template_detail_taxex').tmpl({
                    'str_balance_before'      : $('#str_balance_before').text(),
                    'str_balance_before_data' : str_balance_before_data,
                    'str_price'               : $('#str_price').text(),
                    'str_price_data'          : str_aocs_price_data,
                    'str_tax'                 : $('#str_tax').text(),
                    'str_tax_data'            : str_aocs_tax_data,
                    'str_total'               : $('#str_total').text(),
                    'str_total_data'          : str_aocs_taxin_price,
                    'str_balance_after'       : $('#str_balance_after').text(),
                    'str_balance_after_data'  : str_balance_after_data,
                    'str_detail'              : $('#str_detail').text()
                }).appendTo('#reminder_content_detail');
            //内税
            }else{
                var price_tax = $.sessionStorage().getItem('aocs_tax');
                var str_price_taxin = '';
                if(!isZeroPrice(price_tax)){
                    //AU表記変更
                    if(country === 'AU' || country === 'NZ'){
                        str_price_taxin = $('#str_price_taxin_AU').text();
                    }else{
                        str_price_taxin = $('#str_price_taxin').text();
                    }
                }
                //確認画面
                $('#template_aoc_taxin').tmpl({
                    'str_price'              : $('#str_total_price').text(),
                    'str_price_taxin'       : str_price_taxin,
                    'str_price_taxin_data' : str_aocs_taxin_price,
                    'str_size'               : $('#str_total_size').text(),
                    'html_size_data'        : html_size_data,
                    'str_include_update'   : str_include_update,
                    'str_scroll'               : str_scroll
                }).appendTo('#reminder_content');
                //AOC詳細
                $.each(aoc_arr,function(key,value){
                    var str_aoc_name = $.sessionStorage().getItem('aoc_name_'+value);
                    var str_aoc_size = $.sessionStorage().getItem('aoc_size_str_'+value);
                    var aoc_redl_flg = $.sessionStorage().getItem('aoc_redl_flg_'+value);
                    var aoc_free_flg = $.sessionStorage().getItem('aoc_free_flg_'+value);
                    var str_size_unit,html_size_data;
                    //容量単位取得
                    if($.sessionStorage().getItem('aoc_size_unit_'+value)==='GB'){
                        str_size_unit = $('#str_gb').html();
                    }else if($.sessionStorage().getItem('aoc_size_unit_'+value)==='MB'){
                        str_size_unit = $('#str_mb').html();
                    }else if($.sessionStorage().getItem('aoc_size_unit_'+value)==='KB'){
                        str_size_unit = $('#str_kb').html();
                    }
                    html_size_data = str_aoc_size+' '+str_size_unit;
                    if(aoc_redl_flg==='true'){
                        //再ダウンロード
                        $('#template_aoc_detail_free').tmpl({
                            'aoc_title'            : str_aoc_name,
                            'str_description'     : $('#str_purchased').text(),
                            'str_free'             : str_free,
                            'str_size'             : $('#str_size').text(),
                            'html_size_data'      : html_size_data
                        }).appendTo('#aoc_detail');
                    }else if(aoc_free_flg==='true'){
                        //無料
                        var detail = $('#template_aoc_detail_free').tmpl({
                            'aoc_title'            : str_aoc_name,
                            'str_description'     : $('#str_price').text(),
                            'str_free'             : $('#str_free').text(),
                            'str_size'             : $('#str_size').text(),
                            'html_size_data'      : html_size_data
                        }).appendTo('#aoc_detail');
                        $('.sel_color_aoc', detail).removeClass('orange');
                    }else{
                        //購入
                        var str_price = $('#str_price').text();
                        var str_price_taxin_data = $.sessionStorage().getItem('aoc_taxin_price_str_'+value);
                        $('#template_aoc_detail_taxin').tmpl({
                            'aoc_title'              : str_aoc_name,
                            'str_price'              : str_price,
                            'str_price_taxin'       : str_price_taxin,
                            'str_price_taxin_data' : str_price_taxin_data,
                            'str_size'               : $('#str_size').text(),
                            'html_size_data'        : html_size_data
                        }).appendTo('#aoc_detail');
                        show_jp_legal_description();
                    }
                });
                //確認詳細画面
                str_balance_before_data = $.sessionStorage().getItem('current_balance_str');
                str_balance_after_data = $.sessionStorage().getItem('post_balance_str');
                $('#template_detail_taxin').tmpl({
                    'str_balance_before'       : $('#str_balance_before').text(),
                    'str_balance_before_data' : str_balance_before_data,
                    'str_price'                 : $('#str_total_price').text(),
                    'str_price_taxin'          : str_price_taxin,
                    'str_price_taxin_data'     : str_aocs_taxin_price,
                    'str_balance_after'        : $('#str_balance_after').text(),
                    'str_balance_after_data'  : str_balance_after_data,
                    'str_detail'                : $('#str_detail').text()
                }).appendTo('#reminder_content_detail');
            }
        }
        if (is_aocinfo_broken) {
            // 壊れた追加コンテンツのタスクがある状態では
            // インストールに必要な容量を隠す SEE #14204
            $('#reminder_content .buy_2pane_r').hide();
        }
        //ページ表示処理
        screen.change('buy02_01');
        lazyload('img.sel_title_img');
        $('.header_common h1').text($('#str_final_confirm').text());

        $.print('seqAOCPurchaseConfirm end');
    }
    //buy02_03 sequence
    function seqAOCPurchase(){
        $.print('seqAOCPurchase start');

        if($.sessionStorage().getItem('buying_title_id')!==null){
            $('html,body').animate({ scrollTop: $('html,body').offset().top }, 0);
            screen.change('buy02_02');
            $('#sel_menu_bar').hide();//メニューバー
            var title_id = $.sessionStorage().getItem('buying_title_id');
            var redeem_num = $.sessionStorage().getItem('redeem_num');
            if($.sessionStorage().getItem('aocs_all_redl_flg')==='true' ||
               ($.sessionStorage().getItem('aoc_id_list')===null && $.sessionStorage().getItem('aoc_update_flg')==='true') ){
                //追加コンテンツ全て再ダウンロード、更新のみ
                seqAOCPurchaseComplete('redl');
                enableHomeButton();
                enablePowerButton();

            } else if(redeem_num!==null) {
                var aoc_id = $.url().param('aoc[]');
                var req_free = {
                    url  : ninjaBase + 'ws/' + country + '/title/' + title_id +'/aocs/!redeem?lang=' + lang,
                    type : 'POST',
                    data : {
                        'card_number' : redeem_num,
                        'aoc[]'       : aoc_id
                    }
                };
                //ajax
                $.getXml(req_free,true)
                    .done(
                    function(xml){
                        var DL_ticket = $(xml).find('ticket_id').text();
                        var tran_id = $(xml).find('transaction_id').text();
                        var integrated_account = $(xml).find('integrated_account').text();

                        var privilege_infos = get_privilege_infos(xml);
                        if (privilege_infos.length > 0) {
                            $.sessionStorage().setItem('privilege_infos_' + tran_id,
                                JSON.stringify(privilege_infos));
                        }


                        $.sessionStorage().removeItem('redeem_num');

                        // #3986 BTS2141 DLタスク登録中の
                        // 予期せぬホームボタン解除の可能性を考慮して
                        // 再度禁止する
                        disableHomeButton();

                        //チケットDL
                        if(isWiiU){
                            var res = wiiuEC.ticketDownloadSync(DL_ticket);
                            processJsxError(res);
                        }
                        // 引き換えでもレシートを表示する refs #9463 #9560
                        seqAOCPurchaseComplete(tran_id, {
                            is_redeem: true,
                            integrated_account: integrated_account
                        });

                        enableHomeButton();
                        enablePowerButton();
                    }
                )
                    .fail(
                    function(xml){
                        initPurchaseInfo();
                        //ホームボタン、ユーザ操作禁止解除
                        enableUserOperation();
                        enableHomeButton();
                        enablePowerButton();
                        var error_code = $(xml.responseText).find('code').text();
                        var error_msg = $(xml.responseText).find('message').text();

                        setErrorHandler(prefixNinja, error_code, error_msg, function(){
                            // FIXME: need to update error handling
                            switch(error_code){
                                case '3051'://3051 ECGS_CONNECTION_FAILURE
                                case '3052'://3052 ECGS_BAD_RESPONSE
                                case '3150'://3150 NEI_TITLE_DISABLE_DOWNLOAD
                                    abortToTop();
                                    break;
                                case '3154'://3154 NEI_TITLE_ALREADY_OWNED
                                    $.alert(error_msg, $('#dialog_msg_ok').text());
                                    abortToBack();
                                    break;
                                case '3101'://3101 NEI_ECARD_GUNIT_REDEEMED
                                case '3103'://3103 NEI_ECARD_GUNIT_REVOKED
                                case '3104'://NEI_ECARD_CASH_UNEXPECTED_STATUS
                                case '3105'://NEI_ECARD_CASH_REDEEMED
                                case '3106'://NEI_ECARD_CASH_INACTIVE
                                case '3107'://NEI_ECARD_CASH_REVOKED
                                case '3108'://NEI_REDEEM_TITLE_NOT_RELEASE
                                case '3110'://NEI_ECARD_CASH_CURRENCY_MISMATCH
                                case '3111'://NEI_ECARD_FOR_NINTENDO_POINT
                                case '6811'://6811 PAS_ACCOUNT_EXPIRED
                                case '6812'://6812 PAS_ACCOUNT_REVOKED
                                case '6813'://6813 PAS_ACCOUNT_NOT_ACTIVATED
                                case '6814'://6814 PAS_ACCOUNT_NOT_USABLE
                                case '6815'://6815 PAS_ACCOUNT_IS_USED_ONCE
                                case '6830'://6830 PAS_INVALID_ECARD
                                case '6831'://6831 PAS_ECARD_COUNTRY_CODE
                                case '6834'://6834 PAS_POS_IF_BUSY
                                case '6835'://6835 PAS_POS_SERVER_BUSY
                                case '6836'://6836 PAS_POS_URL_ERROR
                                case '6837'://6837 PAS_POS_AUTH_ERROR
                                case '6838'://6838 PAS_POS_SERVER_ERROR
                                    abortToBack();
                                    break;
                                default:
                                    abortToBack();
                                    break;
                            }
                        });
                    }
                );

            }else{
                $.print("in seqAOCPurchase normal purchase flow");
                $.print("aocs_price_id: " + $.sessionStorage().getItem('aocs_price_id'));
                $.print("buying_aoc_id_list: " + $.sessionStorage().getItem('buying_aoc_id_list'));

                //新規購入のタイトルをリクエスト
                var req_aoc = {
                    url  : ninjaBase + 'ws/' + country + '/title/' + title_id +'/aocs/!purchase?lang='+lang,
                    type : 'POST',
                    data : {
                        'price_id[]':$.sessionStorage().getItem('aocs_price_id'),
                        'discount_id[]':$.sessionStorage().getItem('aocs_discount_id'),
                        'aoc[]' : $.sessionStorage().getItem('buying_aoc_id_list')
                    },
                    complete : function(){
                        //失敗・成功に関わらず、リクエスト終了後にセッションの残高情報を消去
                        $.sessionStorage().removeItem('balance');
                        $.sessionStorage().removeItem('balance_raw');
                    }
                };
                //ajax
                $.getXml(req_aoc,true)
                    .done(
                    function(xml){
                        var post_balance_str,post_balance,tran_id,integrated_account;
                        var DL_ticket = [];
                        var has_multiple_receipt = $(xml).find('transaction_result').size() > 1;
                        //複数購入 TODO この分岐はtran_idを設定するところだけで十分 他は1件でも複数でも共通
                        if(has_multiple_receipt){
                            post_balance_str = $(xml).find('transaction_result:last').children('post_balance').children('amount').text();
                            post_balance = $(xml).find('transaction_result:last').children('post_balance').children('raw_value').text();
                            tran_id = $(xml).find('transaction_result:last').children('transaction_id').text();
                            integrated_account = $(xml).find('transaction_result:last').children('integrated_account').text();
                            $(xml).find('transaction_result').each(function(){
                                DL_ticket.push($(this).find('ticket_id').text());
                            });
                        }else{
                            post_balance_str = $(xml).find('post_balance').children('amount').text();
                            post_balance = $(xml).find('post_balance').children('raw_value').text();
                            tran_id = $(xml).find('transaction_id').text();
                            integrated_account = $(xml).find('integrated_account').text();
                            DL_ticket.push($(xml).find('ticket_id').text());
                        }

                        var privilege_infos = get_privilege_infos(xml);
                        if (privilege_infos.length > 0) {
                            $.sessionStorage().setItem('privilege_infos_' + tran_id,
                                JSON.stringify(privilege_infos));
                        }

                        //残高更新
                        $('#balance').text(post_balance_str);
                        $.sessionStorage().setItem('balance',post_balance_str);
                        $.sessionStorage().setItem('balance_raw',post_balance);


                        // #3986 BTS2141 DLタスク登録中の
                        // 予期せぬホームボタン解除の可能性を考慮して
                        // 再度禁止する
                        disableHomeButton();

                        //チケットDL TODO 同じチケットのsyncを複数回呼ぶことがあると思うが非効率？
                        if(isWiiU){
                            for (var i=0; i<DL_ticket.length; i++) {
                                var res = wiiuEC.ticketDownloadSync(DL_ticket[i]);
                                processJsxError(res);
                            }
                        }
                        seqAOCPurchaseComplete(tran_id, {
                            has_multiple_receipt: has_multiple_receipt,
                            integrated_account: integrated_account
                        });

                        enableHomeButton();
                        enablePowerButton();
                    }
                )
                    .fail(
                    function(xml){
                        //ホームボタン、ユーザ操作禁止解除
                        enableUserOperation();
                        enableHomeButton();
                        enablePowerButton();
                        var error_code = $(xml.responseText).find('code').text();
                        var error_msg = $(xml.responseText).find('message').text();
                        setErrorHandler(prefixNinja, error_code, error_msg, function(status){
                            var init_flg = true;
                            switch(error_code){
                                case '3021': //NEI_TITLE_NOT_EXIST
                                case '3026'://3026 NEI_AOC_NOT_EXIST
                                    abortToBack();
                                    break;
                                case '3052'://3052 ECGS_BAD_RESPONSE
                                    abortToTop();
                                    break;
                                case '3053'://3053 ECGS_CONNECTION_FAILURE
                                    abortToTop();
                                    break;
                                case '3122'://3122 NEI_TAX_LOCATION_NOT_FOUND
                                    // 3124が返ってくるはずなので異常扱いにする
                                    abortToTop();
                                    break;
                                case '3123': //NEI_ACCOUNT_HAS_NO_TAX_LOCATION_ID
                                    abortToBack();
                                    break;
                                case '3124'://3124 NEI_INVALID_TAX_LOCATION_ID
                                    //住所設定画面へ遷移
                                    if(status===ERROR_NOT_PROCESSED) {
                                    	// FIXME 1.5 NUPの時にエラー処理を再検討すること
                                    	// US/CA以外の国で、自動でtaxLocationIdを更新する処理はprepurchase_infoにしかないので
                                    	// purchaseの際はJP等でも3124が返ってくる。
                                    	if(country !== 'US' && country !== 'CA') {
                                    	    $.showError(errorCodeRetriable);
                                    		abortToBack();
                                            break;
                                        }

                                        var result = $.confirm(error_msg, $('#dialog_back').text(), $('#dialog_msg_ok').text());
                                        if(result) {
                                            // 住所設定へ
                                            location.replace('legal07_02.html?type=aoc'+
                                                '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                                '&buying_section=addr'+
                                                '&aoc[]='+ $.sessionStorage().getItem('aoc_id_list'));
                                            init_flg = false;
                                        } else {
                                            // やめる
                                            abortToBack();
                                        }
                                    } else {
                                        abortToTop();
                                    }
                                    break;
                                case '3125': // NEI_TAX_LOCATION_ID_CHANGED (#10020)
                                    abortToBack();
                                    break;
                                case '3150'://3150 NEI_TITLE_DISABLE_DOWNLOAD
                                    abortToTop();
                                    break;
                                case '3151'://3151 NEI_NO_ONLINE_PRICE
                                    abortToTop();
                                    break;
                                case '3152'://NEI_ONLINE_PRICE_CHANGED
                                    abortToBack();
                                    break;
                                case '3153'://3153 NEI_All_ITEM_PURCHASE_NOT_COMPLETED
                                    //ソフト情報へ遷移
                                    location.replace('./#title?title='+$.sessionStorage().getItem('buying_title_id'));
                                    break;
                                case '3154'://3154 NEI_TITLE_ALREADY_OWNED
                                    $.alert(error_msg, $('#dialog_msg_ok').text());
                                    abortToBack();
                                    break;
                                case '6810': //PAS_NOT_ENOUGH_MONEY
                                    abortToBack();
                                    break;
                                case '7534'://7534 ECS_VCSPAS_INVALID_TAX_LOCATION_ID
                                    // 3124が返ってくるはずなので異常扱いにする
                                    abortToTop();
                                    break;
                                default:
                                    abortToTop();
                                    break;
                            }
                            if(init_flg) initPurchaseInfo();
                        });
                    }
                );
            }
        }else{
            $.showError(errorCodeRetriable);
            abortToBack();
        }

        $.print('seqAOCPurchase end');
    }
    //購入完了後
    function seqAOCPurchaseComplete(tran_id, option){
        $.print('seqAOCPurchaseComplete start');

        var has_registered_task = '';
        option = option || {};

        // refs #7604
        $.sessionStorage().removeItem('aoc_editing');
    	if(isWiiU){

            //NUPチェック
            if (isNUPCheckRequired()) {
                var result = wiiuEC.needsSystemUpdate();
                processJsxError(result);
                if (result.update) {
                    $.print("System Update is needed.");

                    var doUpdate = $.confirm($('#dialog_msg_update').text(), $('#dialog_back').text(), $('#dialog_update').text());

                    if(doUpdate) {
                        wiiuBrowser.jumpToUpdate();
                    } else {
                        wiiuBrowser.jumpToHomeButtonMenu();
                    }
                }
            }

		    //ダウンロードタスク取得
            var res_task = wiiuEC.getDownloadTaskListState();
            processJsxError(res_task);

            var task_broken = '';

            if (is_aocinfo_broken) {
                $.print('registerAocDownloadTask skipped');
                task_broken = '&task_broken=true';
            } else if(res_task.remainingTaskNum > 0){
                //DLタスク登録
                var dl_obj = JSON.parse($.sessionStorage().getItem('aoc_dl_items'));
                if (dl_obj.length > 0) {
                    has_registered_task = '&has_registered_task=true';
                }
                for(var i=0; i<dl_obj.length; i++){
                    var json_str = '{"indexes":[' + dl_obj[i].content_index + ']}';
                    var res_dl_task = wiiuEC.registerAocDownloadTask(String(dl_obj[i].title_id),String(dl_obj[i].title_version),json_str);
                    processJsxError(res_dl_task);

                    // registerAocDownloadTask 時にタスクが壊れている事が
                    // 分かったら、完了画面にそれを通知してメッセージを変える
                    // SEE #10890
                    if (res_dl_task &&
                        res_dl_task.error &&
                        (res_dl_task.error.code === 1050606 || res_dl_task.error.code === 1114640)) {
                        task_broken = '&task_broken=true';
                    }
                }
                //ダウンロードタスクが一杯
            }else{
                $.alert($('#dialog_msg_full').text(),$('#dialog_msg_ok').text());
            }
        }

        //完了ページへ
        var nsuid = $.sessionStorage().getItem('buying_title_id');
        var return_url = 'data03_01.html?title=' + nsuid;
        var is_integrated_account = option.integrated_account
            ? '&integrated_account=' + option.integrated_account : '';
        var is_redeem = '&is_redeem=true';

        // backbutton の仕様を実現するため historyBack で元の
        // ページの戻すが、戻されたページの on pageshow persisted
        // で「購入から戻って来た時だけの処理」を行う必要があります。
        // 以下はそれを判別するための目印。
        // SEE #3094
        $.sessionStorage().setItem('returned_from_purchase', "1");

        if($.sessionStorage().getItem('aocs_all_redl_flg')==='true' ||
            ($.sessionStorage().getItem('aoc_id_list')===null && $.sessionStorage().getItem('aoc_update_flg')==='true') ){

            //再ダウンロード、更新のみ
            location.replace(
                'buy02_03.html'
                + '?nsuid=' + nsuid
                + '&type=noreceipt'
                + has_registered_task
                + task_broken);
        }else if(option.is_redeem) {
            location.replace('buy02_03.html?referrer=' + encodeURIComponent('./#top') +
                '&tran_id=' + tran_id + has_registered_task + task_broken + is_integrated_account + is_redeem);
        }else if(!option.has_multiple_receipt){
            //単一購入
            location.replace('buy02_03.html?nsuid=' + nsuid +
                '&tran_id=' + tran_id + has_registered_task + task_broken + is_integrated_account);
        }else{
            //複数購入
            location.replace('buy02_03.html?nsuid=' + nsuid +
                '&tran_id=' + tran_id + has_registered_task + task_broken + is_integrated_account +
                '&has_multiple_receipt=true');
        }
        //initialize session storage
        initPurchaseInfo();

        $.print('seqAOCPurchaseComplete end');
    }

    function seqTicketCheckRating(){
        if($.sessionStorage().getItem('buying_title_id')!==null){
            var rating_flg = ($.sessionStorage().getItem('rating_flg')==='true')? true: false;
            var rating_age = parseInt($.sessionStorage().getItem('rating_age'),10);
            var rating_sys = parseInt($.sessionStorage().getItem('rating_sys'),10);
            var rating_id = parseInt($.sessionStorage().getItem('rating_id'),10);
            var notes_flg = ($.sessionStorage().getItem('notes_flg')==='true')? true: false;
            var ticket_id = $.sessionStorage().getItem('ticket_id');
            var contract_id = $.url().param('contract');

            // 継続課金（buying_type=auto_billing）でも
            // この関数を呼んでいるため出しわけ
            if (ticket_id) {
            } else if(contract_id) {
            }

            //レーティング情報取得
            var title_id = $.sessionStorage().getItem('buying_title_id');

            //期間券ではAGEゲートをスキップする
            var res_parental_eshop,res_parental_play,url = $.url();
            if($.sessionStorage().getItem('ticket_free_flg')==='true'
                || $.sessionStorage().getItem('redeem_num')!==null){
                //無料時・引き換え時はペアレンタルチェックをスキップ
                res_parental_eshop = true;
            }else{
                //ペアレンタルコントロール(残高)
                res_parental_eshop = checkParentalControlForEShop();
            }
            if(!res_parental_eshop){
                location.replace('legal01_01.html?seq='+encodeURIComponent(url.attr('file')+'?'+url.attr('query'))+'#eshop');
            }else{
                //ペアレンタルコントロール(年齢)
                if(rating_flg){
                    res_parental_play = checkParentalControlForGamePlay(rating_age);
                }else{
                    res_parental_play = true;
                }
                if(!res_parental_play){
                    location.replace('legal01_01.html?seq='+encodeURIComponent(url.attr('file')+'?'+url.attr('query'))+'#gameplay');
                }else{
                    $('body').removeClass('display_cover');
                    if(rating_flg || $('#buy_about_this p').size() >0){
                        //ページ表示処理
                        screen.change('buy01_01');
                        $('.header_common h1').text($('#str_pre_confirm').text());
                    }else{
                        $.sessionStorage().setItem('buying_seq_rating','true');
                        sequenceHandler($.sessionStorage().getItem('buying_type'));
                    }
                }
            }
        }else{
            $.showError(errorCodeRetriable);
            abortToBack();
        }
    }
    function seqTicketAttention(){
        //ページ表示処理
        var str_attention = $('#str_ticket_attention').html().replace(/%{title}/g,$.sessionStorage().getItem('title_name'));
        $('#sel_attention').html(str_attention);
        screen.change('buy01_07');
        $('.header_common h1').text($('#str_pre_confirm').text());
        //ページスクロール制御
        $('#sb_cont').addClass('scroll_escape');
    }
    //buy01_03 sequence
    function seqTicketCheckBalance(){
        if ($.sessionStorage().getItem('redeem_num')!==null) {
            $.sessionStorage().setItem('buying_seq_balance', 'true');
            sequenceHandler($.sessionStorage().getItem('buying_type'));
            return;
        }
        //残高チェック
        var balance_flg = false;
        var bal_amount;
        var amount;
        //期間券価格取得
        getTicketPrice($.sessionStorage().getItem('buying_title_id'),$.sessionStorage().getItem('ticket_id'));
        amount = $.sessionStorage().getItem('ticket_taxin_price_str');
        bal_amount = $.sessionStorage().getItem('current_balance_str');
        //check balance
        if(isPositivePrice($.sessionStorage().getItem('post_balance'))){
            $.sessionStorage().setItem('buying_seq_balance','true');
            sequenceHandler($.sessionStorage().getItem('buying_type'));
        }else{
            //残高、ソフト金額取得
            $('#buy01_03 dd:eq(0)').text(bal_amount);
            $('#buy01_03 dd:eq(1)').text(amount);
            var post_raw = priceAbs($.sessionStorage().getItem('post_balance'));
            $.sessionStorage().setItem('buying_shortfall',post_raw);
            //クレジットカードチェック
            if(checkCCard()){
                //クレカボタン表示
                $('#evt_ccard').show();
            }
            //NFC利用可能か
            if(isNfcAvailable()){
                //電子マネーボタン表示
                $('#evt_iccard').show();
            }
            //資金決済法ボタン出し分け
            if($.sessionStorage().getItem('legal_payment_message_required') === 'true'){
                $('#sel_settlement_law').show();
            }
            //ページ表示処理
            screen.change('buy01_03');
            $('.header_common h1').text($('#str_pre_confirm').text());
            //ページスクロール制御
            $('#sb_cont').addClass('scroll_escape');
        }
    }
    //buy02_01 sequence
    function seqTicketPurchaseConfirm(){
        //特商法ボタン出し分け
        if($.sessionStorage().getItem('legal_business_message_required') === 'true'){
            $('#specific_trade_law').show();
        }
        var str_balance_before_data,str_balance_after_data,str_title,url_icon;
        str_title = $.sessionStorage().getItem('title_name');
        url_icon = $.sessionStorage().getItem('title_icon');

        $('h2.sel_title_name').html(str_title);
        $('img.sel_title_img').data('original',url_icon);
        var str_ticket_name = $.sessionStorage().getItem('ticket_name');
        var str_ticket_taxin_price = $.sessionStorage().getItem('ticket_taxin_price_str');
        //購入種類
        var free_flg=false,str_free='',str_description='',is_redeem=false;
        if($.sessionStorage().getItem('ticket_free_flg')==='true'){
            free_flg = true;
            str_free = $('#str_free').text();
            $('.evt_purchase').text($('#str_btn_dl').text());
        }

        str_description = $('#str_total_price').text();

        // 引換券
        if($.sessionStorage().getItem('redeem_num')!==null){
            free_flg = true;
            is_redeem = true;
            $('.evt_purchase').text($('#str_btn_dl').text());

            //#3872 無料の引換券も存在するため上書き
            str_free = '';
            str_description = $('#str_redeem').text();
        }

        // 「購入する」ボタンを押すと、お支払いが確定します。
        // 無料の場合は出さない。SEE #3832
        if (!free_flg) {
            $('#bfr_message').show();
            if(country === 'JP') {
                $('#bfr_not_cancelable_message').show();
            }
        }

        if(free_flg){
            //確認画面
            $('#template_ticket_free').tmpl({
                'str_ticket_title'   : str_ticket_name,
                'str_description'    : str_description,
                'str_free'           : str_free
            }).appendTo('#reminder_content');
            //確認詳細画面
            $('#template_detail_free').tmpl({
                'str_description' : str_description,
                'str_free'        : str_free,
                'str_detail'      : $('#str_detail').text()
            }).appendTo('#reminder_content_detail');
            if(!is_redeem){
                $('.sel_color').removeClass('orange');
            }
        }else{
            //外税
            if(checkTaxExcluded()){
                //確認画面
                var str_ticket_price = $.sessionStorage().getItem('ticket_price_str');
                var str_ticket_tax = $.sessionStorage().getItem('ticket_tax_str');
                $('#template_ticket_taxex').tmpl({
                    'str_ticket_title' : str_ticket_name,
                    'str_price'         : $('#str_price').text(),
                    'str_price_data'   : str_ticket_price,
                    'str_tax'           : $('#str_tax').text(),
                    'str_tax_data'     : str_ticket_tax,
                    'str_total'         : $('#str_total').text(),
                    'str_total_data'   : str_ticket_taxin_price
                }).appendTo('#reminder_content');
                //確認詳細画面
                str_balance_before_data = $.sessionStorage().getItem('current_balance_str');
                str_balance_after_data = $.sessionStorage().getItem('post_balance_str');
                $('#template_detail_taxex').tmpl({
                    'str_balance_before'      : $('#str_balance_before').text(),
                    'str_balance_before_data' : str_balance_before_data,
                    'str_price'               : $('#str_price').text(),
                    'str_price_data'          : str_ticket_price,
                    'str_tax'                 : $('#str_tax').text(),
                    'str_tax_data'            : str_ticket_tax,
                    'str_total'               : $('#str_total').text(),
                    'str_total_data'          : str_ticket_taxin_price,
                    'str_balance_after'       : $('#str_balance_after').text(),
                    'str_balance_after_data'  : str_balance_after_data,
                    'str_detail'              : $('#str_detail').text()
                }).appendTo('#reminder_content_detail');
                //内税
            }else{
                var price_tax = $.sessionStorage().getItem('ticket_tax');
                var str_price_taxin = '';
                if(!isZeroPrice(price_tax)){
                    //AU表記変更
                    if(country === 'AU' || country === 'NZ'){
                        str_price_taxin = $('#str_price_taxin_AU').text();
                    }else{
                        str_price_taxin = $('#str_price_taxin').text();
                    }
                }
                //確認画面
                $('#template_ticket_taxin').tmpl({
                    'str_ticket_title'    : str_ticket_name,
                    'str_price'            : $('#str_total_price').text(),
                    'str_price_taxin'      : str_price_taxin,
                    'str_price_taxin_data' : str_ticket_taxin_price
                }).appendTo('#reminder_content');
                //確認詳細画面
                str_balance_before_data = $.sessionStorage().getItem('current_balance_str');
                str_balance_after_data = $.sessionStorage().getItem('post_balance_str');
                $('#template_detail_taxin').tmpl({
                    'str_balance_before'      : $('#str_balance_before').text(),
                    'str_balance_before_data' : str_balance_before_data,
                    'str_price'               : $('#str_total_price').text(),
                    'str_price_taxin'         : str_price_taxin,
                    'str_price_taxin_data'    : str_ticket_taxin_price,
                    'str_balance_after'       : $('#str_balance_after').text(),
                    'str_balance_after_data'  : str_balance_after_data,
                    'str_detail'              : $('#str_detail').text()
                }).appendTo('#reminder_content_detail');
                show_jp_legal_description();
            }
        }
        //ページ表示処理
        screen.change('buy02_01');
        lazyload('img.sel_title_img');
        $('.header_common h1').text($('#str_final_confirm').text());
    }
    //buy02_03 sequence
    function seqTicketPurchase(){
        if($.sessionStorage().getItem('buying_title_id')!==null){
            $('html,body').animate({ scrollTop: $('html,body').offset().top }, 0);
            screen.change('buy02_02');
            $('#sel_menu_bar').hide();//メニューバー
            var title_id = $.sessionStorage().getItem('buying_title_id');
            var redeem_num = $.sessionStorage().getItem('redeem_num');

            if (redeem_num !== null) {
                var ticket_nsuid = $.url().param('ticket');
                var req_free = {
                    url  : ninjaBase + 'ws/' + country + '/title/' + title_id +'/ticket/!redeem?lang=' + lang,
                    type : 'POST',
                    data : {
                        'card_number' : redeem_num,
                        'ticket'      : ticket_nsuid
                    }
                };
                //ajax
                $.getXml(req_free,true)
                    .done(
                    function(xml){
                        var DL_ticket = $(xml).find('ticket_id').text();
                        var tran_id = $(xml).find('transaction_id').text();
                        var integrated_account = $(xml).find('integrated_account').text();

                        var privilege_infos = get_privilege_infos(xml);
                        if (privilege_infos.length > 0) {
                            $.sessionStorage().setItem('privilege_infos_' + tran_id,
                                JSON.stringify(privilege_infos));
                        }


                        $.sessionStorage().removeItem('redeem_num');
                        //チケットDL
                        if(isWiiU){
                            var res = wiiuEC.ticketDownloadSync(DL_ticket);
                            processJsxError(res);
                        }

                        enableHomeButton();
                        enablePowerButton();

                        var is_integrated_account = integrated_account
                            ? '&integrated_account=' + integrated_account : '';
                        location.replace('buy02_03.html?type=ticket&is_redeem=true'
                            + '&tran_id=' + tran_id + '&referrer='
                            + encodeURIComponent('./#top') + is_integrated_account);
                    }
                )
                    .fail(
                    function(xml){
                        initPurchaseInfo();
                        //ホームボタン、ユーザ操作禁止解除
                        enableUserOperation();
                        enableHomeButton();
                        enablePowerButton();
                        var error_code = $(xml.responseText).find('code').text();
                        var error_msg = $(xml.responseText).find('message').text();

                        setErrorHandler(prefixNinja, error_code, error_msg, function(){
                            // FIXME: need to update error handling
                            switch(error_code){
                                case '3051'://3051 ECGS_CONNECTION_FAILURE
                                case '3052'://3052 ECGS_BAD_RESPONSE
                                case '3150'://3150 NEI_TITLE_DISABLE_DOWNLOAD
                                    abortToTop();
                                    break;
                                case '3154'://3154 NEI_TITLE_ALREADY_OWNED
                                    $.alert(error_msg, $('#dialog_msg_ok').text());
                                    abortToBack();
                                    break;
                                case '3155'://3155 NEI_INITIAL_PURCHASE_ONLY
                                    $.showError(prefixNinja + error_code, error_msg);
                                    abortToBack();
                                    break;
                                case '3101'://3101 NEI_ECARD_GUNIT_REDEEMED
                                case '3103'://3103 NEI_ECARD_GUNIT_REVOKED
                                case '3104'://NEI_ECARD_CASH_UNEXPECTED_STATUS
                                case '3105'://NEI_ECARD_CASH_REDEEMED
                                case '3106'://NEI_ECARD_CASH_INACTIVE
                                case '3107'://NEI_ECARD_CASH_REVOKED
                                case '3108'://NEI_REDEEM_TITLE_NOT_RELEASE
                                case '3110'://NEI_ECARD_CASH_CURRENCY_MISMATCH
                                case '3111'://NEI_ECARD_FOR_NINTENDO_POINT
                                case '6811'://6811 PAS_ACCOUNT_EXPIRED
                                case '6812'://6812 PAS_ACCOUNT_REVOKED
                                case '6813'://6813 PAS_ACCOUNT_NOT_ACTIVATED
                                case '6814'://6814 PAS_ACCOUNT_NOT_USABLE
                                case '6815'://6815 PAS_ACCOUNT_IS_USED_ONCE
                                case '6830'://6830 PAS_INVALID_ECARD
                                case '6831'://6831 PAS_ECARD_COUNTRY_CODE
                                case '6834'://6834 PAS_POS_IF_BUSY
                                case '6835'://6835 PAS_POS_SERVER_BUSY
                                case '6836'://6836 PAS_POS_URL_ERROR
                                case '6837'://6837 PAS_POS_AUTH_ERROR
                                case '6838'://6838 PAS_POS_SERVER_ERROR
                                    abortToBack();
                                    break;
                                default:
                                    abortToBack();
                                    break;
                            }
                        });
                    }
                );

            } else {

            var price_param = {};
            if ($.sessionStorage().getItem('ticket_discount_price_id') !== null) {
                price_param = {
                    price_id:    $.sessionStorage().getItem('ticket_regular_price_id'),
                    discount_id: $.sessionStorage().getItem('ticket_discount_price_id')
                };
            } else {
                price_param = {
                    price_id: $.sessionStorage().getItem('ticket_price_id')
                };
            }

            var req_ticket = {
                url  : ninjaBase + 'ws/' + country + '/title/' + title_id +'/ticket/'+ $.sessionStorage().getItem('ticket_id') +'/!purchase?lang='+lang,
                type : 'POST',
                data : price_param,
                complete : function(){
                    //失敗・成功に関わらず、リクエスト終了後にセッションの残高情報を消去
                    $.sessionStorage().removeItem('balance');
                    $.sessionStorage().removeItem('balance_raw');
                }
            };
            //ajax
            $.getXml(req_ticket,true)
                .done(
                function(xml){

                    //メッセージ変更
                    var post_balance_str = $(xml).find('post_balance').children('amount').text();
                    var post_balance = $(xml).find('post_balance').children('raw_value').text();
                    var tran_id = $(xml).find('transaction_id').text();
                    var integrated_account = $(xml).find('integrated_account').text();
                    var privilege_infos = get_privilege_infos(xml);
                    if (privilege_infos.length > 0) {
                        $.sessionStorage().setItem('privilege_infos_' + tran_id,
                            JSON.stringify(privilege_infos));
                    }

                    //残高更新
                    $('#balance').text(post_balance_str);
                    $.sessionStorage().setItem('balance',post_balance_str);
                    $.sessionStorage().setItem('balance_raw',post_balance);

                    //完了ページへ
                    var nsuid = $.sessionStorage().getItem('buying_title_id');
                    var is_integrated_account = integrated_account
                        ? '&integrated_account=' + integrated_account : '';
                    //initialize session storage
                    initPurchaseInfo();

                    enableHomeButton();
                    enablePowerButton();

                    location.replace('buy02_03.html?type=ticket&tran_id='+tran_id+is_integrated_account);
                }
            )
                .fail(
                function(xml){
                    enableUserOperation();
                    enableHomeButton();
                    enablePowerButton();
                    var error_code = $(xml.responseText).find('code').text();
                    var error_msg = $(xml.responseText).find('message').text();
                    setErrorHandler(prefixNinja, error_code, error_msg, function(status){
                        var init_flg = true;
                        switch(error_code){
                            case '3021': //NEI_TITLE_NOT_EXIST
                            case '3025'://3025 NEI_DATA_TITLE_NOT_EXIST
                                abortToBack();
                                break;
                            case '3027'://3027 NEI_TICKET_NOT_EXIST
                                abortToBack();
                                break;
                            case '3052'://3052 ECGS_BAD_RESPONSE
                                abortToTop();
                                break;
                            case '3053'://3053 ECGS_CONNECTION_FAILURE
                                abortToTop();
                                break;
                            case '3122'://3122 NEI_TAX_LOCATION_NOT_FOUND
                                // 3124が返ってくるはずなので異常扱いにする
                                abortToTop();
                                break;
                            case '3124'://3124 NEI_INVALID_TAX_LOCATION_ID
                                //住所設定画面へ遷移
                                if(status===ERROR_NOT_PROCESSED) {
                                    // FIXME 1.5 NUPの時にエラー処理を再検討すること
                                	// US/CA以外の国で、自動でtaxLocationIdを更新する処理はprepurchase_infoにしかないので
                                	// purchaseの際はJP等でも3124が返ってくる。
                                	if(country !== 'US' && country !== 'CA') {
                                	    $.showError(errorCodeRetriable);
                                		abortToBack();
                                        break;
                                    }

                                    var result = $.confirm(error_msg, $('#dialog_back').text(), $('#dialog_msg_ok').text());
                                    if(result) {
                                        // 住所設定へ
                                        location.replace('legal07_02.html?type=ticket'+
                                            '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                            '&buying_section=addr'+
                                            '&ticket='+ $.sessionStorage().getItem('ticket_id'));
                                        init_flg = false;
                                    } else {
                                        // やめる
                                        abortToBack();
                                    }
                                } else {
                                    abortToTop();
                                }
                                break;
                            case '3125': // NEI_TAX_LOCATION_ID_CHANGED (#10020)
                                abortToBack();
                                break;
                            case '3151'://3151 NEI_NO_ONLINE_PRICE
                                abortToTop();
                                break;
                            case '3152': //NEI_ONLINE_PRICE_CHANGED
                                abortToBack();
                                break;
                            case '3154'://3154 NEI_TITLE_ALREADY_OWNED
                                $.alert(error_msg, $('#dialog_msg_ok').text());
                                abortToBack();
                                break;
                            case '3155'://3155 NEI_INITIAL_PURCHASE_ONLY
                                $.showError(prefixNinja + error_code, error_msg);
                                abortToBack();
                                break;
                            case '6810': //PAS_NOT_ENOUGH_MONEY
                                abortToBack();
                                break;
                            case '7534'://7534 ECS_VCSPAS_INVALID_TAX_LOCATION_ID
                                // 3124が返ってくるはずなので異常扱いにする
                                abortToTop();
                                break;
                            default:
                                abortToTop();
                                break;
                        }
                        if(init_flg) initPurchaseInfo();
                    });
                }
            );

            }
        }else{
            $.showError(errorCodeRetriable);
            abortToBack();
        }
    }
    function seqDemoCheckRating(){
        if($.sessionStorage().getItem('demo_id')!==null){
            var rating_flg = ($.sessionStorage().getItem('rating_flg')==='true')? true: false;
            var rating_age = parseInt($.sessionStorage().getItem('rating_age'),10);
            var rating_sys = parseInt($.sessionStorage().getItem('rating_sys'),10);
            var rating_id = parseInt($.sessionStorage().getItem('rating_id'),10);


            //レーティング情報取得
            var demo_id = $.sessionStorage().getItem('demo_id');
            //AGEゲート
            var res_age;
            if(rating_flg){
                //TODO 引換の引数追加
                if($.sessionStorage().getItem('title_redl_flg')==='true'){
                    res_age = checkAgeGate(2,rating_sys,rating_age,title_id);
                }else{
                    res_age = checkAgeGate(1,rating_sys,rating_age,title_id);
                }
            }else{
                res_age = true;
            }
            if(!res_age){
                $.alert($('#dialog_msg_age').text(),$('#dialog_msg_ok').text());
                abortToBack();
            }else{
                var res_parental_play,url = $.url();
                //ペアレンタルコントロール(年齢)
                if(rating_flg){
                    res_parental_play = checkParentalControlForGamePlay(rating_age);
                }else{
                    res_parental_play = true;
                }
                if(!res_parental_play){
                    location.replace('legal01_01.html?seq='+encodeURIComponent(url.attr('file')+'?'+url.attr('query'))+'#gameplay');
                }else{
                    //本体にDL済みかチェック
                    if($.sessionStorage().getItem('title_redl_flg')==='false'){
                        //OKボタンより遷移元へ
                        $.alert($('#dialog_msg_DL').text(),$('#dialog_msg_ok').text());
                        abortToBack();
                        return;
                    }else if($.sessionStorage().getItem('title_redl_flg')==='true'){
                        //再受信ボタンより続行
                        if(!isTitleOwnedBySelf(demo_id)){ //体験版を自分以外が所有している場合は確認
                            var res = $.confirm($('#dialog_msg_reDL').text(),$('#dialog_back').text(),$('#dialog_msg_reDL_ok').text());
                            if(!res){
                                abortToBack();
                                return;
                            }
                        }
                    }
                    $('body').removeClass('display_cover');
                    if(rating_flg){
                        //ページ表示処理
                        screen.change('buy01_01');
                        $('.header_common h1').text($('#str_pre_confirm').text());
                    }else{
                        $.sessionStorage().setItem('buying_seq_rating','true');
                        sequenceHandler($.sessionStorage().getItem('buying_type'));
                    }
                }
            }

        }else{
            $.showError(errorCodeRetriable);
            abortToBack();
        }
    }
    function seqDemoCheckSize(){
        //空き容量チェック
        if($.sessionStorage().getItem('size_over_flg')==='true'){
            //タイトル情報
            var str_title = $.sessionStorage().getItem('demo_name');
            var url_icon = $.sessionStorage().getItem('demo_icon');
            var str_size_info,str_size_unit,str_media_info,media_type;
            //容量単位取得
            if($.sessionStorage().getItem('demo_size_unit')==='GB'){
                str_size_unit = $('#str_gb').html();
            }else if($.sessionStorage().getItem('demo_size_unit')==='MB'){
                str_size_unit = $('#str_mb').html();
            }else if($.sessionStorage().getItem('demo_size_unit')==='KB'){
                str_size_unit = $('#str_kb').html();
            }
            str_size_info = $('#str_install').html().replace('%{0}',$.sessionStorage().getItem('demo_size_str')+' '+str_size_unit);
            var demo_dl_media = $.sessionStorage().getItem('demo_dl_media');
            if (demo_dl_media === 'NAND') {
                media_type = $('#str_media_nand').html();
            }else{
                media_type = $('#str_media_usb').html();
            }
            str_media_info = demo_dl_media
                ? $('#str_media').html().replace('%{s}',media_type)
                : '';

            $('.sel_title_name').html(str_title);
            $('.sel_title_img').attr('src',url_icon);
            $('#sel_media').html(str_media_info);
            $('#sel_title_size').html(str_size_info);

            //ページ表示処理
            screen.change('buy01_02');
            $('.header_common h1').text($('#str_pre_confirm').text());
        }else{
            $.sessionStorage().setItem('buying_seq_size','true');
            sequenceHandler($.sessionStorage().getItem('buying_type'));
        }
    }
    //buy02_01 sequence
    function seqDemoPurchaseConfirm(){
        //特商法ボタン出し分け
        if($.sessionStorage().getItem('legal_business_message_required') === 'true'){
            $('#specific_trade_law').show();
        }
        var str_balance_before_data,str_balance_after_data,str_title,url_icon;
        str_title = $.sessionStorage().getItem('demo_name');
        url_icon = $.sessionStorage().getItem('demo_icon');

        $('h2.sel_title_name').html(str_title);
        $('img.sel_title_img').data('original',url_icon);
        var str_size_unit,html_size_data;
        //容量単位取得
        if($.sessionStorage().getItem('demo_display_size_unit')==='GB'){
            str_size_unit = $('#str_gb').html();
        }else if($.sessionStorage().getItem('demo_display_size_unit')==='MB'){
            str_size_unit = $('#str_mb').html();
        }else if($.sessionStorage().getItem('demo_display_size_unit')==='KB'){
            str_size_unit = $('#str_kb').html();
        }
        html_size_data = $.sessionStorage().getItem('demo_display_size_str')+' '+str_size_unit;
        //購入種類
        var str_description,str_free='';
        //再受信
        if($.sessionStorage().getItem('title_redl_flg')==='true'){
            $('.evt_purchase').text($('#str_btn_redl').text());
            str_description = $('#str_demo').text();
        }else{
            $('.evt_purchase').text($('#str_btn_dl').text());
            str_description = $('#str_demo').text();
        }
        //確認画面
        $('#template_title_free').tmpl({
            'str_description' : str_description,
            'str_free'         : str_free,
            'str_size'      : $('#str_size').text(),
            'html_size_data' : html_size_data
        }).appendTo('#reminder_content');

        //確認詳細画面
        $('#template_detail_free').tmpl({
            'str_description' : str_description,
            'str_free'         : str_free,
            'str_detail'    : $('#str_detail').text()
        }).appendTo('#reminder_content_detail');
        //ページ表示処理
        screen.change('buy02_01');
        lazyload('img.sel_title_img');
        $('.header_common h1').text($('#str_final_confirm').text());
    }
    //buy02_03 sequence
    function seqDemoPurchase(){
        if($.sessionStorage().getItem('buying_title_id')!==null){
            $('html,body').animate({ scrollTop: $('html,body').offset().top }, 0);
            screen.change('buy02_02');
            $('#sel_menu_bar').hide();//メニューバー
            if($.sessionStorage().getItem('title_redl_flg')==='true'){
                seqTitlePurchaseComplete('redl');
                enableHomeButton();
                enablePowerButton();
            }else{
                var demo_id = $.sessionStorage().getItem('demo_id');
                //体験版
                var req_free = {
                    url  : ninjaBase + 'ws/' + country + '/demo/' + demo_id +'/!purchase?lang='+lang,
                    type : 'POST'
                };
                //ajax
                $.getXml(req_free,true)
                    .done(
                    function(xml){
                        var DL_ticket = $(xml).find('ticket_id').text();

                        // #3986 BTS2141 DLタスク登録中の
                        // 予期せぬホームボタン解除の可能性を考慮して
                        // 再度禁止する
                        disableHomeButton();

                        //チケットDL
                        if(isWiiU){
                            var res = wiiuEC.ticketDownloadSync(DL_ticket);
                            processJsxError(res);
                        }
                        seqDemoPurchaseComplete();

                        enableHomeButton();
                        enablePowerButton();
                    }
                )
                    .fail(
                    function(xml){
                        initPurchaseInfo();
                        //ホームボタン、ユーザ操作禁止解除
                        enableUserOperation();
                        enableHomeButton();
                        enablePowerButton();
                        var error_code = $(xml.responseText).find('code').text();
                        var error_msg = $(xml.responseText).find('message').text();
                        setErrorHandler(prefixNinja, error_code, error_msg, function(){
                            switch(error_code){
                                case '3053'://3053 ECGS_CONNECTION_FAILURE
                                    abortToTop();
                                    break;
                                case '3151'://3151 NEI_NO_ONLINE_PRICE
                                    abortToTop();
                                    break;
                                case '3154'://3154 NEI_TITLE_ALREADY_OWNED
                                    $.alert(error_msg, $('#dialog_msg_ok').text());
                                    abortToBack();
                                    break;
                                default:
                                    abortToBack();
                                    break;
                            }
                        });

                    }
                );
            }
        }else{
            $.showError(errorCodeRetriable);
            abortToBack();
        }
    }
    //購入完了後
    function seqDemoPurchaseComplete(){

        //NUPチェック
        if (isNUPCheckRequired()) {
            var result = wiiuEC.needsSystemUpdate();
            processJsxError(result);
            if (result.update) {
                $.print("System Update is needed.");

                var doUpdate = $.confirm($('#dialog_msg_update').text(), $('#dialog_back').text(), $('#dialog_update').text());

                if(doUpdate) {
                    wiiuBrowser.jumpToUpdate();
                } else {
                    wiiuBrowser.jumpToHomeButtonMenu();
                }
            }
        }
        var has_registered_task = '';
        //DLアイテムがなければタスクを積まない
        if($.sessionStorage().getItem('title_dl_items')!==null){
            has_registered_task = '&has_registered_task=true';
            if(isWiiU){
                //ダウンロードタスク取得
                var res_task = wiiuEC.getDownloadTaskListState();
                processJsxError(res_task);

                if(res_task.remainingTaskNum > 0){
                    //titleID、バージョン取得
                    var dl_obj = JSON.parse($.sessionStorage().getItem('title_dl_items'));
                    //DLタスク登録
                    var res_dl_task = wiiuEC.registerTitleDownloadTask(String(dl_obj[0].title_id),String(dl_obj[0].title_version));
                    processJsxError(res_dl_task);

                    // パッチDLタスクを積む（エラーチェックはしない）
                    wiiuEC.registerPatchTitleDownloadTask(String(dl_obj[0].title_id));

                    //ダウンロードタスクが一杯
                }else{
                    $.alert($('#dialog_msg_full').text(),$('#dialog_msg_ok').text());
                }
            }
        }
        //initialize session storage
        initPurchaseInfo();

        //完了ページへ
        var nsuid = $.sessionStorage().getItem('buying_title_id');
        location.replace('buy02_03.html?nsuid='+nsuid+'&type=noreceipt'+has_registered_task);
    }

    function canUseOwnedCoupon() {
        return isOwnedCouponAvailable() &&
            $.sessionStorage().getItem('titile_owned_coupon_flg')==='true';
    }

    function canUseCoupon() {
        // buy01_01 クーポン選択ラジオボタンを表示するか
        // 再受信、無料、引換時は表示をスキップ
        // あなただけ割引で選択してきたときも表示をスキップ
        var ss = $.sessionStorage();
        var is_purchase = !((ss.getItem('redeem_num')!==null &&
            ss.getItem('redeem_title_id')!==null) ||
            ss.getItem('title_free_flg')==='true' ||
            ss.getItem('title_redl_flg')==='true' ||
            ss.getItem('title_redl_flg')==='false');
        var is_owned_seq = ss.getItem('buying_coupon_instance_code')!==null;

        return is_purchase && !is_owned_seq &&
            (isCouponAvailable() || canUseOwnedCoupon());
    }

    function showCouponType() {
        if(canUseCoupon()){
            $('#template_coupon_type_select').tmpl({
                str_use_owned_coupon: $('#str_use_owned_coupon').text(),
                str_use_coupon_code: $('#str_use_coupon_code').text(),
                str_disuse_coupon: $('#str_disuse_coupon').text(),
                has_owned_coupon: canUseOwnedCoupon(),
                can_use_coupon_code: isCouponAvailable(),
                price: $.sessionStorage().getItem('title_lowest_price')
            }).appendTo('#coupon_type');

            // あなただけ割引がある場合はそれを選択、そうでなかったら何も使用しない
            var default_type = canUseOwnedCoupon() ? 'owned_coupon' : 'disuse_coupon';

            $("input[name='coupon_type'][value='" + default_type + "']")
                .prop('checked', true);
        }
    }
    function showUsingCoupon() {
        var ss = $.sessionStorage();
        if(ss.getItem('coupon_code')){
            $('#using_coupon').show();
        }
        if(ss.getItem('buying_coupon_instance_code')){
            $('#using_owned_coupon').show();
        }
    }

});

// -------------------------------------------------
// functions
// -------------------------------------------------


function addRatingClass(rating_sys_id){
    var RATING_CLASSES = {
        '201': 'rd_cero',
        '202': 'rd_esrb',
        '203': 'rd_usk',
        '204': 'rd_pegi',
        '206': 'rd_pegi',
        '207': 'rd_bbfc',
        '208': 'rd_cob',
        '209': 'rd_oflc',
        '212': 'rd_rar',
        '303': 'rd_iarc_usk',
        '304': 'rd_iarc_pegi',
        '306': 'rd_iarc_pegi',
        '308': 'rd_iarc_cob',
        '309': 'rd_iarc_oflc'
    };
    var rating_class = RATING_CLASSES[rating_sys_id];
    if (rating_class) {
        $('#rating_display').addClass(rating_class);
    }
}

//購入基本情報
function getTitleCommonInfo(t_id) {
    "use strict";
    var title_id = t_id;
    var title_name = '';
    var title_icon = '';
    var title_release_date = '';
    var rating_flg = 'false';
    var rating_age = '';
    var rating_sys = '';
    var rating_id = '';
    var notes_flg = 'false';
    var title_in_app_purchase = '';

    /*
    title_name -> タイトル名
    title_icon -> タイトルアイコン画像
    title_release_date -> タイトル配信日(str)
    rating_flg -> レーティング存在フラグ
    rating_age -> レーティング年齢制限
    rating_sys -> レーティングシステムID
    notes_flg  -> 注意事項存在フラグ
    title_in_app_purchase -> アプリ内課金フラグ
    */
    //get common data
    var req_data = {'lang':lang};
    //カタログIDがあればパラメータに追加
    if($.sessionStorage().getItem('catalog_id')!==null){
        req_data.cid = $.sessionStorage().getItem('catalog_id');
    }
    //data
    var req_obj = {
        url  : samuraiBase + 'ws/' + country + '/title/' + title_id,
        type : 'GET',
        data: req_data
    };
    //ajax
    $.getXml(req_obj)
    .done(
        function(xml){
            $(xml).find('title').each(function(){
                title_name = $(this).children('name').text();
                title_icon = $(this).children('icon_url').text();
                title_release_date = $(this).children('release_date_on_eshop').text();
                title_in_app_purchase = $(this).children('in_app_purchase').text();
                //rating
                if($(this).children('rating_info').size() >0){
                    rating_flg = 'true';
                    rating_age = $(this).children('rating_info').children('rating').children('age').text();
                    rating_sys = $(this).children('rating_info').children('rating_system').attr('id');
                    rating_id = $(this).children('rating_info').children('rating').attr('id');
                    addRatingClass(rating_sys);
                    //rating img
                    var rating_img = $(this).children('rating_info').children('rating')
                            .children('icons').find('icon[type="normal"]').attr('url');
                    $('#rd_l').append('<p><img src='+ rating_img +' /></p>');
                    $(this).children('rating_info').find('descriptor').each(function(){
                        if($(this).children('icons').find('icon[type="normal"]').size() >0){
                            var descriptor_img = $(this).children('icons')
                                    .find('icon[type="normal"]').attr('url');
                            $('#rd_r').append('<img src='+ descriptor_img +' />');
                        }else{
                            var descriptor_text = $(this).children('name').text();
                            $('#rd_r').append('<p>'+descriptor_text+'</p>');
                        }
                    });
                }else{
                    $('#rating_display').hide();
                }
                //注意事項 追加コンテンツは取得しない
                if($.sessionStorage().getItem('buying_type')!=='aoc' &&
                   $.sessionStorage().getItem('buying_type')!=='ticket' &&
                   $.sessionStorage().getItem('buying_type')!=='auto_billing' &&
                   ($(this).children('disclaimer').size() >0)){
                    notes_flg = 'true';
                    $('#buy_about_this').append('<p>'+ $(this).children('disclaimer').text() +'</p>');
                }
                //ロシア用注意文言
                if(country==='RU'){
                    notes_flg = 'true';//レーティング無時も表示
                    $('#buy_about_this').append('<p>'+ $('#str_ru').html() +'</p>');
                }
                //save session storage
                $.sessionStorage().setItem('title_name',title_name);
                $.sessionStorage().setItem('title_icon',title_icon);
                $.sessionStorage().setItem('title_release_date',title_release_date);
                $.sessionStorage().setItem('title_in_app_purchase',title_in_app_purchase);
                $.sessionStorage().setItem('rating_flg',rating_flg);
                $.sessionStorage().setItem('rating_age',rating_age);
                $.sessionStorage().setItem('rating_sys',rating_sys);
                $.sessionStorage().setItem('rating_id',rating_id);
                $.sessionStorage().setItem('notes_flg',notes_flg);
                $.sessionStorage().setItem('get_common_info','true');
            });
        }
    )
    .fail(
        function(xml){
            enableUserOperation();
            enableHomeButton();
            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();
            initPurchaseInfo();
            setErrorHandler(prefixSamurai, error_code, error_msg);
        }
    );

}
//体験版情報
function getDemoInfo(d_id) {
    "use strict";
    var demo_id = d_id;
    var demo_name = '';
    var demo_icon = '';
    var rating_flg = 'false';
    var rating_age = '';
    var rating_sys = '';
    var rating_id = '';

    /*
     demo_id                  -> 体験版ID
     demo_name                -> 体験版名
     demo_icon                -> 体験版アイコン画像
     rating_flg               -> レーティング存在フラグ
     rating_age               -> レーティング年齢制限
     rating_sys               -> レーティングシステムID
     title_dl_items           -> DLタスク用データタイトルリスト(json)
     'size_over_flg'          -> タイトル容量オーバーフラグ
     'demo_size_str'          -> タイトル容量(str)
     'demo_size_unit'         -> タイトル容量単位(str)
     'demo_display_size_str'  -> 確認画面用タイトル容量(str)
     'demo_display_size_unit' -> 確認画面用タイトル容量単位(str)
     */

    //get demo data
    var req_obj = {
        url  : samuraiBase + 'ws/' + country + '/demo/' + demo_id,
        type : 'GET',
        data:{'lang':lang}
    };
    //ajax
    $.getXml(req_obj)
        .done(
        function(xml){
            $(xml).find('demo').each(function(){
                demo_name = $(this).children('name').text();
                demo_icon = $(this).children('icon_url').text();
                //rating
                if($(this).children('rating_info').size() >0){
                    rating_flg = 'true';
                    rating_age = $(this).children('rating_info').children('rating').children('age').text();
                    rating_sys = $(this).children('rating_info').children('rating_system').attr('id');
                    rating_id = $(this).children('rating_info').children('rating').attr('id');
                    addRatingClass(rating_sys);
                    //rating img
                    var rating_img = $(this).children('rating_info').children('rating')
                            .children('icons').find('icon[type="normal"]').attr('url');
                    $('#rd_l').append('<p><img src='+ rating_img +' /></p>');
                    $(this).children('rating_info').find('descriptor').each(function(){
                        if($(this).children('icons').find('icon[type="normal"]').size() >0){
                            var descriptor_img = $(this).children('icons')
                                    .find('icon[type="normal"]').attr('url');
                            $('#rd_r').append('<img src='+ descriptor_img +' />');
                        }else{
                            var descriptor_text = $(this).children('name').text();
                            $('#rd_r').append('<p>'+descriptor_text+'</p>');
                        }
                    });
                }else{
                    $('#rating_display').hide();
                }
                //ロシア用注意文言
                if(country==='RU'){
                    rating_flg = 'true';//レーティング無時も表示
                    $('#buy_about_this').append('<p>'+ $('#str_ru').html() +'</p>');
                }
                //save session storage
                $.sessionStorage().setItem('demo_id',demo_id);
                $.sessionStorage().setItem('demo_name',demo_name);
                $.sessionStorage().setItem('demo_icon',demo_icon);
                $.sessionStorage().setItem('rating_flg',rating_flg);
                $.sessionStorage().setItem('rating_age',rating_age);
                $.sessionStorage().setItem('rating_sys',rating_sys);
                $.sessionStorage().setItem('rating_id',rating_id);
            });
        }
    )
        .fail(
        function(xml){
            enableUserOperation();
            enableHomeButton();
            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();
            initPurchaseInfo();
            setErrorHandler(prefixSamurai, error_code, error_msg);
        }
    );
    //容量取得
    var add_info = {};
    var conv = getTitleEcInfo(demo_id);
    if(conv.error){
        if(conv.error.code_no !== undefined && conv.error.message !== undefined ) {
            $.showError(prefixNinja + conv.error.code_no,conv.error.message);
        } else {
            $.showError(errorCodeRetriable);
        }
        abortToBack();
    }else{
        var no_authority_installed = false;
        //本体権利の存在チェック
        var req_obj_owned = {
            url    : ninjaBase + 'ws/my/title_owner',
            type   : 'GET',
            data   : {
                'nsUid':demo_id
            }
        };
        $.getXml(req_obj_owned)
            .done(
            function(xml){
                if(isWiiU){
                    var res = wiiuDevice.getTitleInstallState(conv.title_id);
                    processJsxError(res);
                    if($(xml).find('is_owned').text()==='true'){
                        //再受信チェック
                        if(res.installed){
                            $.sessionStorage().setItem('title_redl_flg','false');
                        }else{
                            $.sessionStorage().setItem('title_redl_flg','true');
                        }
                    }else{
                        //タイトルの権利はないがインストールされてる場合DLタスクを積まない
                        if(res.installed){
                            no_authority_installed = true;
                        }
                        $.sessionStorage().removeItem('title_redl_flg');
                    }
                }else{
                    if($(xml).find('is_owned').text()==='true'){
                        $.sessionStorage().setItem('title_redl_flg','true');
                    }else{
                        $.sessionStorage().removeItem('title_redl_flg');
                    }
                }
            }
        )
            .fail(
            function(xml){
                initPurchaseInfo();
                enableUserOperation();
                enableHomeButton();
                var error_code = $(xml.responseText).find('code').text();
                var error_msg = $(xml.responseText).find('message').text();
                setErrorHandler(prefixNinja, error_code, error_msg, function(){
                    switch(error_code){
                        case '3052'://3052 ECGS_BAD_RESPONSE
                            location.href = './#top';
                            break;
                        case '3053'://3053 ECGS_CONNECTION_FAILURE
                            location.href = './#top';
                            break;
                        default:
                            location.href = './#top';
                            break;
                    }
                });
            }
        );
        //確認画面表示用サイズ取得
        var d_size = convertSize(conv.content_size);
        add_info.demo_display_size_str = String(d_size.size);
        add_info.demo_display_size_unit = d_size.unit;
        //容量取得
        if(isWiiU){
            var res = wiiuEC.getTitleInstallInfo(conv.title_id,conv.title_ver);
            processJsxError(res);
            var title_size = parseInt(res.installSize, 10);
            var storage_size = res.storageSize;
            add_info.demo_dl_media = res.downloadMedia;
            //容量変換、単位取得
            var c_size = convertSize(title_size);
            add_info.demo_size_str = String(c_size.size);
            add_info.demo_size_unit = c_size.unit;
            //容量チェック
            if(parseInt(storage_size,10) < parseInt(title_size,10)){
                add_info.size_over_flg = 'true';
            }else{
                add_info.size_over_flg = 'false';
            }
            //DLタスク登録用リスト ※タイトルの権利はないがインストールされてる場合DLタスクを積まない
            if(!no_authority_installed){
                var dl_items = [];
                var dl_item = {'title_id':conv.title_id,'title_version':conv.title_ver};
                dl_items.push(dl_item);
                add_info.title_dl_items = JSON.stringify(dl_items);
            }
        }else{
            add_info.demo_size_str = '(仮PC用表示)1MB';
            add_info.size_over_flg = 'false';
        }
        //save sessionStorage
        $.each(add_info,function(key,value){
            $.sessionStorage().setItem(key,value);
        });
        $.sessionStorage().setItem('get_demo_info','true');
    }

}
//タイトル購入情報
function getTitleInfo(t_id){
    "use strict";
    /*
    //title
    'size_over_flg'           -> タイトル容量オーバーフラグ
    'title_size_str'          -> タイトル容量(str)
    'title_size_unit'         -> タイトル容量単位(str)
    'title_display_size_str'  -> 確認画面用タイトル容量(str)
    'title_display_size_unit' -> 確認画面用タイトル容量単位(str)
    'title_free_flg'          -> タイトル無料フラグ
    'title_dl_items'          -> DLタスク用データタイトルリスト(json)
    'title_pre_order_flg'     -> タイトル予約販売フラグ
    'titile_owned_coupon_flg' -> あなただけ割引フラグ
    'title_lowest_price'      -> あなただけ割引を除いた最安値
    */
    var title_id = t_id;
    var add_info = {};
    var ajax_res = true;

    //title_id変換
    var conv = getTitleEcInfo(title_id);
    if(conv.error){
        if(conv.error.code_no !== undefined && conv.error.message !== undefined ) {
            ajax_res = false;
            $.showError(prefixNinja + conv.error.code_no,conv.error.message);
        } else {
            ajax_res = false;
            $.showError(errorCodeRetriable);
        }
        abortToBack();
    }else{
        var no_authority_installed = false;
        //本体権利の存在チェック
        var req_obj_owned = {
            url    : ninjaBase + 'ws/my/title_owner',
            type   : 'GET',
            data   : {
                'nsUid':title_id
            }
        };
        $.getXml(req_obj_owned)
            .done(
            function(xml){
                split_print((new XMLSerializer).serializeToString(xml));
                var res = null;

                if (isWiiU) {
                    res = wiiuDevice.getTitleInstallState(conv.title_id);
                    processJsxError(res);
                } else {
                    res = {};
                }
                if($(xml).find('is_owned').text()==='true'){
                    //再受信チェック
                    if(isWiiU){
                        if(res.installed){
                            $.sessionStorage().setItem('title_redl_flg','false');
                        }else{
                            $.sessionStorage().setItem('title_redl_flg','true');
                        }
                    }
                }else{
                    //タイトルの権利はないがインストールされてる場合DLタスクを積まない
                    if(res.installed){
                        no_authority_installed = true;
                    }
                    $.sessionStorage().removeItem('title_redl_flg');
                }
            }
        )
            .fail(
            function(xml){
                initPurchaseInfo();
                ajax_res = false;
                enableUserOperation();
                enableHomeButton();
                var error_code = $(xml.responseText).find('code').text();
                var error_msg = $(xml.responseText).find('message').text();
                setErrorHandler(prefixNinja, error_code, error_msg, function(){
                    switch(error_code){
                        case '3052'://3052 ECGS_BAD_RESPONSE
                            location.href = './#top';
                            break;
                        case '3053'://3053 ECGS_CONNECTION_FAILURE
                            location.href = './#top';
                            break;
                        default:
                            location.href = './#top';
                            break;
                    }
                });
            }
        );
        //確認画面表示用サイズ取得
        var d_size = convertSize(conv.content_size);
        add_info.title_display_size_str = String(d_size.size);
        add_info.title_display_size_unit = d_size.unit;
        //容量取得
        if(isWiiU){
            var res = wiiuEC.getTitleInstallInfo(conv.title_id,conv.title_ver);
            processJsxError(res);
            var title_size = parseInt(res.installSize, 10);
            var storage_size = res.storageSize;
            add_info.title_dl_media = res.downloadMedia;
            //容量変換、単位取得
            var c_size = convertSize(title_size);
            add_info.title_size_str = String(c_size.size);
            add_info.title_size_unit = c_size.unit;
            //容量チェック
            if(parseInt(storage_size,10) < parseInt(title_size,10)){
                add_info.size_over_flg = 'true';
            }else{
                add_info.size_over_flg = 'false';
            }
            //DLタスク登録用リスト ※タイトルの権利はないがインストールされてる場合DLタスクを積まない
            if(!no_authority_installed){
                var dl_items = [];
                var dl_item = {'title_id':conv.title_id,'title_version':conv.title_ver};
                dl_items.push(dl_item);
                add_info.title_dl_items = JSON.stringify(dl_items);
            }
        }else{
            add_info.title_size_str = '(仮PC用表示)1MB';
            add_info.size_over_flg = 'false';
        }

    }
    //getXmlでエラーだったらここで抜ける
    if(!ajax_res) return;

    if ($.sessionStorage().getItem('title_pre_order_flg')!=='true') {
        //タイトル引換の引換券に予約フラグがついている場合は
        //価格情報は不要 SEE #19027

        //タイトル引換、再DLの場合でも予約フラグをチェックするために
        //価格情報を取得
        ajax_res = getOnlinePrice(title_id, add_info);
    }
    //getXmlでエラーだったらここで抜ける
    if(!ajax_res) return;


    //save sessionStorage
    $.each(add_info,function(key,value){
        // 文字列で保存
        $.sessionStorage().setItem(key, '' + value);
    });
    $.sessionStorage().setItem('get_title_info','true');

}

function getOnlinePrice(title_id, add_info){
    //購入可、不可チェック、無料チェック、あなただけ割引価格取得
    var req_obj_title = {
        url    : ninjaBase + 'ws/' + country + '/titles/online_prices',
        type   : 'GET',
        data   : {
            'lang':lang,
            'title[]':title_id,
            include_coupon: true
        }
    };
    var ajax_res = true;
    var redeem_or_redl = !($.sessionStorage().getItem('redeem_num') === null &&
        $.sessionStorage().getItem('title_redl_flg') === null);

    $.getXml(req_obj_title)
        .done(
        function(xml){
            split_print((new XMLSerializer).serializeToString(xml));

            //未発売
            if($(xml).find('eshop_sales_status').text()==='unreleased'){
                if (!redeem_or_redl) {
                    ajax_res = false;
                    $.showError(errorCodeRetriable);
                    abortToBack();
                }
                //販売終了
            }else if($(xml).find('eshop_sales_status').text()==='sales_termination'){
                // タイトル引換、再DLでないときはエラーを表示して戻る SEE #18931
                if (!redeem_or_redl) {
                    ajax_res = false;
                    $.showError(errorCodeRetriable);
                    abortToBack();
                }
                //ダウンロード禁止
            }else if($(xml).find('eshop_sales_status').text()==='download_termination'){
                ajax_res = false;
                $.showError(errorCodeRetriable);
                abortToBack();
            }else{
                // 予約フラグ
                add_info.title_pre_order_flg = $(xml).find('pre_order').text() === 'true';
                // あなただけ割引フラグ
                add_info.titile_owned_coupon_flg = $(xml).find('coupon_price').size() > 0;
                var price_list = [];

                // device order list の取得
                var owned_nsuids = [];
                var device_order_list     = $.localStorage().getItem('device_order_list');
                var device_order_list_rvc = $.localStorage().getItem('device_order_list_rvc');
                if (device_order_list) {
                    owned_nsuids = owned_nsuids.concat(device_order_list.split(','));
                }
                if (device_order_list_rvc) {
                    owned_nsuids = owned_nsuids.concat(device_order_list_rvc.split(','));
                }
                var owned_nsuids_size = owned_nsuids.length;

                var cond_prices    = $(xml).find('conditional_prices').find('conditional_price');
                var cond_raw_value = null;

                // まず所有者割引で適合するものがあるかどうかを調べる
                if (cond_prices.size() > 0) {
                    var cond_prices_size = cond_prices.size();
                    var matched_count    = 0;

                    for (var i = 0; cond_raw_value == null && i < cond_prices_size; i++) {
                        var cond_price = $(cond_prices.get(i));

                        var contents = cond_price
                            .find('conditional_contents')
                            .find('conditional_content');

                        contents.each(function() {
                            var condition_nsuid = $(this).text();
                            for (var r = 0; r < owned_nsuids_size; r++) {
                                if (condition_nsuid === owned_nsuids[r]) {
                                    matched_count++;
                                    return;
                                }
                            }
                        });

                        // 条件の数とマッチした数があっている場合には適合なので
                        // この価格を採用する
                        if (matched_count === contents.size()) {
                            price_list.push({
                                amount: cond_price.find('amount').text(),
                                raw_value: cond_raw_value
                            });
                            if ("0" === cond_price.find('raw_value').text()) {
                                // SEE #3987
                                cond_raw_value = cond_price.find('raw_value').text();
                            }
                        }
                    }

                    if (cond_raw_value !== null) {
                        if (isZeroPrice(cond_raw_value)) {
                            add_info.title_free_flg = 'true';
                        } else {
                            add_info.title_free_flg = 'false';
                        }
                    }
                }

                // 有効な所有者割引が無い場合には、discount, regular の価格を調べる
                if (null === cond_raw_value) {

                    if($(xml).find('discount_price').size() >0){
                        var discount_price = $(xml).find('discount_price');
                        var discount_raw_value = discount_price.children('raw_value').text();
                        $.print("getTitleInfo: discount_raw_value=" + discount_raw_value);
                        price_list.push({
                            amount: discount_price.children('amount').text(),
                            raw_value: discount_raw_value
                        });

                        if(isZeroPrice(discount_raw_value)){
                            add_info.title_free_flg = 'true';
                        }else{
                            add_info.title_free_flg = 'false';
                        }
                    }else{
                        var regular_price = $(xml).find('regular_price');
                        var regular_raw_value = regular_price.children('raw_value').text();
                        $.print("getTitleInfo: regular_raw_value=" + regular_raw_value);
                        price_list.push({
                            amount: regular_price.children('amount').text(),
                            raw_value: regular_raw_value
                        });

                        if(isZeroPrice(regular_raw_value)){
                            add_info.title_free_flg = 'true';
                        }else{
                            add_info.title_free_flg = 'false';
                        }
                    }

                }

                // あなただけ割引を除いた最安値を取得
                price_list.sort(function(a, b) {
                    return parseFloat(a.raw_value, 10) - parseFloat(b.raw_value, 10);
                });
                add_info.title_lowest_price = price_list[0].amount;

                $.print('getTitleInfo: title_free_flg=' + add_info.title_free_flg);
                $.sessionStorage().setItem('title_free_flg', add_info.title_free_flg);
            }
        }
    )
        .fail(
        function(xml){
            ajax_res = false;
            enableUserOperation();
            enableHomeButton();
            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();
            setErrorHandler(prefixSamurai, error_code, error_msg, function(status) {
                if(status === ERROR_NOT_PROCESSED) {
                    $.showError(errorCodeRetriable);
                }
            });
            abortToBack();
        }
    );

    return ajax_res;
}

//タイトル購入価格
function getTitlePrice(t_id) {
    "use strict";
    /*
    //balance
    'current_balance'     -> 現在の残高(int)
    'current_balance_str' -> 現在の残高(str)
    'post_balance'        -> 購入後の残高(int)
    'post_balance_str'    -> 購入後の残高(str)

    //title
    'title_size_str'          -> タイトル容量(str)
    'title_size_unit'         -> タイトル容量単位(str)
    'title_price_str'         -> タイトル価格(税抜)(str)
    'title_discount_price_id' -> ディスカウント価格ID
    'title_regular_price_id'  -> レギュラー価格ID
    'title_tax_str'          -> 税金(int)
    'title_tax_str'           -> 税金(str)
    'title_taxin_price'       -> タイトル価格(税込)(int)
    'title_taxin_price_str'   -> タイトル価格(税込)(str)
    */
    var title_id = t_id;
    var price_info = {};
    var req_data = {'lang':lang};
    var coupon_code = $.sessionStorage().getItem('coupon_code');
    if (coupon_code) {
        // 共通クーポン
        // instance_code を参照
        req_data.coupon_instance_code = $.sessionStorage().getItem('coupon_code_ins_' + coupon_code);
    }
    var coupon_ins = $.sessionStorage().getItem('buying_coupon_instance_code');
    var is_free =
        $.sessionStorage().getItem('title_free_flg')==='true' ||
        $.sessionStorage().getItem('title_redl_flg')==='true' ||
        $.sessionStorage().getItem('title_redl_flg')==='false';
    if (coupon_ins && !is_free) {
        // あなただけ割引
        req_data.coupon_instance_code = coupon_ins;
    }
    var req_obj_title = {
                      url    : ninjaBase + 'ws/' + country + '/title/'+ title_id +'/prepurchase_info',
                      type   : 'GET',
                      data   : req_data
                      };
    var result;
    $.print("getTitlePrice ---" + title_id);
    $.getXml(req_obj_title)
    .done(
        function(xml){
            split_print((new XMLSerializer).serializeToString(xml));
            var price_node = $(xml).find('payment_amount').children('price');

            price_info.title_regular_price_id  = price_node.children('regular_price').attr('id');
            if (price_node.children('discount_price').size() > 0) {
                price_info.title_price_str = price_node.children('discount_price').children('amount').text();
                price_info.title_discount_price_id = price_node.children('discount_price').attr('id');

            } else if (price_node.children('conditional_prices').size() > 0) {
                var conditional_price = price_node.children('conditional_prices').children('conditional_price');
                price_info.title_price_str = conditional_price.children('amount').text();
                price_info.title_discount_price_id = conditional_price.attr('id');

            } else {
                price_info.title_price_str = price_node.children('regular_price').children('amount').text();
            }


            if (price_node.children('coupon_price').size() > 0) {
                // 他の割引よりクーポンの価格を優先して表示 SEE #26692
                price_info.title_price_str = price_node.children('coupon_price').children('amount').text();
            }

            //容量変換、単位取得
            var c_size = convertSize($(xml).find('content_size').text());
            price_info.title_size_str = String(c_size.size);
            price_info.title_size_unit = c_size.unit;
            price_info.title_tax = $(xml).find('total_amount').children('tax_amount').children('raw_value').text();
            price_info.title_tax_str = $(xml).find('total_amount').children('tax_amount').children('amount').text();
            price_info.title_taxin_price = $(xml).find('total_amount').children('total_amount').children('raw_value').text();
            price_info.title_taxin_price_str = $(xml).find('total_amount').children('total_amount').children('amount').text();
            price_info.current_balance_str = $(xml).find('current_balance').children('amount').text();
            price_info.current_balance = $(xml).find('current_balance').children('raw_value').text();
            price_info.post_balance_str = $(xml).find('post_balance').children('amount').text();
            price_info.post_balance = $(xml).find('post_balance').children('raw_value').text();

            //save sessionStorage
            $.each(price_info,function(key,value){
                $.sessionStorage().setItem(key,value);
            });
            result = true;
        }
    )
    .fail(
        function(xml){
            //住所情報に遷移する場合があるので、まだinitしない
            //initPurchaseInfo();
            $.print('タイトル購入価格');
            enableUserOperation();
            enableHomeButton();
            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();
            setErrorHandler(prefixNinja, error_code, error_msg, function(status){
                var init_flg = true;
                switch(error_code){
                    case '3052'://3052 ECGS_BAD_RESPONSE
                        abortToTop();
                        break;
                    case '3053'://3053 ECGS_CONNECTION_FAILURE
                        abortToTop();
                        break;
                    case '3122'://3122 NEI_TAX_LOCATION_NOT_FOUND
                        // 3124が返ってくるはずなので異常扱いにする
                        abortToTop();
                        break;
                    case '3123'://3123 NEI_ACCOUNT_HAS_NO_TAX_LOCATION_ID
                        abortToBack();
                        break;
                    case '3124'://3124 NEI_INVALID_TAX_LOCATION_ID
                        //住所設定画面へ遷移
                        if(status===ERROR_NOT_PROCESSED) {
                            var result = $.confirm(error_msg, $('#dialog_back').text(), $('#dialog_msg_ok').text());
                            if(result) {
                                // 住所設定へ
                                location.replace('legal07_02.html?type=title'+
                                        '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                        '&buying_section=addr');
                                init_flg = false;
                            } else {
                                // やめる
                                abortToBack();
                            }
                        } else {
                            abortToTop();
                        }
                        break;
                    case '3150'://3150 NEI_TITLE_DISABLE_DOWNLOAD
                        abortToTop();
                        break;
                    case '3151'://3151 NEI_NO_ONLINE_PRICE
                        abortToTop();
                        break;
                    case '3154'://3154 NEI_TITLE_ALREADY_OWNED
                        $.alert(error_msg, $('#dialog_msg_ok').text());
                        abortToBack();
                        break;
                    case '3260': // NEI_COUPON_NOT_FOUND
                    case '3261': // NEI_COUPON_NOT_SUPPORT_COUNTRY
                    case '3262': // NEI_COUPON_NOT_TARGET
                    case '3263': // NEI_COUPON_ALREADY_USED
                    case '3264': // NEI_COUPON_ALREADY_FREE
                    case '3266': // NEI_MY_COUPON_NOT_ENABLE
                        abortToBack();
                        break;
                    case '3267': // NEI_MY_COUPON_EXPIRED
                    case '3268': // NEI_MY_COUPON_ALREADY_USED
                        abortToTop();
                        break;
                    case '7534'://7534 ECS_VCSPAS_INVALID_TAX_LOCATION_ID
                        // 3124が返ってくるはずなので異常扱いにする
                        abortToTop();
                        break;
                    default:
                        abortToTop();
                        break;
                }
                if(init_flg) initPurchaseInfo();
            });
            result = false;
        }
    );
    return result;
}
//追加コンテンツ購入情報
function getAOCInfo(t_id,aoc_id) {
    $.print("getAOCInfo(" + t_id + ", " + aoc_id + ") called");

    "use strict";
    /*
     //aoc
     add_info['aoc_id_list']            -> 追加コンテンツID(カンマ区切り)
     add_info['aocs_total_size']         -> 追加コンテンツ合計容量(int)
     add_info['aocs_total_size_str']     -> 追加コンテンツ合計容量(str)
     add_info['aocs_total_size_unit']   -> 追加コンテンツ合計容量単位
     add_info['aoc_name_n']             -> 追加コンテンツ名
     add_info['aoc_free_flg_n']            -> 追加コンテンツ無料フラグ
     add_info['aoc_size_unit_n']        -> 追加コンテンツ容量単位
     add_info['aoc_size_str_n']         -> 追加コンテンツ容量(str)
     add_info['aoc_redl_flg_n']         -> 追加コンテンツ再ダウンロードフラグ
     add_info['aocs_all_redl_flg']      -> 追加コンテンツ全て再ダウンロードフラグ
     aocs_free_flg                      -> 追加コンテンツ無料フラグ(計)
     size_over_flg                      -> 追加コンテンツ容量オーバーフラグ
     aoc_dl_items                       -> DLタスク用データタイトルリスト(json)
     aoc_update_flg                     -> 追加コンテンツアップデートフラグ
     addinfo['buying_aoc_id_list']      -> 購入追加コンテンツID
     */
    //@param aoc_id array
    var ns_uid = t_id;
    var buying_aoc_list = [];
    var owned_list = [];
    var buying_aoc_dl_list = [];
    var add_info = {};
    var ajax_res = true;
    /* memo

     */
    //購入追加コンテンツ取得
    if($.isArray(aoc_id) && aoc_id.length >0){
        var aoc_id_list = [];
        aoc_id_list = aoc_id;
        //aoc info
        var req_obj_aoc = {
            url  : samuraiBase + 'ws/' + country + '/aocs',
            type : 'GET',
            data:{
                'lang' : lang,
                'aoc[]' : aoc_id_list.join(',')
            }
        };
        //ajax
        $.getXml(req_obj_aoc)
        .done(
            function(xml){
                var aoc_arr = [];
                var variation_list = [];
                var cnt = 0;
                $(xml).find('aoc').each(function(){
                    var aoc_id = $(this).attr('id');
                    if(aoc_id_list.indexOf(aoc_id)!== -1){
                        aoc_arr.push(aoc_id);
                        add_info['aoc_name_'+aoc_id] = $(this).children('name').text();
                        //レスポンスからvariation値取得
                        variation_list.push($(this).children('content_indexes').attr('variation'));

                        //購入aoc_idリスト取得
                        //再受信チェック用
                        // buying_aoc_dl_list[i][aoc_id]
                        // buying_aoc_dl_list[i][variation]
                        // buying_aoc_dl_list[i][content_index][i]
                        buying_aoc_list[cnt] = {};
                        buying_aoc_list[cnt].aoc_id = aoc_id;
                        buying_aoc_list[cnt].variation = $(this).children('content_indexes').attr('variation');
                        buying_aoc_list[cnt].content_index = [];
                        $(this).children('content_indexes').children('content_index').each(function(){
                            buying_aoc_list[cnt].content_index.push($(this).text());
                        });
                        cnt++;
                    }else{
                        //クエリのaoc_idの情報が存在しない場合は、ここでエラーとする
                        ajax_res = false;
                        $.showError(errorCodeRetriable);
                        abortToBack();
                        return;
                    }
                });
                add_info.aoc_id_list = aoc_id_list.join(',');

                //variation重複チェック
                // TODO valiation_listにpushする前にチェックするようにして、この処理は削除 (1.5向け)
                var storage = {};
                var variation_unique_arr = [];
                var i,value;
                for ( i=0; i<variation_list.length; i++) {
                    value = variation_list[i];
                    if(!(value in storage)) {
                        storage[value] = true;
                        variation_unique_arr.push(value);
                    }
                }
                //再度レスポンスからvariation単位でcontent_indexを取得
                //DLタスク登録用
                // buying_aoc_dl_list[i][variation]
                // buying_aoc_dl_list[i][content_index][i]
                $.each(variation_unique_arr,function(key,val){
                    buying_aoc_dl_list[key] = {};
                    buying_aoc_dl_list[key].variation = variation_unique_arr[key];
                    buying_aoc_dl_list[key].content_index = [];
                    $(xml).find('aoc').each(function(){
                        var aoc_id = $(this).attr('id');
                        if(aoc_id_list.indexOf(aoc_id)!== -1){ // TODO このチェックはチェック済みなので不要
                            if(variation_unique_arr[key]===$(this).children('content_indexes').attr('variation')){
                                $(this).children('content_indexes').children('content_index').each(function(){
                                	// TODO content_indexの重複はチェックしなくていいのか？
                                    buying_aoc_dl_list[key].content_index.push(parseInt($(this).text(),10));
                                });
                            }
                        }
                    });
                });
            }
        )
        .fail(
            function(xml){
                ajax_res = false;

                var error_code = $(xml.responseText).find('code').text();
                var error_msg = $(xml.responseText).find('message').text();

                if(error_code !== undefined && error_msg !== undefined ) {
                    $.showError(prefixSamurai + error_code, error_msg);
                } else {
                    $.showError(errorCodeRetriable);
                }
                // TODO setErrorHandlerでエラー処理を共通化する？12/01現在怖いので変えない
                abortToBack();
            }
        );
        //getXmlでエラーだったらここで抜ける
        if(!ajax_res) return;
        //追加コンテンツ容量取得
        var req_obj_size = {
            url  : samuraiBase + 'ws/' + country + '/aocs/size',
            type : 'GET',
            data:{'lang':lang,
                   'aoc[]':aoc_id_list.join(',')
            }
        };
        //ajax
        $.getXml(req_obj_size)
            .done(
            function(xml){
                $(xml).find('aoc').each(function(){
                    var aoc_id = $(this).attr('id');
                    var aoc_size = $(this).children('data_size').text();
                    //容量変換、単位取得
                    var c_size = convertSize(aoc_size);
                    add_info['aoc_size_str_'+aoc_id] = String(c_size.size);
                    add_info['aoc_size_unit_'+aoc_id] = c_size.unit;
                });
            }
        )
            .fail(
            function(xml){
                ajax_res = false;

                var error_code = $(xml.responseText).find('code').text();
                var error_msg = $(xml.responseText).find('message').text();

                if(error_code !== undefined && error_msg !== undefined ) {
                    $.showError(prefixSamurai + error_code, error_msg);
                } else {
                    $.showError(errorCodeRetriable);
                }
                // TODO setErrorHandlerでエラー処理を共通化する？12/01現在怖いので変えない
                abortToBack();
            }
        );
        //getXmlでエラーだったらここで抜ける
        if(!ajax_res) return;
        //追加コンテンツ無料チェック
        var req_obj_price = {
                          url    : samuraiOriginBase + 'ws/' + country + '/aocs/prices',
                          type   : 'GET',
                          data   : {
                              'lang' : lang,
                              'aoc[]':aoc_id_list.join(',')
                          }
        };
        //ajax
        $.getXml(req_obj_price)
        .done(
            function(xml){
                var free_arr = [];
                $(xml).find('online_price').each(function(){
                    if($(this).children('eshop_sales_status').text()==='onsale'){
                        var aoc_id = $(this).children('aoc_id').text();
                                        // ディスカウント価格も含めて無料かどうか判定する
                        var regular_price  = $(this).find('regular_price');
                        var discount_price = $(this).find('discount_price');

                        var has_discount_price = (discount_price.length > 0);

                        if (
                            (!has_discount_price &&
                             isZeroPrice(regular_price.children('raw_value').text())
                            ) ||
                            ( has_discount_price &&
                              isZeroPrice(discount_price.children('raw_value').text())
                            )
                        ) {
                            add_info['aoc_free_flg_'+aoc_id] = 'true';
                            free_arr.push(aoc_id);
                        }else{
                            add_info['aoc_free_flg_'+aoc_id] = 'false';
                        }
                    }else{
                        ajax_res = false;
                        $.showError(errorCodeRetriable);
                        abortToBack();
                    }
                });
                //追加コンテンツ無料フラグ(計)をセット
                //※この時点では、有料で再受信のものが含まれているとfalseになる
                if($(xml).find('online_price').length===free_arr.length){
                    $.sessionStorage().setItem('aocs_free_flg','true');
                }else{
                    $.sessionStorage().setItem('aocs_free_flg','false');
                }
            }
        )
        .fail(
            function(xml){
                ajax_res = false;

                var error_code = $(xml.responseText).find('code').text();
                var error_msg = $(xml.responseText).find('message').text();

                if(error_code !== undefined && error_msg !== undefined ) {
                    $.showError(prefixSamurai + error_code, error_msg);
                } else {
                    $.showError(errorCodeRetriable);
                }
                // TODO setErrorHandlerでエラー処理を共通化する？12/01現在怖いので変えない
                abortToBack();
            }
        );
        //getXmlでエラーだったらここで抜ける
        if(!ajax_res) return;
        //追加コンテンツ注意文言取得
        var req_obj_disclaimer = {
            url    : samuraiBase + 'ws/' + country + '/aoc_disclaimers',
            type   : 'GET',
            data   : {
                'lang':lang,
                'aoc[]':aoc_id_list.join(',')
            }
        };
        //ajax
        $.getXml(req_obj_disclaimer)
            .done(
            function(xml){
                $(xml).find('content').each(function(){
                    $('#buy_about_this').append('<p>'+ $(this).children('aoc').children('disclaimer').text() +'</p>');
                });
            }
        )
            .fail(
            function(xml){
                ajax_res = false;

                var error_code = $(xml.responseText).find('code').text();
                var error_msg = $(xml.responseText).find('message').text();

                if(error_code !== undefined && error_msg !== undefined ) {
                    $.showError(prefixSamurai + error_code, error_msg);
                } else {
                    $.showError(errorCodeRetriable);
                }
                // TODO setErrorHandlerでエラー処理を共通化する？12/01現在怖いので変えない
                abortToBack();
            }
        );
        //getXmlでエラーだったらここで抜ける
        if(!ajax_res) return;
        //購入済みリスト取得
        var variation_list = [];
        var req_obj_order = {
            url  : ninjaBase+'ws/my/owned_contents',
            type : 'GET',
            data : {
                'title':ns_uid,
                'lang':lang
            }
        };
        //ajax
        $.getXml(req_obj_order)
            .done(
            function(owned_xml){
                //レスポンスからvariation値取得
                $(owned_xml).find('owned_content').each(function(){
                    variation_list.push($(this).children('title_id').text().slice(-2));
                });
                //重複チェック（self,sibling）
                var storage = {};
                var variation_unique_arr = [];
                var i,value;
                for ( i=0; i<variation_list.length; i++) {
                    value = variation_list[i];
                    if(!(value in storage)) {
                        storage[value] = true;
                        variation_unique_arr.push(value);
                    }

                }
                //再度レスポンスからvariation単位でcontent_indexを取得
                //再受信チェック用
                // owned_list[i][variation]
                // owned_list[i][content_index][i]
                $.each(variation_unique_arr,function(key,value){
                    owned_list[key] = {};
                    owned_list[key].variation = variation_unique_arr[key];
                    owned_list[key].content_index = [];
                    $(owned_xml).find('owned_content').each(function(){
                        if(variation_unique_arr[key]===$(this).children('title_id').text().slice(-2)){
                            $(this).children('content_indexes').children('content_index').each(function(){
                                owned_list[key].content_index.push($(this).text());
                            });
                        }
                    });
                });
            }
        )
            .fail(
            function(xml){
                ajax_res = false;
                enableUserOperation();
                enableHomeButton();
                var error_code = $(xml.responseText).find('code').text();
                var error_msg = $(xml.responseText).find('message').text();
                setErrorHandler(prefixNinja, error_code, error_msg, function(){
                    switch(error_code){
                        case '3021'://3021 NEI_TITLE_NOT_EXIST
                            abortToBack();
                            break;
                        case '3052'://3052 ECGS_BAD_RESPONSE
                        case '3053'://3053 ECGS_CONNECTION_FAILURE
                            abortToTop();
                            break;
                        default:
                            break;
                    }
                });
            }
        );
        //getXmlでエラーだったらここで抜ける
        if(!ajax_res) return;
    }
    //更新判定、容量取得

    //データタイトル取得
    var data_title = [];
    var conv = convertAOCNsuidToTitleid(ns_uid);
    if(conv.error){
        enableUserOperation();
        enableHomeButton();
        var error_code = conv.error.code_no;
        var error_msg = conv.error.message;
        setErrorHandler(prefixNinja, error_code, error_msg, function(){
            switch(error_code){
                case '3150': //NEI_TITLE_DISABLE_DOWNLOAD(汎用2)->トップ
                    location.href = './#top';
                    break;
            }
        });
    }else{
        for(var a=0; a<conv.length; a++){
            data_title[a] = {};
            data_title[a].title_id = conv[a].title_id;
            data_title[a].title_version = conv[a].title_ver;
        }
    }
    //インストール済みタイトル取得
    var installed_list = [];
    if(isWiiU && data_title.length > 0){
        for(var b=0; b<data_title.length; b++){
            var ins_title_id = data_title[b].title_id;
            var res_install = wiiuDevice.getAocContentIndexList(ins_title_id);
            processJsxError(res_install);

            var variation = ins_title_id.slice(-2);
            installed_list[b] = {};
            installed_list[b].title_id = ins_title_id;
            installed_list[b].variation = variation;
            installed_list[b].content_index = res_install.indexes;
            $.print('installed contentindex :'+res_install.indexes);
        }
    }
    if(buying_aoc_list.length > 0){
        //再ダウンロードチェック
        var redl_cnt = 0;
        var buying_aoc_id = [];
        var buying_free_flg = true;
        for(var c=0; c<buying_aoc_list.length; c++){
            var aoc_list_owned = [];
            //購入済みcontent_indexチェック
            for(var d=0; d<owned_list.length; d++){
                if(owned_list[d].variation===buying_aoc_list[c].variation){
                    for(var e=0; e<buying_aoc_list[c].content_index.length; e++){
                        if(owned_list[d].content_index.indexOf(buying_aoc_list[c].content_index[e])!== -1){
                            aoc_list_owned.push(buying_aoc_list[c].content_index[e]);
                        }
                    }
                }
            }
            //リストのcontent_indexをすべて所有
            if(aoc_list_owned.length===buying_aoc_list[c].content_index.length){
                //インストール済み判定
                var aoc_list_installed = [];
                for(var f=0 ; f<installed_list.length; f++ ) {
                    if(installed_list[f].variation===buying_aoc_list[c].variation){
                        for(var g=0 ; g<buying_aoc_list[c].content_index.length; g++ ) {
                            if(installed_list[f].content_index.indexOf(buying_aoc_list[c].content_index[g])!== -1){
                                aoc_list_installed.push(buying_aoc_list[c].content_index[g]);
                            }
                        }
                    }
                }
                //リストのcontent_indexをすべてインストール済でなければ再ダウンロード
                if(buying_aoc_list[c].content_index.length===aoc_list_installed.length ){
                    //再受信フラグ(インストール済み)
                    add_info['aoc_redl_flg_'+buying_aoc_list[c].aoc_id] = 'false';
                }else{
                    //確認用ログ出力
                    $.print('AOC Re-Download ID :'+buying_aoc_list[c].aoc_id);
                    //再受信フラグ
                    add_info['aoc_redl_flg_'+buying_aoc_list[c].aoc_id] = 'true';
                    redl_cnt++;
                }
            }else{
                //購入用aoc_id
                buying_aoc_id.push(buying_aoc_list[c].aoc_id);
                //購入するアイテム全てが無料かどうかのフラグ
                buying_free_flg &= (add_info['aoc_free_flg_'+buying_aoc_list[c].aoc_id] === 'true');
            }
        }
        //すべて再ダウンロードチェック
        if(buying_aoc_list.length===redl_cnt){
            add_info.aocs_all_redl_flg = 'true';
        }
        //追加コンテンツ無料フラグ(計)を更新
        $.sessionStorage().setItem('aocs_free_flg', buying_free_flg ? 'true' : 'false');
        //購入用aoc_idリスト取得
        add_info.buying_aoc_id_list = buying_aoc_id.join(',');
    }

    //DLタスク登録用リスト取得
    var same_variation_items = [];
    var dl_items = [];
    var aoc_total_size = 0;

    //重複判定
    var checkDuplicate = function(array, str){
        for(var i =0; i < array.length; i++){
            if(str === array[i]){
                return true;
            }
        }
        return false;
    };

    for(var i=0; i<data_title.length; i++){
        //タイトルID,最新バージョン取得
        var title_id = data_title[i].title_id;
        var title_version = data_title[i].title_version;
        var buy_content_index = [];
        var storage_size;
        var is_same_variation = false;
        //購入タイトルcontent_index取得
        if(buying_aoc_dl_list.length > 0){
            for(var j=0; j<buying_aoc_dl_list.length; j++){
                if(buying_aoc_dl_list[j].variation===title_id.slice(-2)){
                    buy_content_index = buying_aoc_dl_list[j].content_index;
                    is_same_variation = true;
                }
            }
        }
        if (is_same_variation) {
            // In-Disc AOC のダイアログ判定用に更新しないデータタイトルに
            // 付いてもバリエーションが同じなら記憶しておく
            same_variation_items.push({
                'title_id': title_id,
                'title_version': title_version
            });
        }

        //content_index重複チェック
        var unique_content_index = [];
        var storage = {};
        var value;
        for (var l=0; l<buy_content_index.length; l++) {
            value = buy_content_index[l];
            if(!(value in storage)) {
                storage[value] = true;
                unique_content_index.push(value);
            }
        }
        //インストール済み更新チェック
        var need_update = false;
        if(isWiiU){
            var res_ver = wiiuDevice.getTitleInstallState(title_id);
            processJsxError(res_ver);
            if(res_ver.installed){
                if(parseInt(res_ver.version,10) < parseInt(title_version,10)){
                    //更新ステータス保存
                    $.print('NEED AOC UPDATE : new ver.'+ title_version + 'installed ver.'+ res_ver.version);
                    $.sessionStorage().setItem('aoc_update_flg','true');
                    /* 更新はアプリ側で行われる */

                    // この data title の更新が必要かどうかのフラグ
                    // SEE #3691
                    need_update = true;
                }
            }
        }


        //インストール済が購入タイトルに含まれる場合DLタスクに登録しない(権利無、インストール済の場合)
        var content_index = [];
        for(var k=0; k<installed_list.length; k++){
            if(title_id===installed_list[k].title_id){
                for(var m=0 ; m<unique_content_index.length; m++ ) {
                    if(!checkDuplicate(installed_list[k].content_index, String(unique_content_index[m]))){
                        content_index.push(parseInt(unique_content_index[m],10));
                    }
                }
            }
        }
        if(isWiiU && content_index.length >0){
            //容量取得
            var json_str = '{"indexes":[' + content_index.join(',') + ']}';
            var res=wiiuEC.getAocInstallInfo(title_id, title_version, json_str);
            $.print('wiiuEC.getAocInstallInfo returns: ' + JSON.stringify(res));
            processJsxError(res);
            if (isAOCBroken(res)) {
                is_aocinfo_broken = true;
            }
            aoc_total_size += parseInt(res.installSize,10);
            storage_size = res.storageSize;
            add_info.aocs_dl_media = res.downloadMedia;
            //容量チェック
            if(parseInt(storage_size,10) < aoc_total_size){
                add_info.size_over_flg = 'true';
            }else{
                add_info.size_over_flg = 'false';
            }
        }
        //content_indexと更新がないデータタイトルは無視
        // SEE #3493
        if (content_index.length === 0 && !need_update) {
            continue;
        } else {
            //DLタスク登録用リスト
            var dl_item = {'title_id':title_id,'title_version':title_version,'content_index':content_index};
            dl_items.push(dl_item);
        }

    }
    add_info.aoc_dl_items = JSON.stringify(dl_items);
    add_info.aoc_same_variation_items = JSON.stringify(same_variation_items);
    //確認用ログ出力
    $.print('AOC Download List : '+add_info.aoc_dl_items);
    $.print('AOC Same Variation List : '+add_info.aoc_same_variation_items);
    //容量変換、単位取得
    var c_size = convertSize(aoc_total_size);
    add_info.aocs_total_size_str = String(c_size.size);
    add_info.aocs_total_size_unit = c_size.unit;

    //save sessionStorage
    $.print('JS AOC SESSION LOG -----------');
    $.each(add_info,function(key,value){
        if (value !== undefined) {
            // 確認用ログ出力
            $.print('JS AOC SESSION LOG :'+key+' is ' +value);
            $.sessionStorage().setItem(key,value);
        }
    });
    $.sessionStorage().setItem('get_aoc_info','true');
    $.print('JS AOC SESSION LOG -----------');

    $.print("getAOCInfo end");
}
//追加コンテンツ購入価格
function getAocPriceList(t_id,aoc_id){
    "use strict";
    //@param aoc_id str

    /*
    //balance
    price_info['current_balance']     -> 現在の残高(int)
    price_info['current_balance_str'] -> 現在の残高(str)
    price_info['post_balance']        -> 購入後の残高(int)
    price_info['post_balance_str']    -> 購入後の残高(str)

    price_info['aocs_price_str']        -> 追加コンテンツ合計価格(税抜)(str)
    price_info['aocs_price_id']         -> 追加コンテンツ価格ID(str,カンマ区切り)
    price_info['aocs_discount_id']      -> 追加コンテンツ値引き適用価格ID(str,カンマ区切り)
    price_info['aocs_tax_str']          -> 追加コンテンツ合計税金(str)
    price_info['aocs_taxin_price']      -> 追加コンテンツ合計価格(税込)(int)
    price_info['aocs_taxin_price_str']  -> 追加コンテンツ合計価格(税込)(str)

    price_info['aoc_price_str_n']       -> 追加コンテンツ価格(税抜)(str)
    price_info['aoc_tax_str_n']         -> 税金(int)
    price_info['aoc_tax_str_n']         -> 税金(str)
    price_info['aoc_taxin_price_str_n'] -> 追加コンテンツ価格(税込)(str)
    */
    var title_id = t_id;
    var aoc_id_list = aoc_id.split(',');
    var price_info = {};
    var price_id = [];
    var discount_id = [];
    var req_obj_aoc = {
        url    : ninjaBase + 'ws/' + country + '/title/'+ title_id +'/aocs/prepurchase_info',
        type   : 'GET',
        data   :{
            'lang':lang,
            'aoc[]':aoc_id
        }
    };
    $.getXml(req_obj_aoc)
        .done(
        function(xml){
            aoc_id_list.forEach(function(id) {
                var purchasing_content = $(xml).find('purchasing_content[id="' + id + '"]');
                var price = purchasing_content.find('payment_amount').children('price');
                var regular_price  = price.find('regular_price');
                var discount_price = price.find('discount_price');
                if (discount_price.length !== 0) {
                    price_info['aoc_price_str_'+purchasing_content.attr('id')] = discount_price.children('amount').text();
                } else {
                    price_info['aoc_price_str_'+purchasing_content.attr('id')] = regular_price.children('amount').text();
                }
                price_id.push(regular_price.attr('id'));
                discount_id.push(discount_price.attr('id'));
                price_info['aoc_tax_str_'+id] = purchasing_content.find('tax_amount').children('amount').text();
                price_info['aoc_taxin_price_str_'+id] = purchasing_content.find('total_amount').children('amount').text();

                price_info['_nsig_aoc_taxin_price_'+id] = purchasing_content.find('total_amount').children('raw_value').text();
            });
            price_info.aocs_price_id = price_id.join(',');
            price_info.aocs_discount_id = discount_id.join(',');
            price_info.current_balance_str = $(xml).find('current_balance').children('amount').text();
            price_info.current_balance = $(xml).find('current_balance').children('raw_value').text();
            price_info.post_balance_str = $(xml).find('post_balance').children('amount').text();
            price_info.post_balance = $(xml).find('post_balance').children('raw_value').text();

            var regular_price  = $(xml).find('total_amount').children('price').children('regular_price');
            var discount_price = $(xml).find('total_amount').children('price').children('discount_price');
            if (discount_price.length !== 0) {
                price_info.aocs_price_str = discount_price.children('amount').text();
            } else {
                price_info.aocs_price_str = regular_price.children('amount').text();
            }
            price_info.aocs_tax = $(xml).find('total_amount').children('tax_amount').children('raw_value').text();
            price_info.aocs_tax_str = $(xml).find('total_amount').children('tax_amount').children('amount').text();
            price_info.aocs_taxin_price = $(xml).find('total_amount').children('total_amount').children('raw_value').text();
            price_info.aocs_taxin_price_str = $(xml).find('total_amount').children('total_amount').children('amount').text();

            //save sessionStorage
            $.each(price_info,function(key,value){
                if (value !== undefined) {
                    // 確認用ログ出力
                    $.print('JS AOC SESSION LOG :'+key+' is ' +value);
                    $.sessionStorage().setItem(key,value);
                }
            });
        }
    )
        .fail(
        function(xml){
            enableUserOperation();
            enableHomeButton();
            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();
            setErrorHandler(prefixNinja, error_code, error_msg, function(status){
                    var init_flg = true;
                    switch(error_code){
                        case '3021': //NEI_TITLE_NOT_EXIST
                        case '3026'://3026 NEI_AOC_NOT_EXIST
                            abortToBack();
                            break;
                        case '3052'://3052 ECGS_BAD_RESPONSE
                            abortToTop();
                            break;
                        case '3053'://3053 ECGS_CONNECTION_FAILURE
                            abortToTop();
                            break;
                        case '3122'://3122 NEI_TAX_LOCATION_NOT_FOUND
                            // 3124が返ってくるはずなので異常扱いにする
                            abortToTop();
                            break;
                        case '3123'://3123 NEI_ACCOUNT_HAS_NO_TAX_LOCATION_ID
                            // TODO ここでは 3124と同じ処理をすべき。でもfunctions.jsで別のtypeで定義されているので
                        	// コールバックでconfirmを出すことができない。現状3123は返ってこないはずだが
                        	// 1.5 NUP以降にエラー処理を再検討する
                            abortToBack();
                            break;
                        case '3124'://3124 NEI_INVALID_TAX_LOCATION_ID
                            //住所設定画面へ遷移
                            if(status===ERROR_NOT_PROCESSED) {
                                var result = $.confirm(error_msg, $('#dialog_back').text(), $('#dialog_msg_ok').text());
                                if(result) {
                                    // 住所設定へ
                                    location.replace('legal07_02.html?type=aoc'+
                                        '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                        '&buying_section=addr'+
                                        '&aoc[]='+ $.sessionStorage().getItem('aoc_id_list'));
                                    init_flg = false;
                                } else {
                                    // やめる
                                    abortToBack();
                                }
                            } else {
                                abortToTop();
                            }
                            break;
                        case '3150'://3150 NEI_TITLE_DISABLE_DOWNLOAD
                            abortToTop();
                            break;
                        case '3151'://3151 NEI_NO_ONLINE_PRICE
                            abortToTop();
                            break;
                        case '3154'://3154 NEI_TITLE_ALREADY_OWNED
                            $.alert(error_msg, $('#dialog_msg_ok').text());
                            abortToBack();
                            break;
                        case '7534'://7534 ECS_VCSPAS_INVALID_TAX_LOCATION_ID
                            // 3124が返ってくるはずなので異常扱いにする
                            abortToTop();
                            break;
                        default:
                            abortToTop();
                            break;
                    }
                    if(init_flg) initPurchaseInfo();
            });
        }
    );
}

function getTicketsInfo(title_id){
    var ajax_res = true;
    // 利用券の説明文を tickets API（利用券一覧）の方から
    // 取得する。SEE #3884
    var req_obj_ticket = {
        url  : samuraiBase + 'ws/' + country + '/title/'+title_id+'/tickets',
        type : 'GET',
        async : false,
        data:{'lang':lang,
              'offset': 0,
              'limit' : 0}
    };
    //ajax
    $.getXml(req_obj_ticket)
    .done(
        function(tickets_xml){
            //注意文言
            if($(tickets_xml).find('title').children('tickets_description').size() >0){
                var description = $(tickets_xml).find('title')
                    .children('tickets_description')
                    .text();
                $('#buy_about_this').append('<p>'+ description + '</p>');
            }
        }
    )
    .fail(
        function(tickets_xml){
            ajax_res = false;

            var error_code = $(tickets_xml.responseText).find('code').text();
            var error_msg  = $(tickets_xml.responseText).find('message').text();

            if(error_code !== undefined && error_msg !== undefined ) {
                $.showError(prefixSamurai + error_code, error_msg);
            } else {
                $.showError(errorCodeRetriable);
            }
            // TODO setErrorHandlerでエラー処理を共通化する？12/01現在怖いので変えない
            abortToBack();
        }
    );
    return ajax_res;
}

//期間券購入情報
function getTicketInfo(t_id,tk_id,is_redeem) {
    "use strict";
    /*
    //ticket
    'ticket_id'        -> 利用券ID
    'ticket_name'      -> 利用券名
    'ticket_free_flg'  -> 利用券無料フラグ
    */
    var title_id = t_id;
    var ticket_id = tk_id;
    var add_info;
    var add_price_info;
    var ajax_res = true;

    //ticket info
    var request = {
        url   : samuraiBase + 'ws/' + country + '/ticket/' + ticket_id,
        type  : 'GET',
        async : false,
        data  : { 'lang': lang }
    };
    $.getXml(request)
    .done(function(xml) {
        add_info = $(xml).find('name').text();
        $.sessionStorage().setItem('ticket_name', add_info);
        $.sessionStorage().setItem('ticket_id', ticket_id);
        ajax_res = getTicketsInfo(title_id);

        return false;
    })
    .fail(function(xml) {
        ajax_res = false;

        var error_code = $(xml.responseText).find('code').text();
        var error_msg  = $(xml.responseText).find('message').text();

        if(error_code !== undefined && error_msg !== undefined ) {
            $.showError(prefixSamurai + error_code, error_msg);
        } else {
            $.showError(errorCodeRetriable);
        }
        // TODO setErrorHandlerでエラー処理を共通化する？12/01現在怖いので変えない
        abortToBack();
    });

    //getXmlでエラーだったらここで抜ける
    if(!ajax_res) return;
    //ticket free check
    var req_obj_price = {
        url  : samuraiOriginBase + 'ws/' + country + '/tickets/prices',
        type : 'GET',
        data : {'ticket[]':ticket_id,
                'lang':lang}
    };
    //ajax
    $.getXml(req_obj_price)
    .done(
        function(xml){
            if(is_redeem || $(xml).find('eshop_sales_status').text()==='onsale'){

                // ディスカウント価格も含めて無料かどうか判定する
                var regular_price  = $(xml).find('regular_price');
                var discount_price = $(xml).find('discount_price');

                var has_discount_price = (discount_price.length > 0);

                if (
                    (!has_discount_price &&
                     isZeroPrice(regular_price.children('raw_value').text())
                    ) ||
                    ( has_discount_price &&
                      isZeroPrice(discount_price.children('raw_value').text())
                    )
                ) {
                    add_price_info = 'true';
                }else{
                    add_price_info = 'false';
                }
                //save sessionStorage
                $.sessionStorage().setItem('ticket_free_flg',add_price_info);
            }else{
                ajax_res = false;
                $.showError(errorCodeRetriable);
                abortToBack();
            }
        }
    )
    .fail(
        function(xml){
            ajax_res = false;

            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();

            if(error_code !== undefined && error_msg !== undefined ) {
                $.showError(prefixSamurai + error_code, error_msg);
            } else {
                $.showError(errorCodeRetriable);
            }
            // TODO setErrorHandlerでエラー処理を共通化する？12/01現在怖いので変えない
            abortToBack();
        }
    );
    //getXmlでエラーだったらここで抜ける
    if(!ajax_res) return;
    $.sessionStorage().setItem('get_ticket_info','true');
}
//期間券購入価格
function getTicketPrice(t_id,tk_id){
    "use strict";
    /*
    //balance
    price_info['current_balance']     -> 現在の残高(int)
    price_info['current_balance_str'] -> 現在の残高(str)
    price_info['post_balance']        -> 購入後の残高(int)
    price_info['post_balance_str']    -> 購入後の残高(str)

    price_info['ticket_price_str']       -> 利用券価格(税抜)(str)
    price_info['ticket_price_id']        -> 利用券価格ID
    price_info['ticket_tax']             -> 税金(int)
    price_info['ticket_tax_str']         -> 税金(str)
    price_info['ticket_taxin_price']     -> 利用券価格(税込)(int)
    price_info['ticket_taxin_price_str'] -> 利用券価格(税込)(str)
    */
    var title_id = t_id;
    var ticket_id = tk_id;
    var price_info = {};
    var req_obj_title = {
        url    : ninjaBase + 'ws/' + country + '/title/'+ title_id +'/ticket/'+ ticket_id +'/prepurchase_info',
        type   : 'GET',
        data:{'lang':lang}
    };
    $.getXml(req_obj_title)
        .done(
        function(xml){
            var price = $(xml).find('payment_amount').children('price');
            var discount = price.find('discount_price');
            if (discount.length !== 0) {
                price_info.ticket_price_id  = price.children('discount_price').attr('id');
                price_info.ticket_price_str = price.children('discount_price').children('amount').text();

                // discount の際には両方の PriceId が購入処理で必要になる
                price_info.ticket_regular_price_id  = price.children('regular_price').attr('id');
                price_info.ticket_discount_price_id = price.children('discount_price').attr('id');
            } else {
                price_info.ticket_price_id  = price.children('regular_price').attr('id');
                price_info.ticket_price_str = price.children('regular_price').children('amount').text();
            }

            price_info.ticket_tax = $(xml).find('total_amount').children('tax_amount').children('raw_value').text();
            price_info.ticket_tax_str = $(xml).find('total_amount').children('tax_amount').children('amount').text();
            price_info.ticket_taxin_price = $(xml).find('total_amount').children('total_amount').children('raw_value').text();
            price_info.ticket_taxin_price_str = $(xml).find('total_amount').children('total_amount').children('amount').text();

            price_info.current_balance_str = $(xml).find('current_balance').children('amount').text();
            price_info.current_balance = $(xml).find('current_balance').children('raw_value').text();
            price_info.post_balance_str = $(xml).find('post_balance').children('amount').text();
            price_info.post_balance = $(xml).find('post_balance').children('raw_value').text();

            //save sessionStorage
            $.each(price_info,function(key,value){
                $.sessionStorage().setItem(key,value);
            });
        }
    )
        .fail(
        function(xml){
            enableUserOperation();
            enableHomeButton();
            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();
            setErrorHandler(prefixNinja, error_code, error_msg, function(status){
                var init_flg = true;
                switch(error_code){
                    case '3021': //NEI_TITLE_NOT_EXIST
                    case '3025'://3025 NEI_DATA_TITLE_NOT_EXIST
                    case '3027'://3027 NEI_TICKET_NOT_EXIST
                        abortToBack();
                        break;
                    case '3052'://3052 ECGS_BAD_RESPONSE
                        abortToTop();
                        break;
                    case '3053'://3053 ECGS_CONNECTION_FAILURE
                        abortToTop();
                        break;
                    case '3122'://3122 NEI_TAX_LOCATION_NOT_FOUND
                        // 3124が返ってくるはずなので異常扱いにする
                        abortToTop();
                        break;
                    case '3123'://3123 NEI_ACCOUNT_HAS_NO_TAX_LOCATION_ID
                        abortToBack();
                        break;
                    case '3124'://3124 NEI_INVALID_TAX_LOCATION_ID
                        //住所設定画面へ遷移
                        if(status===ERROR_NOT_PROCESSED) {
                            var result = $.confirm(error_msg, $('#dialog_back').text(), $('#dialog_msg_ok').text());
                            if(result) {
                                // 住所設定へ
                                location.replace('legal07_02.html?type=ticket'+
                                    '&title='+ $.sessionStorage().getItem('buying_title_id') +
                                    '&buying_section=addr'+
                                    '&ticket='+ $.sessionStorage().getItem('ticket_id'));
                                init_flg = false;
                            } else {
                                // やめる
                                abortToBack();
                            }
                        } else {
                            abortToTop();
                        }
                        break;
                    case '3150'://3150 NEI_TITLE_DISABLE_DOWNLOAD
                        abortToTop();
                        break;
                    case '3151'://3151 NEI_NO_ONLINE_PRICE
                        abortToTop();
                        break;
                    case '3154'://3154 NEI_TITLE_ALREADY_OWNED
                        $.alert(error_msg, $('#dialog_msg_ok').text());
                        abortToBack();
                        break;
                    case '7534'://7534 ECS_VCSPAS_INVALID_TAX_LOCATION_ID
                        // 3124が返ってくるはずなので異常扱いにする
                        abortToTop();
                        break;
                    default:
                        abortToTop();
                        break;
                }
                if(init_flg) initPurchaseInfo();
            });
        }
    );
}
//強制的に前ページに戻る
function abortToBack(){
    initPurchaseInfo();
    historyBack(true);
    //例外を発生させてこのページでの処理を強制終了させる
    throw new Error('Exception to stop the script in this page.');
}
//強制的にトップに戻る
function abortToTop(){
    initPurchaseInfo();
    disableUserOperation();
    location.href = './#top';
    //例外を発生させてこのページでの処理を強制終了させる
    throw new Error('Exception to stop the script in this page.');
}

//history.back時の処理
window.onpageshow = function(e) {
    //BGM
    setBGM('main');
};
