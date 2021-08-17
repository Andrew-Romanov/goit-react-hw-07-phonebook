import { combineReducers } from 'redux';
// import { useDispatch } from 'react-redux';
import { createReducer } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
// import { addContact, removeContact, changeFilter } from './contacts-actions';
import { changeFilter } from './contacts-actions';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';
// import { fetchContacts } from '../../services/axios-api';

// const contactsFromLocalStorage = JSON.parse(localStorage.getItem('contacts'));
// console.log(contactsFromLocalStorage);

// const contactsFromDataBase = fetchContacts();
// console.log('contactsFromDataBase', contactsFromDataBase);

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsRequest]: () => null,
  [addContactError]: (_, action) => action.payload,
  [addContactRequest]: () => null,
  [deleteContactError]: (_, action) => action.payload,
  [deleteContactRequest]: () => null,
});

// const itemsReducer = createReducer(contactsFromLocalStorage ?? [], {
const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,

  [addContactSuccess]: (state, action) => [...state, action.payload],

  [deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),

  // [addContact]: (state, action) => {
  //   const increasedContacts = [
  //     ...state,
  //     {
  //       id: uuidv4(),
  //       name: action.payload.name,
  //       number: action.payload.number,
  //     },
  //   ];
  //   localStorage.setItem('contacts', JSON.stringify(increasedContacts));
  //   return increasedContacts;
  // },

  // [removeContact]: (state, action) => {
  //   const reducedContacts = state.filter(
  //     contact => contact.id !== action.payload,
  //   );
  //   localStorage.setItem('contacts', JSON.stringify(reducedContacts));
  //   return reducedContacts;
  // },
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
