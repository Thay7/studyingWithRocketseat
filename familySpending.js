let familySpending = { //declaração de array

    incomes: [3000, 1500, 1500],
    expenses: [300, 100, 150, 500]
}

function sum(array) { //função de soma das posições dos arrays

    let total = 0; //inicializando o total com 0

    for (let value of array) { //estrutura de repetição para pegar valor do array

        total += value //o total vai ser somado com o valor 

        return total
    }
}

function calculateBalance() { //função de calculo que fará um array menos o outro

    const calculateIncomes = sum(familySpending.incomes) //aqui se calcula o array incomes do objeto familyspending
    const calculateExpenses = sum(familySpending.expenses) //aqui se calcula o array expenses do objeto familyspending

    const total = calculateIncomes - calculateExpenses // variavel que ira guardar a subtração dos totais dos arrays

    const itsOkay = total >=0 //varivalel que guarda condição para o saldo ser positivo

    let balanceText = "Negativo!" //varial do texto que ira sair caso seja negativo, aqui "negativo" é o default

    if (itsOkay) { //se o saldo for positivo entra aqui

        balanceText = "Positivo!" //a variavel da mensagem é atualizada para "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: $R ${total}`) //mensagem de saida para o usuario com positivo/negativo e saldo
}

calculateBalance() //chamar funcão!!!!!!!!!