// Вам нужно написать реализацию функции padString используя рекурсию.
//     Функция принимает строку, число, которое является длинной строки,
//     которую мы хотим получить в результате, символ, которым дополнится строка,
//     если это будет необходимо и флаг, добавлять символы слева
// или справа(по-умолчанию)

var addingStr = function padString(str, resultLength, symbol, isLeft) {
    var res = '';
    var enteredLength = str.length;
    if (resultLength > 0) {
        if (enteredLength === resultLength) {
            return str;
        } else if (resultLength - enteredLength > 0) {
            res = padString(str, resultLength - 1, symbol) + symbol;
            if (isLeft) {
                return res.slice(-(resultLength - enteredLength)) + str;
            }
        }
        return res;
    } else {
        return 'num <0';
    }
};

console.log(addingStr('ololo', 10, '*', true));

