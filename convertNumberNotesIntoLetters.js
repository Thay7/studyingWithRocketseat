function notaEmLetra(score) { //função para transformar notas em letras

    let scoreA = score >= 90 && score <= 100 //condicional para A 
    let scoreB = score >= 80 && score  <= 89 //condicional para B
    let scoreC = score >= 70 && score <= 79 //condicional para C
    let scoreD = score >= 60 && score <= 69 //condicional para D
    let scoreF = score < 60 && score >= 0 //condicional para F

    let scoreFinal //declaração de variavel de score final

    if (scoreA) { //condicional para A

        scoreFinal = 'A'//scorefinal será A

    } else if (scoreB) { //condicional para B
 
        scoreFinal = 'B' //scorefinal será B

    } else if (scoreC) { //condicional para C

        scoreFinal = 'C'//scorefinal será C

    } else if (scoreD) { //condicional para D

        scoreFinal = 'D' //scorefinal será D

    } else if (scoreF) { //condicional para F

        scoreFinal = 'F'//scorefinal será F

    } else { //se a nota não for entre 0 e 100 entra aqui

        scoreFinal = 'Nota inválida! Insira uma nota de 0 a 100!' //apresenta essa mensagem

    }

    return scoreFinal 
    
} 

console.log(notaEmLetra(100))