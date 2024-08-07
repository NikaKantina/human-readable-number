module.exports = function toReadable(number) {
    const numberAsStr = number.toString();
    const uniqueNamesOfNum = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        18: 'eighteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred'
    }

    if (uniqueNamesOfNum[number]) {
        return (uniqueNamesOfNum[number]);
    } else if (numberAsStr.length == 2) {
        if (number >= 16 && number <= 19) {
            return uniqueNamesOfNum[numberAsStr[1]] + 'teen';
        } else {
            let firstKey = numberAsStr[0] * 10;
            let secondKey = numberAsStr[1];
            return uniqueNamesOfNum[firstKey] + ' ' + uniqueNamesOfNum[secondKey];
        }
    } else if (numberAsStr.length == 3) {
        let keyFirst = numberAsStr[0];
        if (numberAsStr[1] == 0 && numberAsStr[2] == 0) {
            return uniqueNamesOfNum[keyFirst] + ' hundred';
        } else {
            return uniqueNamesOfNum[keyFirst] + ' hundred ' + toReadable(+numberAsStr.slice(1));
        }
    }
}


