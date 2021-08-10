import { Injectable} from "@angular/core";

@Injectable ()

export class BananeService {
    fruit:string = "Banane Plantain from API"

    constructor(){}

    getFruit(){
        console.log(this.fruit);
        
    }

}

