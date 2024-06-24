import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 export const favDesignPost = createAsyncThunk("FavDesignPostslice/favDesignPost",async({user_id: currentUser,designImg_id:id})=>{
    
    // alert("currentUser in FavDesignPost slice "+currentUser);
    try{
        if(!currentUser){
            console.log ("currentUser is not available");
        }
        let response = await axios.post("http://localhost:3001/design/addToFavorite",{user_id: currentUser,designImg_id:id})
    console.log(response.data);
    return response.data;

    }catch(err){
        console.log(err);
        // throw err;
    }
});
const slice = createSlice({
    name:"favDesignPostslice",
    initialState:{
        AllFavPost:[],
        error:false,
        isLoading:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(favDesignPost.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(favDesignPost.fulfilled,(state,action)=>{
            state.AllFavPost = action.payload;
            state.isLoading = false;
        }).addCase(favDesignPost.rejected,(state,action)=>{
            state.isLoading = false;
            state.error("Oops! something went wrong..")
        })
    }
})
export default slice.reducer;
