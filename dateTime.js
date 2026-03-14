// ── Fecha y hora ── 
function updateDateTime() {
  const now  = new Date();

  document.getElementById('date').textContent = now.toLocaleDateString('es-ES', {
    weekday: 'long', day: 'numeric', month: 'long', 
  });

  document.getElementById('time').textContent = now.toLocaleTimeString('es-ES', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}

updateDateTime();
setInterval(updateDateTime, 1000);