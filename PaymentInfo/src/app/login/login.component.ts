import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{UtenteComponent}from '../../Utente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private readonly router: Router) 
  {
  }
  model=new UtenteComponent[""];
  onSubmit(){
    console.log(this.model.user);
  }
  goToUsers() {
    this.router.navigateByUrl('info');
  }

  ngOnInit(): void {
  }
}
