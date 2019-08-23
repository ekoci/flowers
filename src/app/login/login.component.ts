import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService : LoginService) { }



  register = false;
  username = '';
  password = '';
  result = false;
  ngOnInit() {
  }

  onRegister() {
    this.register = true;
    console.log('enxhi', this.username)
  }


}
