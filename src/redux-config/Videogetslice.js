import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getVideosByPro = createAsyncThunk("Videogetslice/getVideosByPro",async ({professional_id})=>{
    console.log("professional_id in videoslice "+professional_id )
    try{
if(!professional_id ){
    console.log("Invalid professional id")
}
let response = await axios.get("http://localhost:3001/design/AllVideo",{
    params: { professional_id }

    });
console.log(response.data.data);
return response.data.data
}catch(err){
    console.log(err);
    throw err;
}
})
const slice = createSlice({
    name:"Videogetslice",
    initialState:{
        AllVideo:[],
        error:false,
        isLoading: false, 
    },
    extraReducers:(builder)=>{
        builder.addCase(getVideosByPro.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(getVideosByPro.fulfilled,(state,action)=>{
            state.AllVideo = action.payload;
            state.isLoading = false;
        }).addCase(getVideosByPro.rejected,(state,action)=>{
            state.isLoading = false;
            state.error= "Oops! something went wrong...."
        })
    }
});
export default slice.reducer;