$(function() {
    "use strict";

    console.log("news.js loaded!");

    // Populate session details
    var session = {};
    try {
        session = JSON.parse(sessionStorage.getItem('ninja_session') || '{}');
    } catch(e) {}
    var miiIcon = (session.mii && session.mii.icon_url) || "image/img_unknown_MiiIcon.png";
    var balance = sessionStorage.getItem('balance') || "¥0";
    
    $('#top_link_02 img').attr('src', miiIcon);
    $('#balance').text(balance);

    // Bind click events on elements with data-href
    $('[data-href]').on('click', function(e) {
        e.preventDefault();
        var href = $(this).data('href');
        if (href) {
            window.location.href = href;
        }
    });

    function showList() {
        $('#sel_list').show();
        $('.news-detail-frame').hide();
        $('#top_link_06').show(); // Exit
        $('#top_link_05').hide(); // Back
    }

    function showDetail(detailId) {
        $('#sel_list').hide();
        $('.news-detail-frame').hide();
        $(detailId).show();
        $('#top_link_06').hide(); // Exit
        $('#top_link_05').show(); // Back
    }

    // Detail toggle
    $('.evt_show_detail').on('click', function(e) {
        e.preventDefault();
        var detailId = $(this).data('detail');
        if (detailId) {
            showDetail(detailId);
        }
    });

    // Back button click
    $('#top_link_05').on('click', function(e) {
        e.preventDefault();
        showList();
    });

    // Exit button click
    $('#top_link_06').on('click', function(e) {
        e.preventDefault();
        window.location.href = "index.html";
    });

    // Check query param for id
    var match = window.location.search.match(/[?&]id=(\d+)/);
    if (match && match[1]) {
        var id = match[1];
        if ($('#news_' + id).length) {
            showDetail('#news_' + id);
        } else {
            showList();
        }
    } else {
        showList();
    }
});
