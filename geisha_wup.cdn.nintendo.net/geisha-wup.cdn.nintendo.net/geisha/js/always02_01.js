$(function() {
    "use strict";

    console.log("always02_01.js loaded!");

    // Populate Mii icon and balance in footer
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
            if (href === "#top") {
                window.location.href = "index.html";
            } else {
                window.location.href = href;
            }
        } else {
            if ($(this).parent().attr('id') === 'top_link_05') {
                window.history.back();
            }
        }
    });

    // Toggle soft/movie/both categories
    $('input[name="searchType"]').on('change', function() {
        var val = $(this).val();
        if (val === 'title') {
            $('#search-title').show();
            $('#serach-movie').hide();
            $('#footer').show();
        } else if (val === 'movie') {
            $('#search-title').hide();
            $('#serach-movie').show();
            $('#footer').hide();
        } else {
            $('#search-title').hide();
            $('#serach-movie').hide();
            $('#footer').hide();
        }
    });

    // Fetch classifications from mock API
    $.ajax({
        url: '/platforms',
        dataType: 'json',
        success: function(res) {
            var platforms = (res.platforms && res.platforms.platform) || [];
            var $list = $('#search-platform ul');
            platforms.forEach(function(plat) {
                var li = '<li>' +
                    '<input type="checkbox" id="platform-' + plat.id + '" name="platform[]" value="' + plat.id + '" />' +
                    '<label for="platform-' + plat.id + '">' + plat.name + '</label>' +
                    '</li>';
                $list.append(li);
            });
            bindCheckboxHandlers('#search-platform');
        }
    });

    $.ajax({
        url: '/genres',
        dataType: 'json',
        success: function(res) {
            var genres = (res.genres && res.genres.genre) || [];
            var $list = $('#genre_dialog ul');
            genres.forEach(function(g) {
                var li = '<li>' +
                    '<input type="checkbox" id="genre-' + g.id + '" name="genre[]" value="' + g.id + '" />' +
                    '<label for="genre-' + g.id + '">' + g.name + '</label>' +
                    '</li>';
                $list.append(li);
            });
            bindCheckboxHandlers('#genre_dialog');
        }
    });

    $.ajax({
        url: '/publishers',
        dataType: 'json',
        success: function(res) {
            var publishers = (res.publishers && res.publishers.publisher) || [];
            var $list = $('#publisher_dialog ul');
            publishers.forEach(function(pub) {
                var li = '<li>' +
                    '<input type="checkbox" id="publisher-' + pub.id + '" name="publisher[]" value="' + pub.id + '" />' +
                    '<label for="publisher-' + pub.id + '">' + pub.name + '</label>' +
                    '</li>';
                $list.append(li);
            });
            bindCheckboxHandlers('#publisher_dialog');
        }
    });

    // Helper to bind "All" checkbox behavior
    function bindCheckboxHandlers(containerSelector) {
        var $container = $(containerSelector);
        var $allCheckbox = $container.find('li.all input');
        var $itemCheckboxes = $container.find('li:not(.all) input');

        $allCheckbox.on('change', function() {
            if ($(this).prop('checked')) {
                $itemCheckboxes.prop('checked', false);
            } else {
                $(this).prop('checked', true); // Keep checked if it's the only one
            }
        });

        $itemCheckboxes.on('change', function() {
            if ($container.find('li:not(.all) input:checked').length > 0) {
                $allCheckbox.prop('checked', false);
            } else {
                $allCheckbox.prop('checked', true);
            }
        });
    }

    // Dialog showing/hiding
    var lastScroll = 0;
    function showDialog($dialog) {
        $dialog.show();
        $('#always_02_wrapper').hide();
        lastScroll = $('body').scrollTop();
        window.scrollTo(0, 0);
    }

    function closeDialog($dialog) {
        $dialog.hide();
        $('#always_02_wrapper').show();
        window.scrollTo(0, lastScroll);
        updateAssignedLabels();
    }

    $('#show-genre').on('click', function(e) {
        e.preventDefault();
        showDialog($('#genre_dialog'));
    });

    $('#show-publisher').on('click', function(e) {
        e.preventDefault();
        showDialog($('#publisher_dialog'));
    });

    $('#genre_dialog .dialog-submit').on('click', function(e) {
        e.preventDefault();
        closeDialog($('#genre_dialog'));
    });

    $('#publisher_dialog .dialog-submit').on('click', function(e) {
        e.preventDefault();
        closeDialog($('#publisher_dialog'));
    });

    function updateAssignedLabels() {
        // Genres
        var checkedGenres = $('#genre_dialog li:not(.all) input:checked').map(function() {
            return $(this).next().text();
        }).get();
        // Update display text matching Eshop Japanese style
        $('#selected-genre').text(checkedGenres.length > 0 ? checkedGenres.join('/') : 'すべてのジャンル');

        // Publishers
        var checkedPubs = $('#publisher_dialog li:not(.all) input:checked').map(function() {
            return $(this).next().text();
        }).get();
        $('#selected-publisher').text(checkedPubs.length > 0 ? checkedPubs.join('/') : 'すべてのメーカー');
    }

    // Resets
    $('.reset-price').on('click', function(e) {
        e.preventDefault();
        $('input[name="price_min"]').val('');
        $('input[name="price_max"]').val('');
    });

    $('.reset-all').on('click', function(e) {
        e.preventDefault();
        $('input[name="freeword"]').val('');
        $('input[name="price_min"]').val('');
        $('input[name="price_max"]').val('');
        $('#search-platform li.all input, #genre_dialog li.all input, #publisher_dialog li.all input').prop('checked', true);
        $('#search-platform li:not(.all) input, #genre_dialog li:not(.all) input, #publisher_dialog li:not(.all) input').prop('checked', false);
        updateAssignedLabels();
    });

    // Form submission
    $('.search-submit').on('click', function(e) {
        e.preventDefault();
        var searchType = $('input[name="searchType"]:checked').val();
        var freeword = $('input[name="freeword"]').val().trim();
        var price_min = $('input[name="price_min"]').val().trim();
        var price_max = $('input[name="price_max"]').val().trim();

        // Save parameters to sessionStorage
        sessionStorage.setItem('searchType', searchType);
        sessionStorage.setItem('freeword', freeword);

        if (searchType === 'title') {
            var platforms = $('#search-platform li:not(.all) input:checked').map(function() { return $(this).val(); }).get().join(',');
            var genres = $('#genre_dialog li:not(.all) input:checked').map(function() { return $(this).val(); }).get().join(',');
            var publishers = $('#publisher_dialog li:not(.all) input:checked').map(function() { return $(this).val(); }).get().join(',');

            if (platforms) sessionStorage.setItem('platform[]', platforms); else sessionStorage.removeItem('platform[]');
            if (genres) sessionStorage.setItem('genre[]', genres); else sessionStorage.removeItem('genre[]');
            if (publishers) sessionStorage.setItem('publisher[]', publishers); else sessionStorage.removeItem('publisher[]');

            if (price_min) sessionStorage.setItem('price_min', price_min); else sessionStorage.removeItem('price_min');
            if (price_max) sessionStorage.setItem('price_max', price_max); else sessionStorage.removeItem('price_max');
            
            sessionStorage.removeItem('device[]');
        } else if (searchType === 'movie') {
            var devices = $('#serach-movie li:not(.all) input:checked').map(function() { return $(this).val(); }).get().join(',');
            if (devices) sessionStorage.setItem('device[]', devices); else sessionStorage.removeItem('device[]');
            
            sessionStorage.removeItem('platform[]');
            sessionStorage.removeItem('genre[]');
            sessionStorage.removeItem('publisher[]');
            sessionStorage.removeItem('price_min');
            sessionStorage.removeItem('price_max');
        }

        // Redirect to shelf (search results list)
        window.location.href = "shelf02_01.html?search=1";
    });
});
