$(function(){
    "use strict";
// -------------------------------------------------
// main
// -------------------------------------------------
    //get contents
    var inst_owned = new OwnedTitle();
    inst_owned.request();
    var inst_shared = new SharedTitle();
    inst_shared.request();
// -------------------------------------------------
// event
// -------------------------------------------------


});
// -------------------------------------------------
// functions
// -------------------------------------------------
function OwnedTitle() {
    "use strict";
    var self = this;
    this.page_num = 0;
    this.total_num = 0;
    this.limit = 25;
    this.lock_flg = false;

    this.request = function(offset){
        var req_data;
        if(offset!==undefined){
            req_data = { 'offset' : offset,'limit' : self.limit};
        }else{
            req_data = { 'offset' : 0,'limit' : self.limit};
        }
        var req_obj = {
            url  : ninjaBase+'ws/my/owned_titles',
            type : 'GET',
            data : req_data
        };
        //ajax
        $.getXml(req_obj,true)
        .done(
            function(xml){
                self.total_num = parseInt($(xml).find('owned_titles').attr('total'),10);
                self.renderPager();
                $.when(self.render(xml)).pipe(function(){
                    $('#loading_owned_titles').hide();
                    self.event();
                    if(self.lock_flg===true){
                        enableUserOperation();
                        self.lock_flg = false;
                    }
                });
            }
        )
        .fail(
            function(xml){
                var error_code = $(xml.responseText).find('code').text();
                var error_msg = $(xml.responseText).find('message').text();
                setErrorHandler(prefixNinja, error_code, error_msg, function(){
                    switch(error_code){
                    case '3053': //ECGS_CONNECTION_FAILURE(汎用2)->トップ
                        location.href = './#top';
                        break;
                    case '3010': //NEI_INVALID_SESSION(専用1)
                    case '3049': //NEI_UNEXPECTED_SERVER_ERROR(汎用1)
                    case '6696': //ECS_IAS_ERROR(汎用1)
                    case '6699': //ECS_INTERNAL_ERROR(汎用1)
                    default:
                        break;
                    }
                });
            }
        );
    };
    this.render = function(xml){
        $('html,body').animate({ scrollTop: $('html,body').offset().top }, 0);
        if(self.total_num===0){
            $('#data_none01').show();
        }else{
            $('#data_exist01').show();
            $('#sel_owned_titles  li').remove();

            $(xml).find('owned_title').each(function(){
                var title_id = $(this).attr('id');
                if (!title_id) {
                    // 消されたタイトルはスキップする SEE #31459
                    return;
                }
                var data_title_id = $(this).children('title_id').text();
                var html_title = $(this).children('name').text();
                var url_icon = $(this).children('icon_url').text();
                var url_detail = './#title?title='+$(this).attr('id');
                var url_redl = 'buy01_01.html?type=title&title='+title_id;
                //レーティング情報
                var str_rating ='';
                if($(this).children('rating_info').size() >0){
                    var rating_sys = $(this).find('rating_system').children('name').text();
                    var rating_name = $(this).find('rating').children('name').text();
                    if(rating_sys != '' && rating_name != '') {
                        str_rating = rating_sys+': '+rating_name;
                    }
                }
                //再受信、更新判定
                var param_display_redl;
                if(isWiiU){
                    var res = wiiuDevice.getTitleInstallState(data_title_id);
                    processJsxError(res);
                    if(!res.installed){
                        //再受信ボタン
                        param_display_redl = 'block';
                    }else{
                        param_display_redl = 'none';
                    }
                }else{
                    param_display_redl = 'none';
                }
                //render template
                $('#template_title').tmpl({
                    'html_title'      : html_title,
                    'url_icon'       : url_icon,
                    'url_detail'     : url_detail,
                    'url_redl'        : url_redl,
                    'str_rating'     : str_rating,
                    'str_detail'     : $('#str_detail').text(),
                    'str_redl'       : $('#str_redl').text(),
                    'param_display_redl' : param_display_redl
                }).appendTo('#sel_owned_titles');
            });
        }
    };
    this.event = function(){
        lazyload('img.lazy');
        //prev next pagebuttonイベント
        $('.evt_owned_pager_prev, .evt_owned_pager_next, a.evt_owned_pager_num').buttonAClick().click(function(e){
            e.preventDefault();
            var offset = ($(this).data('page_num')-1)*self.limit;
            self.page_num = $(this).data('page_num');
            if($(this).hasClass('evt_owned_pager_num')){
                $('.evt_owned_pager_num').removeClass('btn_006').addClass('btn_002');
                $(this).removeClass('btn_002').addClass('btn_006');
            }else if($(this).hasClass('evt_owned_pager_prev')){
                $(this).parent().removeClass('ps_arrow_l02').addClass('ps_arrow_l03');
            }else if($(this).hasClass('evt_owned_pager_next')){
                $(this).parent().removeClass('ps_arrow_r02').addClass('ps_arrow_r03');
            }
            disableUserOperation();
            self.lock_flg = true;
            self.request(offset);
        });
    };
    this.renderPager = function(){
        $('.sel_owned_navi li').remove();
        //ページャー
        if(self.total_num > self.limit){
            var total = Math.ceil(self.total_num/self.limit);//ページャー数
            if(total>1){
                var show_navi = 5;
                if(total < show_navi){
                    show_navi = total;
                }
                var current = 1;
                if(self.page_num>1){
                    current = parseInt(self.page_num,10);
                }
                var show_navih = Math.floor(show_navi / 2);
                var start = current - show_navih;
                var end = current + show_navih;
                if(start <= 0){
                    start = 1;
                    end = show_navi;
                }
                if(end > total){
                    start = total - show_navi+1;
                    end = total;
                }
                if((current < 4 && total > 7) || (current < 4 && total === 6)){
                    end++;
                }
                if((current > total-3 && total > 7) || (current > total-3 && total === 6)){
                    start--;
                }
                if(total===7){
                    start =1;
                    end =7;
                }
                var navi_html = '';
                //prev
                if(current > 1){
                    navi_html += '<li class="ps_arrow_l02"><a href="#" class="evt_owned_pager_prev se" data-se-label="SE_WAVE_OK_SUB" data-page_num="'+(current - 1)+'">'+(current - 1)+'</a></li>';
                }else{
                    navi_html += '<li class="ps_arrow_l01"><a>&lt;</a></li>';
                }
                //min表示
                if(current > 3 && total >7){
                    navi_html += '<li><a href="#" class="btn_002 evt_owned_pager_num se" data-se-label="SE_WAVE_OK_SUB" data-page_num="1">1</a></li>';
                    if(current > 4 && total >7){
                        navi_html += '<li class="ps_3point">...</li>';
                    }
                }
                for(var i=start; i<=end; i++){
                    if(i === current){
                        navi_html += '<li><a href="#" class="btn_006 evt_owned_pager_num se" data-se-label="SE_WAVE_OK_SUB" data-page_num="'+i+'">'+i+'</a></li>';
                    }else{
                        navi_html += '<li><a href="#" class="btn_002 evt_owned_pager_num se" data-se-label="SE_WAVE_OK_SUB" data-page_num="'+i+'">'+i+'</a></li>';
                    }
                }

                //max表示
                if(current < total - 2 && total>7 ){
                    if(current < total - 3 && total >7){
                        navi_html += '<li class="ps_3point">...</li>';
                    }
                    navi_html += '<li><a href="#" class="btn_002 evt_owned_pager_num se" data-se-label="SE_WAVE_OK_SUB" data-page_num="'+total+'">'+total+'</a></li>';
                }
                //next
                if(current < total){
                    navi_html += '<li class="ps_arrow_r02"><a href="#" class="evt_owned_pager_next se" data-se-label="SE_WAVE_OK_SUB" data-page_num="'+(current + 1)+'">'+(current + 1)+'</a></li>';
                }else{
                    navi_html += '<li class="ps_arrow_r01"><a>&gt;</a></li>';
                }
                $('.sel_owned_navi').append(navi_html);
            }
        }
    };

}
function SharedTitle() {
    "use strict";
    var self = this;
    this.page_num = 0;
    this.total_num = 0;
    this.limit = 25;
    this.lock_flg = false;

    this.request = function(offset){
        var req_data;
        if(offset!==undefined){
            req_data = { 'offset' : offset,'limit' : self.limit};
        }else{
            req_data = { 'offset' : 0,'limit' : self.limit};
        }
        var req_obj = {
            url  : ninjaBase+'ws/my/shared_titles',
            type : 'GET',
            data : req_data
        };
        //ajax
        $.getXml(req_obj,true)
            .done(
            function(xml){
                self.total_num = parseInt($(xml).find('owned_titles').attr('total'),10);

                // local storage のデータをクリアする（次のページでセットされる）
                // SEE #8857
                $.localStorage().removeItem('device_order_list');
                $.localStorage().removeItem('device_order_list_modified');
                $.localStorage().removeItem('device_order_list_rvc');
                if (isWiiU) {
                    criticalAction(function() {
                        $.localStorage().write();
                    });
                    $.print("shared title list mismatch. "
                        + "device order list deleted.");
                }

                self.renderPager();
                $.when(self.render(xml)).pipe(function(){
                    $('#loading_shared_titles').hide();
                    self.event();
                    if(self.lock_flg===true){
                        enableUserOperation();
                        self.lock_flg = false;
                    }
                });
            }
        )
            .fail(
            function(xml){
                var error_code = $(xml.responseText).find('code').text();
                var error_msg = $(xml.responseText).find('message').text();
                setErrorHandler(prefixNinja, error_code, error_msg, function(){
                    switch(error_code){
                    case '3053': //ECGS_CONNECTION_FAILURE(汎用2)->トップ
                        location.href = './#top';
                        break;
                    case '3010': //NEI_INVALID_SESSION(専用1)
                    case '3049': //NEI_UNEXPECTED_SERVER_ERROR(汎用1)
                    case '6696': //ECS_IAS_ERROR(汎用1)
                    case '6699': //ECS_INTERNAL_ERROR(汎用1)
                    default:
                        break;
                    }
                });
            }
        );
    };
    this.render = function(xml){
        $('html,body').animate({ scrollTop: $('html,body').offset().top }, 0);
        if(self.total_num===0){
            $('#data_none02').show();
        }else{
            $('#data_exist02').show();
            $('#sel_shared_titles  li').remove();

            $(xml).find('owned_title').each(function(){
                var title_id = $(this).attr('id');
                if (!title_id) {
                    // 消されたタイトルはスキップする SEE #31459
                    return;
                }

                var data_title_id = $(this).children('title_id').text();
                var html_title = $(this).children('name').text();
                var url_icon = $(this).children('icon_url').text();
                var url_detail = './#title?title='+$(this).attr('id');
                var url_redl = 'buy01_01.html?type=title&title='+title_id;
                //レーティング情報
                var str_rating ='';
                if($(this).children('rating_info').size() >0){
                    var rating_sys = $(this).find('rating_system').children('name').text();
                    var rating_name = $(this).find('rating').children('name').text();
                    if(rating_sys != '' && rating_name != '') {
                        str_rating = rating_sys+': '+rating_name;
                    }
                }
                //再受信、更新判定
                var param_display_redl;
                if(isWiiU){
                    var res = wiiuDevice.getTitleInstallState(data_title_id);
                    processJsxError(res);
                    if(!res.installed){
                        //再受信ボタン
                        param_display_redl = 'block';
                    }else{
                        param_display_redl = 'none';
                    }
                }else{
                    param_display_redl = 'none';
                }
                //render template
                $('#template_title').tmpl({
                    'html_title'      : html_title,
                    'url_icon'       : url_icon,
                    'url_detail'     : url_detail,
                    'url_redl'        : url_redl,
                    'str_rating'     : str_rating,
                    'str_detail'     : $('#str_detail').text(),
                    'str_redl'       : $('#str_redl').text(),
                    'param_display_redl' : param_display_redl
                }).appendTo('#sel_shared_titles');
            });
        }
    };
    this.event = function(){
        lazyload('img.lazy');
        //prev next pagebuttonイベント
        $('.evt_shared_pager_prev, .evt_shared_pager_next, a.evt_shared_pager_num').buttonAClick().click(function(e){
            e.preventDefault();
            var offset = ($(this).data('page_num')-1)*self.limit;
            self.page_num = $(this).data('page_num');
            if($(this).hasClass('evt_shared_pager_num')){
                $('.evt_shared_pager_num').removeClass('btn_006').addClass('btn_002');
                $(this).removeClass('btn_002').addClass('btn_006');
            }else if($(this).hasClass('evt_shared_pager_prev')){
                $(this).parent().removeClass('ps_arrow_l02').addClass('ps_arrow_l03');
            }else if($(this).hasClass('evt_shared_pager_next')){
                $(this).parent().removeClass('ps_arrow_r02').addClass('ps_arrow_r03');
            }
            disableUserOperation();
            self.lock_flg = true;
            self.request(offset);
        });
    };
    this.renderPager = function(){
        $('.sel_shared_navi li').remove();
        //ページャー
        if(self.total_num > 0){
            var total = Math.ceil(self.total_num/self.limit);//ページャー数
            if(total>1){
                var show_navi = 5;
                if(total < show_navi){
                    show_navi = total;
                }
                var current = 1;
                if(self.page_num>1){
                    current = parseInt(self.page_num,10);
                }
                var show_navih = Math.floor(show_navi / 2);
                var start = current - show_navih;
                var end = current + show_navih;
                if(start <= 0){
                    start = 1;
                    end = show_navi;
                }
                if(end > total){
                    start = total - show_navi+1;
                    end = total;
                }
                if((current < 4 && total > 7) || (current < 4 && total === 6)){
                    end++;
                }
                if((current > total-3 && total > 7) || (current > total-3 && total === 6)){
                    start--;
                }
                if(total===7){
                    start =1;
                    end =7;
                }
                var navi_html = '';
                //prev
                if(current > 1){
                    navi_html += '<li class="ps_arrow_l02"><a href="#" class="evt_shared_pager_prev se" data-se-label="SE_WAVE_OK_SUB" data-page_num="'+(current - 1)+'">'+(current - 1)+'</a></li>';
                }else{
                    navi_html += '<li class="ps_arrow_l01"><a>&lt;</a></li>';
                }
                //min表示
                if(current > 3 && total >7){
                    navi_html += '<li><a href="#" class="btn_002 evt_shared_pager_num se" data-se-label="SE_WAVE_OK_SUB" data-page_num="1">1</a></li>';
                    if(current > 4 && total >7){
                        navi_html += '<li class="ps_3point">...</li>';
                    }
                }
                for(var i=start; i<=end; i++){
                    if(i === current){
                        navi_html += '<li><a href="#" class="btn_006 evt_shared_pager_num se" data-se-label="SE_WAVE_OK_SUB" data-page_num="'+i+'">'+i+'</a></li>';
                    }else{
                        navi_html += '<li><a href="#" class="btn_002 evt_shared_pager_num se" data-se-label="SE_WAVE_OK_SUB" data-page_num="'+i+'">'+i+'</a></li>';
                    }
                }

                //max表示
                if(current < total - 2 && total>7 ){
                    if(current < total - 3 && total >7){
                        navi_html += '<li class="ps_3point">...</li>';
                    }
                    navi_html += '<li><a href="#" class="btn_002 evt_shared_pager_num se" data-se-label="SE_WAVE_OK_SUB" data-page_num="'+total+'">'+total+'</a></li>';
                }
                //next
                if(current < total){
                    navi_html += '<li class="ps_arrow_r02"><a href="#" class="evt_shared_pager_next se" data-se-label="SE_WAVE_OK_SUB" data-page_num="'+(current + 1)+'">'+(current + 1)+'</a></li>';
                }else{
                    navi_html += '<li class="ps_arrow_r01"><a>&gt;</a></li>';
                }
                $('.sel_shared_navi').append(navi_html);
            }
        }
    };

}

//history.back時の処理
window.onpageshow = function(e) {
    if (e.persisted) {
        if ($('#loading_owned_titles').is(':visible') ||
            $('#loading_shared_titles').is(':visible')) {
            $('body').addClass('display_cover');
            location.reload();
            return;
        }
        $('#sel_menu_bar .on').removeClass('on'); // SEE #11973
    }
    getBalance();
    //BGM
    setBGM('setting');
};
