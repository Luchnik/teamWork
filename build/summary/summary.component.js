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
var project_1 = require('../project');
var projects_service_1 = require('../projects.service');
var SummaryComponent = (function () {
    function SummaryComponent(projectsService) {
        this.projectsService = projectsService;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsService.getUsers().subscribe(function (users) {
            _this.avatars = users
                .filter(function (u) { return _this.project.users.indexOf(u.username) > -1; })
                .map(function (u) { return u.avatar; });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_1.Project)
    ], SummaryComponent.prototype, "project", void 0);
    SummaryComponent = __decorate([
        core_1.Component({
            selector: 'summary',
            templateUrl: 'app/summary/summary.component.html',
            styles: ["\n    md-card {\n      margin: 10px auto 0 auto;\n      width: 550px;\n      border-radius: 5px;\n      text-align: left;\n    }\n    md-card:last-child {\n      margin: 10px auto 30px auto;\n    }\n    img {\n      border-radius: 50%;\n      margin-right: 5px;\n    }\n    a {\n      color: tomato;\n    }\n  "],
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=summary.component.js.map