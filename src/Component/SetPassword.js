import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import bg from '../Component/Charts/Image/bg.png';



function SetPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [message, setMessage] = useState(false)
    const [message1, setMessage1] = useState(false)
    // const [loader, setLoader] = useState(false)
    const [errors, setErrors] = useState([])
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
    const handleconfirmpassword = (event) => {
        setConfirmpassword(event.target.value)
        errors.length && errors.map((confirmpassword, key) => {
            if (confirmpassword === "confirm_passwd") {
                errors.splice(key, 1)
                setErrors(errors)
            }
        })
    }

    const handlesubmit = () => {
        const reg1 = []
        if (password === "") {
            reg1.push("password")
        }
        if (email === "") {
            reg1.push("email")
        }
        if (confirmpassword === "") {
            reg1.push("confirm_passwd")
        }
        setErrors(reg1)
        if(password===confirmpassword){

        
        axios.post("***********************8", {
            "email": email, "passwd": password, "confirm_passwd": confirmpassword
           
        },{
            headers:
            {
                '*************': '******************'
            }
        }
        ).then((res) => {
            console.log(res);
            Navigate("/")
        })
    }}
    const handlesfppopupok = () => {
        setMessage(false)
        Navigate("/login")
    }
    const handlefail = () => {
        setMessage(false)
        Navigate("/login")
    }
    return (
        <div className="p-5 text-center bg-image"
        style={{
            backgroundImage: `url(${bg})`,
            height: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        backgroundColor: "#ccb4c8"
        }}
        >
            <div>
                <section className="vh-100">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ borderRadius: "25px" }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 middle">
                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Set Password</p>
                                                <form className="mx-1 mx-md-4 Form1">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0 ">
                                                            <label className="form-label label1" >Email</label>
                                                            <input type="email" id="typeEmail" onChange={(e) => handleemail(e)} className="form-control my-3" />
                                                            {
                                                   errors.map((email) => (
                                                        email === "email" ? <p className='error'>Please Enter Email</p> : null
                                                    ))
                                                }
                                                        </div>
                                                       
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4 space1">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label stpswd" >Set Password</label>
                                                            <input type="password" id="form3Example4c" onChange={(e) => handlepassword(e)} className="form-control" />
                                                            {
                                                   errors.map((password) => (
                                                        password === "password" ? <p className='error'>Please Enter password</p> : null
                                                    ))
                                                }
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4 space1">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label cnfmpswd" >Confirm Password</label>
                                                            <input type="password" id="form3Example4c" onChange={(e) => handleconfirmpassword(e)} className="form-control" />
                                                            {
                                                   errors.map((confirmpassword) => (
                                                    confirmpassword === "confirm_passwd" ? <p className='error'>Please Enter Confirmpassword</p> : null
                                                    ))
                                                }
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 label3">
                                                        <button type="button" className="btn btn-primary btn-lg" onClick={() => handlesubmit()}>Submit</button>
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
    message ? (
        <div style={{
            display: 'block',
            width: 2726,
            padding: 1
        }} >

            <Modal.Dialog className='popup'>
                <Modal.Body>
                    <p>
                        Password changed Successfully
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handlesfppopupok()}>
                        OK
                    </Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>) : null}

</div>
<div id="pop">

{
    message1 ? (
        <div style={{
            display: 'block',
            width: 2726,
            padding: 1
        }} >

            <Modal.Dialog className='popup'>
                <Modal.Body>
                    <p>
                        Link has been expired! Please visit forgot password to send the link again!
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handlefail()}>
                        OK
                    </Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>) : null}

</div>
            </div>
        </div>
    )
}

export default SetPassword

