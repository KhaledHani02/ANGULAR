import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private readonly router: Router) { }
  goToUsers() {
    this.router.navigateByUrl('login-mod');
  }
  ngOnInit(): void {
  }

}
