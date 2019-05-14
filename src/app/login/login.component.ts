import { AuthenticationService } from './../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  errorMessage = "";

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    
  }

  login() {
    this.authenticationService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
    .subscribe((result) => {
      this.router.navigateByUrl('/');
    }, error => this.errorMessage = error.message);
  }

}
