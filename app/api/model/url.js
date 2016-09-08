"use strict";
var Url = (function () {
    function Url() {
        this.scheme = 'http';
    }
    Url.prototype.toFullUrl = function () {
        var str = this.scheme + "://" + this.host;
        if (this.port) {
            str += ":" + this.port;
        }
        if (this.path) {
            str += this.path;
        }
        if (this.query) {
            str += '?' + this.query;
        }
        return str;
    };
    return Url;
}());
exports.Url = Url;
//# sourceMappingURL=url.js.map