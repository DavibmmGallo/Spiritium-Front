import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    NgbAlertModule,
    HttpClientModule,
    FormsModule
  ]
})
export class LoginModule { }
