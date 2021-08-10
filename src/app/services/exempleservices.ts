import { Injectable} from "@angular/core";

@Injectable ()

export class BananeService {
    fruit: string = "Banane Plantain from API";
    prix: number = 12;

    constructor(){}

    getFruit() :string {
        return this.fruit;
      //  console.log(this.fruit);
        
        
    }

}

