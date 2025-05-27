// Mostrar loader al hacer click en Ingresar
document.getElementById('btnIngresar').addEventListener('click', function () {
  // Oculta el modal de bienvenida (ya lo hacés)
  // Muestra el loader
  document.getElementById('loader').style.display = 'flex';
  
  // Opcional: puedes ocultar el contenido principal aquí si quieres
  // document.body.classList.add('oculto'); // si tienes una clase oculto
});

// Cuando TODOS los recursos hayan cargado, ocultar el loader
window.addEventListener('load', function () {
  // Oculta el loader con transición
  document.getElementById('loader').classList.add('hide');
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    // document.body.classList.remove('oculto'); // muestra el contenido principal si lo ocultaste antes
  }, 500); // Espera a que termine la transición
});
