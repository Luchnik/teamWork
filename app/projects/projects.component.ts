import { Component, OnInit } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'projects',
  templateUrl: 'app/projects/projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  ngOnInit() {
    this.projects = [
      { id: '1', name: 'First project', description: 'some desc', conversations: [], users: [] },
      { id: '2', name: 'Second project', description: 'some desc', conversations: [], users: [] }
    ];
  }
}