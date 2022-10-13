import { useDeleteContactMutation, useGetContactsQuery } from 'api/contacts';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import './ContactList.module.css';
import { getFilter } from 'redux/filterSlice';

const ContactList = () => {
  const search = useSelector(getFilter);
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filteredContacts = useMemo(
    () =>
      (search
        ? contacts?.filter(contact =>
            contact.name.toLowerCase().includes(search.toLowerCase())
          )
        : contacts) ?? [],
    [search, contacts]
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <p>
            {name}: {phone}
          </p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
