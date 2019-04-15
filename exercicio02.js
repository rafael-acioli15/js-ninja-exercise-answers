// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(num1, num2) {
    return num1+num2;
} 

console.log(soma(1, 2));

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var operacaoSoma = soma(1, 2) + 5;

// Qual o valor atualizado dessa variável?

console.log(operacaoSoma);

// Declare uma nova variável, sem valor.

var valor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function addValor() {
    valor = "VALOR";

    return 'O valor da variável agora é ' + valor;
}

// Invoque a função criada acima.

console.log(addValor());

// Qual o retorno da função? (Use comentários de bloco).

/* O valor da variável agora é VALOR */ 

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function somaArg(valor1, valor2, valor3) {

    if(valor1 === undefined || valor2 === undefined || valor3 === undefined) {
        return 'Preencha todos os valores corretamente!';
    } else {
        return (valor1 * valor2 * valor3) + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.

console.log(somaArg(1, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(somaArg(1, 2, 3));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function fazOp(num1, num2, num3) {
    if(num1 !== undefined && num2 === undefined && num3 === undefined) {
        return num1;
    } else if(num1 !== undefined && num2 !== undefined & num3 === undefined) {
        return num1 + num2;
    } else if(num1 !== undefined && num2 !== undefined & num3 !== undefined ) {
        return (num1 + num2) / num3;
    } else if(num1 === undefined && num2 === undefined & num3 === undefined ) {
        return false;
    } else {
        return null;
    }

}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

// com nenhum argumento = false
console.log(fazOp());

// com um argumento = 1

console.log(fazOp(1));

// com dois argumentos = 5

console.log(fazOp(2, 3));

// com três argumentos = 4

console.log(fazOp(4, 4, 2));




