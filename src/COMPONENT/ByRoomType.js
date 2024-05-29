import { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { designByRoomType } from "../redux-config/ByRoomTypeslice";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SendIcon from '@mui/icons-material/Send';
import { Tooltip } from '@mui/material';
import { useNavigate } from "react-router-dom";
import SubHeader from "./subHeader";


const ByRoomType = () => {
  const { roomType_id, id } = useParams(); // hook for accessing roomType_id from URL parameters
  const [AllDesign, setAllDesign] = useState([]);
  const { AllDesignList, isLoading, error } = useSelector((store) => store.AllDesigns);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!roomType_id || !id) {
      console.error("roomType_id or id is missing.");
      return;
    }

    dispatch(designByRoomType({ professional_id: id, roomType_id }))
      .then(() => console.log("data fetched successfully..."))
      .catch((err) => console.error("error in fetching data ", err));
  }, [dispatch, id, roomType_id]);

  useEffect(() => {
    if (!isLoading && !error && AllDesignList) {
      setAllDesign(AllDesignList);
    }
  }, [AllDesignList, isLoading, error]);

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
      borderRadius: '50%',
      padding: '2px',
    },
    '& .MuiRating-iconHover': {
      color: '#F60000',
    },
  });

  const styles = {
    circleHover: {
      borderRadius: '50%',
      padding: '2px',
      display: 'inline-block',
      width: '32px',
      height: '32px',
      backgroundColor: 'white',
      textAlign: 'center',
      lineHeight: '20px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      position: 'relative',
      // border:'2px solid red'
    },
    tooltip: {
      visibility: 'hidden',
      width: '80px',
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      borderRadius: '6px',
      padding: '5px',
      position: 'absolute',
      zIndex: '1',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      opacity: '0',
      transition: 'opacity 0.3s',
    },
    circleHoverHover: {
      backgroundColor: '#f0f0f0',
    },
    circleHoverHoverTooltip: {
      visibility: 'visible',
      opacity: '1',
    },
    ratingSpacing: {
      marginRight: '10px',
    },
  };

//   const moveToFavDesign = (designImg_id) => {
//     alert("Design Id" + designImg_id);
//     navigate(`/home/designImg_id/${designImg_id}`);
// }
  const moveToFavDesignPost = (designImg_id) => {
    alert("Design Id" + designImg_id);
    navigate(`/home/designImg_id/${designImg_id}`);
}


  return (
    <>
      <div style={{ marginTop: '75px' }}>
      <Header />
    </div>
    {/* <SubHeader/> */}
    
      <div className="container-fluid p-3">
        {AllDesign.map((design, index) => (
          <div key={index} className="mb-4">
            {/* <h3>{design.roomType}</h3> */}
            {/* <p style = {{textAlign:"center"}} className="text-blk heading">{design.roomType}</p> */}
      <div className="row">
              {design.image_urls.map((img, imgIndex) => (
                // console.log("Object print", design.designImg_id[imgIndex]),
                <div key={imgIndex} className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src={img}
                      //  onClick={() => moveToFavDesign({ imgIndex })}
                      className="card-img-top"
                      alt={design.roomType}
                      style={{ height: '400px', width: '100%', boxShadow: '0 0 5px grey', cursor: 'pointer' }}
                    />
                  </div>
                  <Box component="fieldset" borderColor="transparent" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                    <div
                      className="circle-hover"
                      style={{ ...styles.circleHover, ...styles.ratingSpacing }}
                    >
                      <Tooltip title="Like" arrow placement="top" >

                        <StyledRating
                          name="customized-color"
                          defaultValue={0}
                          precision={1}
                          max={1}
                          icon={<FavoriteIcon />}
                          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        />
                      </Tooltip>
                      <span className="tooltip" style={styles.tooltip}>Favorite</span>
                    </div>
                    <div
                      className="circle-hover"
                      style={{ ...styles.circleHover, ...styles.ratingSpacing }}
                    >
                      <Tooltip title="Favourite" arrow placement="top" >

                        <Rating
                          name="customized-color"
                          defaultValue={0}
                          precision={1}
                          max={1}
                          icon={<BookmarkIcon />}
                          emptyIcon={<BookmarkIcon fontSize="inherit" />}
                          onClick={() => moveToFavDesignPost(design.designImg_id[imgIndex])}
                        />
                      </Tooltip>
                      <span className="tooltip" style={styles.tooltip}></span>
                    </div>
                    <div
                      className="circle-hover"
                      style={styles.circleHover}
                    >
              <Tooltip title="Send" arrow placement="top" >
                        <StyledRating
                          name="customized-color"
                          defaultValue={0}
                          precision={1}
                          max={1}
                          icon={<SendIcon style={{ color: 'green' }} />}
                          emptyIcon={<SendIcon fontSize="inherit" />}
                        />
                      </Tooltip>
              <span className="tooltip" style={styles.tooltip}>Send</span>
            </div>
                  </Box>
              </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ByRoomType;

