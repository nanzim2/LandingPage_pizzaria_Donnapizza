//INICIO Script CARROSSEL
  const carrossel = document.querySelector('.carrossel');
  const imagensContainer = document.querySelector('.carrossel-imagens');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Variáveis de controle
  let indiceAtual = 0;
  const totalImagens = 3;
  
  let autoPlayInterval;

  // Função para atualizar a posição do carrossel
  function atualizarCarrossel() {
    const deslocamento = -indiceAtual * 100;
    imagensContainer.style.transform = `translateX(${deslocamento}%)`;
  }

  // Função que avança para o próximo slide
  function avancarSlide() {
    indiceAtual++;
    if (indiceAtual >= totalImagens) {
      indiceAtual = 0; // Volta para o início
    }
    atualizarCarrossel();
  }
  
  // Função para iniciar o avanço automático
  function iniciarAutoPlay() {
    // Define um intervalo de tempo em ms
    autoPlayInterval = setInterval(avancarSlide, 4000);
  }

  // Função para parar o avanço automático
  function pararAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // event listeners dos botões
  nextBtn.addEventListener('click', () => {
    pararAutoPlay(); // Para o automático ao clicar
    avancarSlide();  // Avança imediatamente
    iniciarAutoPlay(); // Reinicia o temporizador
  });

  prevBtn.addEventListener('click', () => {
    pararAutoPlay(); // Para o automático ao clicar
    indiceAtual--;
    if (indiceAtual < 0) {
      indiceAtual = totalImagens - 1;
    }
    atualizarCarrossel();
    iniciarAutoPlay(); // Reinicia o temporizador
  });

  // Pausa o carrossel quando o mouse está sobre ele
  carrossel.addEventListener('mouseenter', () => {
    pararAutoPlay();
  });

  // Retoma o carrossel quando o mouse sai de cima
  carrossel.addEventListener('mouseleave', () => {
    iniciarAutoPlay();
  });

  //Inicia o auto-play quando a página carrega
  iniciarAutoPlay();