import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {


carUpdate :any

  vehiculeUn : any ={
  name: "Pagani huayra",
    pays: "Italie",
    power: "765",
    perf: 3.2,};
    
  vehiculeDeux : any ={
    name: "Koenigsegg agera rs",
    pays: "Suède",
    power: 1383,
    perf: 2.6};

  vehiculeTrois : any ={
    name: "Zenvo tsr s",
    pays: "Danemark",
    power: "1200",
    perf: 2.8};

  constructor() { }

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

}
