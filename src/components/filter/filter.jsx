import React from 'react';
import { FilterCont, Label, Input } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/contactsSlice';
import { setFilter } from 'Redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  const handleInputFilter = e => {
    const filterExpression = e.target.value;
    let filterData;

    if (filterExpression.length < 3) {
      filterData = allContacts;
    } else {
      filterData = allContacts.filter(item =>
        item.userName.toLowerCase().includes(filterExpression)
      );
    }
    dispatch(setFilter(filterData));
  };

  return (
    <FilterCont>
      <Label>
        Find contacts by name
        <Input type="text" onChange={handleInputFilter} />
      </Label>
    </FilterCont>
  );
};
