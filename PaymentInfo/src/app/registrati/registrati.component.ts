import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegistraComponent}from'src/registra'
@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent implements OnInit {


  model:RegistraComponent={NomeUtente:"",Password:""};
  baseURL: string = "https://localhost:44327/Controlla/inserisci-dati";
  constructor(private http:HttpClient,private readonly router: Router) { }
  onSubmit(){
    console.log(this.model);
    console.log(this.model);
    this.http.post(this.baseURL,this.model).subscribe((res)=>{console.log(res);})
  }
  goToUsers() {
    this.router.navigateByUrl('login-mod');
  }
  ngOnInit(): void {
  }

}
