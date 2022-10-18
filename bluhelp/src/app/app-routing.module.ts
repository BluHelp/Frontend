
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ExitSystemComponent } from './components/exit-system/exit-system.component';

import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { LoginComponent } from './components/login/login.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProjectProfileComponent } from './components/project-profile/project-profile.component';

const routes: Routes = [

  { path: "", component: LoginComponent },
  { path: "Register", component: UserFormComponent },
  { path: "Home/:id", component: HomeComponent },
  { path: "Search", component: SearchComponent },
  { path: "CreateProject/:id", component: ProjectFormComponent },
  { path: "Profile", component: UserProfileComponent },
  { path: "ProjectProfile", component: ProjectProfileComponent},
  { path: "exitSystem", component: ExitSystemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
