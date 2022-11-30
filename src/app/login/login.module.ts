import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { LoginComponent } from './pages/login/login.component';
import { MainLoginComponent } from './pages/main-login/main-login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
        MainLoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule{}