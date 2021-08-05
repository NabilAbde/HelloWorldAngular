import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

isOnline:boolean = true;

book:any = {
  title :"Le secret des croisades",
  author : "ThoasAndrea",
  price : -1

}

games :string[]= ["Zelda", "Mario", "Outrun"]
colorOne:string = "blue";
onOff:any =true;


  constructor() { }

  ngOnInit(): void {
  }
getCouleur(){
  return"green";
}

onSwitch(){
  if(this.onOff){
    this.onOff = false;
  }
  else{
    this.onOff =true;
  }
}
  // condition ? "dans ce cas" : "dans l'autre cas"
truc(){
  if (true) 
    return "dans ce cas"
  else 
    return "dans l'autre cas"} 
}
