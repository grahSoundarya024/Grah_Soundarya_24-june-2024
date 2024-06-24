import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {favDesignPost} from "../redux-config/FavDesignPostslice"


const FavDesignPost = () =>{
const {id} = useParams();
// alert("FavDesignPost designImg_id" +id);
const [addFav , serAddFav] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const {AllFavPost,isLoading,error} = useSelector((store)=>store.favPost);

const dispatch = useDispatch();

try{
useEffect(()=>{
    const currentUser = sessionStorage.getItem("current_user_id");

    if(currentUser && id ){
        dispatch(favDesignPost({
            user_id: currentUser,designImg_id:id
        }))
        alert("Fav Design post successfully.."+AllFavPost)    
    }
    else {
        console.log("current User Or DesignImg_id is not avail");
    }
},[dispatch])
}catch(err){
    console.log(err);
    setErrorMessage("Internal Server problem . Please try again.");
}
}
export default FavDesignPost;

