"use strict";

/**
 * Функция принимает первым аргументом целое положительное число, в следующих 
 * трех аргументах 
 * функция принимает слова в разных склонениях. Функция должна возвращать одно 
 * из трех переданных 
 * в параметры слов подходящее под число, которое передано первым аргументом. 
 * @param {String} one Первое слово.
 * @param {String} two Второе слово.
 * @param {String} five Третье слово.
 * @returns {String} Одно из трех переданных в параметры слов подходящее под 
 * число, которое передано первым аргументом.
 * Может вернуть NaN, если count не  равен 1, 2, 5. 
 */
function declinationOfNumber(count, one, two, five) {
    const n10 = count % 10;
    const n100 = count % 100;


    if (n100 > 10 && n100 < 21) {
        return five;
    }
    if (n10 > 1 && n10 < 5) {
        return two;
    }
    if (n10 === 1) {
        return one;
    }
    return five;
}
console.log(declinationOfNumber(1, "яблоко", "яблока", "яблок"));
console.log(declinationOfNumber(2, "мяч", "мяча", "мячей"));
console.log(declinationOfNumber(5, "стул", "стула", "стульев"));


const applesNumber = 1650103;
const word = declinationOfNumber(applesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${applesNumber} ${word}.`);
