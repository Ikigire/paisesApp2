import {Component} from "@angular/core"
import { Router } from "@angular/router";
import { User } from '../../interfaces/user.interface';
import { LoginService } from '../../services/login.service';
import { FormControl, Validators } from '@angular/forms'

@Component({
    templateUrl: './login.component.html',
    selector: 'app-login',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{

    private usuario: User;

    // Validadores
    emailValidator: FormControl;
    passwordValidator: FormControl;

    constructor(
        private loginService:LoginService,
        private router: Router
    ){
        this.usuario = {email: "", password: "", userName: ""};
        this.emailValidator = new FormControl('', [Validators.email, Validators.required]);
        this.passwordValidator = new FormControl('', [Validators.required, Validators.minLength(5)])
    }

    login():void {
        if (this.emailValidator.valid && this.passwordValidator.valid){
            this.usuario.email = this.emailValidator.value
            this.usuario.password = this.passwordValidator.value
            this.loginService.verifyUser(this.usuario)
            .subscribe((user:User) => {
                let encontrado:boolean = true;
                let mensaje: string = "";

                this.usuario.email = this.emailValidator.value

                if (user.email.trim() == ""){
                    encontrado = false;
                    mensaje += "El correo no se encontró.";
                }

                if (user.password.trim() == ""){
                    encontrado = false;
                    mensaje += "\nLa contraseña es incorrecta."
                }

                if (encontrado){
                    // alert("Usuario logeado")
                    // console.log(user);
                    // this.router.navigate(["/paises"]);
                    this.router.navigateByUrl('/paises');
                } else{
                    alert(mensaje)
                }
            });
        }
    }
}