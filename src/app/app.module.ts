import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  exports: [CustomMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
