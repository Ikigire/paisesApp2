import {Component} from "@angular/core"
import { Router } from "@angular/router";
import { User } from '../../interfaces/user.interface';
import { LoginService } from '../../services/login.service';

@Component({
    templateUrl: './login.component.html',
    selector: 'app-login',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{

    usuario: User;

    constructor(
        private loginService:LoginService,
        private router: Router
    ){
        this.usuario = {email: "", password: "", userName: ""};
    }

    login():void {
        this.loginService.verifyUser(this.usuario)
        .subscribe((user:User) => {
            let encontrado:boolean = true;
            let mensaje: string = "";

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