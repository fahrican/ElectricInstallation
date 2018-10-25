import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EIObject} from "../../model/EIObject";

/**
 * Generated class for the CreateEIObjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-e-i-object',
  templateUrl: 'create-e-i-object.html',
})
export class CreateEIObjectPage {

  @ViewChild('eIObjectPageName') eIObjectPageName;
  private name = "";

  private typeEIObject: string = "";

  constructor(private navCtrl: NavController, private navParams: NavParams) {

    this.typeEIObject = navParams.get("eIObjectType");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEIObjectPage');
  }

  private clearUserInput(){

    this.eIObjectPageName.value = "";
  }

}
