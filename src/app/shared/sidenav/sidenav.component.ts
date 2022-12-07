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

  @Input('sidenav') sidenav!: MatSidenav;

  constructor(
    private loginService: LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  logout():void {
    this.loginService.logout();
    this.router.navigateByUrl("/login");
  }

  toggle():void {
    this.sidenav.toggle();
  }

}
