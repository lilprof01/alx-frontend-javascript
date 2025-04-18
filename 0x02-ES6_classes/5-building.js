/** Creates a class Building
 *
 *  @params: sqft - to measure the square ft
 * */

export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

/** returns sqft */
  get sqft() {
    return this._sqft;
  }

/** sets sqft */
  set sqft(value) {
    this._sqft = value;
  }
}
