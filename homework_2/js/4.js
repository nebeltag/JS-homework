"use strict";

/**
 * Функция выполняет сложение двух переданных чисел.
 * @param {Number} a Первое число, которое будет складываться в функции. 
 * @param {Number} b Второе число, которое будет складываться в функции.
 * @returns {Number} Вернет число, получившееся в результате суммирования двух 
 * переданных чисел. 
 */
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));

/**
 * Функция вычисляет разность двух переданных чисел.
 * @param {Number} a Первое число для вычисления разности в функции. 
 * @param {Number} b Второе число для вычисления разности в функции.
 * @returns {Number} Вернет число, получившееся в результате вычисления разности 
 * двух переданных чисел.
 * Функция всегда будет отнимать от большего числа меньшее.
 * Если числа равны, то в результат будет передан ноль. 
 */
function difference(a, b) {
    if (a > b) {
        return a - b;
    } else if (b > a) {
        return b - a;
    }
    return 0;
}
console.log(difference(10, 10));


/**
 * Функция выполняет перемножение двух переданных чисел.
 * @param {Number} a Первое число, которое будет умножаться в функции. 
 * @param {Number} b Второе число, которое будет умножаться в функции.
 * @returns {Number} Вернет число, получившееся в результате перемножения двух 
 * переданных чисел. 
 */
function multiple(a, b) {
    return a * b;
}
console.log(multiple(40, 6));


/**
 * Функция выполняет деление одного переданного числа на другое переданное двух 
 * переданных чисел.
 * @param {Number} a Первое число, которое будет делиться в функции. 
 * @param {Number} b Второе число, на которое будет делиться первое число в функции.
 * @returns {Number} Вернет число, получившееся в результате первого числа на второе. 
 */
function division(a, b) {
    return a / b;
}
console.log(division(152, 15));


