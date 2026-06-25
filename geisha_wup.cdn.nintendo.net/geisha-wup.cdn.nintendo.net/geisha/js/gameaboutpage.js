$(function() {
    "use strict";

    console.log("gameaboutpage.js loaded!");

    // Helper to get query parameters
    function getQueryParam(url, paramName) {
        paramName = paramName.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + paramName + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    var titleId = getQueryParam(window.location.href, "title") || "20010000026074";
    var game = null;

    if (window.GameDatabase && window.GameDatabase[titleId]) {
        game = window.GameDatabase[titleId];
    } else if (window.GameDatabase) {
        // Fallback to Minecraft if titleId not found
        game = window.GameDatabase["20010000020451"];
        titleId = "20010000020451";
    }

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

    if (game) {
        // Populate layout elements
        var fallbackIcon = game.content_type === "WUP" ? "image/placeholder/place_icon_wii_u.png" : "image/placeholder/place_icon_3ds.png";
        var fallbackBanner = "image/placeholder/place_banner.png";
        
        $('#title-header img').attr('src', game.banner).on('error', function() {
            $(this).attr('src', fallbackBanner);
        });
        
        $('.icon_wup img').attr('src', game.image).on('error', function() {
            $(this).attr('src', fallbackIcon);
        });
        
        $('.name h1').text(game.name);
        $('#sel_price').text("Free");
        $('#sel_ordinary_price').text("");
        
        var platformText = game.content_type === "WUP" ? "Wii U Software" : "Nintendo 3DS Software";
        $('.title-basic-spec h3').text(platformText);
        $('#sel_release_date').text(game.release_date);
        
        // Populate definition list details
        $('.title-basic-spec dl dt').each(function() {
            var text = $(this).text().trim();
            var $dd = $(this).next('dd');
            if (text === "Title Name") {
                $dd.text(game.name);
            } else if (text === "Publisher") {
                $dd.text(game.publisher);
            } else if (text === "Genre") {
                $dd.text(game.genre);
            } else if (text === "No. of Players") {
                $dd.text(game.players);
            }
        });
        
        $('#sel_storage_info_head').text(game.size);
        $('.storage-required-size').text(game.size);
        
        // Description
        $('#el_description').html(game.description.replace(/\n/g, "<br>"));
        
        // Rating Info
        $('#rating-name').html('<div style="font-size: 22px; font-weight: bold; background: #e74c3c; color: #fff; padding: 10px 18px; border-radius: 6px; display: inline-block;">' + game.rating + '</div>');
        $('#descriptor').hide();
        
        // Rebuild Screenshots
        var $screenshotList = $('#el_screenshot');
        var $screenshotDetail = $('#show_screen_detail');
        $screenshotList.empty();
        $screenshotDetail.empty();
        
        var screenshots = game.screenshots || ["image/placeholder/place_game_screen_wii_u.png"];
        screenshots.forEach(function(src, index) {
            // Thumb list
            var thumbHtml = '<li>' +
                '  <a href="#" data-id="' + index + '" class="se" data-se-label="SE_WAVE_OK_SUB">' +
                '    <div class="contents-img screen-wup-thumb">' +
                '      <img src="' + src + '" onerror="this.onerror=null; this.src=\'image/placeholder/place_game_screen_wii_u.png\';" width="240" height="135">' +
                '    </div>' +
                '    <img src="image/data01_01/ico_data01_01_screenshot_wup.png" width="240" height="135">' +
                '  </a>' +
                '</li>';
            $screenshotList.append(thumbHtml);
            
            // Popup Detail
            var detailHtml = '<div id="screen_' + index + '" class="game_screen_detail">' +
                '  <div class="screen-wup">' +
                '    <img src="' + src + '" onerror="this.onerror=null; this.src=\'image/placeholder/place_game_screen_wii_u.png\';">' +
                '  </div>' +
                '</div>';
            $screenshotDetail.append(detailHtml);
        });
        
        // Related website link back to offline list
        $('#el_related_website').html('<a id="related_site_0" href="shelf02_01.html" class="se related-button" style="text-decoration: none; padding: 12px 24px; background: #f39c12; color: #fff; border-radius: 6px; font-weight: bold; display: inline-block;"><span>Back to Offline Game List</span></a>');
        
        // Copyright
        $('#sel_copy_str').text("©2026 Clockwork Studio");
        
        // Ratings & Evaluation
        $('.var_total_votes').text('(' + game.votes + ')');
        var starImg = "image/data01_01/img_data01_01_evaluation_large_04h.png";
        if (game.stars === "5") {
            starImg = "image/data01_01/img_data01_01_evaluation_large_05.png";
        } else if (game.stars === "4") {
            starImg = "image/data01_01/img_data01_01_evaluation_large_04.png";
        }
        $('.var_star_rating').attr('src', starImg);
        
        var total = parseInt(game.votes, 10) || 100;
        var s5 = Math.round(total * 0.85);
        var s4 = Math.round(total * 0.10);
        var s3 = Math.round(total * 0.03);
        var s2 = Math.round(total * 0.01);
        var s1 = total - (s5 + s4 + s3 + s2);
        
        $('.var_star5_votes').text('(' + s5 + ')');
        $('.var_star4_votes').text('(' + s4 + ')');
        $('.var_star3_votes').text('(' + s3 + ')');
        $('.var_star2_votes').text('(' + s2 + ')');
        $('.var_star1_votes').text('(' + s1 + ')');
        
        // Render Canvas Ratio Bars
        var drawCanvasBar = function(canvasId, leftRatio) {
            var canvas = document.getElementById(canvasId);
            if (!canvas) return;
            var ctx = canvas.getContext('2d');
            var w = canvas.width;
            var h = canvas.height;
            ctx.clearRect(0, 0, w, h);
            
            var splitX = w * (leftRatio / 100);
            
            // Draw left side (green)
            ctx.fillStyle = '#2ecc71';
            ctx.fillRect(0, 0, splitX, h);
            
            // Draw right side (orange)
            ctx.fillStyle = '#e67e22';
            ctx.fillRect(splitX, 0, w - splitX, h);
            
            // Draw divider line
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(splitX, 0);
            ctx.lineTo(splitX, h);
            ctx.stroke();
        };
        
        drawCanvasBar('sel_bar_style', 48);
        drawCanvasBar('sel_bar_feeling', 13);
        
        // Check local storage for download simulation state
        var downloadedGames = [];
        try {
            downloadedGames = JSON.parse(localStorage.getItem('downloaded_games') || '[]');
        } catch(e) {}
        
        var isDownloaded = function(id) {
            return false; // Always allow downloading so it triggers the backend API
        };
        
        var setDownloaded = function(id) {
            // No-op
        };
        
        var $buyButton = $('#sel_buy');
        
        var updateButtonState = function() {
            if (isDownloaded(titleId)) {
                $buyButton.html('<div class="buy" style="display: block; padding: 15px 30px; background: #95a5a6; color: #fff; text-align: center; border-radius: 8px; font-weight: bold; font-size: 18px; text-decoration: none; border: 2px solid #7f8c8d; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: default;"><span>Downloaded<br><small style="font-size:12px;">Play from HOME Menu</small></span></div>');
            } else {
                $buyButton.html('<a href="#" id="btn_download_action" class="buy se" style="display: block; padding: 15px 30px; background: #2ecc71; color: #fff; text-align: center; border-radius: 8px; font-weight: bold; font-size: 18px; text-decoration: none; border: 2px solid #27ae60; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: background 0.2s;"><span>Free Download</span></a>');
                
                $('#btn_download_action').on('click', function(e) {
                    e.preventDefault();
                    var $btn = $(this);
                    $btn.css({'background': '#95a5a6', 'border-color': '#7f8c8d', 'pointer-events': 'none'});
                    
                    var progress = 0;
                    var interval = setInterval(function() {
                        progress += Math.floor(Math.random() * 15) + 5;
                        if (progress >= 100) {
                            progress = 100;
                            clearInterval(interval);
                            $btn.find('span').text("Installing...");
                            setTimeout(function() {
                                setDownloaded(titleId);
                                fetch('/api/stats/purchase', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ titleId: titleId })
                                }).catch(function(e) {
                                    console.error("Failed to sync purchase with server:", e);
                                });
                                window.parent.postMessage({ type: 'eshop-download', id: titleId }, '*');
                                updateButtonState();
                            }, 1000);
                        } else {
                            $btn.find('span').text("Downloading... " + progress + "%");
                        }
                    }, 200);
                });
            }
        };
        
        updateButtonState();
    }

    // Toggle description show/hide
    $('#evt_show_description').on('click', function(e) {
        e.preventDefault();
        $('#el_description').toggleClass('expanded');
    });

    // Toggle features description
    $('#evt_show_feature').on('click', function(e) {
        e.preventDefault();
        $('#sel_feature_content').toggle();
        var isVisible = $('#sel_feature_content').is(':visible');
        $(this).find('.detail-label').text(isVisible ? "Close Section" : "View Section");
    });

    // Screenshots popup overlay logic
    $('#show_screen_detail').hide(); // Hidden by default
    $('.game_screen_detail').hide();

    // Delegate screenshot click to parent container to handle dynamically created thumbs
    $('#el_screenshot').on('click', 'a', function(e) {
        e.preventDefault();
        var id = $(this).data('id');
        showScreenshotPopup(id);
    });

    function showScreenshotPopup(id) {
        $('.game_screen_detail').hide();
        $('#screen_' + id).show();
        $('#show_screen_detail').fadeIn(200);
        $('#title-main, #title-header, #footer, #sel_menu_bar').addClass('blur-background');
    }

    function closeScreenshotPopup() {
        $('#show_screen_detail').fadeOut(200);
        $('#title-main, #title-header, #footer, #sel_menu_bar').removeClass('blur-background');
    }

    $('#show_screen_detail').on('click', function() {
        closeScreenshotPopup();
    });
});
