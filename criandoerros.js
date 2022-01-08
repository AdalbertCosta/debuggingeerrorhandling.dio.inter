//Criando erros
//
//O objeto eror


//Código:


new Error(message, filename, linNumber)

// todos os parametros são opcionais

const Meu Erro = new Error('Mensagem Inválida');

throw Meu Erro;

/*------------------------------*/

const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;

/*------------------------------*/

/*
> MeuErro.name
< "InvalidMessage"
> MeuErro.stack
< "InvalidMessage: Mensagem Inválida\n at <anonymous>:3:17"
> MeuErro
< InvalidMessage: Mensagem Inválida\n 
at <anonymous>:3:17
*/