import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resume-form', component: ResumeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
