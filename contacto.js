emailjs.init('PTdadKHmSKKiMcfiL');

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const status = document.getElementById('form-status');
  const btn    = this.querySelector('.btn-send');

  btn.textContent = 'Enviando...';
  btn.disabled    = true;

  emailjs.sendForm('service_icnx8kr', 'template_4i57nyd', this)
    .then(() => {
      status.textContent = '¡Mensaje enviado correctamente!';
      status.style.color = 'green';
      this.reset();
    })
    .catch(() => {
      status.textContent = 'Error al enviar. Inténtalo de nuevo.';
      status.style.color = 'red';
    })
    .finally(() => {
      btn.textContent = 'Enviar mensaje';
      btn.disabled    = false;
    });
});