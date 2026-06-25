/**
 * @module wood
 */
(function($, exports){
    "use strict";
    /**
     * 各画面で使用するJS拡張のラッパー関数
     * [memo] NUP1.1以降の新機能もしくは既存機能改修時に適用可能
     * @namespace wood
     * @class jsExt
     */

    var wood = exports.wood || {};
    wood.jsExt = {};
    /**
     * WiiUデバイス判定
     * @property isWiiU
     * @private
     * @type {Boolean}
     */
    var isWiiU = (typeof wiiuSystemSetting !== 'undefined') ? true : false;

    /**
     * コンソールログを出力する
     * @method print
     * @param message
     */
    wood.jsExt.print = function(message){
        if(isWiiU){
            if (typeof wiiuDebug !== 'undefined') {
                wiiuDebug.print(message);
            }
        }else{
            if (typeof console !== 'undefined') {
                exports.console.log(message);
            }
        }
    };
    /**
     * アラートダイアログを表示する
     * @method alert
     * @param message
     * @param buttonText
     */
    wood.jsExt.alert = function(message, buttonText){
        if(isWiiU){
            if (buttonText !== null) {
                wiiuDialog.alert(message, buttonText);
            } else {
                wiiuDialog.alert(message, 'OK');
            }
        }else{
            var text = message;
            if (buttonText !== null) {
                text = text + "\n\nButton: " + buttonText;
            }
            window.alert(text);
        }
    };
    /**
     * 確認ダイアログを表示する
     * @method confirm
     * @param message
     * @param lButtonText
     * @param rButtonText
     */
    wood.jsExt.confirm = function(message, lButtonText, rButtonText){
        if(isWiiU){
            if (lButtonText !== null && rButtonText !== null) {
                return wiiuDialog.confirm(message, lButtonText, rButtonText);
            } else {
                return wiiuDialog.confirm(message, 'Cancel', 'OK');
            }
        }else{
            var text = message;
            if (lButtonText != null && rButtonText != null) {
                text = text + "\n\nLeft Button: " + lButtonText;
            }
            return window.confirm(text);
        }
    };
    /**
     * セッションストレージラッパー関数
     * @method sessionStorage
     * @return {*}
     */
    wood.jsExt.sessionStorage = function(){
        if(isWiiU){
            return wiiuSessionStorage;
        }else{
            if (typeof sessionStorage !== 'undefined') {
                return sessionStorage;
            }
        }
    };
    /**
     * ローカルストレージラッパー関数
     * @method localStorage
     * @return {*}
     */
    wood.jsExt.localStorage = function(){
        if(isWiiU){
            return wiiuLocalStorage;
        }else{
            if (typeof localStorage !== 'undefined') {
                return localStorage;
            }
        }
    };
    /**
     * ローカルストレージ保存
     * @method save
     * @return {*}
     */
    wood.jsExt.save = function(){
        if(isWiiU){
            wiiuLocalStorage.write();
        }
    };
    /**
     * エラービューワーを表示する
     * @method showError
     * @param errorCode
     * @param errorMessage
     */
    wood.jsExt.showError = function(errorCode, errorMessage){
        if(isWiiU){
            var code;
            if (typeof errorCode === 'string') {
                code = parseInt(errorCode,10);
            } else {
                code = errorCode;
            }
            Wood.Analytics.sendError(code);
            if (errorMessage !== null) {
                wiiuErrorViewer.openByCodeAndMessage(code, errorMessage);
            } else {
                wiiuErrorViewer.openByCode(code);
            }
        }else{
            Wood.Analytics.sendError(errorCode);
            if (errorMessage !== null) {
                exports.alert(errorCode + "\n\n" + errorMessage);
            } else {
                exports.alert(errorCode);
            }
        }
    };
    /**
     * ブラウザアプリを終了する
     * @method closeApplication
     */
    wood.jsExt.closeApplication = function(){
        if(isWiiU){
            wiiuBrowser.jumpToHomeButtonMenu();
        }else{
            //とりあえずTOP
            location.replace('./#top');
        }
    };
    /**
     * ホームボタン操作禁止を解除する
     * @method enableHomeButton
     */
    wood.jsExt.enableHomeButton = function(){
        if(isWiiU){
            wood.jsExt.print('[ Enable Home Button ]');
            wiiuBrowser.lockHomeButtonMenu(false);
        }
    };
    /**
     * ホームボタン操作を禁止する
     * @method disableHomeButton
     */
    wood.jsExt.disableHomeButton = function(){
        if(isWiiU){
            wood.jsExt.print('[ Disable Home Button ]');
            wiiuBrowser.lockHomeButtonMenu(true);
        }
    };
    /**
     * ユーザ操作禁止を解除する
     * @method enableUserOperation
     */
    wood.jsExt.enableUserOperation = function(){
        if(isWiiU){
            wood.jsExt.print('[ Enable User Operation ]');
            //未ロック状態で解除しようとするとチラつきが発生するため、ロックされているか判定する
            //(ページ遷移前からロックされている場合は判別できないので、同ページ内で明示的にロックされていた場合だけ)
            if(exports.isUserOperationEnabled !== true){
                wiiuBrowser.lockUserOperation(false);
            }
            exports.isUserOperationEnabled = true;
        }
    };
    /**
     * ユーザ操作を禁止する
     * @method disableUserOperation
     */
    wood.jsExt.disableUserOperation = function(){
        if(isWiiU){
            wood.jsExt.print('[ Disable User Operation ]');
            if(exports.isUserOperationEnabled !== false){
                wiiuBrowser.lockUserOperation(true);
            }
            exports.isUserOperationEnabled = false;
        }
    };
    /**
     * PrincipalIdを取得する
     * @method PrincipalId
     * @return {*}
     */
    wood.jsExt.PrincipalId = function(){
        var pattern;
        if(isWiiU){
            pattern = (wiiuNNA.principalId %2 === 0) ? 'A' : 'B';
        }else{
            pattern = '';
        }
        return pattern;
    };
    /**
     * 指定のサウンドを再生する
     * @method playSound
     * @param {String} se_name SEラベル名
     * @param {Number} num デバイス(デフォルト1)
     */
    wood.jsExt.playSound = function(se_name, num){
        if(isWiiU){
            wiiuSound.playSoundByName(se_name, num);
        }else{
            $.print('[wiiuSound.playSoundByName] Play: ' + se_name);
        }
    };

    exports.wood = wood;
})(jQuery, window);
