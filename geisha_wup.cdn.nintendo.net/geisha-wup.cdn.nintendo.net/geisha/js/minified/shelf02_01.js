$(function() {
    "use strict";

    console.log("shelf02_01.js loaded!");

    // Populate session details
    var session = {};
    try {
        session = JSON.parse(sessionStorage.getItem('ninja_session') || '{}');
    } catch(e) {}
    var miiIcon = (session.mii && session.mii.icon_url) || "image/img_unknown_MiiIcon.png";
    var balance = sessionStorage.getItem('balance') || "¥0";
    
    $('#top_link_02 img').attr('src', miiIcon);
    $('#balance').text(balance);

    // Retrieve downloaded games list from localStorage
    var getDownloadedGames = function() {
        try {
            return JSON.parse(localStorage.getItem('downloaded_games') || '[]');
        } catch(e) {
            return [];
        }
    };

    var isDownloaded = function(id) {
        return getDownloadedGames().indexOf(id) !== -1;
    };

    // Render local games database
    var $shelfList = $('#shelf-list');
    if ($shelfList.length > 0 && window.GameDatabase) {
        $shelfList.empty();
        
        var getStarImg = function(stars) {
            var val = parseFloat(stars);
            if (val >= 5.0) return "image/shelf01_01/img_relating_05.png";
            if (val >= 4.5) return "image/shelf01_01/img_relating_04h.png";
            if (val >= 4.0) return "image/shelf01_01/img_relating_04.png";
            if (val >= 3.5) return "image/shelf01_01/img_relating_03h.png";
            if (val >= 2.5) return "image/shelf01_01/img_relating_02h.png";
            return "image/shelf01_01/img_relating_02h.png";
        };

        Object.keys(window.GameDatabase).forEach(function(key) {
            var game = window.GameDatabase[key];
            var platformText = game.content_type === "WUP" ? "Wii U Software" : "Nintendo 3DS Software";
            var fallbackIcon = game.content_type === "WUP" ? "image/placeholder/place_icon_wii_u.png" : "image/placeholder/place_icon_3ds.png";
            var starImg = getStarImg(game.stars);
            
            var featureHtml = "";
            if (game.id === "20010000020451") { // Minecraft has AOC
                featureHtml = '<img src="image/shelf01_01/btn_slic_m3t_.03png.png" width="44" height="44">';
            }

            // Determine download button state
            var buyBtnHtml = "";
            if (isDownloaded(game.id)) {
                buyBtnHtml = '<a href="#" class="purchase evt_start_action se" data-title-id="' + game.id + '" data-se-label="SE_WAVE_DECIDE" style="background: -webkit-gradient(linear, left top, left bottom, from(#3498db), to(#2980b9)); border-bottom-color: #2471a3; text-shadow: 0 -2px 2px #2471a3;"><span>Start Game</span></a>';
            } else {
                buyBtnHtml = '<a href="#" class="purchase evt_download_action se" data-title-id="' + game.id + '" data-se-label="SE_WAVE_DECIDE"><span>Free Download</span></a>';
            }
            
            var cardHtml = '<li class="m-list-item" data-title-id="' + game.id + '" data-esales-flg="true" data-release-date="' + game.release_date + '" data-content-type="' + game.content_type + '">' +
                '  <ul class="list-status">' +
                '  </ul>' +
                '  <a href="#title?title=' + game.id + '" class="list-title-outline se" data-se-label="SE_WAVE_OK">' +
                '    <div class="list-title-icon">' +
                '      <div class="' + (game.content_type === "CTR" ? "p-icon-ctr-M" : "p-icon-wup-L") + '">' +
                '        <img src="' + game.image + '" onerror="this.onerror=null; this.src=\'' + fallbackIcon + '\';" class="lazy" width="' + (game.content_type === "CTR" ? "72" : "128") + '" height="' + (game.content_type === "CTR" ? "72" : "128") + '">' +
                '      </div>' +
                '    </div>' +
                '    <div class="list-title-summary">' +
                '      <div class="name">' + game.name + '</div>' +
                '      <div class="star-rating">' +
                '        <img src="' + starImg + '" width="157" height="27">(' + game.votes + ')' +
                '      </div>' +
                '      <div class="feature">' +
                         featureHtml +
                '      </div>' +
                '      <div class="platform ' + (game.content_type === "CTR" ? "text-ctr" : "text-wup") + '">' + platformText + '</div>' +
                '      <div class="information">' +
                '        <span class="publisher">' + game.publisher + '</span>' +
                '        <span class="rating">' + game.rating + '</span>' +
                '        <div class="el-price">' +
                '          <span class="price">' + game.price + '</span>' +
                '        </div>' +
                '      </div>' +
                '    </div>' +
                '  </a>' +
                '  <div class="list-title-action">' +
                '    <div class="el-purchase">' +
                       buyBtnHtml +
                '    </div>' +
                '    <div class="el-wish" id="el-wish-' + game.id + '">' +
                '      <a href="#" class="evt_reg_wish wish se" data-title-id="' + game.id + '"><span>Wish List</span></a>' +
                '    </div>' +
                '  </div>' +
                '</li>';
            
            $shelfList.append(cardHtml);
        });
        
        // Update results count
        $('.search-headline h1').text('Charts');
        $('.search-headline .total-results').text('Results: ' + Object.keys(window.GameDatabase).length);
    }

    // Handle download simulation
    $(document).on('click', '.evt_download_action', function(e) {
        e.preventDefault();
        var $btn = $(this);
        var titleId = $btn.data('title-id');
        
        $btn.css({'background': '#95a5a6', 'border-bottom-color': '#7f8c8d', 'pointer-events': 'none'});
        $btn.find('span').text("Downloading...");
        
        var progress = 0;
        var interval = setInterval(function() {
            progress += Math.floor(Math.random() * 20) + 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                $btn.find('span').text("Installing...");
                setTimeout(function() {
                    // Save to downloaded_games
                    var downloaded = [];
                    try {
                        downloaded = JSON.parse(localStorage.getItem('downloaded_games') || '[]');
                    } catch(e) {}
                    if (downloaded.indexOf(titleId) === -1) {
                        downloaded.push(titleId);
                        localStorage.setItem('downloaded_games', JSON.stringify(downloaded));
                    }
                    
                    fetch('/api/stats/purchase', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ titleId: titleId })
                    }).catch(function(e) {
                        console.error("Failed to sync purchase with server:", e);
                    });
                    
                    // Update button to Start Game
                    $btn.removeClass('evt_download_action').addClass('evt_start_action');
                    $btn.css({
                        'background': '-webkit-gradient(linear, left top, left bottom, from(#3498db), to(#2980b9))',
                        'border-bottom-color': '#2471a3',
                        'pointer-events': 'auto',
                        'text-shadow': '0 -2px 2px #2471a3'
                    });
                    $btn.find('span').text("Start Game");
                }, 800);
            } else {
                $btn.find('span').text("Downloading... " + progress + "%");
            }
        }, 150);
    });

    // Handle start game action
    $(document).on('click', '.evt_start_action', function(e) {
        e.preventDefault();
        var titleId = $(this).data('title-id');
        var game = window.GameDatabase[titleId];
        alert("Starting " + (game ? game.name : "Game") + "...\nEnjoy your game!");
    });

    // Handle Wish List simulation click
    $(document).on('click', '.evt_reg_wish', function(e) {
        e.preventDefault();
        var $btn = $(this);
        var titleId = $btn.data('title-id');
        var game = window.GameDatabase[titleId];
        alert("Added " + (game ? game.name : "Game") + " to your Wish List!");
    });

    // Bind click events on elements with data-href
    $(document).on('click', '[data-href]', function(e) {
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
});
