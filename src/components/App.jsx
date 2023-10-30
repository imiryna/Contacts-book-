import React from 'react';
import { ContactForm } from 'components/contactForm/contactForm';
import { Text } from "components/contactForm/contactForm.styled"
import { ContactList } from 'components/contactList/contactList';
import { Filter } from './filter/filter';


export const App = () => {

    return (
      <>
        <Text>Phonebook</Text>
        <ContactForm />
        <Text>Contacts</Text>
        <Filter/>
        <ContactList/>
      </>
    );
  
}
