$(function() {
// -------------------------------------------------
// main
// -------------------------------------------------

    var url = $.url();
    //set menubar
    var menu_bar;
    //購入フローから
    if(url.param('buying_section')==='law'){
        $.sessionStorage().setItem('buying_section',url.param('buying_section'));
        switch(url.param('type')){
            case'title':
                $.sessionStorage().setItem('addr_referrer','buy01_01.html?type='+url.param('type') +
                    '&title='+url.param('title')+
                    getCouponCodeUrlQuery() +
                    '&buying_section='+url.param('buying_section'));
                break;
            case'aoc':
                $.sessionStorage().setItem('buying_aoc',url.param('aoc[]'));
                $.sessionStorage().setItem('addr_referrer','buy01_01.html?type='+url.param('type') +
                    '&title='+url.param('title')+
                    '&buying_section='+url.param('buying_section')+
                    '&aoc[]='+url.param('aoc[]'));
                break;
            case'ticket':
                $.sessionStorage().setItem('buying_ticket',url.param('ticket'));
                $.sessionStorage().setItem('addr_referrer','buy01_01.html?type='+url.param('type') +
                    '&title='+url.param('title')+
                    '&buying_section='+url.param('buying_section')+
                    '&ticket='+url.param('ticket'));
                break;
            case'demo':
                $.sessionStorage().setItem('addr_referrer','buy01_01.html?type='+url.param('type') +
                    '&title='+url.param('title')+
                    '&demo='+url.param('demo')+
                    '&buying_section='+url.param('buying_section'));
                break;
            default:
                break;
        }
        menu_bar= new MenuBar(6, $.sessionStorage().getItem('addr_referrer'));
    //戻る
    }else if($.sessionStorage().getItem('buying_section')==='law'){
        menu_bar = new MenuBar(6);
        menu_bar.initBackEvt($.sessionStorage().getItem('addr_referrer'));
    //継続課金から
    }else if(url.param('seq')==='auto_billing'){
        menu_bar = new MenuBar(6);
    }else{
        menu_bar = new MenuBar(1);
    }

    var nsuid = url.param('title');
    var type = url.param('type');
    var is_correct_type = (type === 'title' || type === 'aoc' || type === 'ticket');
    if (!is_correct_type) {
        // title, aoc, ticket 以外ならデフォルトのtitleにする
        type = 'title';
    }
    //特商法メッセージ取得
    var req_obj = {
        url  : samuraiBase+'ws/' + country + '/title/' + nsuid + '/law_message',
        type : 'GET',
        data : {'lang':lang, content_type:type }
    };

    //ajax
    $.getXml(req_obj)
        .done(
        function(xml){
            $('#sel_text').html($(xml).find('body').text().replace(/\n/g,'<br />\n'));
        }
        )
        .fail(
        function(xml){
            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();
            setErrorHandler(prefixSamurai, error_code, error_msg, function(){});
        }
    );

// -------------------------------------------------
// event
// -------------------------------------------------

});

// -------------------------------------------------
// functions
// -------------------------------------------------

//history.back時の処理
window.onpageshow = function(e) {
    if (e.persisted) {
        $('#sel_menu_bar .on').removeClass('on'); // SEE #11973
    }
    getBalance();
    //BGM
    setBGM('setting');
};
