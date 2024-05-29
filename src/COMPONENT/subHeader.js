// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Button, styled, Box } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import StoreIcon from '@mui/icons-material/Store';
// import Professional from './Professional';
// const MenuButton = styled(Button)(({ theme }) => ({
//   color: 'black',
//   marginLeft: theme.spacing(18),
//   marginRight: theme.spacing(18),
//   '&:hover': {
//     color: '#D89619',
//   },
// }));

// const SubHeaderAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: 'white',
//   fontFamily: 'serif',
//   height: '40px',
//   justifyContent: 'center',
//   marginTop: theme.spacing(2),
// }));

// const CenteredBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   flexGrow: 1,
//   '& > *': {
//     margin: theme.spacing(1),
//   },
// }));

// export default function SubHeader() {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <SubHeaderAppBar position="static">
//         <Toolbar sx={{ minHeight: '40px' }}>
//           <CenteredBox>
//             <MenuButton startIcon={<HomeIcon />} onClick={() => navigate('/')}>
//               Designs
//             </MenuButton>
//             <MenuButton startIcon={<AccountCircleIcon />} onClick={() => navigate('/professionals')}>
//               Designers
//             </MenuButton>
//             <MenuButton startIcon={<StoreIcon />}>
//               Product
//             </MenuButton>
//           </CenteredBox>
//         </Toolbar>
//       </SubHeaderAppBar>
//     </Box>
//   );
// }
//without sticky



 //sticky with background container
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, styled, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';

const MenuButton = styled(Button)(({ theme }) => ({
  color: 'black',
  marginLeft: theme.spacing(18),
  marginRight: theme.spacing(18),
  '&:hover': {
    color: '#D89619',
  },
}));

const WhiteContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  position: 'fixed',
  top: '64px', // Adjust based on the height of your Header
  width: '100%',
  height: '60px', // Slightly larger than the SubHeader height
  zIndex: theme.zIndex.appBar, // Below the SubHeaderAppBar
}));

const SubHeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent', // Make transparent to show the white background
  fontFamily: 'serif',
  height: '40px',
  justifyContent: 'center',
  position: 'fixed', // Make it fixed
  top: '74px', // Adjust based on the height of your Header
  width: '100%',
  zIndex: theme.zIndex.appBar + 1, // Above the WhiteContainer
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
      <WhiteContainer />
      <SubHeaderAppBar>
        <Toolbar sx={{ minHeight: '40px' }}>
          <CenteredBox>
            <MenuButton startIcon={<HomeIcon />}>
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
      <Box sx={{ marginTop: '80px', marginBottom: '120px' }} /> {/* Adjust spacing below SubHeader */}
    </Box>
  );
}



