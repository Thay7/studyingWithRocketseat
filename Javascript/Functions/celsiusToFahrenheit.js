//C = (F - 32) * 5/9
//F = C * 9/5 + 32

function celsiusToFahrenheit (celsius) { //inicialização da função que converte celsius em fahrenheit 

    F = celsius * 9/5 + 32 //calculo da conversão 

    return `A conversão de ${celsius} graus celsius em Fahrenheit é: ${F}` //mensagem que será retornada ao chamar a função 

}

console.log(celsiusToFahrenheit('25')) //chamando a funçãi com o parametro que é o valor do argumento "celsius" passado da inicialização da função 

function FahrenheitToCelsius (fahrenheit) { //inicialização da função que converte fahrenheit em celsius

    C = (fahrenheit - 32) * 5/9 //calculo da conversão 

    return `A conversão de ${fahrenheit} graus Fahrenheit em Celsius é: ${C}`//mensagem que será retornada ao chamar a função 

}

console.log(celsiusToFahrenheit('56')) //chamando a função com o parametro que é o valor do argumento "celsius" passado da inicialização da função 
