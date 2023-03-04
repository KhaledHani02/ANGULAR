import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtenteComponent } from 'src/Utente';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-mod',
  templateUrl: './login-mod.component.html',
  styleUrls: ['./login-mod.component.css']
})
export class LoginModComponent {

  constructor(private readonly router: Router,private http:HttpClient) 
  {}

  model:UtenteComponent={utente:"",password:""};
  
  baseURL: string = "https://localhost:44327/Controlla/api/Controlla";

  onSubmit()
  {
    //console.log(this.model.UserName+"\n"+this.model.Password);
    console.log(this.model);
    this.http.post(this.baseURL,this.model).subscribe((res)=>{console.log(res);
    
    if(res)
      this.goToUsers();
    else
      console.log("utenete non esistente");
    });
   
  }
  goToUsers() {
    this.router.navigateByUrl('info');
  }
  goToRegistr() {
    this.router.navigateByUrl('registrati');
  }

}
