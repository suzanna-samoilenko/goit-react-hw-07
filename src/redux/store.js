import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { filterSlice } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filterSlice,
  },
});
