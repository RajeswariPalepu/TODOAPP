import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
//import AdbIcon from '@mui/icons-material/Adb';
import Axios from 'axios';
import { useNavigate } from "react-router-dom"
import Modal from 'react-bootstrap/Modal';



// import Button from 'react-bootstrap/Button';

const settings = [];

function ResponsiveAppBar(props) {

  const [anchorElUser, setAnchorElUser] = React.useState(false);
  const [reset, setReset] = React.useState(null);
  const [flag, setFlag] = useState(false)
  const [flag1, setFlag1] = useState(false)
  let Navigate = useNavigate()
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(!anchorElUser);
  };

 
  const handleDeleteAccount = () => {
    setFlag1(true);
    setAnchorElUser(null);
  }
  const handledeletepopupok = () => {
    Axios.delete("*************************"+props.email, 

    {
        headers:
        {
            '***********': '**********************'
        }
    }
    ).then((res) => {
        // console.log(res);
  
    }).catch((error) => {
        // console.log(error);
        setFlag1(false)
         Navigate("/")
  
    })
  }
  const handleLogout = () => {
    setFlag(true); 
    setAnchorElUser(null);
  }
  const handlepopupok = () => {
    
    Axios.delete("*************"+props.email, 

  {
      headers:
      {
        '*************': '**********************'
      }
  }
  ).then((res) => {
      // console.log(res);

  }).catch((error) => {
      // console.log(error);
      setFlag(false)
       Navigate("/")

  })
   
  }
const handlepopupcancel = () =>{
    setFlag(false)
   setAnchorElUser(null);
}
const handlepopupcancel1 = () =>{
  setFlag1(false)
 setAnchorElUser(null);
}
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClose = () => setFlag(false);
  // console.log(flag)
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar className='caps'>{props.email.split("")[0]}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <Link to="/dashboard">
                  <Button onClick={handleCloseUserMenu}>Dashboard</Button>
                </Link>
              </div>
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <Link to="/viewprofile">
                  <Button onClick={handleCloseUserMenu}>View Profile</Button>
                </Link>
              </div>
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <Link to="/resetpassword">
                  <Button onClick={handleCloseUserMenu}>Reset Password</Button>
                </Link>
              </div>
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <Button onClick={handleDeleteAccount}>Delete Account</Button>
              </div>
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 position-relative l-2">
                <Button  className = "logout" onClick={handleLogout}>Logout</Button>
              </div>
              <div>  
                <Modal show={flag1} animation={false} centered="true" backdrop="static" backdropClassName="backDropClass" className="logoutClass">
                  <Modal.Body> Are you sure you want to delete account?</Modal.Body>
                  <Modal.Footer>
                    <button type="button" class="btn btn-success" onClick={handledeletepopupok}>OK</button>
                    <button type="button" class="btn btn-danger" onClick={handlepopupcancel1}>cancel</button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div>
                <Modal show={flag} animation={false} centered="true" backdrop="static" backdropClassName="backDropClass" className="logoutClass">

                  <Modal.Body> Are you sure you want to logout?</Modal.Body>
                  <Modal.Footer>
                  <button type="button" class="btn btn-success" onClick={handlepopupok}>OK</button>
                    <button type="button" class="btn btn-danger" onClick={handlepopupcancel}>cancel</button>
                  </Modal.Footer>
                </Modal>
              </div>

              {/* <div id="pop"> */}

              {/* {
                    flag && (
                        // <div style={{
                        //     display: 'block',
                        //     width: 2726,
                        //     padding: 1
                        // }} > */}


              {/* </div> */}
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;