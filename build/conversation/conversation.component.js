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
var Rx_1 = require('rxjs/Rx');
var projects_service_1 = require('../projects.service');
var auth_service_1 = require('../auth.service');
var ConversationComponent = (function () {
    function ConversationComponent(auth, service, router, route) {
        var _this = this;
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.route = route;
        this.writable = false;
        this.conv_id = route.params.map(function (params) { return params['conv_id']; });
        this.username = auth.currentUser.map(function (u) { return u.username; });
        this.project = router
            .routerState
            .parent(route)
            .params
            .map(function (params) { return params['id']; })
            .flatMap(function (id) { return _this.service.getProject(id); });
    }
    ConversationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username.subscribe(function (username) {
            _this.project.subscribe(function (project) {
                _this.writable = project.users.indexOf(username) > -1;
            });
        });
        this.sub = Rx_1.Observable.timer(0, 5000)
            .flatMap(function () { return _this.conv_id.flatMap(function (id) { return _this.service.getConversation(id); }); })
            .subscribe(function (conversation) {
            _this.conv = conversation;
        });
    };
    ConversationComponent.prototype.handleClick = function () {
        var _this = this;
        this.username.subscribe(function (username) {
            var msg = { text: _this.message, username: username };
            _this.conv_id
                .flatMap(function (id) { return _this.service.createMessage(id, msg); })
                .subscribe(function (message) {
                _this.conv.messages.push(message);
                _this.message = '';
            });
        });
    };
    ConversationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ConversationComponent = __decorate([
        core_1.Component({
            selector: 'conversation',
            templateUrl: 'app/conversation/conversation.component.html',
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, projects_service_1.ProjectsService, router_1.Router, router_1.ActivatedRoute])
    ], ConversationComponent);
    return ConversationComponent;
}());
exports.ConversationComponent = ConversationComponent;
//# sourceMappingURL=conversation.component.js.map