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
var http_1 = require('@angular/http');
var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
    }
    ProjectsService.prototype.extractData = function (res) {
        return res.json();
    };
    ProjectsService.prototype.getUsers = function () {
        return this.http.get('./api/users').map(this.extractData);
    };
    ProjectsService.prototype.getProject = function (id) {
        return this.http.get('/api/projects/' + id).map(this.extractData);
    };
    ProjectsService.prototype.getProjects = function () {
        return this.http.get('./api/projects').map(this.extractData);
    };
    ProjectsService.prototype.createProject = function (attrs) {
        return this.http.post('./api/projects', attrs).map(this.extractData);
    };
    ProjectsService.prototype.getConversation = function (id) {
        return this.http.get('/api/conversations/' + id).map(this.extractData);
    };
    ProjectsService.prototype.createConversation = function (id, name) {
        return this.http.post("/api/projects/" + id + "/conversations", { name: name }).map(this.extractData);
    };
    ProjectsService.prototype.createMessage = function (conv_id, message) {
        return this.http.post('/api/conversations/' + conv_id + '/messages', message).map(this.extractData);
    };
    ProjectsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectsService);
    return ProjectsService;
}());
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map