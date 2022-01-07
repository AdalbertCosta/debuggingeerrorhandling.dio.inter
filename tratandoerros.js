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


/*----------------------------------------------------------------*/

//Try...catch
//Tratamento de erros

function verificaPalindromo(string) {
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    verificaPalindromo(string)
  }
  catch(e) {
    console.log(e) 
      
  }
}

tryCatchExemplo('');

/*----------------------------------------------------------------*/

function verificaPalindromo(string) {
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    verificaPalindromo(string)
  }
  catch(e) {
    throw e;   
  }
}

tryCatchExemplo('');

//Finally
// Tratamento de erros

/*----------------------------------------------------------------*/

function verificaPalindromo(string) {
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    return verificaPalindromo(string)
  }
  catch(e) {
    throw e;   
  }
  finally {
    console.log('A string enviada foi:' + string);
  }
}

tryCatchExemplo(''); // Uncaught String inválida

/*----------------------------------------------------------------*/

function verificaPalindromo(string) {
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    return verificaPalindromo(string)
  }
  catch(e) {
    throw e;   
  }
  finally {
    console.log('A string enviada foi:' + string);
  }
}

tryCatchExemplo('ala'); // A string enviada foi: ala -> true

