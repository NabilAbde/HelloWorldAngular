import { Injectable } from '@angular/core';
import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  test: string = "test dataservice";

  cars: Car [] = [
    {
      name: "Pagani huayra",
      pays: "Italie",
      coverImage: "./assets/cars/pagani.jpg",
      power: 765,
      perf: null
    },

    {
      name: "Koenigsegg agera rs",
      pays: "Suède",
      coverImage: "./assets/cars/koenigsegg.jpg",
      power: 1383,
      perf: 2.6
    },
    {
      name: "zenvo tsr s",
      pays: "Danemark",
      coverImage: "./assets/cars/zenvo.jpg",
      power: 1200,
      perf: 2.8
    },
    {
      name: "bugatti chiron",
      pays: "France",
      coverImage: "./assets/cars/bugatti.jpg",
      power: 1500,
      perf: 2.4
    },
    {
      name: "mercedes amg one",
      pays: "Allemagne",
      coverImage: "./assets/cars/mercedes.jpg",
      power: 1000,
      perf: 2.2
    },
    {
      name: "ferrari sf90",
      pays: "Italie",
      coverImage: "./assets/cars/ferrari.jpg",
      power: 1000,
      perf: 2.5
    }

  ]

  drivers: any = [
    {
      fullName: "ken block",
      pays: null,
      coverImage: "./assets/drivers/kenblock.jpg",
      category: null,
      likeIts: -1
    },
    {
      fullName: "danica patrick",
      pays: "usa",
      coverImage: "./assets/drivers/danicapatrick.jpg",
      category: "nascar",
      likeIts: 0
    },
    {
      fullName: "sebastien loeb",
      pays: "france",
      coverImage: "./assets/drivers/Loeb.jpg",
      category: "rallye",
      likeIts: 1
    },
    {
      fullName: "molly taylor",
      pays: "australie",
      coverImage: "./assets/drivers/mollytaylor.jpg",
      category: "rallye",
      likeIts: -1
    },
    {
      fullName: "collin mcrae",
      pays: "écosse",
      coverImage: "./assets/drivers/colin.jpg",
      category: "rallye",
      likeIts: 0
    },
    {
      fullName: "shirley muldowney",
      pays: null,
      coverImage: "./assets/drivers/shirleymuldowney.jpg",
      category: "drag",
      likeIts: 0
    },
    {
      fullName: "michael schumacher",
      pays: "allemagne",
      coverImage: "./assets/drivers/schumacher.jpg",
      category: "formule 1",
      likeIts: 0
    },
    {
      fullName: "erica enders",
      pays: "usa",
      coverImage: "./assets/drivers/ericaenders.jpg",
      category: "drag",
      likeIts: 0
    },

  ];

  constructor() { }

  getAllCars(): any {
    return this.cars;

  }

  getAllDrivers() {
    return this.drivers;

  }
  getNbBestDrivers(nb: number) {//nb : number permettra de specifier sur la home page le ombre de pilote ou cars afficher
    var allDrivers = this.drivers.slice();
    allDrivers.sort((b: { likeIts: number; }, a: { likeIts: number; }) => { return a.likeIts - b.likeIts });//fonction pour comparer
    return allDrivers.slice(0, nb);

  }
  getNbPowerfullCars(nb: number) {
    var allCars = this.cars.slice();
    allCars.sort((carB: { power: number; }, carA: { power: number; }) => { return carA.power - carB.power });
    return allCars.slice(0, nb);

  }
}
