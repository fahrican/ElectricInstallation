abstract class EIObject {

  private _name: string;
  private listOfEIObjects: Array<EIObject> = [];

  constructor(name: string) {
    this._name = name;
  }


  get name(): string {
    return this._name;
  }


  set name(value: string) {
    this._name = value;
  }

  private showCircuitPlan(anyObject: any){

    for (var key in anyObject) {
      console.log(key, anyObject[key]);
    }
  }

  private deleteEIObject(index: number){

    this.listOfEIObjects.splice(index);
  }

  private renameEIObject(index: number, newName: string){

    this.listOfEIObjects[index].name = newName;
  }
}
