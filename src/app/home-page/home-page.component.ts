import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
title ="Drive-X";

bestCars :any;
bestDrivers :any;

  constructor(private data:DataService) { }

  ngOnInit(): void {
   // console.log(this.data.test);
   this.bestCars =this.data.getNbPowerfullCars(2);
   this.bestDrivers = this.data.getNbBestDrivers(3);
    
  }

}
