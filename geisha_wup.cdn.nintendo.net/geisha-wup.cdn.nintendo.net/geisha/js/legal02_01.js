$(function() {
// -------------------------------------------------
// main
// -------------------------------------------------

    var menu_bar = new MenuBar(1);

    //eShopについてメッセージ取得
    var req_obj = {
        url  : samuraiBase+'ws/' + country + '/eshop_message/about',
        type : 'GET',
        data : {'lang':lang}
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
