"use strict";


/**
   * Вычисляет операцию, переданную в третий параметр между двумя первыми
   * аргументами функции.
   * @param {number} arg1 - Первое число.
   * @param {number} arg2 - Второе число.
   * @param {string} operation - Операция, одна из возможных строк:
   * "+", "-", "*", "/".
   * @return {number} Результат операции operation над первыми двумя аргументами
   * функции. Может вернуть NaN, если operation или первые два аргумента заданы
   * неверно.
   */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+": return sum(arg1, arg2);
        case "-": return difference(arg1, arg2);
        case "*": return multiple(arg1, arg2);
        case "/": return division(arg1, arg2);
        default: return NaN;
    }
}

console.log(mathOperation(10, 49, "+"));
console.log(mathOperation(10, 49, "-"));
console.log(mathOperation(10, 49, "*"));
console.log(mathOperation(10, 49, "/"));
console.log(mathOperation(10, 49, "(^^)"));

/**
 * Функция выполняет сложение двух переданных чисел.
 * @param {Number} a Первое число, которое будет складываться в функции. 
 * @param {Number} b Второе число, которое будет складываться в функции.
 * @returns {Number} Вернет число, получившееся в результате суммирования двух 
 * переданных чисел. 
 */
function sum(a, b) {
    let result = a + b;
    return result;
}

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
        let result = a - b;
        return result;
    } else if (b > a) {
        let result = b - a;
        return result;
    } else {
        return 0;
    }
}

/**
 * Функция выполняет перемножение двух переданных чисел.
 * @param {Number} a Первое число, которое будет умножаться в функции. 
 * @param {Number} b Второе число, которое будет умножаться в функции.
 * @returns {Number} Вернет число, получившееся в результате перемножения двух 
 * переданных чисел. 
 */
function multiple(a, b) {
    let result = a * b;
    return result;
}

/**
 * Функция выполняет деление одного переданного числа на другое переданное двух 
 * переданных чисел.
 * @param {Number} a Первое число, которое будет делиться в функции. 
 * @param {Number} b Второе число, на которое будет делиться первое число в функции.
 * @returns {Number} Вернет число, получившееся в результате первого числа на второе. 
 */
function division(a, b) {
    let result = a / b;
    return result;
}