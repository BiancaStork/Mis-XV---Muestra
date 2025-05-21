function startCountdown(eventDateStr, countdownElementId) {
  const eventDate = new Date(eventDateStr);
  const countdown = document.getElementById(countdownElementId);

  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  function updateCountdown() {
    const now = new Date();

    const nowDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());

    if (nowDateOnly.getTime() === eventDateOnly.getTime()) {
      const nextDay = new Date(nowDateOnly);
      nextDay.setDate(nextDay.getDate() + 1);

      const diff = nextDay - now;
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      countdown.innerHTML = `
        <div class="countdown-card">
          <span>${pad(hours)}</span>
          <div class="label">Horas</div>
        </div>
        <div class="countdown-card">
          <span>${pad(minutes)}</span>
          <div class="label">Minutos</div>
        </div>
        <div class="countdown-card">
          <span>${pad(seconds)}</span>
          <div class="label">Segundos</div>
        </div>
      `;
      return;
    }

    if (now > eventDate) {
      countdown.innerHTML = '<div class="countdown-card" style="min-width: 100%;">¡Evento finalizado!</div>';
      clearInterval(intervalId);
      return;
    }

    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
      <div class="countdown-card">
        <span>${pad(days)}</span>
        <div class="label">Días</div>
      </div>
      <div class="countdown-card">
        <span>${pad(hours)}</span>
        <div class="label">Horas</div>
      </div>
      <div class="countdown-card">
        <span>${pad(minutes)}</span>
        <div class="label">Minutos</div>
      </div>
      <div class="countdown-card">
        <span>${pad(seconds)}</span>
        <div class="label">Segundos</div>
      </div>
    `;
  }

  updateCountdown();
  const intervalId = setInterval(updateCountdown, 1000);
}
