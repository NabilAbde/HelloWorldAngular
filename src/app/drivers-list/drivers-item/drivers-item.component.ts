import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-item',
  templateUrl: './drivers-item.component.html',
  styleUrls: ['./drivers-item.component.css']
})
export class DriversItemComponent implements OnInit {

  @Input() driver: any // decorateur qui sera appele dans le parent drivers-list <app-drivers-item [driver]="piloteUn"></app-drivers-item>

  constructor() { }

  ngOnInit(): void {
  }

}


