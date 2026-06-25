$(function() {
    "use strict";

    console.log("redeem.js loaded!");

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
    
    // Input handling
    var $input = $('input[name="redeem_num"]');
    var $nextBtn = $('#sel_redeem_next');
    
    $input.on('input propertychange change', function() {
        var val = $input.val().trim();
        // Allow spaces/hyphens for user entry, but standard is 16 chars
        var cleaned = val.replace(/[\s-]/g, '');
        if (cleaned.length === 16) {
            $nextBtn.show();
        } else {
            $nextBtn.hide();
        }
    });
    
    $('#evt_redeem').on('click', function(e) {
        e.preventDefault();
        var code = $input.val().trim().replace(/[\s-]/g, '');
        if (code.length !== 16) return;
        
        // I, O, Z, hyphen are invalid chars in Nintendo codes
        if (/[IOZ]/i.test(code)) {
            alert("番号の確認ができませんでした。\n入力した番号が間違っている可能性があります。\nお手持ちの番号をご確認のうえ、もう一度入力してください。\n\nI（アイ）、O（オー）、Z（ゼット）、-（ハイフン）は使われない文字です。1、0、2 等の間違いでないかご確認ください。");
            return;
        }
        
        // Mock checks based on the card code
        // 1. Prepaid card codes (let's say they start with '5000' or '1000' or '5')
        if (code.startsWith('5000') || code.startsWith('1000') || code.startsWith('5') || code.startsWith('9')) {
            var valToAdd = code.startsWith('5000') ? 5000 : (code.startsWith('1000') ? 1000 : 2000);
            // Update balance
            var currentRaw = parseInt(sessionStorage.getItem('balance_raw') || '0', 10);
            var newRaw = currentRaw + valToAdd;
            sessionStorage.setItem('balance_raw', newRaw);
            sessionStorage.setItem('balance', '¥' + newRaw.toLocaleString());
            
            // Sync with server
            fetch('/api/stats/balance', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: newRaw })
            }).catch(function(e) {
                console.error("Failed to sync balance with server:", e);
            });
            
            alert("残高を追加しました。\n追加額: ¥" + valToAdd.toLocaleString() + "\n新しい残高: ¥" + newRaw.toLocaleString());
            
            // Redirect to top page
            window.location.href = "index.html";
        } else {
            // 2. Title code - we mock it to Super Mario Maker (NS_UID 20010000000001)
            var nsUid = "20010000000001";
            alert("ダウンロード番号が確認されました。\nソフト: Super Mario Maker\n\n購入手続きへ進みます。");
            sessionStorage.setItem('redeem_title_id', "0005000000000001");
            sessionStorage.setItem('redeem_num', code);
            window.location.href = "buy01_01.html?type=title&seq=redeem&title=" + nsUid;
        }
    });
});
