import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username ==="Nithin" && password ==="password"){
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticateUser");
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
