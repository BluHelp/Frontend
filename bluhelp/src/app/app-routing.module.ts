import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "search", component : SearchComponent},
  {path : "criarprojeto", component : ProjectFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
