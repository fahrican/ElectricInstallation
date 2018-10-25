import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EIObject} from "../../model/EIObject";

/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage extends EIObject {


  constructor(navCtrl: NavController, name: string) {
    super(navCtrl, name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

}
