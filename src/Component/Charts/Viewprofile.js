import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import ResponsiveAppBar from './Header';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import bg from '../Charts/Image/bg.png'



function Viewprofile() {
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState(false)
    const [message1, setMessage1] = useState(false)
    const [email, setEmail] = useState("");
    const [reg, setReg] = useState([])
    const [invalidDetails, setInvalidDetails] = useState("")

useEffect(()=>{
    let emails = localStorage.getItem("email") 
    setEmail(emails)
    axios.get(`*******************`,  {   
    headers: 
    { 
        '**********': '************' 
    } 
    }).then((res) => {
        console.log(res.data);
        if (res?.data) {
            setUserName(res.data.username)
        }
    }).catch((error) => {
        console.log(error);
    })
},[])



    let Navigate = useNavigate()
    const handleemail = (event) => {
        setEmail(event.target.value)
        reg.length && reg.map((email, key) => {
            if (email === "email") {
                reg.splice(key, 1)
                setReg(reg)
            }
        })
    }
    const handleuserName = (event) => {
        setUserName(event.target.value)
        reg.length && reg.map((userName, key) => {
            if (userName === "userName") {
                reg.splice(key, 1)
                setReg(reg)
            }
        })
    }

    const handleupdate = async () => {
        const reg1 = []
        if (userName === "") {
            reg1.push("userName")
        }
        if (email === "") {
            reg1.push("email")
        }
        setReg(reg1)
        if (!reg1.length) {
       
        await axios.put(`*******************`, { 

        "username": userName 

    }, { 

        headers: 

        { 

            '************': '**************' 

        } 
        }).then((res) => {
            if (res?.data?.message) {
               
                setMessage(true) 
            }
        }).catch((error) => {
            console.log(error);
            setMessage1(true)
        })
        }
    }
    const handlePropopupok = () => {
        setMessage(false)
        Navigate("/viewprofile") 
        axios.get(`**************`,  {   
            headers: 
            { 
                '*****': '************' 
            } 
            }).then((res) => {
                console.log(res.data);
                if (res?.data) {
                    setUserName(res.data.username)
                }
            })
    }
    const handlefail = () => {
        setMessage1(false)
        Navigate("/viewprofile") 
    }
    return (
        <>
         {
          localStorage.getItem("user").length>0 ? ( 
       
        <div className="p-5 text-center bg-image"
            style={{
                backgroundImage: `url(${bg})`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: "#ccb4c8"
            }}
        >
           <ResponsiveAppBar email={email}/>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 middle">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Profile Details</p>
                                            <form className="mx-1 mx-md-4 Form1">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 label4">
                                                        <label className="form-label label1" >Email</label>
                                                        <input type="email" value = {email} id="typeEmail" onChange={(e) => handleemail(e)} className="form-control my-3" disabled/>
                                                        {
                                                            reg.map((email) => (
                                                                email === "email" ? <p className='error'>Please Enter Email</p> : null
                                                            ))
                                                        }
                                                    </div>

                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 ">
                                                        <label className="form-label Reg">User Name</label>
                                                        <input type="text" id="form3Example1c" value = {userName} onChange={(e) => handleuserName(e)} className="form-control" />
                                                        {
                                                            reg.map((userName) => (
                                                                userName === "userName" ? <p className='error'>Please Enter userName</p> : null
                                                            ))
                                                        }
                                                    </div>

                                                </div>
                                               
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => handleupdate()}>Update</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
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
                                   username updated successfully
                                   </p>
                               </Modal.Body>
                               <Modal.Footer>
                                   <Button variant="primary" onClick={() => handlePropopupok()}>
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
                                  Email doesn't Exist
                                   </p>
                               </Modal.Body>
                               <Modal.Footer>
                                   <Button variant="primary" onClick={() => handlefail()}>
                                       OK
                                   </Button>
                               </Modal.Footer>
                           </Modal.Dialog>
                       </div> ): null}

           </div>
        </div >
         ):Navigate("/login")}
         </>
    )
}

export default Viewprofile
