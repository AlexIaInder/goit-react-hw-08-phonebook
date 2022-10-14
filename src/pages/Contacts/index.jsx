import { Stack } from '@mui/material';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const Contacts = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        mx: 'auto',
        my: 10,
        borderRadius: 2,
        width: 400,
        backgroundColor: 'rgba(1, 47, 197, 0.5)',
        boxShadow: '0px 0px 8px 0px #33333347',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Stack>
  );
};

export default Contacts;
