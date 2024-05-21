// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Button, styled } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import InfoIcon from '@mui/icons-material/Info';

// const MenuButton = styled(Button)(({ theme }) => ({
//     color: 'black',
//     marginLeft: theme.spacing(3),
//     marginRight: theme.spacing(3),
//     '&:hover': {
//       color: '#D89619',
//     },
//   }));
  
//   const SubHeaderAppBar = styled(AppBar)(({ theme }) => ({
//     backgroundColor: 'white',
//     fontFamily: 'serif',
//     height: '40px',
//     justifyContent: 'center',
//     marginTop: theme.spacing(1),
//   }));
  
// const SubHeader = ()=> {
//   const navigate = useNavigate();

//   return (
//     <SubHeaderAppBar position="static">
//       <Toolbar>
//         <MenuButton startIcon={<HomeIcon />} onClick={() => navigate('/')}>
//           Designs
//         </MenuButton>
//         <MenuButton startIcon={<AccountCircleIcon />} onClick={() => navigate('/portfolio')}>
//           Designers
//         </MenuButton>
//         <MenuButton startIcon={<InfoIcon />}>
//           Product
//         </MenuButton>
//       </Toolbar>
//     </SubHeaderAppBar>
//   );
// }
// export default  SubHeader;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, styled, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import Professional from './Professional';
const MenuButton = styled(Button)(({ theme }) => ({
  color: 'black',
  marginLeft: theme.spacing(18),
  marginRight: theme.spacing(18),
  '&:hover': {
    color: '#D89619',
  },
}));

const SubHeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  fontFamily: 'serif',
  height: '40px',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexGrow: 1,
  '& > *': {
    margin: theme.spacing(1),
  },
}));

export default function SubHeader() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SubHeaderAppBar position="static">
        <Toolbar sx={{ minHeight: '40px' }}>
          <CenteredBox>
            <MenuButton startIcon={<HomeIcon />} onClick={() => navigate('/')}>
              Designs
            </MenuButton>
            <MenuButton startIcon={<AccountCircleIcon />} onClick={() => navigate('/professionals')}>
              Designers
            </MenuButton>
            <MenuButton startIcon={<StoreIcon />}>
              Product
            </MenuButton>
          </CenteredBox>
        </Toolbar>
      </SubHeaderAppBar>
    </Box>
  );
}
