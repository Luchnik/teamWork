import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'new-project',
  templateUrl: 'app/new-project/new-project.component.html',
  styles: [`
    md-card {
      margin: 10px auto 0 auto;
      width: 550px;
      border-radius: 5px;
      text-align: left;
    }
    span {
      display: inline-block;
      margin-top: 10px;
      font-family: Verdana, sans-serif;
      color: tomato;
      font-size: 18px;
    }
    ul {
      list-style-type: none;
    }
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
      height: 70px;
    }
    *::-webkit-input-placeholder {
      color: tomato;
    }
    *:-moz-placeholder {
      color: tomato;
    }
    *::-moz-placeholder {
      color: tomato;
    }
    *:-ms-input-placeholder {
      color: tomato;
    }
  `],
  providers: [ ProjectsService ]
})
export class NewProjectComponent implements OnInit {
  form: FormGroup;
  name: AbstractControl;
  submitted: boolean = false;
  users: any[];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private service: ProjectsService,
    private router: Router
  ){}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      description: '',
      users: new FormControl([])
    });

    this.name = this.form.controls['name'];

    this.service.getUsers().subscribe(users => {
      this.auth.currentUser.subscribe(currentUser => {
        let currUsername = currentUser.username;
        this.form.controls['users'].setValue([currUsername]);
        this.users = users.filter(u => u.username !== currUsername);
      });
    });
  }

  handler() {
    if (this.form.valid) {
      this.service.createProject(this.form.value).subscribe(() => {
        this.router.navigateByUrl('/projects');
      });
    } else {
      this.submitted = true;
    }
  }

  getIndex(username: string): number {
    return this.form.controls['users'].value.indexOf(username);
  }

  isSelected(username: string): boolean {
    return this.getIndex(username) > -1;
  }

  onSelected(evt, username) {
    let users = this.form.controls['users'];
    let newUsers = users.value;
    let index = this.getIndex(username);

    if (evt.checked && index === -1) {
        newUsers = users.value.concat([username]);
    }

    if (!evt.checked && index > -1) {
        newUsers = users.value.slice(0, index).concat(users.value.slice(index + 1));
    }

    users.setValue(newUsers);
  }

}