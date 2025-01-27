import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicauthentcationService: BasicAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username = 'Nithin'
    // let password = 'password'

    // let basicAuthHeader = 'Basic '+ window.btoa(username+ ':' +password);
    let basicheaderString = this.basicauthentcationService.getAuthenticatedToken();
    let username = this.basicauthentcationService.getAuthenticatedUser();
    if (basicheaderString && username) {
      req = req.clone({
        setHeaders: {
          Authorization: basicheaderString
        }
      })
    }
    console.log(basicheaderString)
    return next.handle(req);
  }
}
