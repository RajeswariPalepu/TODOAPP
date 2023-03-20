import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import LoadingScreen from "react-loading-screen";
import Button from 'react-bootstrap/Button';
import bg from './Charts/Image/bg.png'

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [errors, setErrors] = useState([])
    const [invalidDetails, setInvalidDetails] = useState("")
    const [message, setMessage] = useState(false)
    const [message1, setMessage1] = useState(false)
    const [loader, setLoader] = useState(false)
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


    const handlesubmit = async () => {
        const reg1 = []
        setLoader(true)
        if (email === "") {
            reg1.push("email")
        }

        setErrors(reg1)
        if (!reg1.length) {

            await axios.post("****************", {
                "email": email
            }, {
                headers:
                {
                    // "Access-Control-Allow-Origin": "*",
                    '*****': '**********'
                }
            }).then((res) => {
                if (res?.data?.message) {
                    
                    setLoader(false)

                    setMessage(true)
                }
            }).catch((error) => {
                setLoader(false)

                    setMessage1(true)

            })
            
           
           
        }

    }
    const handlepopupok = () => {
        setMessage(false)
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
            }}
        >
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
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Forgot Password</p>
                                            <form className="mx-1 mx-md-4 Form1">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 label4">
                                                        <label className="form-label label1" >Email</label>
                                                        <input type="email" id="typeEmail" onChange={(e) => handleemail(e)} className="form-control my-3" required />
                                                        {
                                                            errors.map((email) => (
                                                                email === "email" ? <p className='error'>Please Enter Email</p> : null
                                                            ))
                                                        }
                                                    </div>

                                                </div>

                                                {

                                                    invalidDetails ? <p className='error'>Please Enter Valid details</p> : null

                                                }
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
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
                   message ?(
                       <div style={{
                           display: 'block',
                           width: 2726,
                           padding: 1
                       }} >

                           <Modal.Dialog className='popup'>
                               <Modal.Body>
                                   <p>
                  mail sent to provided mail. Please check the mail
                                   </p>
                               </Modal.Body>
                               <Modal.Footer>
                                   <Button variant="primary" onClick={() => handlepopupok()}>
                                       OK
                                   </Button>
                               </Modal.Footer>
                               
                           </Modal.Dialog>
                       </div> ): null}

           </div>
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
                                    <p>
                                    Provided email is not active! Please register with the email first
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={() => handlepopupok()}>
                                        OK
                                    </Button>
                                </Modal.Footer>
                                
                            </Modal.Dialog>
                        </div> ): null}

            </div>
        </div>
    )
}

export default ForgotPassword
