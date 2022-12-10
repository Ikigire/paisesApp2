import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  path: string;

  //Inputs
  @Input('sidenav') sidenav!: MatSidenav;

  constructor(
    private loginService: LoginService,
    private router:Router
  ) { 
    this.path = 'region';
  }

  ngOnInit(): void {
  }

  logout():void {
    this.loginService.logout();
    this.router.navigateByUrl("/login");
  }

  toggle():void {
    this.sidenav.toggle();
  }

  navigateTo(path:string): void{
    this.path = path;
    this.router.navigateByUrl("/paises/" + this.path);
  }

}
