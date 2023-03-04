import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/Card.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  newdata:any;
  constructor(private _card:CardService){}
  ngOnInit(){
    this._card.getdata().subscribe(res=>{this.newdata=res})
  }
  
  
}
