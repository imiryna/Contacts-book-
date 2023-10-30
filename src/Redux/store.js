import { configureStore } from '@reduxjs/toolkit';
import { persistedcontactsReducer } from 'Redux/contactsSlice';
import { filterReducer } from 'Redux/filterSlice';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    contacts: persistedcontactsReducer,
    filter: filterReducer,
  },

    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  
  export const persistor = persistStore(store);
