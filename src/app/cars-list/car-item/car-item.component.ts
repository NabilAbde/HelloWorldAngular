import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  @Input() vehicule:any
  isNotAvailable : boolean = false;
  bookingMsg:string="Reservez ce véhicule"
  constructor() { }

  ngOnInit(): void {
  }
  onClickButton(){
    
    this.isNotAvailable = true; // ou !this.isNotAvailable
    this.bookingMsg="Bonne route avec Drive-X";
        }
 

}
