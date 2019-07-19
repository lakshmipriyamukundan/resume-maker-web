import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  title = 'ang-todo';
  dataObj = {};
  constructor(private router: Router) {}

  ngOnInit() {}

  handleClick(clickVal: any) {
    this.router.navigate(['/resume-form']);
  }
}
