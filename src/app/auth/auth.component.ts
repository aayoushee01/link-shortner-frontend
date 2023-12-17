import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from './services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  private alive = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  activeForm = 'login'; 
  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  constructor(protected authService: AuthService, private formBuilder: FormBuilder,protected location: Location) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  back() {
    this.location.back();
    return false;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  switchForm(formName: string): void {
    this.activeForm = formName;
  }
}
