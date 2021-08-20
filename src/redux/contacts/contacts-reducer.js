import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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

const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,

  [addContactSuccess]: (state, action) => [...state, action.payload],

  [deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
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
