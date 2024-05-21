import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const allFavouriteList = createAsyncThunk("FavDesignslice/allFavouriteList",async({user_id})=>{
    const currentUser = sessionStorage.getItem('current_user_id');
    // alert(currentUser);
    try{
        if (!currentUser) {
        throw new Error("currentUser is not avail");
      }

      let response = await axios.post(`http://localhost:3001/design/allFavouriteList?user_id=${currentUser}`);
      console.log(response.data);
      return response.data
    }   
     catch(err){
        console.log(err);
        throw err;
    }

});
const slice = createSlice ({
    name:"FavDesignslice",
    initialState:{
        AllFavDesign:[],
        error:false,
        isLoading: false,
    },
    extraReducers:(builder)=>{
        builder.addCase(allFavouriteList.pending,(state,action)=>{
            state.isLoading= true;
        }).addCase(allFavouriteList.fulfilled,(state,action)=>{
            state.AllFavDesign = action.payload;
            state.isLoading = false;
        }).addCase(allFavouriteList.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops! something went wrong..."
        })
    }
});
export default slice.reducer;