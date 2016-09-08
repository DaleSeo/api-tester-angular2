"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var url_1 = require("./model/url");
var api_1 = require("./model/api");
var history_1 = require("./model/test");
var ApiHistoryComponent = (function () {
    function ApiHistoryComponent() {
        this.histories = [];
    }
    ApiHistoryComponent.prototype.ngOnInit = function () {
        var url = new url_1.Url();
        url.host = 'www.google.com';
        var api = new api_1.Api();
        api.method = 'GET';
        api.url = url;
        var history = new history_1.Test();
        history.api = api;
        history.date = new Date();
        history.user = 'Dale Seo';
        this.histories.push(history);
    };
    ApiHistoryComponent = __decorate([
        core_1.Component({
            selector: 'test-history',
            templateUrl: 'test.history.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiHistoryComponent);
    return ApiHistoryComponent;
}());
exports.ApiHistoryComponent = ApiHistoryComponent;
//# sourceMappingURL=api.history.component.js.map