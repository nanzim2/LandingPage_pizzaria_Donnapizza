//INICIO script NAV-BAR
const modo = document.getElementById('botao-tema') //Modo dark

modo.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

const hamburger = document.querySelector('.hamburger'); //NAV-bAR
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// INICIO script BOTÂO FLUTUANTE
const botaoflutuante = document.querySelector('.container-flutuante')
const pontoAparicao = 150

// verifica a posição do scroll
function posicaoScroll () {
    if (window.scrollY > pontoAparicao) {
        botaoflutuante.classList.add('visivel')
    } else {
        botaoflutuante.classList.remove('visivel')
    }
}

//chama função quando rolar o scroll
window.addEventListener('scroll' , posicaoScroll);
//checa posição quando carregar a página
document.addEventListener('DOMContentLoaded' , posicaoScroll);


