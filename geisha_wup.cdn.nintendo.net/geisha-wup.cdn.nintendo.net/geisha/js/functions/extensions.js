// PCとwiiuで使える処理を使い分けるためのスクリプト
// 全てのhtmlで自作scriptの前に読み込んでください

//method extension

var isWiiU;

if (typeof wiiuSystemSetting !== 'undefined') {

	isWiiU = true;

	// wrapper for wiiu
	jQuery.extend({
		print : function(message) {
			if (typeof wiiuDebug !== 'undefined') {
				wiiuDebug.print(message);
			}
		},
		alert : function(message, buttonText) {
			if (buttonText != null) {
				wiiuDialog.alert(message, buttonText);
			} else {
				wiiuDialog.alert(message, 'OK');
			}
		},
		confirm : function(message, lButtonText, rButtonText) {
			if (lButtonText != null && rButtonText != null) {
				return wiiuDialog.confirm(message, lButtonText, rButtonText);
			} else {
				return wiiuDialog.confirm(message, 'Cancel', 'OK');
			}
		},
		sessionStorage : function() {
			return wiiuSessionStorage;
		},
		localStorage : function() {
			return wiiuLocalStorage;
		},
		save : function() {
            criticalAction(function() {
			    wiiuLocalStorage.write();
            });
		},
		showError : function(errorCode, errorMessage) {
			var code;
			if (typeof errorCode === 'string') {
				code = parseInt(errorCode);
			} else {
				code = errorCode;
			}
			Wood.Analytics.sendError(code);
			if (errorMessage != null) {
				wiiuErrorViewer.openByCodeAndMessage(code, errorMessage);
			} else {
				wiiuErrorViewer.openByCode(code);
			}
		}
	});

} else {

	isWiiU = false;

	// wrapper for PC
	jQuery.extend({
		print : function(message) {
			if (typeof console !== 'undefined') {
				console.log(message);
			}
		},
		alert : function(message, buttonText) {
			var text = message;
			if (buttonText != null) {
				text = text + "\n\nButton: " + buttonText;
			}
			window.alert(text);
		},
		confirm : function(message, lButtonText, rButtonText) {
			var text = message;
			if (lButtonText != null && rButtonText != null) {
				text = text + "\n\nLeft Button: " + lButtonText;
			}
			return window.confirm(text);
		},
		sessionStorage : function() {
			if (typeof sessionStorage !== 'undefined') {
				return sessionStorage;
			}
		},
		localStorage : function() {
			if (typeof localStorage !== 'undefined') {
				return localStorage;
			}
		},
		save : function() {
		},
		showError : function(errorCode, errorMessage) {
			if (errorMessage != null) {
				window.alert(errorCode + "\n\n" + errorMessage);
			} else {
				window.alert(errorCode);
			}
		}
	});

}

//button extension

// A -> click
var BUTTON_A = 13;

// assignable
var BUTTON_B = 27;
var BUTTON_X = 88;
var BUTTON_Y = 89;
var BUTTON_L = 76;
var BUTTON_R = 82;
var BUTTON_PLUS = 80;
var BUTTON_MINUS = 77;

// var BUTTON_ZL = 8;
// var BUTTON_ZR = 34;
// var BUTTON_HOME = 36;
// var BUTTON_LEFT = 37;
// var BUTTON_UP = 38;
// var BUTTON_RIGHT = 39;
// var BUTTON_DOWN = 40;

jQuery.fn.extend({

	buttonB : function(callback) {
		jQuery(this).keydown(function(e) {
			if (e.keyCode == BUTTON_B) {
				return callback();
			}
		});
		return this;
	},
	buttonX : function(callback) {
		jQuery(this).keydown(function(e) {
			if (e.keyCode == BUTTON_X) {
				return callback();
			}
		});
		return this;
	},
	buttonY : function(callback) {
		jQuery(this).keydown(function(e) {
			if (e.keyCode == BUTTON_Y) {
				return callback();
			}
		});
		return this;
	},
	buttonR : function(callback) {
		jQuery(this).keydown(function(e) {
			if (e.keyCode == BUTTON_R) {
				return callback();
			}
		});
		return this;
	},
	buttonL : function(callback) {
		jQuery(this).keydown(function(e) {
			if (e.keyCode == BUTTON_L) {
				return callback();
			}
		});
		return this;
	},
	buttonPlus : function(callback) {
		jQuery(this).keydown(function(e) {
			if (e.keyCode == BUTTON_PLUS) {
				return callback();
			}
		});
		return this;
	},
	buttonMinus : function(callback) {
		jQuery(this).keydown(function(e) {
			if (e.keyCode == BUTTON_MINUS) {
				return callback();
			}
		});
		return this;
	},
	buttonAClick : function() {
		jQuery(this).keydown(function(e) {
			if (e.keyCode == BUTTON_A && !$(e.target).is('a')) {
				jQuery(this).click();
				return false;
			}
		});
		return this;
	}

});

// Intercept all $.ajax requests for offline/local rendering
(function() {
    var originalAjax = $.ajax;
    $.ajax = function(settings) {
        if (settings && settings.url) {
            var url = settings.url;
            
            // Rewrite remote URLs to local folders
            url = url.replace(/https:\/\/ninja\.wup\.shop\.nintendo\.net\/ninja\//gi, '../../ninja.wup.shop.nintendo.net/ninja/');
            url = url.replace(/https:\/\/samurai\.wup\.shop\.nintendo\.net\/samurai\//gi, '../../samurai-wup.cdn.nintendo.net/samurai/');
            url = url.replace(/https:\/\/samurai-wup\.cdn\.nintendo\.net\/samurai\//gi, '../../samurai-wup.cdn.nintendo.net/samurai/');
            
            // Extract path and query parameters
            var parts = url.split('?');
            var path = parts[0];
            var query = parts[1] ? '?' + parts[1] : '';
            
            // If it is an extensionless API endpoint, append .html
            if (path.indexOf('.html') === -1 && 
                path.indexOf('.js') === -1 && 
                path.indexOf('.css') === -1 && 
                path.indexOf('.png') === -1 && 
                path.indexOf('.gif') === -1 && 
                path.indexOf('.jpg') === -1 && 
                path.indexOf('.xml') === -1 &&
                path.indexOf('.json') === -1) {
                
                if (path.endsWith('/')) {
                    path = path.slice(0, -1);
                }
                path = path + '.html';
            }
            
            settings.url = path + query;
            
            // Intercept data filter to resolve "No Content" or XML errors with valid JSON/XML mocks
            var originalDataFilter = settings.dataFilter;
            settings.dataFilter = function(data, type) {
                var rawData = data;
                if (typeof originalDataFilter === 'function') {
                    rawData = originalDataFilter.apply(this, arguments);
                }
                
                var isNoContent = typeof rawData === 'string' && 
                                  (rawData.indexOf('No Content:') === 0 || rawData.trim() === '');
                var isXmlError = typeof rawData === 'string' &&
                                 (rawData.indexOf('<code>3010</code>') !== -1 || rawData.indexOf('{"error"') === 0);
                                 
                var dataType = type || settings.dataType;
                
                if (dataType === 'json' || !dataType) {
                    if (isNoContent || isXmlError) {
                        if (settings.url.indexOf('/directories') !== -1) {
                            return '{"directories":{"directory":[]}}';
                        }
                        if (settings.url.indexOf('/news') !== -1) {
                            return '{"news":{"news_entry":[]}}';
                        }
                        if (settings.url.indexOf('/owned_coupons') !== -1) {
                            return '{"coupons":[]}';
                        }
                        if (settings.url.indexOf('/wishlist') !== -1) {
                            return '{"wishlist":[]}';
                        }
                        return '{}';
                    }
                } else if (dataType === 'xml') {
                    if (isNoContent || isXmlError) {
                        if (settings.url.indexOf('/current') !== -1) {
                            return '<?xml version="1.0" encoding="UTF-8"?><balance><amount>¥0</amount><raw_value>0</raw_value></balance>';
                        }
                        if (settings.url.indexOf('/owned_titles') !== -1) {
                            return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><owned_titles total="0"></owned_titles>';
                        }
                        if (settings.url.indexOf('/shared_titles') !== -1) {
                            return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><owned_titles total="0"></owned_titles>';
                        }
                        if (settings.url.indexOf('/transactions') !== -1) {
                            return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><transactions total="0"></transactions>';
                        }
                        return '<?xml version="1.0" encoding="UTF-8"?><response></response>';
                    }
                }
                return rawData;
            };
        }
        return originalAjax.apply(this, arguments);
    };
})();
