'use strict';

const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');

        const validateField = (regex, input, errorElement, message) => {
            const value = input.type === 'tel' ? input.value : input.value.trim();
            const isValid = regex.test(value);
            
            if (!isValid) {
                input.classList.add('input-error');
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            } else {
                input.classList.remove('input-error');
                errorElement.style.display = 'none';
            }
            return isValid;
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isFormValid = true;

            const nameValid = validateField(
                /^[A-Za-zА-Яа-яҐґЄєІіЇї\s']+$/,
                nameInput,
                document.getElementById('nameError'),
                'Please enter a valid name'
            );
            isFormValid = nameValid && isFormValid;

            const messageValid = validateField(
                /^(|\S.{4,})$/,
                messageInput,
                document.getElementById('messageError'),
                'Message must be at least 5 characters'
            );
            isFormValid = messageValid && isFormValid;

            const phoneValid = validateField(
                /^\+380\d{9}$/,
                phoneInput,
                document.getElementById('phoneError'),
                'Invalid phone format (+380XXXXXXXXX)'
            );
            isFormValid = phoneValid && isFormValid;

            const emailValid = validateField(
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                emailInput,
                document.getElementById('emailError'),
                'Please enter a valid email'
            );
            isFormValid = emailValid && isFormValid;

            if (isFormValid) {
                const formData = {
                    name: nameInput.value.trim(),
                    message: messageInput.value.trim(),
                    phone: phoneInput.value,
                    email: emailInput.value.trim()
                };
                console.log('Form Data:', formData);
                form.reset();
            }
        });