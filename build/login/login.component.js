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
var router_1 = require('@angular/router');
var auth_service_1 = require('../auth.service');
var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.login = function (_a) {
        var _this = this;
        var username = _a.username, password = _a.password;
        this.auth.login(username, password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigateByUrl('/home');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/login/login.component.html',
            styles: ["\n    span {\n      display: inline-block;\n      margin-top: 10px;\n      font-family: Verdana, sans-serif;\n      color: tomato;\n      font-size: 18px;\n    }\n    *::-webkit-input-placeholder {\n      color: tomato;\n    }\n    *:-moz-placeholder {\n      color: tomato;\n    }\n    *::-moz-placeholder {\n      color: tomato;\n    }\n    *:-ms-input-placeholder {\n      color: tomato;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map