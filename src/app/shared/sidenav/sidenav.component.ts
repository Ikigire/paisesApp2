import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

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

}
