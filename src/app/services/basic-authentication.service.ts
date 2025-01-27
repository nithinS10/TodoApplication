import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { helloworldbean } from '../data/helloworldbean';
import { AuthenticationBean } from '../data/authenticationBean';
import { map } from 'rxjs/operators';
import { API_URL, AUTHENTICATED_USER, TOKEN } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    if (username === "Nithin" && password === "password") {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }

  executeAuthenticationBeanService(username, password) {
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeader
    });
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem(`${AUTHENTICATED_USER}`, username);
            sessionStorage.setItem(`${TOKEN}`, basicAuthHeader);
            return data;
          }
        )
      );//Observable is used for asynchronous calling for backend
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem("authenticateUser");
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(`${TOKEN}`);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(`${AUTHENTICATED_USER}`);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(`${AUTHENTICATED_USER}`);
    sessionStorage.removeItem(`${TOKEN}`);
  }
}
