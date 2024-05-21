import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const subscribedList = createAsyncThunk("Professionalslice/subscribedList",async()=>{
    try{
        let response = await axios.get("http://localhost:3001/professional/subscribedList");
        return response.data;
    }
    catch(err){
        console.log(err);
        // throw err;
      } 
});
const slice = createSlice({
    name:"Professionalslice",
    initialState:{
        professionalList:[],
        error:false,
        isLoading: false,
    },
    extraReducers:(builder)=>{
        builder.addCase(subscribedList.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(subscribedList.fulfilled,(state,action)=>{
            state.professionalList = action.payload;
            state.isLoading = false;
        }).addCase(subscribedList.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops! something went wrong..."
        })
    }
});
export default slice.reducer;