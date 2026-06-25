$(function() {
    "use strict";
// -------------------------------------------------
// main
// -------------------------------------------------

    //set menubar
    var menu_bar = new MenuBar(1);
    if (isWiiU) {
        var res = wiiuBOSS.isRegisteredBossTask();
        processJsxError(res);
        if(res.isRegistered){
            $('input[name="delivery"][value="on"]').prop('checked', true).parent().parent().addClass('ck_lamp_on');
        }else{
            $('input[name="delivery"][value="off"]').prop('checked', true).parent().parent().addClass('ck_lamp_on');
        }
    }
// -------------------------------------------------
// event
// -------------------------------------------------
    // Checkbox Change
    $('#sel_delivery input').buttonAClick().click(function() {
        $('#sel_delivery li').removeClass('ck_lamp_on').addClass('ck_lamp');
        $('#sel_delivery input').prop('checked', false);
        $(this).prop('checked', true).parent().parent().removeClass('ck_lamp').addClass('ck_lamp_on');
    });
    $('#evt_ok').buttonAClick().click(function(e){
        e.preventDefault();
        if (isWiiU) {
            //ユーザ操作無効
            disableUserOperation();
            disableHomeButton();
            wood.jsExt.playSound('SE_WAVE_OK', 1);
            //BOSSタスク登録チェック
            var reg_boss_flg = false;
            var res_task = wiiuBOSS.isRegisteredBossTask();
            processJsxError(res_task);
            if(res_task.isRegistered){ reg_boss_flg = true; }

            var res,error_flg = false;
            var delivery =  $('input[name="delivery"]:checked').val();
            if(delivery==='on'){
                //配信する
                if(!reg_boss_flg){
                    criticalAction(function() {
                        res = wiiuBOSS.registerBossTask(lang);
                    });
                    //エラーが発生した場合、エラーダイアログだけ表示する
                    if(res.error){
                        $.showError(res.error.code);
                        error_flg = true;
                    }
                }
                if(!error_flg){
                    $.alert($('#dialog_msg_on').text(),$('#dialog_msg_ok').text());
                }
                //ユーザ操作無効解除
                enableHomeButton();
                historyBack();
            }else if(delivery==='off'){
                //配信しない
                if(reg_boss_flg){
                    criticalAction(function() {
                        res = wiiuBOSS.unregisterBossTask();
                    });
                    processJsxError(res);
                }
                //ユーザ操作無効解除
                enableHomeButton();
                $.alert($('#dialog_msg_off').text(),$('#dialog_msg_ok').text());
                historyBack();
            }
        }
    });

});
//history.back時の処理
window.onpageshow = function(e) {
    if (e.persisted) {
        $('#sel_menu_bar .on').removeClass('on'); // SEE #11973
    }
    getBalance();
    //BGM
    setBGM('setting');
};
