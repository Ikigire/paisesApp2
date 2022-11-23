import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { AlertaComponent } from './alerta/alerta.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    AlertaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    AlertaComponent
  ]
})
export class SharedModule { }
