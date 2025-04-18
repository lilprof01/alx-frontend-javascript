/** 
 * Creates a new class Airport
 *
 * @params: name - airport name
 * @params: code - airport code
 * */

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

/** returns name */
  get name() {
    return this._name;
  }

/** sets name */
  set name(value) {
    this._name = value;
  }

/** returns code */
  get code() {
    return this._code;
  }

/** sets code */
  set code(value) {
    this._code = value;
  }

/**
 * sring rep of airport, if string method is called 
 * returns airport code
 * */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
