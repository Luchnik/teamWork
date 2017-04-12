import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { EmitterService } from './emitter.service';
import { LoggedInGuard } from './loggedIn.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent, projectChildRoutes } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { SummaryComponent } from './summary/summary.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ConversationComponent } from './conversation/conversation.component';
import { NewConversationComponent } from './newconversation/newConversation.component';

const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [ LoggedInGuard ] },
  { path: 'projects/new', component: NewProjectComponent, canActivate: [ LoggedInGuard ] },
  { path: 'projects/:id', component: ProjectComponent, children: projectChildRoutes, canActivate: [ LoggedInGuard ] }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    SummaryComponent,
    HomeComponent,
    LoginComponent,
    NewProjectComponent,
    ProjectComponent,
    ConversationComponent,
    NewConversationComponent
  ],
  providers: [ AuthService, LoggedInGuard, EmitterService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {  }