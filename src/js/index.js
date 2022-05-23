/* 
OBJETIVO 1 - Quando passar o mouse em cima do personagem temos que: 

    - Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

    - Retirar a classe selecionado do personagem que está selecionado

OBJETIVO 2 - Quando passar o mouse em   cima do personagem, trocar a imagem e nome do personagem grande.

    - Alterar a imagem do jogador 1

    - Alterar o nome do jogador 1
*/


const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        /*
            OBJETIVO 1 - Quando passar o mouse em cima do personagem temos que: 

                - Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

                - Retirar a classe selecionado do personagem que está selecionado
        */
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        /*
        OBJETIVO 2 - Quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

            - Alterar a imagem do jogador 1

            - Alterar o nome do jogador 1
        
        */

        const idSelecionado = personagem.attributes.id.value;

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
    });
});


