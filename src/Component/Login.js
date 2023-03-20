import React, { useEffect, useState } from 'react'
import LoadingScreen from "react-loading-screen";
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import bg from './Charts/Image/bg.png'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])
    const [loader, setLoader] = useState(false)
    const [invalidDetails, setInvalidDetails] = useState("")
    const [message1, setMessage1] = useState(false)

    
    let Navigate = useNavigate()
    const handleemail = (event) => {
        setEmail(event.target.value)
        errors.length && errors.map((email, key) => {
            if (email === "email") {
                errors.splice(key, 1)
                setErrors(errors)
            }
        })
    }

    const handlepassword = (event) => {
        setPassword(event.target.value)
        errors.length && errors.map((password, key) => {
            if (password === "password") {
                errors.splice(key, 1)
                setErrors(errors)
            }
        })
    }
    const handlesignin = () => {
        const reg1 = []
        if (password === "") {
            reg1.push("password")
        }
        if (email === "") {
            reg1.push("email")
        }
        setErrors(reg1)
        if (!reg1.length) {
            // setLoader(true)
            axios.post("*********************888", {
                "email": email, "password1": password
            }, {
                headers:
                {
                    '*************': '*******************'
                }
            }
            ).then((res) => {
                
                console.log(res);
                if (res.data) {
                    if (res.data.message==="Logged in successful!"){
                        localStorage.setItem("user",res.data.message)
                        localStorage.setItem("email",email)
                    }
                    setLoader(false)
                    Navigate("/dashboard", { state: { "email": email } })
                

                }
            }).catch((error) => {
                console.log(error);
                setInvalidDetails(error.response.data.message)

            })
        }
    }
    const handlepopupok1 = () => {
        setMessage1(false)
        Navigate("/")
    }
    return (

        <div className="p-5 text-center bg-image"
            style={{
                backgroundImage: `url(${bg})`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: "#ccb4c8"
            }} >
                 {
                loader ?
                    <LoadingScreen
                        loading={true}
                        bgColor="rgba(255,255,255,0.8)"
                        spinnerColor="#9ee5f8"
                        textColor="#676767"
                        logoSrc=""
                        text=""
                    >
                        {" "}
                    </LoadingScreen> : null
            }
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 middle">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                                            <form className="mx-1 mx-md-4 Form1">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 ">
                                                        <label className="form-label label1" >Email</label>
                                                        <input type="email" id="typeEmail" onChange={(e) => handleemail(e)}
                                                            placeholder="Enter a valid email address" className="form-control my-3" />
                                                        {
                                                            errors.map((email) => (
                                                                email === "email" ? <p className='error'>Please Enter Email</p> : null
                                                            ))
                                                        }
                                                    </div>

                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 ">
                                                        <label className="form-label pswd" >Password</label>
                                                        <input type="password" id="form3Example4c" onChange={(e) => handlepassword(e)}
                                                            placeholder="Enter password" className="form-control" />
                                                        {
                                                            errors.map((password) => (
                                                                password === "password" ? <p className='error'>Please Enter password</p> : null
                                                            ))
                                                        }
                                                    </div>


                                                </div>
                                                {

                                                    invalidDetails ? <p className='error'>{invalidDetails}</p> : null

                                                }
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 ">
                                                        <div className="d-flex justify-content-between align-items-center frgtpswd">
                                                            <a href="#!" className="text-body"><Link to="/forgotpassword">Forgot password?</Link></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">

                                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => handlesignin()}>Login</button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="pop">
               
                {
                    message1 ?(
                        <div style={{
                            display: 'block',
                            width: 2726,
                            padding: 1
                        }} >

                            <Modal.Dialog className='popup'>
                                <Modal.Body>
                                <p className='error'>
                                       Login failed....Your credentials are not valid
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={() => handlepopupok1()}>
                                        OK
                                    </Button>
                                </Modal.Footer>
                                
                            </Modal.Dialog>
                        </div> ): null}

            </div>

        </div>
    )
}

export default Login
