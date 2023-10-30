import React from 'react';
import { ContactForm } from 'components/contactForm/contactForm';
import { Text } from "components/contactForm/contactForm.styled"
import { ContactList } from 'components/contactList/contactList';
import { Filter } from './filter/filter';


export const App = () => {

  // const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? contactsDataList);
  // const [filter, setFilter] = useState('');
  
  // useEffect(()=>{
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   const isInContacts = contacts.some(
  //     ({ userName }) => userName.toLowerCase() === newContact.userName.toLowerCase());

  //   if (isInContacts) {
  //     Notiflix.Notify.info(`${newContact.userName} is already in contacts`);
  //     return;
  //   }
  //   setContacts(contacts => [...contacts, newContact]);
  // };

  // const removeContactById = contactId => {
  //   setContacts(contacts => contacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const filteringContacts = filteredList => {
  //   setFilter([...filteredList])
  // };

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
