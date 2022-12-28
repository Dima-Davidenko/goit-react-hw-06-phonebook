import { Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Contacts, Container, Filter, NewContactForm, Section } from './';
import * as storageApi from '../utils/storageApi';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return storageApi.load('contacts') ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    storageApi.save('contacts', contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert('Контакт з таким іменем вже існує');
    } else {
      setContacts(p => [...p, { id: nanoid(), name, number }]);
    }
  };

  const updateFilter = filter => {
    setFilter(filter.toLowerCase().trim());
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const removeContact = idToRemove => {
    setContacts(p => p.filter(({ id }) => id !== idToRemove));
  };
  return (
    <Container>
      <Typography variant="h2" sx={{ mb: 10 }}>
        Телефонна книжка
      </Typography>
      <Section title="Додати новий контакт" variant="h3">
        <NewContactForm addContact={addContact} />
      </Section>
      <Section title="Ваші контакти" variant="h3">
        <Contacts contactsToShow={filterContacts()} removeContact={removeContact}>
          <Filter setFilter={updateFilter} />
        </Contacts>
      </Section>
    </Container>
  );
};

export default App;
