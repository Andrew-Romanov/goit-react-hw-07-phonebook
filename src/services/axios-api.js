// import * as constants from './constants';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  // console.log(data);

  // console.log(response.data);
  // console.log(response.status);
  // console.log(response.statusText);
  // console.log(response.headers);
  // console.log(response.config);
  return data;
}

export async function addContact(id, contact) {
  const { data } = await axios.post(`/contacts/`, { id, ...contact });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  // console.log(data);
  return data;
}
