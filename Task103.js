const contactBook = {
    contacts: [
        {name: 'Olivia Carter', phone: '123-456-7890', email: 'OliviaCarter@fakemail.com'},
        {name: 'Liam Anderson', phone: '234-567-8901', email: 'LiamAnderson@fakemail.com'},
        {name: 'Sophia Martinez', phone: '345-678-9012', email: 'SophiaMartinez@fakemail.com'}
    ],
getInfo: function() {
    return this.contacts.map(contact => ({
        name: contact.name,
        phone: contact.phone,
        email: contact.email
    }));
    },
    addContact: function(name, phone, email) {
        const newContact = {name, phone, email};
        this.contacts.push(newContact);
    }
};
contactBook.addContact('Evelyn Carter','456-789-0123','EvelynCarter@fakemail.com');
console.log(contactBook.getInfo());