import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  register = false;
  username = '';
  password = '';

  ngOnInit() {
  }

  onRegister() {
    this.register = true;
  }

  onLogin() {
    this.register = false;
    if (this.username === '' && this.password === '') {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/home/general');
    }

  }
}
