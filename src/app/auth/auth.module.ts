import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbCardModule,
  NbInputModule,  
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,} from '@nebular/theme';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
];
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    NbThemeModule, 
    NbLayoutModule, 
    NbCardModule,
    NbInputModule,  
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    AuthComponent,
    RouterModule
  ]
})
export class AuthModule { }
