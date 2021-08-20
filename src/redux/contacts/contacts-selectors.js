import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

// export const getFilteredItems = state => {
//   const allItems = getItems(state);
//   const filter = getFilter(state);
//   return allItems.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

// Мемоизированный селектор
export const getFilteredItems = createSelector(
  [getItems, getFilter],
  (allItems, filter) =>
    allItems.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
