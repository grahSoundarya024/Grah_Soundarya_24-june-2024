import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UploadDesign = createAsyncThunk(
  "DesignPostslice/UploadDesign",
  async ({ design_id: id, image_url, description }) => {
    console.log("In RoomTypePostslice design_id " + id);
    console.log("image_url slice " + image_url);
    console.log("description slice " + description);
    try {
      let response = await axios.post(
        "http://localhost:3001/design/uploadImages",
        { design_id: id, image_url, description }
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
  name: "DesignPostslice",
  initialState: {
    AllDesignPost: [],
    error: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(UploadDesign.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(UploadDesign.fulfilled, (state, action) => {
        state.AllDesignPost = action.payload;
        state.isLoading = false;
      })
      .addCase(UploadDesign.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Ooops somthing went wrong..";
      });
  },
});

export default slice.reducer;
