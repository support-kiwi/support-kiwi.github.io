/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    var lodash         = require('lodash'),
        assertArgument = require('../assert/assertArgument'),
        isVoid         = require('../tester/isVoid'),
        isFunction     = require('../tester/isFunction'),
        isIndex        = require('../tester/isIndex');

    /**
     * Invokes `func` after `wait` milliseconds.
     *
     * ```js
     *     XP.delay(function() { console.log('later'); }, 1000);
     *     // => logs 'later' after one second
     *
     *     XP.delay(function() { console.log('deferred'); });
     *     // logs 'deferred' after one or more milliseconds
     * ```
     *
     * @function delay
     * @param {Function} func The function to delay.
     * @param {number} [wait = 0] The number of milliseconds to delay invocation.
     * @returns {number} Returns the timer id.
     */
    module.exports = function delay(func, wait) {
        assertArgument(isFunction(func), 1, 'Function');
        assertArgument(isVoid(wait) || isIndex(wait), 2, 'number');
        return wait > 0 ? lodash.delay(func, wait) : lodash.defer(func);
    };

}());