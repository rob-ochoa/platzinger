import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends: User[];

  constructor() { 
    let usuario1 : User = {
      nick : 'Roberth',
      age: 20,
      friend: true,
      email: 'robochoa@est.ecotec.edu.ec',
      uid : 1, 
    };
    let usuario2 : User = {
      nick : 'Diana',
      age: 18,
      friend: true,
      email: 'diana@est.ecotec.edu.ec',
      uid : 2, 
    };
    let usuario3 : User = {
      nick : 'Karen',
      age: 27,
      friend: false,
      email: 'karen@est.ecotec.edu.ec',
      uid : 3, 
    };
    let usuario4 : User = {
      nick : 'Doris',
      age: 56,
      friend: true,
      email: 'doris@est.ecotec.edu.ec',
      uid : 4, 
    };
    let usuario5 : User = {
      nick : 'Mireya',
      age: 57,
      friend: false,
      email: 'mireya@est.ecotec.edu.ec',
      uid : 5, 
    };
    this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];
  };



  ngOnInit() {
  }

}
