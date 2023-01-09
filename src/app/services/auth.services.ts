import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = '';

const urlLocation = '';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(param: any) {
    return this.http.post(`${url}/user/login`, param);
  }

  register(params: any) {
    return this.http.post(`${url}/user/register`, params);
  }

  getLocation(params: any) {
    return this.http.get(`${urlLocation}/location/get-list`, {
        params
    });
  }

  forgotPassword(param: any) {
    return this.http.post(`${url}/user/forgot-password`, param);
  }

}
