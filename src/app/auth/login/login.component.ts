import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe(
        (response) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.token); 
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login error:', error);
        }
      );
    }
  }
}
