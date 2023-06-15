import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playerHide: true
}

export const playerHideSlice = createSlice({
  name: 'playerHide',
  initialState,
  reducers: {
    setHide: (state, link) => {
       state.playerHide = link.payload
    }
  }  
})

export const { setHide } = playerHideSlice.actions

export default playerHideSlice.reducer