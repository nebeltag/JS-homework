"use strict";

function DigitsOfNumber(units, dozens, hundreds) {
  this.units = units;
  this.dozens = dozens;
  this.hundreds = hundreds;
}
/**
 * Функция принимает целое положительное число в диапазоне от 0 до 1000.
 * Функция возвращает обычный объект с тремя свойствами:
 * 1. units - содержит число, количество единиц в параметре функции.
 * 2. dozens - содержит число, количество десятков в параметре функции.
 * 3. hundreds - содержит число, количество сотен в параметре функции.
 * Если функции было передано не целое положительное число, либо число в ином
 * диапазоне, нежели задано в условии, функция выводит в консоль информацию
 * об ошибке и возвращает пустой объект. * 
 * 
 * @param {*} number - Параметр соответствует задаваемому числу, которое нужно 
 * разбить на разряды и представить их в виде объекта.
 */
DigitsOfNumber.prototype.getDigitsOfNumber = function (number) {
  if (number >= 0 && number < 1000 && number % 1 === 0) {
    this.units = number % 10;
    this.dozens = Math.trunc(number / 10) % 10;
    this.hundreds = Math.trunc(number / 100) % 10;
  }
  if (number < 0 || number >= 1000) {
    console.error(`Число ${number} не входит в заданный диапазон!`);
  }
  if (number % 1 != 0) {
    console.error(`Число ${number} не является целым!`);
  }
}

const digitsOfNumber_1 = new DigitsOfNumber(this.units, this.dozens, this.hundreds);

digitsOfNumber_1.getDigitsOfNumber(12.65);
