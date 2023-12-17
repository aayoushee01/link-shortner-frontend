import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      this.authService.register(username, email, password)
        .subscribe(
          (response) => {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/home']);
          },
          (error) => {
          }
        );
    }
  }
}
