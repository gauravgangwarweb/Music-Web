import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { songsApi } from './services/songs'
import idReducer from './services/id'
import hideReducer from './services/hide'
import queryReducer from './services/query'
import playReducer from './services/play'

export const store = configureStore({
  reducer: {
    [songsApi.reducerPath]: songsApi.reducer,
    id: idReducer,
    hide: hideReducer,
    query: queryReducer,
    play: playReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songsApi.middleware),
})

setupListeners(store.dispatch)