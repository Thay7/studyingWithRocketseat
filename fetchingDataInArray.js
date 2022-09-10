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

console.log(`O numero total de categorias é ${numeroDeCategorias} e o número total de livros em cada categoria é ${numeroDeLivros}`)

//2. Contar o número de autores

const numeroDeAutores = booksByCategory[0].books.length

console.log(`O número total de autores é ${numeroDeAutores}`)

//3. Mostrar livros do autor Augusto Curry

function booksByCurry() {

    for (let title of booksByCategory[1].books) {

        if (title.author === 'Augusto Curry') {
            console.log(`Os livros são: ${title.title}`)
        }
    }
}

booksByCurry()
