import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const designByRoomType = createAsyncThunk(
  "ByRoomTypeslice/designByRoomType",
  async ({ professional_id, roomType_id }) => {
    // alert("In ByRoomTypeslice "+roomType_id);
    // alert("professional_idIn slice "+id)
    try {
      if (!roomType_id)
        throw new Error("roomType_id is not defined or invalid.");

      let response = await axios.post(
        "http://localhost:3001/design/designbyProfessional",
        { professional_id, roomType_id }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const slice = createSlice({
  name: "ByRoomTypeslice",
  initialState: {
    AllDesignList: [],
    error: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(designByRoomType.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(designByRoomType.fulfilled, (state, action) => {
        state.AllDesignList = action.payload;
        state.isLoading = false;
      })
      .addCase(designByRoomType.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Oops! something went wrong...";
      });
  },
});
export default slice.reducer;
