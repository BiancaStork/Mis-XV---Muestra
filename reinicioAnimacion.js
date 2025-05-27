document.addEventListener('DOMContentLoaded', function () {
  var welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
  const btnPlayPause = document.getElementById('btnPlayPause');
  const btnVolverBienvenida = document.getElementById('btnVolverBienvenida');
  const audio = document.getElementById('musica');
  const modalLeft = document.querySelector('.modal-left');

  function reiniciarAnimacionesModal() {
    // Selecciona los elementos que animan
    const animados = modalLeft.querySelectorAll('h4, p.lead, button#btnIngresar');
    animados.forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight; // Fuerza reflow para reiniciar animación
      el.style.animation = '';
    });
  }

  // Mostrar modal al inicio y reiniciar animación
  welcomeModal.show();
  reiniciarAnimacionesModal();

  // Al hacer click en ingresar, ocultar modal y mostrar botones
  document.getElementById('btnIngresar').addEventListener('click', function () {
    welcomeModal.hide();
    btnPlayPause.style.display = 'block';
    btnVolverBienvenida.style.display = 'block';
  });

  // Al volver a mostrar el modal, pausar música, ocultar botones y reiniciar animación
  btnVolverBienvenida.addEventListener('click', function () {
    welcomeModal.show();
    reiniciarAnimacionesModal();
    if (audio && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
    btnPlayPause.style.display = 'none';
    btnVolverBienvenida.style.display = 'none';
  });
});

