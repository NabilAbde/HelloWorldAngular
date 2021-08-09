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
  OnClickGood (){
    this.driver.likeIts = this.driver.likeIts +1;
    return this.driver.likeIts;

  }
  OnClickBad (){
    this.driver.likeIts = this.driver.likeIts -1;
    return this.driver.likeIts;

  }
  getColor(){
    if(this.driver.category == "gymkhana"){
      return "blue";
    }
    if(this.driver.category == "nascar"){
      return "red";
    }
    if(this.driver.category == "rallye"){
      return "yellow";
    }
    if(this.driver.category == "drag"){
      return "green";
    }
    if(this.driver.category == "formule 1"){
      return "orange";
    }
    else{
      return "white";
    }
  }

}


