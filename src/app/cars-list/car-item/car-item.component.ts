import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  @Input() vehicule: any // decorateur qui sera appele dans le parent carslist <app-car-item [vehicule]="vehiculeUn"></app-car-item>
  isNotAvailable: boolean = false;
  bookingMsg: string = "Reservez ce véhicule"
  constructor() { }

  ngOnInit(): void {
  }
  onClickButton() {

    this.isNotAvailable = true; // ou !this.isNotAvailable
    this.bookingMsg = "Bonne route avec Drive-X";
  }


}
