import { configureStore } from "@reduxjs/toolkit";
import Professionalslice from "./Professionalslice";
import ByRoomTypeslice from "./ByRoomTypeslice";
import FavDesignslice from "./FavDesignslice";
import RoomTypePostslice from "./RoomTypePostslice";
import DesignPostslice from "./DesignPostslice";
import  getVideosByPro  from "./Videogetslice";
// import FavDesignPostslice from "./FavDesignPostslice";
import FavDesignPostslice from "./FavDesignPostslice";


const store = configureStore({
    reducer:{
        Professionals:Professionalslice,
        AllDesigns:ByRoomTypeslice,
        AllFavDesigns:FavDesignslice,
        AllVideo:RoomTypePostslice,
        AllDesignP:DesignPostslice,
        Allvideos:getVideosByPro,
        favPost:FavDesignPostslice
}
});
export default store;