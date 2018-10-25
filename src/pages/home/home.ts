import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EIObject} from "../../model/EIObject";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends EIObject {

  constructor(navCtrl: NavController) {
    super(navCtrl);
  }
}
