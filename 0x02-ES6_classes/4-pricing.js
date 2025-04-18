import Currency from './3-currency';

/** 
 *Creates a new class named Pricing
 *
 * @params: amount - pricing amount.
 * @params: currency in which pricing is been made
 * */
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

/** returns amount */
  get amount() {
    return this._amount;
  }

/** sets amount */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /** returns {Currency} */
  get currency() {
    return this._currency;
  }

  /** sets {Currency} - value
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

/** returns full price as a string */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

/** method for price conversion
 *  using amount and conversionRate.
 *
 *  @params: amount
 *  @params: conversion rate
 * */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
