import {Component, ViewChild} from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import {EIObject} from "../../model/EIObject";
import {EIObjectFactory} from "../../factory/EIObjectFactory";

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

  constructor(private navCtrl: NavController, private navParams: NavParams,
              private alertController: AlertController) {

    this.typeEIObject = navParams.get("eIObjectType");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEIObjectPage');
  }

  private clearUserInput(){

    this.eIObjectPageName.value = "";
  }

  private generateEIObjectPage(): EIObject {

    this.name = this.eIObjectPageName.value;
    let factory = new EIObjectFactory(this.navCtrl);

    return factory.getEIObject(this.typeEIObject, this.name);
  }

  private presentEmptyAlert() {

    let alert = this.alertController.create({
      title: 'Field is empty!',
      subTitle: 'Name field needs a input!!!',
      buttons: ['OK']
    });
    alert.present();
  }

  saveExpenseModel() {

    if (this.eIObjectPageName.value === "") {
      this.presentEmptyAlert();
    }
    else {

      let newEIObject = this.generateEIObjectPage();
      this.anyExpenseList.push(foodPage);

      this.storage.set(this.storageKeyForSpecificPage, JSON.stringify(this.anyExpenseList));

      //clear keys so we set it for another page
      this.storage.set(StorageKeys.CURRENT_PAGE, "");
      this.storageKeyForSpecificPage = "";

      this.navCtrl.setRoot(HomePage);
    }
  }

}
