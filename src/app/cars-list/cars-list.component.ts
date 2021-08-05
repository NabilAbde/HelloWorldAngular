import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {


carUpdate :any


    cars :any = [
      {
  name: "Pagani huayra",
    pays: null,
    coverImage:"./assets/cars/pagani.jpg",
    power: null,
    perf: null},

    {
    name: "Koenigsegg agera rs",
    pays: "Suède",
    coverImage:"./assets/cars/koenigsegg.jpg",
    power: 1383,
    perf: 2.6},
   {
      name: "zenvo tsr s",
      pays: "Danemark",
      coverImage:"./assets/cars/zenvo.jpg",
      power: 1200,
      perf: 2.8
    },
    {
      name: "bugatti chiron",
      pays: "France",
      coverImage:"./assets/cars/bugatti.jpg",
      power: 1500,
      perf: 2.4
    },
    {
      name: "mercedes amg one",
      pays: "Allemagne",
      coverImage:"./assets/cars/mercedes.jpg",
      power: 1000,
      perf: 2.2
    },
    {
      name: "ferrari sf90",
      pays: "Italie",
      coverImage:"./assets/cars/ferrari.jpg",
      power: 1000,
      perf: 2.5
    }

    ]

  constructor() { }

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

}
