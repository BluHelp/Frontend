import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ProjectProfileComponent } from './components/project-profile/project-profile.component';
import { ExitSystemComponent } from './components/exit-system/exit-system.component';
import { LoginComponent } from './components/login/login.component';
import { ModalOptionsComponent } from './components/modal-options/modal-options.component';
import { ContributionsComponent } from './components/contributions/contributions.component';
import { ModalInformationComponent } from './components/modal-information/modal-information.component';
import { ModalPhotoComponent } from './components/modal-photo/modal-photo.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ProjectFormComponent,
    UserProfileComponent,
    HeaderComponent,
    NavbarComponent,
    SearchComponent,
    ProjectProfileComponent,
    ExitSystemComponent,
    LoginComponent,
    ModalOptionsComponent,
    ContributionsComponent,
    ModalInformationComponent,
    ModalPhotoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
