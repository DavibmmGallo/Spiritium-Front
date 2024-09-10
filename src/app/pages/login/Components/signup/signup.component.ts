import { Component } from '@angular/core';
import { LoginService } from '../../../../core/service/login.service';
import { Alert } from '../../../../core/model/Alert';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  app_name = "Spiritium"
  matching_passwords = true
  user = {
    name: "",
    email: "",
    password: ""
  };
  confirmpassword = ""
  alert: Alert = {"message": "Inserted passwords must match", "type": "warning"}

  constructor(
    private service: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  setPassword(event: Event): void {
    const value = String((event.target as HTMLInputElement).value);
    this.user.password = value;
  }

  setConfirmPassword(event: Event): void {
    const value = String((event.target as HTMLInputElement).value);
    this.confirmpassword = value;
  }

  submitForm(): void{
    if(this.user.password != this.confirmpassword){
      this.matching_passwords = false
    }else{
      this.service.create(this.user).subscribe(
        response => {
          this.alert = { type: 'success', message: response.toString() };
          this.router.navigate(['../signin'], { relativeTo: this.route });
        },
        (error: HttpErrorResponse) => {
          this.alert = { type: 'danger', message: error.message };
        }
      );
    }
  }
}
