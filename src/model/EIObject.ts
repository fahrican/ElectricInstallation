import {NavController} from 'ionic-angular';
import {CreateEIObjectPage} from "../pages/create-e-i-object/create-e-i-object";


export abstract class EIObject {

  private _name: string = EIObject.name;
  private listOfEIObjects: Array<EIObject> = [];

  constructor(private navCtrl: NavController) {
    //this._name = name;
  }


  get name(): string {
    return this._name;
  }


  set name(value: string) {
    this._name = value;
  }

  showCircuitPlan(anyObject: any) {

    for (var key in anyObject) {
      console.log(key, anyObject[key]);
    }
  }

  deleteEIObject(index: number) {

    this.listOfEIObjects.splice(index);
  }

  renameEIObject(index: number, newName: string) {

    this.listOfEIObjects[index].name = newName;
  }

  createEIObject() {
    this.navCtrl.setRoot(CreateEIObjectPage);
  }

  gotoChild() {

  }
}
