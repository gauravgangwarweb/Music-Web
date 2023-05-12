import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    audioLink: {
      link: "https://aac.saavncdn.com/426/81928af66e1f27c4dcdf6c6c04424605_320.mp4",
      image: "https://c.saavncdn.com/426/Hancock-Hindi-2018-20220425131026-50x50.jpg",
      name: "Hancock"
    }
}

export const idSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId: (state, link) => {
        state.audioLink.link = link.payload.link;
        state.audioLink.image = link.payload.image;
        state.audioLink.name = link.payload.name
    }
  }  
})

export const { setId } = idSlice.actions

export default idSlice.reducer