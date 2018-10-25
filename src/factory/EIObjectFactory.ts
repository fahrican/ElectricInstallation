import {EIObject} from "../model/EIObject";
import {EIObjectType} from "../constant/EIObjectType";
import {ProjectPage} from "../pages/project/project";
import {NavController} from 'ionic-angular';
import {FloorPage} from "../pages/floor/floor";
import {RoomPage} from "../pages/room/room";


export class EIObjectFactory {

  constructor(private navCtrl: NavController) {

  }

  getEIObject(EIObjectType, nameOfPage: string): EIObject {

    switch (EIObjectType) {

      case EIObjectType.HOME:
        return new ProjectPage(this.navCtrl, nameOfPage);

      case EIObjectType.PROJECT:
        return new FloorPage(this.navCtrl, nameOfPage);

      case EIObjectType.FLOOR:
        return new RoomPage(this.navCtrl, nameOfPage);

      default: throw new DOMException("Could not create right EIObject", "Error");
    }
  }

}
