//triangle equilateral || Scalene
//side => s
//equilateral => EQ
//scalene => ES

let S1,S2,S3,EQ,ES;

function whichTriangle(){
  S1 = prompt(parseInt('Type the first side'));
  S2 = prompt(parseInt('Type the second side'));
  S3 = prompt(parseInt('Type the third side'));

  if(S1 === S2 && S2 === S3){
    console.log('The triangle is Equilateral');
  } else if(S1 != S2 && S2 != S3 && S1 != S3){
    console.log('The trinangle is Scalene');
  }
}

whichTriangle();
