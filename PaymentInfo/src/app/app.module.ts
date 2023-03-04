import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import{FormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { InfoComponent } from './info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModComponent } from './login-mod/login-mod.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { InserisciCartaComponent } from './inserisci-carta/inserisci-carta.component';




@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InfoComponent,
    LoginModComponent,
    RegistratiComponent,
    InserisciCartaComponent
  ],
  imports: [ 
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
