import { Typography } from '@mui/material';
import React from 'react';
import { Contacts, Container, Filter, NewContactForm, Section } from './';

export const App = () => {
  return (
    <Container>
      <Typography variant="h2" sx={{ mb: 10 }}>
        Телефонна книжка
      </Typography>
      <Section title="Додати новий контакт" variant="h3">
        <NewContactForm />
      </Section>
      <Section title="Ваші контакти" variant="h3">
        <Contacts>
          <Filter />
        </Contacts>
      </Section>
    </Container>
  );
};

export default App;
