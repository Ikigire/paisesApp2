import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private usuario: User;
  
  //Validadores
  emailValidator: FormControl;
  nameValidator: FormControl;
  phoneValidator: FormControl;
  passwordValidator: FormControl;
  secondPasswrodVlidator: FormControl;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.usuario = { email: '', password: '', userName: '' };
    this.emailValidator = new FormControl('', [Validators.email, Validators.required]);
    this.nameValidator = new FormControl('', [Validators.required]);
    this.phoneValidator = new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
    this.passwordValidator = new FormControl('', [Validators.required, Validators.minLength(5)])
    this.secondPasswrodVlidator = new FormControl('', [Validators.required, Validators.minLength(5)])
  }

  ngOnInit(): void {
  }
  
  /**
   * 
   * @returns 
   */
  registerNewUser() {
    if (!this.emailValidator.valid) {
      alert("He perro!\nIngresa un correo");
      return;
    }
    
    if (!this.nameValidator.valid) {
      alert("He perro!\nEl nombre de usuario es requerido");
      return;
    }
    
    if (!this.passwordValidator.valid || !this.secondPasswrodVlidator.valid) {
      alert("He perro!\nIngresa tu contrseña");
      return;
    }
    
    if (this.passwordValidator.value != this.secondPasswrodVlidator.value) {
      alert("He perro!\nIngresa tus contraseñas no coinciden");
      return;
    }

    if(this.phoneValidator.value)
      if (!this.phoneValidator.valid){
        alert("He Perro!\nEl formato del telefono es incorrecto");
        return;
      } else{
        this.usuario.phoneNumber = this.phoneValidator.value;
      }

    this.usuario.email = this.emailValidator.value;
    this.usuario.userName = this.nameValidator.value;
    this.usuario.password = this.passwordValidator.value

    this.usuario.email = this.usuario.email.toLowerCase();
    if (this.loginService.registerNewUser(this.usuario))
      this.router.navigateByUrl("/login/signin");
    else
      alert("He Perro!\nEse correo ya está registrado");
  }

}
