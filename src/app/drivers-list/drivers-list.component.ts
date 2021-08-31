import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/Driver';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  //drivers: any;

  drivers : Driver[] |undefined;

 

constructor(private data: DataService) { }

  spoilDriver :Driver = new Driver("Nabil","./assets/drivers/danicapatrick.jpg","France","Rallye",0);
  
 
  ngOnInit(): void {
    this.drivers = this.data.getAllDrivers();
    this.data.drivers.push(this.spoilDriver);
  }

}
