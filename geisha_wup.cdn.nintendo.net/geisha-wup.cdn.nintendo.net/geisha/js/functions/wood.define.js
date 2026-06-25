/**
 * @module wood
 */
(function($, exports){
    "use strict";
    /**
     * 各画面で使用する定数
     * [memo]NUP1.1以降の新機能もしくは既存機能改修時に適用可能
     * @namespace wood
     * @class define
     */

    var wood = exports.wood || {};
    wood.define = {};

    /**
     * samuraiサーバエラーコードプレフィックス
     * @property PREFIX_SAMURAI
     * @type {Number}
     * @default 110
     */
    wood.define.PREFIX_SAMURAI = 110;
    /**
     * ninjaサーバエラーコードプレフィックス
     * @property PREFIX_NINJA
     * @type {Number}
     * @default 107
     */
    wood.define.PREFIX_NINJA = 107;
    /**
     * その他サーバエラーコードプレフィックス
     * @property PREFIX_OTHER
     * @type {Number}
     * @default 111
     */
    wood.define.PREFIX_OTHER = 111;

    // embedded error codes
    /**
     * アプリ終了エラーコード
     * @property ERROR_CODE_CLOSE_APPLICATION
     * @type {Number}
     * @default 1119000
     */
    wood.define.ERROR_CODE_CLOSE_APPLICATION = 1119000;
    /**
     * リトライ可能エラーコード
     * @property ERROR_CODE_RETRIABLE
     * @type {Number}
     * @default 1119001
     */
    wood.define.ERROR_CODE_RETRIABLE = 1119001;
    /**
     * メンテナンス中エラーコード
     * @property ERROR_CODE_UNDER_MAINTENANCE
     * @type {Number}
     * @default 1119002
     */
    wood.define.ERROR_CODE_UNDER_MAINTENANCE = 1119002;
    /**
     * サービス終了エラーコード
     * @property ERROR_CODE_SERVICE_FINISHED
     * @type {Number}
     * @default 1119003
     */
    wood.define.ERROR_CODE_SERVICE_FINISHED = 1119003;
    /**
     * ブラウザー使用不可エラーコード
     * @property ERROR_CODE_BROWSWER_LOCKED
     * @type {Number}
     * @default 1990503
     */
    wood.define.ERROR_CODE_BROWSWER_LOCKED = 1990503;

    exports.wood = wood;
})(jQuery, window);