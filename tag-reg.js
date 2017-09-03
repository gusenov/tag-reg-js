/*jslint browser: true, devel: true, nomen: true, node:true */

(function () {
    "use strict";

    var TagRegistry = (function () {

        function TagRegistry() {
            this._tags = [];
            this._registry = {};
        }

        TagRegistry.prototype._getMaskByTags = function (tags) {
            var tagIndex = 0, mask = 0;
            this._tags.forEach(function (tag) {
                if (tags.indexOf(tag) > -1) {
                    mask += Math.pow(2, tagIndex);
                }
                tagIndex += 1;
            });
            return mask.toString();
        };

        TagRegistry.prototype.get = function (tags) {
            var mask = this._getMaskByTags(tags);
            if (this._registry.hasOwnProperty(mask)) {
                return this._registry[mask];
            }
        };

        TagRegistry.prototype.set = function (tags, value) {
            var mask = 0;

            tags.forEach(function (tag) {
                if (this._tags.indexOf(tag) <= -1) {
                    this._tags.push(tag);
                }
            }, this);

            mask = this._getMaskByTags(tags);
            this._registry[mask] = value;
        };

        return TagRegistry;
    }());

    if (typeof window === "undefined") {
        module.exports = TagRegistry;
    } else {
        window.TagRegistry = TagRegistry;
    }

}());
