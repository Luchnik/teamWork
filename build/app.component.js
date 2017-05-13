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
var auth_service_1 = require('./auth.service');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.currentUser.subscribe(function (user) { return _this.user = user; });
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigateByUrl('/');
        return false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styles: ["\n    div.container {\n      text-align: center;\n    }\n    .logo {\n      font-family: Verdana, sans-serif;\n      font-size: 24px;\n      margin-right: 30px;\n    }\n    span.projects a {\n      margin-left: 10px;\n      text-decoration: none;\n      color: #fff;\n      border: 1px solid #fff;\n      border-radius: 5px;\n      font-family: Verdana, sans-serif;\n      font-size: 14px;\n      padding: 7px;\n    }\n    span.projects a:hover {\n      background-color: #fff;\n      text-decoration: none;\n      color: #000;\n    }\n    div.username {\n      margin-left: auto;\n      margin-right: 0;\n    }\n    div.username span {\n      font-family: Verdana, sans-serif;\n      font-size: 14px;\n      color: #fff;\n      margin-left: 10px;\n      margin-right: 10px;\n    }\n    div.username a {\n      margin-left: 10px;\n      text-decoration: none;\n      color: #fff;\n      border: 1px solid #fff;\n      border-radius: 5px;\n      font-family: Verdana, sans-serif;\n      font-size: 14px;\n      padding: 7px;\n    }\n    div.username a:hover {\n      background-color: #fff;\n      text-decoration: none;\n      color: #000;\n    }\n    img {\n      border-radius: 50%;\n      margin-right: 15px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map