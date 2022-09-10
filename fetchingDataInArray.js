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
                author: "Augusto Curry",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Curry",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Sthepen R. Covey",
            },
        ],
    },
];

//1. Contar o numero de categorias e o número de livros em cada categoria

const numeroDeCategorias = booksByCategory.length //acessando tamanho do array e guardando o valor na variavel

const numeroDeLivros = booksByCategory[0].books.length //acesssando 

//console.log(`O numero total de categorias é ${numeroDeCategorias} e o número total de livros em cada categoria é ${numeroDeLivros}`)

//2. Contar o número de autores

const numeroDeAutores = booksByCategory[0].books.length

//console.log(`O número total de autores é ${numeroDeAutores}`)

//3. Mostrar livros do autor Augusto Curry

// function booksByCurry() { //inicialização da função

//     for (let book of booksByCategory[1].books) { //"for of" para pegar os elementos da posição 1, do elemento "books" do array "booksByCategory" 

//         if (book.author === 'Augusto Curry') { //se o autor dos elementos que estão armazenados na variavel de controle for 'Augusto Curry' entra aqui

//             console.log(`Os livros são: ${book.title}`) //imprime o nome do livro
//         }
//     }
// }

//booksByCurry()

//4. Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

function booksByAuthor(author) { //inicialização da função

    for (let book of booksByCategory[0].books) { //"for of" para pegar os elementos da posição 1, do elemento "books" do array "booksByCategory" 

        if (book.author === author) { //se o autor dos elementos que estão armazenados na variavel de controle for 'Augusto Curry' entra aqui

            console.log(`Os livros de ${author} são: ${book.title}`) //imprime o nome do livro do autor especifico
        }
    }
}

booksByAuthor('George S. Clason')
