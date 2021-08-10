import { Component, OnInit } from '@angular/core';
import { BananeService } from '../services/exempleservices';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

title : string ="Drive-X"

fruit:any = this.banana.getFruit(); // bien respecter le nom identique ici banana mais c a aurait pu etre machin ou truc

prixResto : any =this.resto.getPrice();

restoName : string =this.resto.name;

  constructor(private banana:BananeService, // cest grace a ce service qu on peut l utliser
              private resto:RestaurantService) { 
   //console.log(banana.getFruit());
   //console.log(resto.name);
   
    
    
  }

  ngOnInit(): void {
  }

}
