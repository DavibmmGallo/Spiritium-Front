import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedInSubject.next(true);
    }
  }

  setLocalStorageToken(access_token: string): void{
    localStorage.setItem('token', access_token);
    this.isLoggedInSubject.next(true);
  }

  getDecodedToken(): any { // eslint-disable-line
    const token = localStorage.getItem('token');
    if (token) {
      try {
        return jwtDecode(token);
      } catch (e) {
        console.error('Invalid token', e);
        return null;
      }
    }
    return null;
  }

  deleteToken(): void{
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }
}
