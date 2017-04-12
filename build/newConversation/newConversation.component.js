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
var projects_service_1 = require('../projects.service');
var emitter_service_1 = require('../emitter.service');
var NewConversationComponent = (function () {
    function NewConversationComponent(router, route, emitter, service) {
        this.router = router;
        this.route = route;
        this.emitter = emitter;
        this.service = service;
        this.project_id = router
            .routerState
            .parent(route)
            .params
            .map(function (params) { return params['id']; });
    }
    NewConversationComponent.prototype.handleClick = function () {
        var _this = this;
        this.project_id
            .flatMap(function (id) { return _this.service.createConversation(id, _this.name); })
            .subscribe(function (conv) {
            _this.emitter.next(conv);
            _this.router.navigate(['../', conv.id], { relativeTo: _this.route });
        });
    };
    NewConversationComponent = __decorate([
        core_1.Component({
            selector: 'new-conversation',
            templateUrl: 'app/newconversation/newConversation.component.html',
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, emitter_service_1.EmitterService, projects_service_1.ProjectsService])
    ], NewConversationComponent);
    return NewConversationComponent;
}());
exports.NewConversationComponent = NewConversationComponent;
//# sourceMappingURL=newConversation.component.js.map