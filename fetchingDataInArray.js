const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Herv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Sthepen R. Covey",
            },
        ],
    },
];

//1. Contar o numero de categorias e o número de livros em cada categoria

// const totalCategories = booksByCategory.length //acessando tamanho do array e guardando o valor na variavel

// console.log(`O numero total de categorias é ${totalCategories}`) //saída do tamanho do array

// for(let category of booksByCategory) { //"for of" para percorrer todo o array, guardando na variavel "category"

//      console.log('Total de livros da categoria: ', category.category ,'é', category.books.length) //saída acessando nome da categoria do objeto e o número de livros com o .lenght 
// }

//2. Contar o número de autores

function countAuthors() {

    let authors = [] //criando um array vazio, que receberá os autores no loop abaixo

    for(let category of booksByCategory) { //loop para pegar categoria do array

        for (let book of category.books) { //loop para pegar os livros da categoria

         if (authors.indexOf(book.author) == -1) { //verifica se dentro do array criado tem algum elemento que tem o nome do autor do livro, se não tiver, ele adiciona (o -1 significa que ele não achou o autor dentro do array )

                authors.push(book.author) //coloca dentro do array o nome do autor
            }
        }
    }

    console.log("Total de autores:", authors.length) //irá retornar o tamanho do array, que é o número de autores
}

countAuthors()

//console.log(`O número total de autores é ${numeroDeAutores}`)

//3. Mostrar livros do autor Augusto Curry

// function booksByCury() { //inicialização da função

//     for (let book of booksByCategory[1].books) { //"for of" para pegar os elementos da posição 1, do elemento "books" do array "booksByCategory" 

//         if (book.author === 'Augusto Cury') { //se o autor dos elementos que estão armazenados na variavel de controle for 'Augusto Cury' entra aqui

//             console.log(`Os livros são: ${book.title}`) //imprime o nome do livro
//         }
//     }
// }

//booksByCurry()

//4. Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

// function booksByAuthor(author) { //inicialização da função

//     for (let book of booksByCategory) { //"for of" para pegar os elementos da posição 1, do elemento "books" do array "booksByCategory" 
    
//          if (booksByCategory[0].books[0].author === author || booksByCategory[1].books[0].author === author) { //se o autor dos elementos que estão armazenados na variavel de controle for 'Augusto Curry' entra aqui

//              console.log(`Os livros de  são: ${book.books[0].title}`) //imprime o nome do livro do autor especifico
//          }    
//     }
// }

//booksByCategory.forEach(booksByAuthor)
// (booksByAuthor('Augusto Cury'))
