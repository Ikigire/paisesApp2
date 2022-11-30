import { Injectable } from "@angular/core"
import { User } from '../interfaces/user.interface';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private usuarios: User[];
    private userLogged: User;

    constructor() {
        this.usuarios = [];
        const sessionuser = sessionStorage.getItem('userLogged');
        if (sessionuser)
        this.userLogged = JSON.parse(sessionuser);
        else
        this.userLogged = {email:"", password: "", userName: ""};
        
        const users = localStorage.getItem('usuarios');
        if (users)
            this.usuarios = JSON.parse(users)
        else
            this.usuarios.push({email: "yael@gmail.com", password: "12345", userName: "Yael"});
        
    }

    verifyUser(user: User): Observable<User>{
        for(let pos:number = 0; pos<this.usuarios.length; pos++){
            let currentUser = this.usuarios[pos];

            if(currentUser.email == user.email && currentUser.password == user.password){
                this.userLogged = currentUser;
                sessionStorage.setItem('userLogged', JSON.stringify(this.userLogged));
                return of<User>(currentUser)
            }
        }
        return of<User>({email: "", password: "", userName:""})
    }

    getLoggedUser(): User {
        return this.userLogged;
    }

    registerNewUser(user: User): boolean {
        try {
            
            this.usuarios.push(user)
            localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
        } catch (error) {
            return false;   
        }
        return true;
    }

    logout(){
        // sessionStorage.removeItem('userLogged');
        sessionStorage.clear();
        this.userLogged = {email:"", password: "", userName: ""};
    }
}