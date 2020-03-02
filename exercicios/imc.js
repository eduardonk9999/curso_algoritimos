
let height = parseFloat(prompt('type yours height'));
let weight = parseFloat(prompt('type yours wheight'));

function calcBMI(){
  let BMI = weight / (height * height) ;
  console.log(BMI);
}

calcBMI();