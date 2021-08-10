import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  test: string = "Banane Plantain from API";
   

  constructor() { }
getTest() :string {
        return this.test;
      //  console.log(this.fruit);
        
        
    }




}

