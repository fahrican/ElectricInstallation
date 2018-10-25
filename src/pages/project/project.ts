import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EIObject} from "../../model/EIObject";

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage extends EIObject{


  constructor(navCtrl: NavController, name: string) {
    super(navCtrl, name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

}
