import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: ""
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, link) => {
       state.query = link.payload
    }
  }  
})

export const { setQuery } = querySlice.actions

export default querySlice.reducer