$(function() {
    "use strict";
// -------------------------------------------------
// main
// -------------------------------------------------

    //set menubar
    var menu_bar;

    //残高追加できない国チェック
    if(!checkPCard() && !checkCCard() && !isNfcAvailable()){
        $('#ywc').hide();
        $('#ywc_not').show();
    //プリカとNFC利用国チェック
    }else{
        $('#ywc').show();
        $('#ywc_not').hide();
        if(!checkPCard()){
            $('#sel_pcard').hide();
        }
        if(!checkCCard()){
            $('#sel_ccard').hide();
            // 欧州でクレジットカード不可になった際の対応 SHOPN-3377
            if (getShopRegion() === 'EUR') {
                $('#sel_ccard_disabled, .ccard_disabled_eu').show();
            } else if (getShopRegion() === 'AUS') {
                $('#sel_ccard_disabled, .ccard_disabled_au').show();
            }
        }
        if(!isNfcAvailable()){
            $('#sel_iccard').hide();
        }
    }
    var url = $.url();
    if(url.attr('file')==='money01_01.html'){
        //購入フローから
        if(url.param('buying_section')==='bal'){
            menu_bar= new MenuBar(4);
            $.sessionStorage().setItem('buying_section',url.param('buying_section'));
            switch(url.param('type')){
                case('title'):
                    $.sessionStorage().setItem('money_referrer','buy01_01.html?type='+url.param('type') +
                                              '&title='+url.param('title')+
                                              getCouponCodeUrlQuery() +
                                              '&buying_section='+url.param('buying_section'));
                break;
                case('aoc'):
                    $.sessionStorage().setItem('buying_aoc',url.param('aoc[]'));
                    $.sessionStorage().setItem('money_referrer','buy01_01.html?type='+url.param('type') +
                                               '&title='+url.param('title')+
                                               '&buying_section='+url.param('buying_section')+
                                              '&aoc[]='+url.param('aoc[]'));
                break;
                case('ticket'):
                    $.sessionStorage().setItem('buying_ticket',url.param('ticket'));
                    $.sessionStorage().setItem('money_referrer','buy01_01.html?type='+url.param('type') +
                                               '&title='+url.param('title')+
                                               '&buying_section='+url.param('buying_section')+
                                               '&ticket='+url.param('ticket'));
                break;
                default:
                break;
            }
            menu_bar.changeBackEvt(function() {
                menu_bar.initBackEvt($.sessionStorage().getItem('money_referrer'));
            });
        //戻る
        }else if($.sessionStorage().getItem('buying_section')==='bal'){
            menu_bar= new MenuBar(4);
            menu_bar.changeBackEvt(function() {
                menu_bar.initBackEvt($.sessionStorage().getItem('money_referrer'));
            });
        //通常フローから
        }else{
            menu_bar= new MenuBar(4);
            //購入情報初期化
            initPurchaseInfo();
        }
    }else{
        menu_bar= new MenuBar(4);
    }
    //資金決済法ボタン出し分け
    if($.sessionStorage().getItem('legal_payment_message_required') === 'true'){
        $('#sel_settlement_law').show();
    }

// -------------------------------------------------
// event
// -------------------------------------------------
    $('#evt_prepaid').buttonAClick().click(function(e){
        e.preventDefault();
        location.replace('index.html#redeem');
    });
    $('#evt_card').buttonAClick().click(function(e){
        e.preventDefault();
        location.replace('money03_01.html');
    });
    $('#evt_ic_card').buttonAClick().click(function(e){
        e.preventDefault();
        location.replace('money06_01.html');
    });
});
//history.back時の処理
window.onpageshow = function(e) {
    getBalance();
    //BGM
    setBGM('setting');
};
