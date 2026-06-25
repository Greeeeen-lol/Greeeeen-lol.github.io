$(function() {
    "use strict";

    console.log("always01_01.js loaded!");

    // Populate session details
    var session = {};
    try {
        session = JSON.parse(sessionStorage.getItem('ninja_session') || '{}');
    } catch(e) {}
    var miiName = (session.mii && session.mii.name) || "Player";
    var miiIcon = (session.mii && session.mii.icon_url) || "image/img_unknown_MiiIcon.png";
    var balance = sessionStorage.getItem('balance') || "¥0";
    
    $('.profile-info .name').text(miiName);
    $('.profile-info .mii img, #top_link_02 img').attr('src', miiIcon);
    $('.profile-info .balance .amount, #balance').text(balance);
    
    // Bind click events on elements with data-href
    $('[data-href]').on('click', function(e) {
        e.preventDefault();
        var href = $(this).data('href');
        if (href) {
            if (href === "#top") {
                window.location.href = "index.html";
            } else {
                window.location.href = href;
            }
        } else {
            // もどる (Back) button has empty data-href
            if ($(this).parent().attr('id') === 'top_link_05') {
                window.history.back();
            }
        }
    });
    
    // Help link
    $('#js-help').on('click', function(e) {
        e.preventDefault();
        window.location.href = "manual/manual01_00.html";
    });
});
