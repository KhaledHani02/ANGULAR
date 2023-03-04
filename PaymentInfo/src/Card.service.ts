import {HttpClient}from  '@angular/common/http';

import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})

export class CardService {
    constructor (private _http:HttpClient){
    }
    getdata()
    {
        return this._http.get('https://localhost:44327/api/Card');
    }
}
