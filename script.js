
function abrirModal(titulo, tecnologias, link) {
  document.getElementById('modal-title').innerText = titulo;
  document.getElementById('modal-tech').innerText = tecnologias;
  document.getElementById('modal-link').href = link;
  document.getElementById('modal').classList.remove('hidden');
}

function cerrarModal() {
  document.getElementById('modal').classList.add('hidden');
}
