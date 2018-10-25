import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EIObject} from "../../model/EIObject";
import {EIObjectType} from "../../constant/EIObjectType";
import {CreateEIObjectPage} from "../create-e-i-object/create-e-i-object";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(private navCtrl: NavController) {
  }

  private createEIObject() {
    this.navCtrl.push(CreateEIObjectPage, {
      eIObjectType: EIObjectType.PROJECT
    });
  }
}
