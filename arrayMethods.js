// double values

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(el) {
        newArr.push(el * 2);
    });
    return newArr;
}

// onlyEvenValues

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

// showFirstAndLast

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length -1]);
    });
    return newArr;
}

// addKeyandValue

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    
    return arr;
  }

  // vowelCount

  function vowelCount(str) {
    let newObj = {};
    let splitStr = str.split("");
    let vowels = "aeiou";
    
    splitStr.forEach(function(char){
     let letter = char.toLowerCase()
     if(vowels.indexOf(letter) !== -1){
       if(newObj[letter]) {
         newObj[letter]++;
     } else {
       newObj[letter] = 1;
     }
     }
    });
    return newObj;
  }

// doubleValuesWithMap

function doubleValuesWithMap(arr){
    return arr.map(function(val){
      return val * 2;
    });
  }


// valTimesIndex

function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val * i;
    });
}

// extractKey

function extractKey(arr, key) {
    return arr.map(function(val){
      return val[key];
    });
  }

  // extractFullName

  function extractFullName(arr){
    return arr.map(function(val){
      return val.first + " " + val.last;
    });
  }

  // filterByValue

  function filterByValue(arr, key){
    return arr.filter(function(val){
      return val[key] !== undefined;
    });
  }

  // find

  function find(arr, value){
    return arr.filter(function(val){
        return val === value;
    })[0];
  }

  // findInObj

  function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }

  // removeVowels
  
  function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }

  // doubleOddNumbers
  
  function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }