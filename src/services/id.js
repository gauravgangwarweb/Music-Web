import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    audioLink: {
      link: "https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_320.mp4",
      image: "https://c.saavncdn.com/679/Thunderclouds-English-2018-20180809032729-50x50.jpg",
      name: "Thunderclouds"
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