function addCommas(num) {
    const isNegative = num < 0;
    num = num.toString();
    num = num.split('');
    if (isNegative){
        num.shift();
    }
    let i = num.indexOf('.');
    if (i === -1){
        i = num.length;
    }
    for (i = i-3; i > 0; i = i-3){
        num.splice(i, 0, ',');
    }
    if (isNegative){
        num.unshift('-');
    }
    num = num.join('');
    return num;
}

module.exports = addCommas;

module.exports = addCommas;