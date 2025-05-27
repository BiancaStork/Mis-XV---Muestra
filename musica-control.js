document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('musica');

  function pausarYRedirigir(enlace) {
    if (!audio.paused) {
      audio.pause();
    }

    setTimeout(() => {
      const url = enlace.href;
      const isBlank = enlace.target === "_blank";
      if (isBlank) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = url;
      }
    }, 100);
  }

  const enlacesExternos = [
    'a[href*="wa.me"]',
    'a[href*="maps.app"]',
    'a[href*="calendar.google.com/calendar/render"]'
  ];

  enlacesExternos.forEach(selector => {
    document.querySelectorAll(selector).forEach(enlace => {
      enlace.addEventListener('click', function (e) {
        e.preventDefault();
        pausarYRedirigir(this);
      });
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      if (audio.paused) {
        audio.currentTime = 0;
        audio.play().catch(err => console.log("No se pudo reproducir al volver:", err));
      }
    }
  });
});
