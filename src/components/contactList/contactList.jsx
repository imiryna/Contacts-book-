import React from 'react';
import {
  ContactListCss,
  Items,
  ButtonCss,
} from 'components/contactList/contactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact } from 'Redux/contactsSlice';
import { getFilter } from 'Redux/filterSlice';

// export const ContactList =({removeById, contacts})=>{
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilter);

  const handleOnClick = e => {
    dispatch(deleteContact(e.target.id));
  };

  const showContacts = filteredContacts ? filteredContacts : contacts;

  return (
    <div>
      <ContactListCss>
        {showContacts.map(item => (
          <Items key={item.id}>
            {item.userName}: {item.number}
            <ButtonCss id={item.id} type="button" onClick={handleOnClick}>
              Delete
            </ButtonCss>
          </Items>
        ))}
      </ContactListCss>
    </div>
  );
};
