/*
 * @Author: fanzhang
 * @Date:   2016-11-28 17:19:05
 * @Last Modified by:   fanzhang
 * @Last Modified time: 2016-11-28 18:23:43
 */

'use strict';

function getDependencies(tree, set) {
    var result = [];
    var set = set || {};
    var dependencies = tree && tree.dependencies || [];
    Object.keys(dependencies).forEach(function(dep) {
        var depend = dep + "@" + dependencies[dep].version;
        if (!set[depend]) {
            result.push(depend);
            set[depend] = 1;
            result = result.concat(getDependencies(dependencies[dep], set));
        }
    });
    return result.sort();
}

module.exports = getDependencies