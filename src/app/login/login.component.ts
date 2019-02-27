import { AuthenticationService } from './../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    
  }

  login() {
    console.log(` email: ${this.loginForm.controls['email'].value} password: ${this.loginForm.controls['password'].value}`)
    this.authenticationService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
  }

}
