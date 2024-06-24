
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import IconButton from '@mui/material/IconButton';
// // import Button from '@mui/material/Button';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import HomeIcon from '@mui/icons-material/Home';
// // import InfoIcon from '@mui/icons-material/Info';
// // import ContactMailIcon from '@mui/icons-material/ContactMail';
// // import NotificationsIcon from '@mui/icons-material/Notifications';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import OrdersIcon from '@mui/icons-material/ShoppingCart';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import CartIcon from '@mui/icons-material/ShoppingCart';
// // import LogoutIcon from '@mui/icons-material/Logout';
// // import SearchIcon from '@mui/icons-material/Search';
// // import { styled, alpha } from '@mui/material/styles';
// // import { Box, InputBase } from '@mui/material';

// // const Search = styled('div')(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   height: '45px', 
// //   width: '25%', 
// //   borderRadius: '50px',
// //   boxShadow: '0 0 5px 1px gray',
// //   padding: '0 20px',
// //   color: 'gray',
// //   fontSize: 'medium',
// //   backgroundColor: 'white',
// //   marginLeft: theme.spacing(3),
// //   marginRight: theme.spacing(3),
// // }));

// // const SearchInput = styled(InputBase)(({ theme }) => ({
// //   border: 'none',
// //   height: '100%',
// //   width: '90%',
// //   color: 'inherit',
// // }));

// // const SearchButton = styled('button')(({ theme }) => ({
// //   border: 'none',
// //   background: 'none',
// //   cursor: 'pointer',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   color: '#5d5b5b',
// //   '&:hover': {
// //     color: '#D89619',
// //   },
// // }));

// // const StyledAppBar = styled(AppBar)(({ theme }) => ({
// //   backgroundColor: 'white',
// //   fontFamily: 'serif',
// //   position: '-webkit-sticky',
// //   position: 'sticky',
// //   top: 0,
// //   width: '100%',
// //   zIndex: theme.zIndex.appBar + 1,
// //   '& .MuiToolbar-root': {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //   },
// // }));

// // const MenuButton = styled(Button)(({ theme }) => ({
// //   color: 'black',
// //   marginLeft: theme.spacing(1),
// //   marginRight: theme.spacing(1),
// //   '&:hover': {
// //     color: '#D89619',
// //   },
// // }));

// // const NotificationIconButton = styled(IconButton)(({ theme }) => ({
// //   color: 'black',
// //   marginLeft: theme.spacing(1),
// //   marginRight: theme.spacing(1),
// //   '&:hover': {
// //     color: '#D89619',
// //   },
// // }));

// // const MenuIconButton = styled(IconButton)(({ theme }) => ({
// //   color: 'black',
// //   marginLeft: theme.spacing(1),
// //   marginRight: theme.spacing(1),
// //   '&:hover': {
// //     color: '#D89619',
// //   },
// // }));

// // const Header = () => {
// //   const [anchorEl, setAnchorEl] = useState(null);
// //   const [roomType, setRoomType] = useState('');
// //   const user_id = sessionStorage.getItem("current_user_id");
// //   const navigate = useNavigate();

// //   const isProActive = (user_id) => {
// //     navigate(`/IsProActive/${user_id}`)
// //   };

// //   const handleSearchInputChange = (event) => {
// //     setRoomType(event.target.value);
// //   };

// //   const handleSearch = () => {
// //     navigate(`/search/${roomType}`)
// //   };

// //   const handleMenu = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };
// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //       <StyledAppBar position="static">
// //         <Toolbar>
// //           <Typography variant="h6" noWrap sx={{ color: 'black' }}>
// //             Project Header Logo
// //           </Typography>
// //           <Search>
// //             <SearchInput
// //               placeholder="Search"
// //               inputProps={{ 'aria-label': 'search' }}
// //               value={roomType}
// //               onChange={handleSearchInputChange}
// //             />
// //             <SearchButton onClick={handleSearch}>
// //               <SearchIcon />
// //             </SearchButton>
// //           </Search>
// //           <Box sx={{ flexGrow: 1 }} />
// //           <MenuButton onClick={() => navigate("/home")} startIcon={<HomeIcon sx={{ color: '#D89619' }} />} sx={{ color: '#D89619' }}>
// //             Home
// //           </MenuButton>
// //           <MenuButton onClick={() => navigate("/about")} startIcon={<InfoIcon />}>
// //             About
// //           </MenuButton>
// //           <MenuButton onClick={() => navigate("/contact")} startIcon={<ContactMailIcon />}>
// //             Contact Us
// //           </MenuButton>
// //           <NotificationIconButton onClick={() => navigate("/applicationForm")}>
// //             <NotificationsIcon />
// //           </NotificationIconButton>
// //           <Button onClick={() => isProActive(user_id)}
// //             variant="contained"
// //             color="primary"
// //             sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: '#D89619' } }}
// //           >
// //             Continue as Professional
// //           </Button>
// //           <MenuIconButton onClick={handleMenu}>
// //             <MenuIcon />
// //           </MenuIconButton>
// //         </Toolbar>
// //       </StyledAppBar>
// //       <Menu
// //         id="primary-search-account-menu"
// //         anchorEl={anchorEl}
// //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
// //         keepMounted
// //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
// //         open={Boolean(anchorEl)}
// //         onClose={handleClose}
// //       >
// //         <MenuItem onClick={handleClose}>
// //           <ListItemIcon>
// //             <AccountCircleIcon fontSize="small" />
// //           </ListItemIcon>
// //           My Profile
// //         </MenuItem>
// //         <MenuItem onClick={handleClose}>
// //           <ListItemIcon>
// //             <OrdersIcon fontSize="small" />
// //           </ListItemIcon>
// //           Orders
// //         </MenuItem>
// //         <MenuItem onClick={() => navigate("/favourites")}>
// //           <ListItemIcon fontSize="small">
// //             <FavoriteIcon />
// //           </ListItemIcon>
// //           Favourite
// //         </MenuItem>
// //         <MenuItem onClick={handleClose}>
// //           <ListItemIcon>
// //             <CartIcon fontSize="small" />
// //           </ListItemIcon>
// //           Cart
// //         </MenuItem>
// //         <MenuItem onClick={handleClose}>
// //           <ListItemIcon>
// //             <LogoutIcon fontSize="small" />
// //           </ListItemIcon>
// //           Log Out
// //         </MenuItem>
// //       </Menu>
// //     </Box>
// //   );
// // }

// // export default Header; //perfect 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OrdersIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '45px', 
  width: '25%', 
  borderRadius: '50px',
  boxShadow: '0 0 5px 1px gray',
  padding: '0 20px',
  color: 'gray',
  fontSize: 'medium',
  backgroundColor: 'white',
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  border: 'none',
  height: '100%',
  width: '90%',
  color: 'inherit',
}));

const SearchButton = styled('button')(({ theme }) => ({
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#5d5b5b',
  '&:hover': {
    color: '#D89619',
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  fontFamily: 'serif',
  position: 'fixed', // Changed from 'sticky' to 'fixed'
  top: 0,
  width: '100%',
  zIndex: theme.zIndex.appBar + 1,
  '& .MuiToolbar-root': {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const MenuButton = styled(Button)(({ theme }) => ({
  color: 'black',
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  '&:hover': {
    color: '#D89619',
  },
}));

const NotificationIconButton = styled(IconButton)(({ theme }) => ({
  color: 'black',
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  '&:hover': {
    color: '#D89619',
  },
}));

const MenuIconButton = styled(IconButton)(({ theme }) => ({
  color: 'black',
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  '&:hover': {
    color: '#D89619',
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [roomType, setRoomType] = useState('');
  const user_id = sessionStorage.getItem("current_user_id");
  const navigate = useNavigate();

  const isProActive = (user_id) => {
    navigate(`/IsProActive/${user_id}`)
  };

  const handleSearchInputChange = (event) => {
    setRoomType(event.target.value);
  };

  // const handleSearch = () => {
  //   navigate(`/search`);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ color: 'black' }}>
            Project Header Logo
          </Typography>
          <Search>
            <SearchInput
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              value={roomType}
              onChange={handleSearchInputChange}
            />
            <SearchButton onClick={()=>navigate("/search" , {state : roomType})}>
              <SearchIcon />
            </SearchButton>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <MenuButton onClick={() => navigate("/home")} startIcon={<HomeIcon sx={{ color: '#D89619' }} />} sx={{ color: '#D89619' }}>
            Home
          </MenuButton>
          <MenuButton onClick={() => navigate("/about")} startIcon={<InfoIcon />}>
            About
          </MenuButton>
          <MenuButton onClick={() => navigate("/contact")} startIcon={<ContactMailIcon />}>
            Contact Us
          </MenuButton>
          <NotificationIconButton onClick={() => navigate("/applicationForm")}>
            <NotificationsIcon />
          </NotificationIconButton>
          <Button onClick={() => isProActive(user_id)}
            variant="contained"
            color="primary"
            sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: '#D89619' } }}
          >
            Continue as Professional
          </Button>
          <MenuIconButton onClick={handleMenu}>
            <MenuIcon />
          </MenuIconButton>
        </Toolbar>
      </StyledAppBar>
      <Menu
        id="primary-search-account-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <OrdersIcon fontSize="small" />
          </ListItemIcon>
          Orders
        </MenuItem>
        <MenuItem onClick={() => navigate("/favouritesd")}>
          <ListItemIcon fontSize="small">
            <FavoriteIcon />
          </ListItemIcon>
          Favourite
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CartIcon fontSize="small" />
          </ListItemIcon>
          Cart
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Log Out
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Header;
