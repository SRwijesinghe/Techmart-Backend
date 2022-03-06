import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDetails} from '../Models/loginDetails';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginDetails: LoginDetails) {
    return this.http.post(environment.API_URL.AUTH.LOGIN, loginDetails);
  }
}
