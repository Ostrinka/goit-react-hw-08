import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './operations';
import { logOut } from "../auth/operations";
import { selectContacts } from '../contacts/selectors';
import { selectFilter } from '../filters/selectors';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
          state.loading = false;
        })
        .addCase(updateContact.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(updateContact.fulfilled, (state, action) => {
          const updatedIndex = state.items.findIndex(
            (item) => item.id === action.payload.id
          );
          if (updatedIndex !== -1) {
            state.items[updatedIndex] = action.payload;
          }
          state.loading = false;
        })
        .addCase(updateContact.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(logOut.fulfilled, (state) => {
          state.items = [];
          state.loading = false;
          state.error = false;
        }),
    },
);



export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filters) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase()) ||
        contact.number.includes(filters)
    )
);

export default contactsSlice.reducer;