import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit{
  token:any = null; // eslint-disable-line
  isAuthenticated  = false;
  constructor(private authservice: AuthService){}

  ngOnInit(): void {
    this.authservice.isLoggedIn$.subscribe(isLoggedIn => {
      this.isAuthenticated = isLoggedIn;
      if (isLoggedIn) {
        this.token = this.authservice.getDecodedToken();
      } else {
        this.token = null;
      }
    });
  }

  logoff(): void{
    this.authservice.deleteToken();
  }

}
