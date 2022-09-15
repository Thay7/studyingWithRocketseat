//ao clicar em um botão, será aberto um modal
//ao apertar "ESC" no teclado, o modal será fechado

const buttonOpenModal = document.getElementById('openModal') //pegando o botão pelo id e armazenando numa variavel

const modalWrapper = document.querySelector('.modal-wrapper') //pegando a classe que tem 

buttonOpenModal.onclick = function () { //pega o botão e adiciona o evento de clique e atribui a funcionalidade

    modalWrapper.classList.remove('invisible')//pega a classe modal-wrapper, da lista de classe e remove a classe chamada "invisible"

} //adicionando elemento de clique no botão

//adicionar o momento de fechar a janela

document.addEventListener('keydown', function (event) {

    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }

})