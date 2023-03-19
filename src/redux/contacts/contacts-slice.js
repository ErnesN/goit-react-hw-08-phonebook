import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(addContact.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(deleteContact.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(deleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = store.items.filter(item => item.id !== payload);
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});
export default contactsSlice.reducer;
