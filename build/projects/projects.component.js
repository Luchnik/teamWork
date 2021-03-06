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
var projects_service_1 = require('../projects.service');
var ProjectsComponent = (function () {
    function ProjectsComponent(service) {
        this.service = service;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProjects().subscribe(function (projects) {
            return _this.projects = projects;
        });
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'projects',
            templateUrl: 'app/projects/projects.component.html',
            styles: ["\n    div {\n      margin-top: 20px;\n      text-align: center;\n    }\n  "],
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map