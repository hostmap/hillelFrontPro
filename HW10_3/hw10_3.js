'use strict'

const contactPhone = {
    contacts: [
        {
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'john.doe@example.com'
        },
        {
            name: 'Jane Smith',
            phone: '987-654-3210',
            email: 'jane.smith@example.com'
        }
    ],

    addContact: function(name, phone, email) {
        if (!name || !phone || !email) {
            alert("Всі поля обов'язкові!");
            return false;
        }

        this.contacts.push({ name, phone, email });
        this.renderContacts();
        return true;
    },

    findContact: function(name) {
        return this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(name.toLowerCase())
        );
    },

    renderContacts: function(contactsArray = this.contacts) {
        const container = document.getElementById('contactsList');
        container.innerHTML = '';

        if (contactsArray.length === 0) {
            container.innerHTML = '<div class="contact-card">Контакти не знайдено</div>';
            return;
        }

        contactsArray.forEach(contact => {
            const contactDiv = document.createElement('div');
            contactDiv.className = 'contact-card';
            contactDiv.innerHTML = `
                <h3>${contact.name}</h3>
                <p>📱 ${contact.phone}</p>
                <p>✉️ ${contact.email}</p>
            `;
            container.appendChild(contactDiv);
        });
    }
};

contactPhone.renderContacts();

document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value;
    const results = contactPhone.findContact(searchTerm);
    document.getElementById('searchResult').textContent = 
        `Знайдено контактів: ${results.length}`;
    contactPhone.renderContacts(results);
});

function addNewContact() {
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;

    if (contactPhone.addContact(name, phone, email)) {        
        document.getElementById('nameInput').value = '';
        document.getElementById('phoneInput').value = '';
        document.getElementById('emailInput').value = '';
    }
}