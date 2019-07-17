import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formVar: FormGroup;
  username: string;
  password: string;
  constructor() {}

  ngOnInit() {}

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('success');
    } else {
      alert('Invalid credentials');
    }
  }
}
