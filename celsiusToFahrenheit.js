//C = (F - 32) * 5/9
//F = C * 9/5 + 32

function celsiusToFahrenheit (celsius) { //inicialização da função 

    F = celsius * 9/5 + 32 //calculo 

    return `A conversão de ${celsius} graus celsius em Fahrenheit é: ${F}`

}

console.log(celsiusToFahrenheit('25'))

function FahrenheitToCelsius (fahrenheit) {

    C = (fahrenheit - 32) * 5/9

    return `A conversão de ${fahrenheit} graus Fahrenheit em Celsius é: ${C}`

}

console.log(celsiusToFahrenheit('56'))


if (degree === 'C') {



}