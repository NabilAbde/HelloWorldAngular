import { Component, OnInit } from '@angular/core';
import { BananeService } from '../services/exempleservices';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

title ="Drive-X"

fruit:any =this.banana.getFruit();

  constructor(private banana:BananeService) { 
    banana.getFruit();
    
  }

  ngOnInit(): void {
  }

}
