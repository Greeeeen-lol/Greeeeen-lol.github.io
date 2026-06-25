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

    function renderShelf() {
        if (!$shelfList.length || !window.GameDatabase) return;

        var isSearch = window.location.search.indexOf('search=1') !== -1;
        var keys = Object.keys(window.GameDatabase);

        if (isSearch) {
            var searchType = sessionStorage.getItem('searchType') || 'title';
            var freeword = (sessionStorage.getItem('freeword') || '').trim().toLowerCase();
            
            var platformStr = sessionStorage.getItem('platform[]') || '';
            var platformIds = platformStr ? platformStr.split(',') : [];
            
            var genreStr = sessionStorage.getItem('genre[]') || '';
            var genreIds = genreStr ? genreStr.split(',') : [];
            
            var publisherStr = sessionStorage.getItem('publisher[]') || '';
            var publisherIds = publisherStr ? publisherStr.split(',') : [];
            
            var priceMin = sessionStorage.getItem('price_min') ? parseFloat(sessionStorage.getItem('price_min')) : NaN;
            var priceMax = sessionStorage.getItem('price_max') ? parseFloat(sessionStorage.getItem('price_max')) : NaN;
            
            var deviceStr = sessionStorage.getItem('device[]') || '';
            var deviceIds = deviceStr ? deviceStr.split(',') : [];

            keys = keys.filter(function(key) {
                var game = window.GameDatabase[key];
                
                // 1. SearchType / Device check
                if (searchType === 'movie') {
                    // Check if content type matches checked devices
                    if (deviceIds.length > 0) {
                        var devMatch = false;
                        if (deviceIds.indexOf('5') !== -1 && game.content_type === 'WUP') devMatch = true;
                        if (deviceIds.indexOf('4') !== -1 && game.content_type === 'CTR') devMatch = true;
                        if (!devMatch) return false;
                    }
                }

                // 2. Keyword check
                if (freeword) {
                    var name = (game.name || '').toLowerCase();
                    var pub = (game.publisher || '').toLowerCase();
                    var gen = (game.genre || '').toLowerCase();
                    var desc = (game.description || '').toLowerCase();
                    if (name.indexOf(freeword) === -1 && 
                        pub.indexOf(freeword) === -1 && 
                        gen.indexOf(freeword) === -1 && 
                        desc.indexOf(freeword) === -1) {
                        return false;
                    }
                }

                // 3. Platform check (Software category)
                if (searchType !== 'movie' && platformIds.length > 0) {
                    var platMatch = false;
                    platformIds.forEach(function(pId) {
                        // Wii U IDs
                        if (['125', '30', '124', '171', '1'].indexOf(pId) !== -1 && game.content_type === 'WUP') {
                            platMatch = true;
                        }
                        // 3DS IDs
                        if (['103', '18', '19', '1001', '1002', '2'].indexOf(pId) !== -1 && game.content_type === 'CTR') {
                            platMatch = true;
                        }
                    });
                    if (!platMatch) return false;
                }

                // 4. Genre check
                if (genreIds.length > 0) {
                    var genreMatch = false;
                    var gameGenre = (game.genre || '').toLowerCase();
                    genreIds.forEach(function(gId) {
                        if ((gId === '3' || gId === '1') && (gameGenre.indexOf('action') !== -1 || gameGenre.indexOf('adventure') !== -1 || gameGenre.indexOf('fighting') !== -1 || gameGenre.indexOf('shoot') !== -1 || gameGenre.indexOf('beat') !== -1)) genreMatch = true;
                        if (gId === '4' && gameGenre.indexOf('adventure') !== -1) genreMatch = true;
                        if (gId === '85' && (gameGenre.indexOf('music') !== -1 || gameGenre.indexOf('rhythm') !== -1)) genreMatch = true;
                        if (gId === '81' && gameGenre.indexOf('education') !== -1) genreMatch = true;
                        if (gId === '5' && (gameGenre.indexOf('fighting') !== -1 || gameGenre.indexOf('beat') !== -1)) genreMatch = true;
                        if (gId === '84' && gameGenre.indexOf('communication') !== -1) genreMatch = true;
                        if (gId === '82' && (gameGenre.indexOf('utility') !== -1 || gameGenre.indexOf('creative') !== -1 || gameGenre.indexOf('paint') !== -1 || gameGenre.indexOf('draw') !== -1)) genreMatch = true;
                        if (gId === '9' && (gameGenre.indexOf('simulation') !== -1 || gameGenre.indexOf('sandbox') !== -1)) genreMatch = true;
                        if ((gId === '11' || gId === '3') && (gameGenre.indexOf('shooter') !== -1 || gameGenre.indexOf('shoot') !== -1)) genreMatch = true;
                        if (gId === '10' && (gameGenre.indexOf('sport') !== -1 || gameGenre.indexOf('racing') !== -1)) genreMatch = true;
                        if (gId === '12' && (gameGenre.indexOf('tabletop') !== -1 || gameGenre.indexOf('board') !== -1)) genreMatch = true;
                        if (gId === '61' && gameGenre.indexOf('training') !== -1) genreMatch = true;
                        if (gId === '6' && gameGenre.indexOf('puzzle') !== -1) genreMatch = true;
                        if (gId === '7' && gameGenre.indexOf('racing') !== -1) genreMatch = true;
                        if ((gId === '8' || gId === '2') && gameGenre.indexOf('rpg') !== -1) genreMatch = true;
                    });
                    if (!genreMatch) return false;
                }

                // 5. Publisher check
                if (publisherIds.length > 0) {
                    var pubMatch = false;
                    var gamePub = (game.publisher || '').toLowerCase();
                    var isNintendoPub = (gamePub.indexOf('nintendo') !== -1 || gamePub.indexOf('mii games') !== -1 || gamePub.indexOf('clockwork') !== -1);
                    publisherIds.forEach(function(pubId) {
                        if ((pubId === '190' || pubId === '1') && isNintendoPub) {
                            pubMatch = true;
                        }
                        if (pubId !== '190' && pubId !== '1' && !isNintendoPub) {
                            pubMatch = true;
                        }
                    });
                    if (!pubMatch) return false;
                }

                // 6. Price check
                var gamePriceVal = 0;
                if (game.price && game.price !== 'Free') {
                    var numeric = parseFloat(game.price.replace(/[^\d.]/g, ''));
                    if (!isNaN(numeric)) gamePriceVal = numeric;
                }
                if (!isNaN(priceMin) && gamePriceVal < priceMin) return false;
                if (!isNaN(priceMax) && gamePriceVal > priceMax) return false;

                return true;
            });

            // Update header to Search Results
            var titleText = $('#str_search').text() || 'Search Results';
            $('.search-headline h1').text(titleText);
            $('.search-headline .total-results').text('Results: ' + keys.length);
        } else {
            // Update header to Charts
            $('.search-headline h1').text('Charts');
            $('.search-headline .total-results').text('Results: ' + keys.length);
        }

        // Sort keys
        var sortBy = $('#el-sort').val() || 'new';
        keys.sort(function(a, b) {
            var gameA = window.GameDatabase[a];
            var gameB = window.GameDatabase[b];
            if (sortBy === 'score') {
                var starsA = parseFloat(gameA.stars || '0');
                var starsB = parseFloat(gameB.stars || '0');
                if (starsA !== starsB) return starsB - starsA;
                var votesA = parseInt(gameA.votes || '0', 10);
                var votesB = parseInt(gameB.votes || '0', 10);
                return votesB - votesA;
            } else if (sortBy === 'name') {
                return (gameA.name || '').localeCompare(gameB.name || '');
            } else { // default 'new'
                var dateA = new Date(gameA.release_date || '1970-01-01');
                var dateB = new Date(gameB.release_date || '1970-01-01');
                return dateB - dateA;
            }
        });

        $shelfList.empty();

        if (keys.length === 0) {
            var noResultText = $('#str_no_result').html() || "No titles found matching your search criteria.<br>Please try different settings.";
            $shelfList.html('<p class="no-result" style="text-align: center; font-size: 20px; padding: 50px 20px; color: #7f8c8d; line-height: 1.6;">' + noResultText + '</p>');
            return;
        }

        keys.forEach(function(key) {
            var game = window.GameDatabase[key];
            var platformText = game.content_type === "WUP" ? "Wii U Software" : "Nintendo 3DS Software";
            var fallbackIcon = game.content_type === "WUP" ? "image/placeholder/place_icon_wii_u.png" : "image/placeholder/place_icon_3ds.png";
            
            var getStarImg = function(stars) {
                var val = parseFloat(stars);
                if (val >= 5.0) return "image/shelf01_01/img_relating_05.png";
                if (val >= 4.5) return "image/shelf01_01/img_relating_04h.png";
                if (val >= 4.0) return "image/shelf01_01/img_relating_04.png";
                if (val >= 3.5) return "image/shelf01_01/img_relating_03h.png";
                if (val >= 2.5) return "image/shelf01_01/img_relating_02h.png";
                return "image/shelf01_01/img_relating_02h.png";
            };
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
    }

    renderShelf();

    $('#el-sort').on('change', function() {
        renderShelf();
    });

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
