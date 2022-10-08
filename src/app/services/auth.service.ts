import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:4000";

  userLogin(user:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post(this.baseUrl + '/api/auth/login', body, {'headers': headers})
  }


  userRegister(user:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post(this.baseUrl + '/api/auth/register', body, {'headers': headers});
  }


  getUserDetail(header:any): Observable<any>{
    const headers = { 'content-type': 'application/json', ...header};
    return this.http.get(this.baseUrl + '/api/auth/user', {'headers': headers});

  }

}
