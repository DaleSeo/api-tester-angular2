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
var test_1 = require("../model/test");
var url_1 = require("../model/url");
var req_1 = require("../model/req");
var constants_1 = require("../model/constants");
var TestFormComponent = (function () {
    function TestFormComponent() {
        this.methods = constants_1.METHODS;
        this.schemes = constants_1.SCHEMES;
        this.onSubmitted = new core_1.EventEmitter();
    }
    TestFormComponent.prototype.ngOnInit = function () {
        this.test = new test_1.Test();
        this.test.method = 'GET';
        this.test.url = new url_1.Url();
        this.test.req = new req_1.Req();
    };
    TestFormComponent.prototype.onSubmit = function () {
        console.log('onSubmit');
        this.onSubmitted.emit(this.test);
    };
    TestFormComponent.prototype.setTest = function (test) {
        console.log('>>> setTest : ' + JSON.stringify(test));
        this.test = JSON.parse(JSON.stringify(test));
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TestFormComponent.prototype, "onSubmitted", void 0);
    TestFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'test-form',
            templateUrl: 'test.form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TestFormComponent);
    return TestFormComponent;
}());
exports.TestFormComponent = TestFormComponent;
//# sourceMappingURL=test.form.component.js.map