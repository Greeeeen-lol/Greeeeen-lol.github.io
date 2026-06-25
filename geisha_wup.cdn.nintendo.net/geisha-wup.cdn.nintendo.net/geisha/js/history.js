$(function() {
    if ($('#history03_01').attr('id')) {
        Wood.Analytics
            .addFromAttr('purchased_title')
            .sendVirtualPV("VP_Purchased_Title");
    }

    //set menubar
    var menu_bar;
    if(location.hash === '#add'){
        menu_bar = new MenuBar(4);
    }else if(location.hash === '#buy'){
        menu_bar = new MenuBar(6);
    }else{
        menu_bar = new MenuBar(1);
    }

    // Tab

    $("#his03_li01 p:first").buttonAClick().click(function() {
        $("#his03_li02 p:first").removeClass("btn_006").addClass("btn_002");
        $("#his03_li02 .pika").hide();
        $(this).removeClass("btn_002").addClass("btn_006");
        $(this).next(".pika").show();
        $("#his03_tab02").hide();
        $("#his03_tab01").fadeIn(0);
        lazyload('img.lazy');
    });
    
    $("#his03_li02 p:first").buttonAClick().click(function() {
        $("#his03_li01 p:first").removeClass("btn_006").addClass("btn_002");
        $("#his03_li01 .pika").hide();
        $(this).removeClass("btn_002").addClass("btn_006");
        $(this).next(".pika").show();
        $("#his03_tab01").hide();
        $("#his03_tab02").fadeIn(0);
        lazyload('img.lazy');
    });

    $("#his03_ul li:first").ready(function() {
        $("#history03_04 .fi_ul li:first").css("border-top","none");
    });


});
//history.back時の処理
window.onpageshow = function(e) {
    if (e.persisted) {
        $('#sel_menu_bar .on').removeClass('on'); // SEE #11973 #14503
    }
    getBalance();
    //BGM
    setBGM('setting');
};
