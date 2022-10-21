
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ExitSystemComponent } from './components/exit-system/exit-system.component';

import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

import { UserFormComponent } from './components/user-form/user-form.component';
import { ProjectProfileComponent } from './components/project-profile/project-profile.component';

import { ContributionsComponent } from './components/contributions/contributions.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [

  { path: "", component: LoginComponent },
  { path: "register", component: UserFormComponent },
  { path: "home/:id", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "create-project/:id", component: ProjectFormComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "project-profile/:idproject", component: ProjectProfileComponent},
  { path: "exit-system", component: ExitSystemComponent },
  { path: "contributions/:id", component: ContributionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
