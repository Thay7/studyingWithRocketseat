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

const totalCategories = booksByCategory.length //acessando tamanho do array e guardando o valor na variavel

console.log(`O numero total de categorias é ${totalCategories}`) //saída do tamanho do array

for(let category of booksByCategory) { //"for of" para percorrer todo o array, guardando na variavel "category"

     console.log('Total de livros da categoria: ', category.category ,'é', category.books.length) //saída acessando nome da categoria do objeto e o número de livros com o .lenght 
}

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

console.log(`O número total de autores é ${numeroDeAutores}`)

//3. Mostrar livros do autor Augusto Curry

function booksOfCury(author) { 

    let books = [] //array vazio que irá receber os titulos dos livros

    for (let category of booksByCategory) { //loop para percorrer as categorias do array

         for (let book of category.books) { //loop para percorrer os livros do array

             if (book.author === author) { //condicional que verifica se o author do livro é igual ao argumento passado

                books.push(book.title) //se for, coloca o nome do livro dentro do array
        }
    }
}

console.log(`Os livros de ${author} são: ${books.join(", ")}`)//saída no console dos nomes dos livros que entraram no array (.join transforma a variavel em um array e me permite colocar um separador)

}

booksOfCury('Augusto Cury')

//4. Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

function booksOfAuthor(author) { //inicialização da função

    let books = []

    for (let category of booksByCategory) { //"for of" para pegar a categoria do array

        for (let book of category.books) { //"for of" para acessar os livros da categoria

            if (book.author === author) { //condicional para verificar se o autor passado como argumento é igual ao do livro
                books.push(book.title) //se for, ele guarda o nome do livro dentro do array
            }
        }
     }    
         console.log(`Livro(s) de ${author}: ${books.join(", ")}`) //imprime o(s) nome(s) do(s) livro(s) do autor o seu proprio
}

(booksOfAuthor('George S. Clason')) //chamando a função e passando o argumento "autor"
