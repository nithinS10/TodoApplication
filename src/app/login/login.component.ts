import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials, please enter valid credentials.';
  invalidLogin = false;

  //I want router so dependency Injection is coming in to picture
  //It is built in feature
  //Here Router is dependency so we can inject via constructor
  //Here angular will find the Router component class and inject that component to this component
  constructor(private router: Router, private hardCodedauthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit() {
  }

  handlelogin() {
    // if(this.username ==="Nithin" && this.password=== "password") 
    if (this.hardCodedauthenticationService.authenticate(this.username, this.password)) {
      //if login is success redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      console.log(this.username);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

  handlebasicAuthlogin() {
    // if(this.username ==="Nithin" && this.password=== "password") 
    this.basicAuthenticationService.executeAuthenticationBeanService(this.username, this.password) 
    .subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['welcome', this.username]);
        console.log(this.username);
        this.invalidLogin = false;
      },
      error=>{
        console.log(error)
        this.invalidLogin = true;
      }
    )
  }

  onClick(formData: any) {
    console.log(formData);
  }
}
