import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'resume-form', component: ResumeFormComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
