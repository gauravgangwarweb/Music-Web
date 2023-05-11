import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    play: false
}

export const playSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    setPlay: (state, link) => {
       state.play = link.payload
    }
  }  
})

export const { setPlay } = playSlice.actions

export default playSlice.reducer