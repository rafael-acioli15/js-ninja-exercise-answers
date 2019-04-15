(function() {

    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    
    console.log( 'Propriedades de "person":' );
    var person = 
    { name: 'rafael',
      lastname: 'acioli',
      age: 21  
    };

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */

    books.push({name: 'HTML5', pages: 150});
    books.push({name: 'PHP7', pages: 200});
    books.push({name: 'JAVA', pages: 800});

    console.log( '\nLista de livros:');

    /*
    Mostre no console todos os livros.
    */
    
    console.log(books);

    console.log( '\nLivro que está sendo removido:' );

    /*
    Remova o último livro, e mostre-o no console.
    */
    
    console.log(books.pop());
    
    console.log( '\nAgora sobraram somente os livros:' );
    
    /*
    Mostre no console os livros restantes.
    */

    console.log(books);
    
    /*
    Converta os objetos que ficaram em `books` para strings.
    */

    console.log( '\nLivros em formato string:' );

    books = JSON.stringify(books);
    
    /*
    Mostre os livros nesse formato no console:
    */

    console.log(books);
   
    /*
    Converta os livros novamente para objeto.
    */

    books = JSON.parse(books);

    console.log( '\nAgora os livros são objetos novamente:' );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */

    for(var i = 0; i < books.length; i++) {
        
        for(var prop in books[i]) {
            console.log(prop + ': ' + books[i][prop]);
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ["R", "A", "F", "A"];
    
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */

    console.log(myName.join(''));

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */

    console.log(myName.reverse().join(''));

    console.log( '\nAgora em ordem alfabética:' );

    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */

    console.log(myName.sort());
    
})();