let number = 1;
let arrayNumber = [];

while(number <= 10){
  numberNow = parseInt(prompt('type number'));

  arrayNumber.push(numberNow);

  let sumAll = arrayNumber.reduce(function(acumulador, elemento){
    return acumulador + elemento;
  });
  console.log(arrayNumber);
  console.log(sumAll);
 

  number++;
  
}

