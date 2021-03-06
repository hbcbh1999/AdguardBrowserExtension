/**
 * This file is part of Adguard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * Adguard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Adguard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Adguard Browser Extension.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global exports, LS */
/**
 * Filter rules storage adapter
 */
var RulesStorage = exports.RulesStorage = (function() {
    
    var read = function (path, callback) {
		try {
			var value = LS.getItem(path);
			var lines = [];
			if (value) {
				lines = value.split(/[\r\n]+/);
			}
			callback(null, lines);
		} catch (ex) {
			callback(ex);
		}
	};
    
    var write = function (path, data, callback) {
		var value = data.join('\n');
		try {
			LS.setItem(path, value);
			callback();
		} catch (ex) {
			callback(ex);
		}
	};
    
    var remove = function (path, successCallback) {
		LS.removeItem(path);
		successCallback();
	};
    
    return {
        write: write,
        read: read,
        remove: remove
    };
})();