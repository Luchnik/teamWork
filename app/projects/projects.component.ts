import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'projects',
  templateUrl: 'app/projects/projects.component.html',
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
    // [
    //   { id: '1', name: 'First project', description: 'some desc', conversations: [], users: [] },
    //   { id: '2', name: 'Second project', description: 'some desc', conversations: [], users: [] }
    // ];
  }
}