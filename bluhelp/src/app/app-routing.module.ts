
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
import { ModalInformationComponent } from './components/modal-information/modal-information.component';
import { ModalPhotoComponent } from './components/modal-photo/modal-photo.component';

const routes: Routes = [

  { path: "", component: LoginComponent },
  { path: "info", component: ModalInformationComponent },
  { path: "photo", component: ModalPhotoComponent},
  { path: "register", component: UserFormComponent },
  { path: "home/:id", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "create-project/:id", component: ProjectFormComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "project-profile", component: ProjectProfileComponent},
  { path: "exit-system", component: ExitSystemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
