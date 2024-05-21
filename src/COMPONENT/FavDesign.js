// import { useNavigate, useParams } from "react-router-dom";
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepPurple } from '@mui/material/colors';
// import Header from "./Header";
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { useDispatch, useSelector } from "react-redux";
// import {allFavouriteList} from "../redux-config/FavDesignslice";


// const FavDesign = ()=>{
//     const {id} = useParams();
//     // alert("Design Image ID:"+id);
//     const [favDesign, setFavDesign] = React.useState([]);
//     const { AllFavDesign, isLoading, error } = useSelector((store) => store.AllFavDesigns);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
  
//     React.useEffect(() => {
//         const currentUser = sessionStorage.getItem('current_user_id');
//         console.log("Sending request with user_id:", currentUser);
//         if (currentUser) {

//         dispatch(allFavouriteList({ user_id: currentUser }));
//         } else {
//             console.error("currentUser is not available");
//         }   
//     }, [dispatch]);
//     React.useEffect(()=>{
//         if(!isLoading && !error && AllFavDesign){
//             setFavDesign(AllFavDesign);
//         }
//     },[AllFavDesign,isLoading,error]);
  
//     const Item = styled(Paper)(({ theme }) => ({
//         ...theme.typography.body2,
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         height: 60,
//         lineHeight: '60px',
//       }));
      
//       const lightTheme = createTheme({ palette: { mode: 'light' } });
      
//     return<>
//     <Header/>
//     <div className="container border border-dark">
//         <div className="row d-flex justify-content-center align-items-center">
//               <Stack direction="row" spacing={2}>
//       <Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>
//     </Stack>
// <div><span style={{fontSize:'30px'}}><strong>Rohit123@gmail.com</strong></span></div>
// </div>
// <Grid container spacing={2}>
//       {[lightTheme].map((theme, index) => (
//         <Grid item xs={6} key={index}>
//           <ThemeProvider theme={theme}>
//             <Box
//               sx={{
//                 p: 2,
//                 borderRadius: 2,
//                 bgcolor: 'background.default',
//                 display: 'grid',
//                 gridTemplateColumns: { md: '1fr 1fr' },
//                 gap: 2,
//               }}
//             >
//             <Item className = "d-flex justify-content-center align-items-center" >
//               <h4 >Favorites Collection</h4>
//             </Item>
//             </Box>
//           </ThemeProvider>
//         </Grid>
//       ))}
//     </Grid>
//     <div className="container border border-dark">
//         <div className="row border border-dark">
//     {favDesign.map((fav, index) => (
//             <div key={index} className="col-md-4 mb-4 ">
//       <div className="card ">
//       {/* <h3>Fav Design ID: {fav.favDesign_id}</h3>
//       <p>User ID: {fav.user_id}</p>
//       <p>Design Image ID: {fav.designImg_id}</p> */}
//       <img src={fav.design_image.image_url} alt={`Design ${fav.designImg_id}`} style={{ height: '170%', width: '103%', boxShadow: '0 0 5px grey', cursor: 'pointer',borderRadius:'20px'}}/> 
//       </div>

//     </div>
      
//     ))}
//     </div>

//     </div>
// </div>
//     </>
// }
// export default FavDesign;
import { useNavigate, useParams } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import Header from "./Header";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import {allFavouriteList} from "../redux-config/FavDesignslice";

const FavDesign = ()=>{
    const {id} = useParams();
    // alert("Design Image ID:"+id);
    const [favDesign, setFavDesign] = React.useState([]);
    const { AllFavDesign, isLoading, error } = useSelector((store) => store.AllFavDesigns);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    React.useEffect(() => {
        const currentUser = sessionStorage.getItem('current_user_id');
        console.log("Sending request with user_id:", currentUser);
        if (currentUser) {

        dispatch(allFavouriteList({ user_id: currentUser }));
        } else {
            console.error("currentUser is not available");
        }   
    }, [dispatch]);
    React.useEffect(()=>{
        if(!isLoading && !error && AllFavDesign){
            setFavDesign(AllFavDesign);
        }
    },[AllFavDesign,isLoading,error]);
  
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
      }));
      
      const lightTheme = createTheme({ palette: { mode: 'light' } });
      
    return<>
    <Header/>
    <div className="container border border-dark">
        <div className="row d-flex justify-content-center align-items-center">
              <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>
    </Stack>
<div><span style={{fontSize:'30px'}}><strong>Rohit123@gmail.com</strong></span></div>
</div>
<Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
            <Item className = "d-flex justify-content-center align-items-center" >
              <h4 >Favorites Collection</h4>
            </Item>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    <div className="container border border-dark">
        <div className="row border border-dark">
    {favDesign.map((fav, index) => (
            <div key={index} className="col-md-4 mb-4 ">
      <div className="card ">
      {/* <h3>Fav Design ID: {fav.favDesign_id}</h3>
      <p>User ID: {fav.user_id}</p>
      <p>Design Image ID: {fav.designImg_id}</p> */}
      <img src={fav.design_image.image_url} alt={`Design ${fav.designImg_id}`} style={{ height: '170%', width: '103%', boxShadow: '0 0 5px grey', cursor: 'pointer',borderRadius:'20px'}}/> 
      </div>

    </div>
      
    ))}
    </div>

    </div>
</div>
    </>
}
export default FavDesign;