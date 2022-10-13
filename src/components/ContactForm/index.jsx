import { useState } from 'react';
import { nanoid } from 'nanoid';
import './ContactForm.module.css';
import { useAddContactMutation, useGetContactsQuery } from 'api/contacts';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      phone,
    };
    const isContactAlreadyExist = contacts?.some(
      contact => contact.phone === phone || contact.name === name
    );

    if (isContactAlreadyExist) {
      alert(`${name} or ${phone} is already in contacts`);
      return;
    }

    addContact(contact);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
      />

      <input
        type="tel"
        name="number"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Phone"
      />

      <button type="submit" disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
