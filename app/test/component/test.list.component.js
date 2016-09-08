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
var url_1 = require("../model/url");
var test_1 = require("../model/test");
var TestHistoryComponent = (function () {
    function TestHistoryComponent() {
        this.tests = [];
    }
    TestHistoryComponent.prototype.ngOnInit = function () {
        var url = new url_1.Url();
        url.host = 'www.google.com';
        var test = new test_1.Test();
        test.method = 'GET';
        test.url = url;
        test.date = new Date();
        test.user = 'Dale Seo';
        this.tests.push(test);
    };
    TestHistoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'test-list',
            templateUrl: 'test.list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TestHistoryComponent);
    return TestHistoryComponent;
}());
exports.TestHistoryComponent = TestHistoryComponent;
//# sourceMappingURL=test.list.component.js.map