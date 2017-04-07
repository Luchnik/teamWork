import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'summary',
  templateUrl: 'app/summary/summary.component.html',
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