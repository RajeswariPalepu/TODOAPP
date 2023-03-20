import { Button } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LoginIcon from '@mui/icons-material/Login';
import React from "react";
import { useNavigate } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const navigate = useNavigate();
  const redirectTosignUp = () => {
    navigate("/signup");
  };
  const redirectTosignIn = () => {
    //("/signin");
    alert("hlo");
  };
  return (
    <div className="col-lg-12">
      <div className="col-md-12">
        <div className="col-sm-12">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home" className="text-light fw-bold">
                TODO LIST
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Button
                    variant="contained"
                    //style={{ fontSize: "12px" }}
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
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}
export default Header;
