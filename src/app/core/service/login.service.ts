import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:8080/users'

  constructor(private http: HttpClient) { }
  
  login(data: object, email: string){
    /* By using API post route for login and passing email and password as parameters, it returns a access token */
    return this.http.post<{ access_token: string }>(this.API + `/${email}`, data).pipe(take(1))
  }

  create(data: object){
    /* It creates a new user */
    return this.http.post(this.API, data).pipe(take(1))
  }
}
