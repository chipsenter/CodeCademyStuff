// Function 1 //

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

console.log(getSubTotal(orderCount));

// New Function 2 //

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = () => {
 return getSubTotal(orderCount) * 0.06; 
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(); 
}; 

console.log(getSubTotal(orderCount));
console.log(getTotal());

// Function 3

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
     return 1;
    } else {
      return (n * factorial(n - 1));
    }
  };
  
  factorial(10);

  // Function 4

  const multiplyByNineFifths = celsius => celsius * (9/5);
  
  const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;
  
  console.log('The temperature is ' + getFahrenheit(15) + '°F');

  // Function 5

  const volumeOfSphere = diameter =>
  (1/6) * Math.PI * diameter * diameter * diameter;


console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

// Function 6

let myName = window.prompt('What is your name?'.toUpperCase());
//let myName = prompt('What is your name?');
var myAge = 8;
var earlyYears = 2;
earlyYears = earlyYears * 10,5;
console.log(earlyYears);
var laterYears = myAge - 2;
console.log(laterYears);
laterYears *= 4;
var myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);

//
