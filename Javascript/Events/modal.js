//ao clicar em um botão, será aberto um modal
//ao apertar "ESC" no teclado, o modal será fechado

const buttonOpenModal = document.getElementById('openModal') //pegando o botão pelo id e armazenando numa variavel

const modalWrapper = document.querySelector('.modal-wrapper') //pegando a div "tecle esc para fechar" pela classe 

//adicionando elemento de clique no botão
buttonOpenModal.onclick = function () { //pega o botão e adiciona o evento de clique, atribuindo ao modalWrapper a funcionalidade  de remover a classe "invisible"

    modalWrapper.classList.remove('invisible')//pega a classe modal-wrapper, da lista de classe e remove a classe chamada "invisible"

} 

//adicionando o momento de fechar a janela
document.addEventListener('keydown', function(event) { //o ESC lê na tela inteira, então é adicionado o document e o evento de esperar a tecla ser pressionada para fechar a janela (passando o event pois precisar acessar o prototype para veriifcar se a tecla digitada é "ESC")  

    const isEscKey = event.key === 'Escape' //vai acessar o event.key no prototype e verificar se é igual a Escape

    if(isEscKey) { //se isEscKey for true realiza a ação abaixo
        modalWrapper.classList.add('invisible') //a classe "invisible" é adicionada novamente no modalwrapper e a janela é fechada
    }

})

//ver documentação MDN DOM