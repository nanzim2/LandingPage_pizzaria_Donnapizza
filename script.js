const modo = document.getElementById('botao-tema')

modo.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})