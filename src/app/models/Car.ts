/**
 * Creation d une classse manuel
 * @author Nabil
 */


export class Car {
public name : string;
public pays : string | null;
public coverImage : string;
public power : number;
public perf : number | null ;

constructor(name:string, pays : string | null,coverImage : string,power : number, perf : number | null){
    this.name = name;
    this.pays = pays;
    this.coverImage = coverImage;
    this.power = power;
    this.perf = perf;

}

}