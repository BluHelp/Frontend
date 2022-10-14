import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
<<<<<<< Updated upstream
=======
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    UserComponent,
    ProjectFormComponent
=======
    UserFormComponent,
    ProjectFormComponent,
    UserProfileComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
