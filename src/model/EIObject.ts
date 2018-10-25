import {NavController} from 'ionic-angular';
import {CreateEIObjectPage} from "../pages/create-e-i-object/create-e-i-object";
import {EIObjectType} from "../constant/EIObjectType";


export abstract class EIObject {

  private _typeOfPage: string = EIObject.name;
  private listOfEIObjects: Array<EIObject> = [];
  private _name: string;

  constructor(private navCtrl: NavController, name: string) {

    this._name = name;
  }


  get typeOfPage(): string {
    return this._typeOfPage;
  }


  set typeOfPage(value: string) {
    this._typeOfPage = value;
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

    this.listOfEIObjects[index].typeOfPage = newName;
  }

  createEIObject() {
    this.navCtrl.push(CreateEIObjectPage, {
      eIObjectType: EIObjectType.PROJECT
    });
  }

  gotoChild() {

  }
}
