import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UploadVideo = createAsyncThunk("RoomTypePostslice/UploadVideo",async({roomType,title,video,professional_id})=>{
    console.log ("In RoomTypePostslice "+roomType);
    console.log("title slice "+title);
    console.log("video slice "+video);
    console.log("pro_id "+professional_id);
try{
    let response = await axios.post("http://localhost:3001/design/video",{roomType,title,video,professional_id});
    console.log(response.data);
    // alert(response.data.design_id);
    return response.data;

} catch(err){
    console.log(err);
    throw err;
}
});
const slice = createSlice({
    name:"RoomTypePostslice",
    initialState:{
    AllVideoList:[],
    error:false,
    isLoading:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(UploadVideo.pending,(state,action)=>{
            state.isLoading= true;
        }).addCase(UploadVideo.fulfilled,(state,action)=>{
            state.AllVideoList = action.payload;
            state.isLoading = false;
        }).addCase(UploadVideo.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops! something went wrong..."
        })

    }
})
export default slice.reducer;

