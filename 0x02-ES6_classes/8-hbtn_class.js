/**
 * Creates a new ALXClass
 *
 * @params: size
 * @params: location
 * */

export default class ALXClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

/** returns size */
  get size() {
    return this._size;
  }

/** sets size */
  set size(value) {
    this._size = value;
  }

/** returns location */
  get location() {
    return this._location;
  }

/** sets location */
  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
