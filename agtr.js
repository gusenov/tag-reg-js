/*jslint browser: true, devel: true, nomen: true */

var AGTagRegistry = (function () {
    'use strict';
    
    function AGTagRegistry() {
        this._tags = [];
        this._registry = {};
    }
    
    AGTagRegistry.prototype._getMaskByTags = function (tags) {
        var tagIndex = 0, mask = 0;
        this._tags.forEach(function (tag) {
            if (tags.indexOf(tag) > -1) {
                mask += Math.pow(2, tagIndex);
            }
            tagIndex += 1;
        });
        return mask.toString();
    };
    
    AGTagRegistry.prototype.get = function (tags) {
        var mask = this._getMaskByTags(tags);
        if (this._registry.hasOwnProperty(mask)) {
            return this._registry[mask];
        }
    };
    
    AGTagRegistry.prototype.set = function (tags, value) {
        var mask = 0;
        
        tags.forEach(function (tag) {
            if (this._tags.indexOf(tag) <= -1) {
                this._tags.push(tag);
            }
        }, this);
        
        mask = this._getMaskByTags(tags);
        this._registry[mask] = value;
    };
    
    return AGTagRegistry;
}());