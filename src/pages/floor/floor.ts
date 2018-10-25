import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EIObject} from "../../model/EIObject";

/**
 * Generated class for the FloorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html',
})
export class FloorPage extends EIObject{


  constructor(navCtrl: NavController, name: string) {
    super(navCtrl, name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FloorPage');
  }

}
