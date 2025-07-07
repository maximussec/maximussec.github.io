document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {

        contactForm.setAttribute('novalidate', true);

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('contact-name');
            const email = document.getElementById('contact-email');
            const message = document.getElementById('contact-message');

            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');
            const successMessage = document.getElementById('contact-success');

            let isValid = true;

            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            successMessage.textContent = '';

            if (name.value.trim() === '') {
                nameError.textContent = 'Por favor, preencha seu nome.';
                isValid = false;
            }

            if (email.value.trim() === '') {
                emailError.textContent = 'Por favor, preencha seu e-mail.';
                isValid = false;
            } else if (!validateEmail(email.value)) {
                emailError.textContent = 'Por favor, insira um e-mail válido.';
                isValid = false;
            }

            if (message.value.trim() === '') {
                messageError.textContent = 'Por favor, escreva uma mensagem.';
                isValid = false;
            }

            if (isValid) {
                successMessage.textContent = 'Enviando sua mensagem... Obrigado!';
                contactForm.submit();
            }
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {

        newsletterForm.setAttribute('novalidate', true);

        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('newsletter-email');
            const emailError = document.getElementById('newsletter-error');
            const successMessage = document.getElementById('newsletter-success');

            emailError.textContent = '';
            successMessage.textContent = '';

            if (email.value.trim() === '') {
                emailError.textContent = 'O campo de e-mail é obrigatório.';
            } else if (!validateEmail(email.value)) {
                emailError.textContent = 'Formato de e-mail inválido.';
            } else {
                successMessage.textContent = 'Obrigado por se inscrever!';
                newsletterForm.submit();
            }
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});