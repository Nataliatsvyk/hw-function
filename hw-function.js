// Завдання 1
function eatFood(hamburger, fries) {
    if (hamburger > 3 && fries > 0) {
      console.log('Ми поїли');
    } else {
      console.log('Ми йдемо в інше кафе');
    }
  }
  
  let hamburger = 4;
  let fries = 1;
  eatFood(hamburger, fries);
  
  
  // Завдання 2
  function checkPrice(price) {
    if (price > 999 && price < 1901) {
      console.log('Ціна товару знаходиться між 1000 та 1900');
    }
  }
  
  let price = 1000;
  checkPrice(price);
  
  
  // Завдання 3
  function checkPriceRange(price1) {
    if (price1 < 1901 && price1 > 999) {
      console.log('Ціна не в межах');
    } else {
      console.log('Ціна в потрібних межах');
    }
  }
  
  let price1 = 1000;
  checkPriceRange(price1);
  
  
  // Завдання 4
  function getSeasonName(season) {
    switch (season) {
      case 1:
        return 'Winter';
      case 2:
        return 'Spring';
      case 3:
        return 'Summer';
      default:
        return 'Fall';
    }
  }
  
  let season = 4;
  console.log(getSeasonName(season));
  
  
  // Завдання 5
  function findMiddleNumber(a, b, c) {
    let middle;
  
    if (a < b) {
      if (b < c) {
        middle = b;
      } else if (a < c) {
        middle = c;
      } else {
        middle = a;
      }
    } else {
      if (a < c) {
        middle = a;
      } else if (b < c) {
        middle = c;
      } else {
        middle = b;
      }
    }
  
    return middle;
  }
  
  let a = 5;
  let b = 10;
  let c = 7;
  console.log('Середнє число: ' + findMiddleNumber(a, b, c));
  
  
  // Завдання 6
  function getDayOfWeek(week) {
    switch (week) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return 'Invalid day';
    }
  }
  
  let week = 7;
  console.log(getDayOfWeek(week));
  
  
  // Завдання 7
  function performOperation(operator, x, y) {
    let result;
  
    switch (operator) {
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
      default:
        console.log('Невідомий оператор');
        return;
    }
  
    console.log('Результат: ' + result);
  }
  
  let operator = '-';
  let x = 10;
  let y = 5;
  performOperation(operator, x, y);
  
  
  // Завдання 8
  function removeVowelsFromString(word) {
    let vowelsRegex = /[aeiou]/gi;
    let result = word.replace(vowelsRegex, '');
  
    console.log('Результат: ' + result);
  }
  
  let word = 'Hello world';
  removeVowelsFromString(word);
  
  
  // Завдання 9
  function convertMetersToKilometers(meters) {
    let kilometers = meters / 1000;
    let result;
  
    if (kilometers === 1) {
      result = 'Результат: ' + kilometers + ' кілометр';
    } else if (kilometers > 5 && kilometers < 99) {
      result = 'Результат: ' + kilometers + ' кілометрів';
    } else {
      result = 'Результат: ' + kilometers.toFixed(2) + ' кілометра';
    }
  
    console.log(result);
  }
  
  let meters = 4000;
  convertMetersToKilometers(meters);
  
  
  
  
  
  