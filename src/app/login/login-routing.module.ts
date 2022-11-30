import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainLoginComponent } from './pages/main-login/main-login.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    {
        path: '',
        component: MainLoginComponent,
        children: [
            {
                path: 'signin',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: '**',
                redirectTo: 'signin'
            }
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule {}