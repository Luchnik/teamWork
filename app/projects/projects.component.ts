import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'projects',
  templateUrl: 'app/projects/projects.component.html',
  styles: [`
    div {
      margin-top: 20px;
      text-align: center;
    }
  `],
  providers: [ ProjectsService ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(
    private service: ProjectsService
  ) { }

  ngOnInit() {
    this.service.getProjects().subscribe(projects =>
      this.projects = projects
    );
  }
}