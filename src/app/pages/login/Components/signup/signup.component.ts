import { Component } from '@angular/core';
import { LoginService } from '../../../../core/service/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  app_name = "Spiritium"
  group: FormGroup = new FormGroup({});

  constructor(
    private service: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ){
    this.group = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmpassword: ["", [Validators.required, Validators.minLength(8), this.matchpassword]]
    });
  }

  matchpassword(control: FormControl): ValidationErrors | null {
      if (!control.parent)
        return null;

      const pass = control.parent.value.password;
      const confirmPass = control.value;
      return pass === confirmPass ? null : { notEqual: true };
  }

  submitForm(): void{
    this.service.create(this.group.value).subscribe(
      () => {
        this.router.navigate(['../signin'], { relativeTo: this.route });
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }
}
