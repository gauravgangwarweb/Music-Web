import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { songsApi } from './services/songs'
import idReducer from './services/id'

export const store = configureStore({
  reducer: {
    [songsApi.reducerPath]: songsApi.reducer,
    id: idReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songsApi.middleware),
})

setupListeners(store.dispatch)