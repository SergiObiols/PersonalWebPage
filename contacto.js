emailjs.init('PTdadKHmSKKiMcfiL');

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const status = document.getElementById('form-status');
  const btn    = this.querySelector('.btn-send');
  const form   = this;

  btn.textContent = 'Enviando...';
  btn.disabled    = true;

  grecaptcha.ready(function () {
    grecaptcha.execute('6LdvRIssAAAAAMXSBfd8IM2znAKwiMkmmJ7iD20Y', { action: 'submit' }).then(function (token) {
      emailjs.sendForm('service_icnx8kr', 'template_4i57nyd', form)
        .then(() => {
          status.textContent = '¡Mensaje enviado correctamente!';
          status.style.color = 'green';
          form.reset();
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
  });
});