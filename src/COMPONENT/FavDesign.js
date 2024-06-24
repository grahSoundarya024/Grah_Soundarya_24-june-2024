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
import {Typography } from '@mui/material';


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
      const user_name = sessionStorage.getItem("user_name")
      
    return<>
      <div style={{ marginTop: "75px" }}>
        <Header />
      </div>
    {/* <div className="container-fluid border border-dark">
          <div className=" d-flex justify-content-center align-items-center" style = {{textAlign:'center',marginTop:'20px'}}>
              <Stack direction="row" spacing={2} >
      <Avatar sx={{ bgcolor: deepPurple[500] }}>{user_name ? user_name.charAt(0).toUpperCase() : 'U'}</Avatar>
    </Stack>
<div style = {{marginLeft :'10px'}}><span style={{fontSize:'30px'}}><strong>{user_name}</strong></span></div>  */}
{/* 'U' provides a fallback value of 'U' U' in this context serves as a default value to display when user_name is not available */}
{/* </div>
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
    <div className="container-fluid border border-dark">
    <div className="row border border border-success">
        {favDesign.map((fav, index) => (
            <div key={index} className="col-md-4 mb-5">
                <div className="card"> */}
                        {/* <h3>Fav Design ID: {fav.favDesign_id}</h3> no remove comment 
                          <p>User ID: {fav.user_id}</p>
                            <p>Design Image ID: {fav.designImg_id}</p> */}

                    {/* <img 
                        src={fav.design_image.image_url} 
                        alt={`Design ${fav.designImg_id}`} 
                        style={{ 
                            height: '235px', 
                            width: '356px', 
                            // boxShadow: '0 0 5px grey', 
                            cursor: 'pointer', 
                            borderRadius: '10px',
                            objectFit: 'cover'
                      }} 
                    /> 
                </div>
            </div>
        ))}
    </div>
</div>
</div>  */}


{/* <div className="container-fluid border border-dark">
        <div className="d-flex justify-content-center align-items-center" style={{ textAlign: 'center', marginTop: '20px' }}>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>
              {user_name ? user_name.charAt(0).toUpperCase() : 'U'}
            </Avatar>
            <div style={{ marginLeft: '10px' }}>
              <span style={{ fontSize: '30px' }}>
                <strong>{user_name}</strong>
              </span>
            </div>
          </Stack>
        </div>

        <Box mt={3} mb={3}>
          <h4 style={{ textAlign: 'center' }}>Favorites Collection</h4>
        </Box>

        <Grid container spacing={3}>
          {favDesign.map((fav, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="card mb-3">
                <img
                  src={fav.design_image.image_url}
                  alt={`Design ${fav.designImg_id}`}
                  style={{
                    height: '235px',
                    width: '100%',
                    borderRadius: '10px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div> */}


<div className="container-fluid border border-dark">
        <div className="d-flex justify-content-between align-items-center mb-3" style={{ textAlign: 'center', marginTop: '20px' }}>
          <div>
            {/* <Typography variant="h4">Favorites Collection</Typography> */}

            <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={14} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 0,
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

            
          </div>
          <div className="d-flex align-items-center">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>
                {user_name ? user_name.charAt(0).toUpperCase() : 'U'}
              </Avatar>
              <div style={{ marginLeft: '10px', fontSize: '30px' }}>
                <strong>{user_name}</strong>
              </div>
            </Stack>
          </div>
        </div>

        <Grid container spacing={3}>
          {favDesign.map((fav, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="card mb-3">
                <img
                  src={fav.design_image.image_url}
                  alt={`Design ${fav.designImg_id}`}
                  style={{
                    height: '235px',
                    width: '100%',
                    borderRadius: '10px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>


      
    </>
}
export default FavDesign;