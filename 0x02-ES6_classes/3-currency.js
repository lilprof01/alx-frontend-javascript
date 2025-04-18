/** Creates a class named Currency
 *
 * @params: code - currency code or symbol
 * @params: name - name of the curency
 * */

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

/** gets currency code */
  get code() {
    return this._code;
  }

/** sets currency code */
  set code(value) {
    this._code = value;
  }

/** gets currency name */
  get name() {
    return this._name;
  }

/** sets curency name */
  set name(value) {
    this._name = value;
  }

  /**
   * Returns a full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
