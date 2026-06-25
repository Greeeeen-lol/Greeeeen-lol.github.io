/**
 * @module wood
 */
(function($, exports){
    "use strict";
    /**
     * 各画面で使用する価格処理関数
     * [memo] NUP1.1以降の新機能もしくは既存機能改修時に適用可能
     * @namespace wood
     * @class price
     */

    var wood = exports.wood || {};
    wood.price = {};

    /**
     * 小数点の位置を取得
     * @method getDecimalPoint
     * @private
     * @param {String} price
     * @return {Number}
     */
    function getDecimalPoint(price){
        if(price.indexOf(".")>=0){
            return (price.length-1) - price.indexOf(".");
        }
        return 0;
    }
    /**
     * 小数点を消した整数を取得
     * @method getPaddingInt
     * @private
     * @param {String} price
     * @return {Number}
     */
    function getPaddingInt(price, digit_point){
        var res = price.replace('.','');
        for(var i=0; i<digit_point; i++){
            res += '0';
        }
        return parseInt(res, 10);
    }
    /**
     * 小数点を付けて返す
     * @method addDot
     * @private
     * @param {String} price
     * @return {String}
     */
    function addDot(price, decimal_point){
        var price_abs = priceAbs(price);
        var res = price_abs;
        if(decimal_point>0){
            if(price_abs.length <= decimal_point){
                var top = '0.';
                for(var i=0; i<(decimal_point-price_abs.length); i++){
                    top += '0';
                }
                res = top + price_abs;
            }else{
                var idx = price_abs.length - decimal_point;
                res = price_abs.substring(0,idx) + '.' + price_abs.substring(idx);
            }
        }
        if(isNegative(price)){
            res = '-' + res;
        }
        return res;
    }

    /**
     * 正の値か評価する
     * @method isPositive
     * @param {String} price
     * @return {Boolean}
     */
    var isPositive = wood.price.isPositive = function(price){
        if(price !== null){
            if(price.match(/^[0-9]+[\.]?[0-9]*$/) !== null){
                return true;
            }
        }
        return false;
    };
    /**
     * 負の値か評価する
     * @method isNegative
     * @param {String} price
     * @return {Boolean}
     */
    var isNegative = wood.price.isNegative = function(price){
        if(price !== null){
            if(price.match(/^-[0-9]+[\.]?[0-9]*$/) !== null && !isZero(price)){
                return true;
            }
        }
        return false;
    };
    /**
     * 0か評価する
     * @method isZero
     * @param {String} price
     * @return {Boolean}
     */
    var isZero = wood.price.isZero = function(price){
        if(price !== null){
            return price.match(/^[\-]?[0]+[\.]?[0]*$/) !== null;
        }else{
            return false;
        }
    };
    /**
     * priceの絶対値を取得
     * @method priceAbs
     * @param {String} price
     * @return {*}
     */
    var priceAbs = wood.price.abs = function(price){
        if(isZero(price)){
            return price;
        }else if(isPositive(price)){
            return price;
        }else if(isNegative(price)){
            return price.slice(1);
        }else{
            return null;
        }
    };
    /**
     * price1とprice2を足して返す
     * @method priceAdd
     * @param {String} price1
     * @param {String} price2
     * @return {String}
     */
    var priceAdd = wood.price.add = function(price1, price2){
        var p1_abs = priceAbs(price1);
        var p2_abs = priceAbs(price2);
        if(p1_abs === null || p2_abs === null){
            return null;
        }
        var p1_negative = isNegative(price1);
        var p2_negative = isNegative(price2);
        var digits1 = getDecimalPoint(p1_abs);
        var digits2 = getDecimalPoint(p2_abs);
        var max_digits = Math.max(digits1, digits2);
        // 小数点を消し、桁を揃えた整数を作る
        var p1_pad_int = getPaddingInt(p1_abs.replace('.',''), max_digits-digits1);
        var p2_pad_int = getPaddingInt(p2_abs.replace('.',''), max_digits-digits2);
        var result_int = ((p1_negative)?-1:1)*p1_pad_int + ((p2_negative)?-1:1)*p2_pad_int;
        var result_str = String(result_int);
        // 結果に小数点を付けて返す
        result_str = addDot(result_str, max_digits);
        return result_str;
    };
    /**
     * price1からprice2の差分を返す
     * @method priceSub
     * @param {String} price1
     * @param {String} price2
     * @return {String}
     */
    var priceSub = wood.price.sub = function(price1, price2){
        var price2_inv;
        if(isNegative(price2)){
            price2_inv = price2.slice(1);
        }else if(isPositive(price2)){
            price2_inv = '-' + price2;
        }
        if(price2_inv !== undefined){
            return priceAdd(price1, price2_inv);
        }else{
            return null;
        }
    };

    exports.wood = wood;
})(jQuery, window);
