/**
 * Snake.js v0.138
 * Makes your JavaScript Parselmouth
 * @author Michał Mackiewicz <michalmacki@gmail.com>
 **/

var Snake = {

    /**
     * Returns last element of an array
     * @param {array} a_list - array to analyze
     * @returns {mixed} last - array element
     **/

    last: function(a_list) {
        return a_list[a_list.length - 1];
    },

    /**
     * Returns object property by specified index, or given default value if not found
     * @param {object} a_dict - Object to analyze
     * @param {string} a_key - Key to find
     * @param {mixed} default_value - Value to return if specified key not found
     * @returns {mixed} - Value of specified object property, or given detault if not found
     **/

    get: function(a_dict, a_key, default_value) {
        if(default_value === undefined) {
            default_value = null;
        }
        if (typeof(a_dict[a_key]) != 'undefined') {
            return a_dict[a_key];
        } else {
            return default_value;
        }
    },

    /**
     * Returns true if given string A ends with given string B, false otherwise
     * @param {string} - a_string String to test
     * @param {string} - a_beginning Beginning to test
     * @returns {boolean} - Return boolean value
     **/

    startswith: function(a_string, a_beginning) {
        if (a_string.indexOf(a_beginning) === 0) {
            return true;
        }
        return false;
    },

    /**
     * Returns true if given string A ends with given string B, false otherwise
     * @param {string} a_string - String to test
     * @param {string} an_ending - Ending to test
     * @returns {boolean} - Return boolean value
     **/

    endswith: function(a_string, an_ending) {
        return a_string.substr(a_string.length - an_ending.length) == an_ending;
    },

    /**
     * Given two arrays, returns object with properties from first array and values of the second array
     * @param {array} keys - Array with keys
     * @param {array} values - Array with values
     * @returns {object} - Object with key-value pairs
     **/

    zip: function(keys, values) {
        var result = {};
        for (var k = 0; k < keys.length; k++) {
            if (typeof(values[k]) == 'undefined') {
                result[keys[k]] = null;
            } else {
                result[keys[k]] = values[k];
            }
        }
        return result;
    },

    /**
     * Converts any value to string if possible, or empty string if not
     * @param {mixed} - Input value
     * @returns {string} - Zero or more length string
     **/

    str: function(mixed_input) {
        if (!mixed_input) {
            return '';
        } else {
            return mixed_input.toString();
        }
    },

    /**
     * Converts any value to integer if possible, or given default value if not
     * @param {mixed} mixed_input - Input value
     * @param {integer} default_value - Default return value if input can't be converted to int, defaults to zero
     * @returns {integer} conv - Converted value
     **/

    int: function(mixed_input,default_value) {
        var conv = parseInt(mixed_input);
        if(isNaN(conv)) {
            return default_value || 0;
        }
        return conv;
    },

    /**
     * Converts any value to float if possible, or given default value if not
     * @param {mixed} mixed_input - Input value
     * @param {integer} default_value - Default return value if input can't be converted to float, defaults to zero
     * @returns {float} - Converted value
     **/
    _float: function(mixed_input,default_value) {
        var conv = parseFloat(this.str(mixed_input).replace(',', '.'));
            if(isNaN(conv)) {
            return default_value || 0;
        }
        return conv;
    },

    /**
     * Returns minimal value from array
     * @param {array} a_list - Array to analyze
     * @returns {float} - Minimal value
     */

     min: function(a_list) {
         return Math.min.apply( Math, a_list );
     },

    /**
     * Returns maximal value from array
     * @param {array} a_list - Array to analyze
     * @returns {float} - Maximal value
     */

     max: function(a_list) {
          return Math.max.apply( Math, a_list );
     },

     /**
     * Returns true if some item is present in array, false otherwise
     * @param (array) a_list - Array to analyze
     * @param {mixed} looked_value - Value to test
     * @returns {boolean} true/false
     **/

     in: function(a_list,looked_value) {
         return a_list.indexOf(looked_value) !== -1;
     },

     /**
     * Returns all object own properties' values
     * @param {object} Object to analyze
     * @returns {array} Array of values
     **/

     values: function(a_dict) {
         var return_list = [];
         for(var key in a_dict) {
             if(a_dict.hasOwnProperty(key)) {
                 return_list.push(a_dict[key]);
             }
         }
         return return_list;
     }
}

if (typeof(window['S'] == 'undefined')) {
    window['S'] = Snake;
}
