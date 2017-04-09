import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LoggedInGuard } from './loggedIn.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SummaryComponent } from './summary/summary.component';

const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [ LoggedInGuard ] }
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
    LoginComponent
  ],
  providers: [ AuthService, LoggedInGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule {  }