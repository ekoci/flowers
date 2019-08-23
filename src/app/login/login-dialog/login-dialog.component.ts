import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../login.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  providers: [LoginService]
})
export class LoginDialogComponent implements OnInit {

  constructor(private router: Router, private loginService : LoginService,public dialogRef: MatDialogRef<LoginDialogComponent>) { }

  username = '';
  password = '';
  result = false;

  ngOnInit() {
  }

  onLogin() {
    this.result = this.loginService.logStatus(this.username, this.password);
    localStorage.setItem('user', this.result);
    console.log(localStorage.getItem('user'));
    if (this.result) {

      this.router.navigateByUrl('/home/general');
    } else {
      this.router.navigateByUrl('/login');
    }
    this.dialogRef.close();

  }



}
