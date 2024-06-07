document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const toggleContact = document.getElementById('toggleContact');
    const emailDiv = document.querySelector('div:nth-child(1)');
    const phoneDiv = document.getElementById('phoneDiv');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const birthDateInput = document.getElementById('birthDate');
    const passwordInput = document.getElementById('password');
    let users = [];

    toggleContact.addEventListener('change', () => {
        if (toggleContact.checked) {
            emailDiv.classList.add('hidden');
            phoneDiv.classList.remove('hidden');
            emailInput.required = false;
            phoneInput.required = true;
        } else {
            emailDiv.classList.remove('hidden');
            phoneDiv.classList.add('hidden');
            emailInput.required = true;
            phoneInput.required = false;
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        
        const password = passwordInput.value;
        const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordPattern.test(password)) {
            alert('Hasło musi mieć minimum 8 znaków, zawierać przynajmniej jedną cyfrę, jeden znak specjalny, jedną małą i jedną dużą literę.');
            return;
        }

        const birthDate = new Date(birthDateInput.value);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        if (age < 18) {
            alert('Musisz być pełnoletni, aby się zarejestrować.');
            return;
        }

        const email = emailInput.value;
        const phone = phoneInput.value;
        if (users.some(user => user.email === email || user.phone === phone)) {
            alert('Użytkownik już istnieje.');
            return;
        }

        const newUser = {
            email: email || null,
            phone: phone || null,
            password: password,
            country: document.getElementById('country').value,
            birthDate: birthDateInput.value
        };
        users.push(newUser);

        alert('Sukcess!');
        form.reset();
        emailDiv.classList.remove('hidden');
        phoneDiv.classList.add('hidden');
        emailInput.required = true;
        phoneInput.required = false;
    });
});
