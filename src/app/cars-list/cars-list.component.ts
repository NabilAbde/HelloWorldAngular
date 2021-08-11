import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {


carUpdate :any


    cars: Car[] |undefined; 

  constructor(private data:DataService) {}

  spoilCar :Car = new Car("Renault 4L", "France","https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Renault_R4_BW_2016-07-17_13-45-32.jpg/1280px-Renault_R4_BW_2016-07-17_13-45-32.jpg",4,25)

  ngOnInit(): void {
    this.carUpdate = new Date();
    this.cars =this.data.getAllCars();
    this.data.cars.push(this.spoilCar);

  }

}
