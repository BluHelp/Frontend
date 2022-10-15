import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ExitSystemComponent } from './components/exit-system/exit-system.component';

import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "Home", component: HomeComponent },
  { path: "Search", component: SearchComponent },
  { path: "criarProjeto", component: ProjectFormComponent },
  { path: "Profile", component: UserProfileComponent },
  { path: "exitSystem", component: ExitSystemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
