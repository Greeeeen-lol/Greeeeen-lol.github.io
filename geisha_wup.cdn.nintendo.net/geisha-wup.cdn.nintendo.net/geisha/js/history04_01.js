$(function(){
    "use strict";
// -------------------------------------------------
// main
// -------------------------------------------------
    //get contents
    var inst = new TransactionData();
    inst.request();
// -------------------------------------------------
// event
// -------------------------------------------------


});
// -------------------------------------------------
// functions
// -------------------------------------------------
function TransactionData() {
    "use strict";
    var self = this;
    this.page_num = 0;
    this.total_num = 0;
    this.limit = 25;
    this.lock_flg = false;
    // 押下されたページャーのスタイルを変更するための
    // リクエストを待つ時間
    var RENDER_REST_DELAY = 250;

    this.request = function(offset){
        var req_data;
        if(offset!==undefined){
            req_data = { 'offset' : offset,'limit' : self.limit};
        }else{
            req_data = { 'offset' : 0,'limit' : self.limit};
        }
        var req_obj = {
            url  : ninjaBase+'ws/my/transactions',
            type : 'GET',
            data : req_data
        };
        //ajax
        $.getXml(req_obj)
            .done(
            function(xml){
                self.total_num = parseInt($(xml).find('transactions').attr('total'),10);
                self.renderPager();
                $.when(self.render(xml)).pipe(function(){
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
                    case '6696': //ECS_IAS_ERROR(汎用1)
                    case '6698': //ECS_PAS_ERROR(汎用1)
                    case '6699': //ECS_INTERNAL_ERROR(汎用1)
                    case '6897': //PAS_LOCKED_DB_ROW(汎用1)
                    default:
                        break;
                    }
                });
            }
        );
    };
    this.render = function(xml){
        //ページャー

        if(self.total_num===0){
            $('#data_none').show();
        }else{
            $('html,body').animate({ scrollTop: $('html,body').offset().top }, 0);
            $('#data_exist').show();
            $('#use_record_ul  li').remove();
            $(xml).find('transaction').each(function(){
                var str_type = $(this).children('type').text();
                var str_date = $(this).children('date').text();
                var html_desc = $(this).children('description').text();

                var str_amount = '';
                var str_amount_data;
                if($(this).children('transaction_amount').size() >0 ){
                    str_amount = $('#str_amount').text();
                    str_amount_data = $(this).children('transaction_amount').children('amount').text();
                }
                var str_balance = '';
                var str_balance_data;
                if($(this).children('balance').size() >0){
                    str_balance = $('#str_balance').text();
                    str_balance_data = $(this).children('balance').children('amount').text();
                }
                var url_receipt,param_receipt_disp;
                var param_receipt_flg = $(this).children('receipt').text();
                if(param_receipt_flg==='true'){
                    param_receipt_disp = 'block';
                    url_receipt = 'history05_01.html?tran_id='+$(this).attr('id');
                }else{
                    param_receipt_disp = 'none';
                }
                //render template
                $('#template_transaction').tmpl({
                    'str_type'            : str_type,
                    'str_date'            : str_date,
                    'html_desc'           : html_desc,
                    'str_amount'          : str_amount,
                    'str_amount_data'    : str_amount_data,
                    'str_balance'         : str_balance,
                    'str_balance_data'   : str_balance_data,
                    'url_receipt'         : url_receipt,
                    'param_receipt_disp' : param_receipt_disp,
                    'str_receipt'         : $('#str_receipt').text()
                }).appendTo('#use_record_ul');
            });
        }
    };
    this.event = function(){
        lazyload('img.lazy');
        //prev next pagebuttonイベント
        $('.evt_tran_pager_prev, .evt_tran_pager_next, a.evt_tran_pager_num').buttonAClick().click(function(e){
            e.preventDefault();
            wood.jsExt.playSound('SE_WAVE_OK_SUB', 1);
            var offset = ($(this).data('page_num')-1)*self.limit;
            self.page_num = $(this).data('page_num');
            if($(this).hasClass('evt_tran_pager_num')){
                $('.evt_tran_pager_num').removeClass('btn_006').addClass('btn_002');
                $(this).removeClass('btn_002').addClass('btn_006');
            }else if($(this).hasClass('evt_tran_pager_prev')){
                $(this).parent().removeClass('ps_arrow_l02').addClass('ps_arrow_l03');
            }else if($(this).hasClass('evt_tran_pager_next')){
                $(this).parent().removeClass('ps_arrow_r02').addClass('ps_arrow_r03');
            }
            disableUserOperation();
            self.lock_flg = true;
            // see #10176
            setTimeout(function(){
                self.request(offset);
            },RENDER_REST_DELAY);
        });
    };
    this.renderPager = function(){
        $('.sel_tran_navi li').remove();
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
                    navi_html += '<li class="ps_arrow_l02"><a href="#" class="evt_tran_pager_prev se" data-page_num="'+(current - 1)+'">'+(current - 1)+'</a></li>';
                }else{
                    navi_html += '<li class="ps_arrow_l01"><a>&lt;</a></li>';
                }
                //min表示
                if(current > 3 && total >7){
                    navi_html += '<li><a href="#" class="btn_002 evt_tran_pager_num se" data-page_num="1">1</a></li>';
                    if(current > 4 && total >7){
                        navi_html += '<li class="ps_3point">...</li>';
                    }
                }
                for(var i=start; i<=end; i++){
                    if(i === current){
                        navi_html += '<li><a href="#" class="btn_006 evt_tran_pager_num se" data-page_num="'+i+'">'+i+'</a></li>';
                    }else{
                        navi_html += '<li><a href="#" class="btn_002 evt_tran_pager_num se" data-page_num="'+i+'">'+i+'</a></li>';
                    }
                }

                //max表示
                if(current < total - 2 && total>7 ){
                    if(current < total - 3 && total >7){
                        navi_html += '<li class="ps_3point">...</li>';
                    }
                    navi_html += '<li><a href="#" class="btn_002 evt_tran_pager_num se" data-page_num="'+total+'">'+total+'</a></li>';
                }
                //next
                if(current < total){
                    navi_html += '<li class="ps_arrow_r02"><a href="#" class="evt_tran_pager_next se" data-page_num="'+(current + 1)+'">'+(current + 1)+'</a></li>';
                }else{
                    navi_html += '<li class="ps_arrow_r01"><a>&gt;</a></li>';
                }
                $('.sel_tran_navi').append(navi_html);
            }
        }
    };

}
//history.back時の処理
window.onpageshow = function(e) {
    if (e.persisted) {
        $('#sel_menu_bar .on').removeClass('on'); // SEE #11973
    }
    getBalance();
    setBGM('setting');
};
