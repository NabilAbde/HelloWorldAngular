import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
title ="Drive-X"

test : any = this.teston.getTest();

cars :any = this.teston.getAllCars();
  constructor(private teston:DataService) { }

  ngOnInit(): void {
  }

}
