emailjs.init('PTdadKHmSKKiMcfiL');

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const status = document.getElementById('form-status');
  const btn    = this.querySelector('.btn-send');

  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    status.textContent = 'Por favor completa el captcha.';
    status.style.color = 'red';
    return;
  }

  btn.textContent = 'Enviando...';
  btn.disabled    = true;

  const templateParams = {
    name:    document.getElementById('name').value,
    email:   document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_icnx8kr', 'template_4i57nyd', templateParams)
    .then(() => {
      status.textContent = '¡Mensaje enviado correctamente!';
      status.style.color = 'green';
      this.reset();
      grecaptcha.reset();
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