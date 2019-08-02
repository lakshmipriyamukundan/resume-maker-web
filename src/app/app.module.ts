import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomMaterialModule } from './material.module';
import { ResumeService } from './app.service';

import { AppComponent } from './app.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeTableComponent } from './resume-table/resume-table.component';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ResumeFormComponent,
    HomeComponentComponent,
    LoginComponent,
    ResumeTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
