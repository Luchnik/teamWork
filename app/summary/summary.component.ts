import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'summary',
  templateUrl: 'app/summary/summary.component.html',
  styles: [`
    md-card {
      margin: 10px auto 0 auto;
      width: 550px;
      border-radius: 5px;
      text-align: left;
    }
    md-card:last-child {
      margin: 10px auto 30px auto;
    }
    img {
      border-radius: 50%;
      margin-right: 5px;
    }
    a {
      color: tomato;
    }
  `],
  providers: [ ProjectsService ]
})
export class SummaryComponent implements OnInit {
  
  avatars: string[];
  @Input() project: Project;

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projectsService.getUsers().subscribe(users => {
      this.avatars = users
        .filter(u => this.project.users.indexOf(u.username) > -1)
        .map(u => u.avatar);
    });
  }
}