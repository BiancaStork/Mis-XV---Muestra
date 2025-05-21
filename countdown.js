// countdown.js

function startCountdown(eventDateStr, countdownElementId) {
  const eventDate = new Date(eventDateStr);
  const countdown = document.getElementById(countdownElementId);

  function updateCountdown() {
    const now = new Date();

    // Fechas sin horas para comparar solo el día
    const nowDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());

    if (nowDateOnly.getTime() === eventDateOnly.getTime()) {
      // Hoy es el día del evento
      // Calculamos el tiempo que queda hasta la medianoche
      const nextDay = new Date(nowDateOnly);
      nextDay.setDate(nextDay.getDate() + 1); // siguiente día a las 00:00

      const diff = nextDay - now;

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      countdown.innerHTML = `
        <div>¡Es hoy!</div>
        <div><span>${hours}</span><br>HORAS</div>
        <div><span>${minutes}</span><br>MINUTOS</div>
        <div><span>${seconds}</span><br>SEGUNDOS</div>
      `;
      return;
    }

    // Si la fecha actual es posterior al evento
    if (now > eventDate) {
      countdown.innerHTML = "¡Evento finalizado!";
      clearInterval(intervalId);
      return;
    }

    // Si falta para el evento
    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
      <div><span>${days}</span><br>DÍAS</div>
      <div><span>${hours}</span><br>HORAS</div>
      <div><span>${minutes}</span><br>MINUTOS</div>
      <div><span>${seconds}</span><br>SEGUNDOS</div>
    `;
  }

  updateCountdown(); // Ejecutar inmediatamente
  const intervalId = setInterval(updateCountdown, 1000);
}
