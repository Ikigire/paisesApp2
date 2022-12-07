import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';import { LoginComponent } from './login/pages/login/login.component';
import { LoginModule } from './login/login.module';
import { AppRoutingRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PaisesModule } from './paises/paises.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    PaisesModule,
    AppRoutingRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
