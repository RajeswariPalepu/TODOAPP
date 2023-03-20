import React,{useEffect} from 'react'
// import { Link } from "react-router-dom"
import homeImage from '../Component/Charts/Image/homeImage.jpg'
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom"
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "@mui/material";

function Home() {
    useEffect(()=>{
       if(localStorage.getItem("user")){
        localStorage.setItem("user","")
       }
    },[])
    let Navigate = useNavigate()
    const redirectTosignUp = () => {
        Navigate("/register");
      };
      const redirectTosignIn = () => {
        Navigate("/login");
      };
    
    return (
        <div
            className="p-5 text-center bg-image"
            style={{
                 backgroundImage: `url(${homeImage})`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            
            {/* <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white content-right" >
                <Link to="/register">
                        <a className="navbar-brand" href="#"><h1>Register</h1></a>
                    </Link>
                    <Link to="/login">
                        <a className="navbar-brand" href="#"><h1>Login</h1></a>
                    </Link>
                </nav>
            </header> */}
            <div>
      <div>
        <div >
          <Navbar bg="light" expand="lg">
           
              <Navbar.Brand href="#home" className="text-light fw-bold">
                TODO LIST
              </Navbar.Brand>
              {/* <Navbar.Toggle /> */}
          <div className='homenav'>
                  <Button
                    variant="contained"
                    //style={{ fontSize: "12px" }}
                    className='regbtnH'
                    onClick={redirectTosignUp}
                    startIcon={<HowToRegIcon />}
                  >
                    Register
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<LoginIcon />}
                    className="me-5 ms-1"
                    // style={{ fontSize: "12px" }}
                    onClick={redirectTosignIn}
                  >
                    Login
                  </Button>
                  </div>
           
          </Navbar>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Home
