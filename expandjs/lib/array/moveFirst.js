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

    var assertArgument = require('../assert/assertArgument'),
        isIndex        = require('../tester/isIndex'),
        isVoid         = require('../tester/isVoid'),
        toArray        = require('../caster/toArray');

    /**
     * Moves one or more elements to the beginning of an array and returns the modified array.
     *
     * ```js
     *     var arr = [1, 2, 3, 4, 5];
     *
     *     XP.moveFirst(arr, 2);
     *     // => [3, 1, 2, 4, 5];
     *
     *     console.log(arr);
     *     // => [3, 1, 2, 4, 5]
     *
     *     XP.moveFirst(arr, 2, 3);
     *     // => [2, 4, 3, 1, 5]
     *
     *     XP.moveFirst(arr, 4, 10)
     *     // => [5, 2, 4, 3, 1]
     * ```
     *
     * @function moveFirst
     * @param {Array} array The array to modify
     * @param {number} index The index of the item to be moved
     * @param {number} [howMany] How many items to be moved
     * @returns {Array} The passed array, modified.
     */
    module.exports = function moveFirst(array, index, howMany) {
        assertArgument(array = toArray(array), 1, 'Arrayable');
        assertArgument(isIndex(index), 2, 'a positive number');
        assertArgument(isVoid(howMany) || isIndex(howMany), 3, 'void or a positive number');
        array.unshift.apply(array, array.splice(index, howMany));
        return array;
    };

}());