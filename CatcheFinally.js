//Throw, Try/Catch e Finally

/* 
Trow
- Tratamento de erros
*/

function verificaPalindromo(string) {
  if (!string) return "String inválida";

  return string === string.split('').reverse().join('');
}

verificaPalindromo('cat'); //"String inválida"

function verificaPalindromo(string) {
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

verificaPalindromo('cat'); //"Uncaught String inválida"