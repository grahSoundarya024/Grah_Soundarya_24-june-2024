import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosByPro } from "../redux-config/Videogetslice";
import { Box, Button, Typography, CardContent} from "@mui/material";
import {  Modal, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Videoget = () => {
    const { id } = useParams();
    console.log("pro_id in VideosCom " + id)
    const [video, setVideo] = useState([]);
    const { AllVideo, isLoading, error } = useSelector((store) => store.Allvideos);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!id) {
            console.log("professional_id is not found .");
        }
        dispatch(getVideosByPro({ professional_id: id }))
            .then(() => console.log("data fatch successfully..."))
            .catch((err) => console.log("error in fatching data ", err));
    }, [dispatch, id]);

    useEffect(() => {
        if (!isLoading && !error && AllVideo) {
            setVideo(AllVideo);
        }
    }, [AllVideo, isLoading, error]);
    const handleFullScreen = () => {
      };
      const handleVideoClick = (design_id) => {
        setVideo(design_id);
        // setOpenModal(true);
      };
    
    
 return <>
 <div className="container text-center py-4">
       <Typography variant="h4" style={{ color: "#D8AD3D", marginBottom: "10px" }}>
     Interior Design Videos
   </Typography>
   <div className="row">
     {video.map((video, index) => (
      <div key={video.design_id} className="col-md-5 mb-5">
        <Box className="embed-responsive embed-responsive-16by9"
             style={{ width: "100%", height: "100%", borderRadius: "20px", overflow: "hidden" }}>
          <iframe
            src={video.video}
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
      </Box>
        <Typography varient="h4" component="div" align="center"  
        style={{ color: "#D8AD3D", marginTop: "10px" }} >              
        {video.title}
      </Typography>
    </div>

      
    ))}
  </div>
</div>

</>
}
export default Videoget;

