import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { helloworldbean } from 'src/app/data/helloworldbean';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(): Observable<any> {
    let basicAuthHeader = this.createbasicAuthenticationHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeader
    });
    return this.http.get<helloworldbean>(`${API_URL}/helloworldbean`, 
    // {  headers });
    //Observable is used for asynchronous calling for backend
    );
  }

  createbasicAuthenticationHeader() {
    let username = 'Nithin'
    let password = 'password'
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeader;
  }
}
