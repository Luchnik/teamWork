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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var auth_service_1 = require('../auth.service');
var projects_service_1 = require('../projects.service');
var NewProjectComponent = (function () {
    function NewProjectComponent(fb, auth, service, router) {
        this.fb = fb;
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.submitted = false;
    }
    NewProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            name: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3)
                ])],
            description: '',
            users: new forms_1.FormControl([])
        });
        this.name = this.form.controls['name'];
        this.service.getUsers().subscribe(function (users) {
            _this.auth.currentUser.subscribe(function (currentUser) {
                var currUsername = currentUser.username;
                _this.form.controls['users'].setValue([currUsername]);
                _this.users = users.filter(function (u) { return u.username !== currUsername; });
            });
        });
    };
    NewProjectComponent.prototype.handler = function () {
        var _this = this;
        if (this.form.valid) {
            this.service.createProject(this.form.value).subscribe(function () {
                _this.router.navigateByUrl('/projects');
            });
        }
        else {
            this.submitted = true;
        }
    };
    NewProjectComponent.prototype.getIndex = function (username) {
        return this.form.controls['users'].value.indexOf(username);
    };
    NewProjectComponent.prototype.isSelected = function (username) {
        return this.getIndex(username) > -1;
    };
    NewProjectComponent.prototype.onSelected = function (evt, username) {
        var users = this.form.controls['users'];
        var newUsers = users.value;
        var index = this.getIndex(username);
        if (evt.checked && index === -1) {
            newUsers = users.value.concat([username]);
        }
        if (!evt.checked && index > -1) {
            newUsers = users.value.slice(0, index).concat(users.value.slice(index + 1));
        }
        users.setValue(newUsers);
    };
    NewProjectComponent = __decorate([
        core_1.Component({
            selector: 'new-project',
            templateUrl: 'app/new-project/new-project.component.html',
            styles: ["\n    md-card {\n      margin: 10px auto 0 auto;\n      width: 550px;\n      border-radius: 5px;\n      text-align: left;\n    }\n    span {\n      display: inline-block;\n      margin-top: 10px;\n      font-family: Verdana, sans-serif;\n      color: tomato;\n      font-size: 18px;\n    }\n    ul {\n      list-style-type: none;\n    }\n    input {\n      width: 100%;\n    }\n    textarea {\n      width: 100%;\n      height: 70px;\n    }\n    *::-webkit-input-placeholder {\n      color: tomato;\n    }\n    *:-moz-placeholder {\n      color: tomato;\n    }\n    *::-moz-placeholder {\n      color: tomato;\n    }\n    *:-ms-input-placeholder {\n      color: tomato;\n    }\n  "],
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, projects_service_1.ProjectsService, router_1.Router])
    ], NewProjectComponent);
    return NewProjectComponent;
}());
exports.NewProjectComponent = NewProjectComponent;
//# sourceMappingURL=new-project.component.js.map