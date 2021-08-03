import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

carUpdate :any

  vehiculeUn : any ={
    name : "Mercedes by AMG",
    price: "42000"};

  vehiculeDeux : any ={
    name : "Range Rover Evoque",
    price: "55000"};
  vehiculeTrois : any ={
    name : "Ferrari F50 Ultra X",
    price: "350000"};

  constructor() { }

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

}
