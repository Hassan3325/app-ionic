import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    name :'Hassan Abrar',
    city :'Rawalpindi',
    interest :['Cricket ','Movies ','Badmenten ']
  };

  constructor(public navCtrl: NavController) {}

}