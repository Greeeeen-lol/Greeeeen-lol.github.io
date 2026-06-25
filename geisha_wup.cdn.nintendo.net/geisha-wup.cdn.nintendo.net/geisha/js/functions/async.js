
/*
 * function setWishList
 *
 * save localStorage "wish_list"
 * save localStorage "wish_full_flg"
 *
 */
function setWishList(flg,save_flg){
    var wish_arr = [];
    var wish_full_flg = 'false';
    var wish_session = '0';
    var req_obj_wish = {
                  url  : ninjaBase + 'ws/my/wishlist',
                  type : 'GET'
    };
    var async = true;
    if(flg !== undefined){
        async = flg;
    }
    var save = true;
    if(save_flg !==undefined){
        save = save_flg;
    }
    //ajax
    $.getXml(req_obj_wish,async)
    .done(
        function(xml){
            var wish_total = $(xml).find('wishlist').attr('total');
            if(wish_total >=100 ){
                wish_full_flg = 'true';
            }
            if($(xml).find('wished_title').size() >0){
                $(xml).find('wished_title').each(function(){
                    wish_arr.push($(this).attr('id'));
                });
                wish_session = wish_arr.join(",");
            }
            $.localStorage().setItem('wish_list',wish_session);
            $.localStorage().setItem('wish_full_flg',wish_full_flg);
            if(save){
                //ホームボタン禁止
                disableHomeButton();
                $.save();
                //ホームボタン禁止解除
                enableHomeButton();
            }
            $.print('SUCCESS :localStorage() wish list saved!');
        }
    )
    .fail(
        function(xml){
            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();
            setErrorHandler(prefixNinja, error_code, error_msg);
        }
    );
}
/*
 * function setLangSelect
 *
 * save localStorage "lang_sel_flg"
 *
 */
function setLangSelect(){
    var req_obj_lang = {
                  url  : ninjaBase + 'ws/country/'+country,
                  type : 'GET'
    };
    //ajax
    $.getXml(req_obj_lang,true)
    .done(
        function(xml){
            var lang_sel_flg = $(xml).find('language_selectable').text();
            $.localStorage().setItem('lang_sel_flg',lang_sel_flg);
            //ホームボタン禁止
            disableHomeButton();
            $.save();
            //ホームボタン禁止解除
            enableHomeButton();
            $.print('SUCCESS :localStorage() language selectable saved!');
        }
    )
    .fail(
        function(xml){
            var error_code = $(xml.responseText).find('code').text();
            var error_msg = $(xml.responseText).find('message').text();
            setErrorHandler(prefixNinja, error_code, error_msg);
        }
    );

}
function async(){
//init wish list
if($.localStorage().getItem('wish_list')==null || $.localStorage().getItem('wish_full_flg')==null){
    setWishList();
}
//init language selectable
if($.localStorage().getItem('lang_sel_flg')==null){
    setLangSelect();
}
}
