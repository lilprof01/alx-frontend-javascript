import Building from './5-building';

/** creates a new class SkyHighBuilding
 *  that extends from the class Building
 *
 *  @params: sqft
 *  @params: floors
 * */

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

/** returns the floors in the building */
  get floors() {
    return this._floors;
  }

/** sets the number of floors */
  set floors(value) {
    this._floors = value;
  }

/** returns a warning message for evacuation */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
