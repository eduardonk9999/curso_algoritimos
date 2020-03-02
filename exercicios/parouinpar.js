//pair or odd
let pairOrodd = parseInt(prompt('Type yours number'));

function restOfDivision(){
  let calc = pairOrodd % 2;
  if(calc == 0) {
    console.log('pair');
  } else {
    console.log('odd');
  }
}

restOfDivision();
