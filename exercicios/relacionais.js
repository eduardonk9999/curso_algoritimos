//& só vai ser verdadeiro quando as duas opcoes forem verdadeiras.
// || só vai retorna false quando as duas forem falsas, o restante sempre vai ser verdadeiras.
//  ! Não, sendo a primeira opcao verdadeira a outra é falsa, se a opcao for falsa a outra é verdadeira.

/*Com o operador & eu quero uma coisa e outra, as duzas tem que ser igual pra funfar*/
/*|| quando os dois forem falsos ou verdadeiros
é ok, quando um for diferente do não funfa.
*/

let age;
function approved(){
  let ageCurrent = prompt(parseInt(age));
  console.log(ageCurrent);

  if(ageCurrent >= 16 ){
    console.log('Pode entrar');
  } else {
    console.log('nao pode entrar')
  }
} 

approved();