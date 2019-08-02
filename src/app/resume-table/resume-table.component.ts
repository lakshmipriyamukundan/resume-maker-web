import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResumeService } from '../app.service';

@Component({
  selector: 'app-resume-table',
  templateUrl: './resume-table.component.html',
  styleUrls: ['./resume-table.component.css'],
})
export class ResumeTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'experience', 'email', 'phone'];
  dataSource = [];

  constructor(private resumeService: ResumeService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.getResumeData();
  }

  getResumeData() {
    this.resumeService.getResume().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<PeriodicElement>();
    });
  }
}

export interface PeriodicElement {
  name: '';
  experience: '';
  email: '';
  phone: '';
}
