import { Injectable } from '@angular/core';
import { BananeService } from './exempleservices';

@Injectable({
  providedIn: 'root'// aete genere car on a utiliser la CLI et il est à la base de root
})
export class RestaurantService {

name:string = "chez Pic";
prixResto :number | undefined;//undifined c est le typage qui veut ca sinon erreur

  constructor(private banana:BananeService) { }

  getPrice() {
    return this.prixResto = this.banana.prix * 1.4;
  }
}
