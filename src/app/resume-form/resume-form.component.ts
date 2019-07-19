import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../app.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css'],
})
export class ResumeFormComponent implements OnInit {
  resumeFields = {
    name: '',
    experience: '',
    email: '',
    phone: '',
  };
  // dataObj = {};
  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.getResumeData();
  }

  createResume() {
    console.log(this);
    this.resumeService.addResume(this.resumeFields).subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      },
    );
  }

  getResumeData() {
    this.resumeService.getResume().subscribe((data: any) => {
      console.log(data);
      this.resumeFields = data.data;
      console.log(this.resumeFields);
    });
  }
}
