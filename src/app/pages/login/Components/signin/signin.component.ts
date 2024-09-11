import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../../../core/service/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../../shared/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  app_name = "Spiritium"
  email = ''
  password = ''
  login_error = false

  constructor(
    private service: LoginService,
    private authservice: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  submitForm(): void{
    this.service.login({'password': this.password}, this.email).subscribe(
      response=> {
          this.authservice.setLocalStorageToken(response.access_token);
          this.router.navigate(['../../articles'], { relativeTo: this.route });
      },
      (error: HttpErrorResponse) => {
        this.login_error = true
        console.error(error.message);
      }
    );
  }

}
