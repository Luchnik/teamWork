import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [
    BrowserModule, 
    MaterialModule.forRoot(),
    RouterModule.forRoot([])
  ],
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {  }