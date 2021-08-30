import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from 'src/app/models/Car';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {


 constructor(private data : DataService, private router : Router) {}

  ngOnInit(): void {
  }



  onSubmit(myForm: NgForm){
    /*console.log(myForm.value['name'],
                myForm.value['pays'],
                myForm.value['coverImage'],
                myForm.value['puissance'],
                myForm.value['perf']);*/

  const car = new Car(
                myForm.value['name'],
                myForm.value['pays'],
                myForm.value['coverImage'],
                myForm.value['power'],
                myForm.value['perf']);


  this.data.addCar(car)
  this.router.navigate(['cars']); // redirige sur allcars comme pour l accueil de la 404 on pourrait mettre un timer

  //console.log(car);
  
    
  }

}
