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
var emitter_service_1 = require('../emitter.service');
var projects_service_1 = require('../projects.service');
var auth_service_1 = require('../auth.service');
var conversation_component_1 = require('../conversation/conversation.component');
var newConversation_component_1 = require('../newconversation/newConversation.component');
exports.projectChildRoutes = [
    { path: '', component: ProjectComponent },
    { path: 'conversations/new', component: newConversation_component_1.NewConversationComponent },
    { path: 'conversations/:conv_id', component: conversation_component_1.ConversationComponent }
];
var ProjectComponent = (function () {
    function ProjectComponent(auth, route, emitter, service) {
        this.auth = auth;
        this.route = route;
        this.emitter = emitter;
        this.service = service;
        this.canWork = false;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .flatMap(function (id) { return _this.service.getProject(id); })
            .subscribe(function (project) {
            _this.project = project;
            _this.sub = _this.emitter.subscribe(function (conv) { return _this.project.conversations.push(conv); });
            _this.auth.currentUser.subscribe(function (user) {
                _this.canWork = project.users.indexOf(user.username) > -1;
            });
        });
    };
    ProjectComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'project',
            templateUrl: 'app/project/project.component.html',
            styles: ["\n\t\t\tmd-card {\n\t\t\t\tmargin: 10px auto 0 auto;\n\t\t\t\twidth: 550px;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t\tmd-toolbar {\n\t\t\t\tbackground-color: #fff;\n\t\t\t}\n\t\t\ta {\n\t\t\t\tcolor: tomato;\n\t\t\t\tmargin-right: 5px;\n\t\t\t}\n\t\t\ta:hover {\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n    "],
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.ActivatedRoute, emitter_service_1.EmitterService, projects_service_1.ProjectsService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map