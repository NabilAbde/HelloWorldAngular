import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  // 1er exmple d interpolation
  // any quand on ne sait pas quel type (string , int)
mardiMatin:any ="Ils ont l air bien OFF";

// 2 eme exemple ave objet ou propriete
game : any ={
title : "Outrun",
support: "Arcade",
multi: 128

};

age:number = 13;


  constructor() { }

  ngOnInit(): void {
  }

  getStock(){
    return 2050;
  }
  
  getWakeUp(){
    console.log("Silence de cathedrale");
  }
}
