// Функция для проверки длины строки
function checkLength (string, maxLength) {
  return string.length <= maxLength;
}

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);


// Функция для проверки, является ли строка палиндромом

function isPalindrom (string) {
  const checkingString = string.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < string.length / 2; i++) {
    if (checkingString[i] !== checkingString[checkingString.length - i - 1]) {
      return false;
    }
  }
  return true;
}

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
//  и возвращает их в виде целого положительного числа.

function getNumbers (string) {
  const result = String(string).match(/\d+/g);
  return parseInt(result, 10);
}

getNumbers('2023 год');
getNumbers('ECMAScript 2022');
getNumbers('1 кефир, 0.5 батона');
getNumbers('агент 007');
getNumbers('а я томат');
