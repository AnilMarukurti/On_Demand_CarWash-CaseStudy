
import axios from "axios";
import React from "react";
import {useState} from "react"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
toast.configure()
const Appointment = () => {

    let navigate = useNavigate();
    
    const [order, setOrder] = useState({
        carModel: "",
        carName: "",
        contactno:"" ,
        date: "",
        orderId: '5',
        washerName: "",
        washpackId: "",
        address:""
        
    });
   

    const changeHandler = e => {
        setOrder({...order,[e.target.name]:e.target.value}); 
    }

    localStorage.setItem('userOrder', order);

    let nameEl = document.getElementById("username");
    let carEl = document.getElementById("carname");
    let carModelEl = document.getElementById("carmodel");
    let contactEl = document.getElementById("contact");
    let addressEl = document.getElementById("address");
    let dateEl = document.getElementById("date");

    const submitHandler = ()=> {
        
        axios.post('http://localhost:8084/od/addorder',order)
        .then(res => {
            if (res.status == 200){
                toast.success('Your Appointment Booked Successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                navigate('/bookedappointments')
            }
            else{
                Promise.reject() 
            }

            
            
        })
        .catch(err => alert('Something went wrong'))
    }



    
   
     return(
         <>
         
         <div className="formTop">
             <div className="formTitle">
                 <p className="c1">BOOK YOUR CAR WASH APPOINTMENT</p>
             </div>
         </div>
         <div>
             <div className="formDetails">
                
                    <div style={{marginBottom:"30px"}}>
                        <p className="formName">APPOINTMENT DETAILS</p>
                    </div>
                    <div  className="formDateTime ">
                        <input type="date" name="date" id="date"  onChange={changeHandler} />
                    </div>
                    
                    <div style={{marginBottom:"20px"}}>
                        <select className="contactDetails" id="service" name="washpackId"  onChange={changeHandler} >
                            <option className="opt1">Service Types</option>
                            <option>999</option>
                            <option>1499</option>
                            <option>1999</option>
                        </select>
                    </div>
                    <div style={{marginBottom:"30px"}}>
                        <p className="formName">CONTACT DETAILS</p>
                    </div>
                    <div >
                        <input  id="username" className="contactDetails" type="text" name="washerName"   onChange={changeHandler} 
                         placeholder="Enter Your Full Name"/><br/>
                         <input id="carname"  className="contactDetails" name="carName" type="text" placeholder="Enter Your Car Name"  
                         onChange={changeHandler}/><br/>

                         <input  id="carmodel"  className="contactDetails" type="text" name="carModel"  
                         placeholder="Enter Your Car Model"  onChange={changeHandler}/><br/>

                        <input type="text" id="contact"  className="contactDetails" name="contactno"  
                         onChange={changeHandler}
                        placeholder="Enter Phone"/><br/>
                       
                        <textarea cols="30" id="address" className="contactDetailsTextArea" rows="10" type="text" name="address"  
                          onChange={changeHandler}  
                         placeholder="Your Address"/>
                    </div>
                    
                    <input type="submit" onClick={submitHandler} className="bookBtn" value="Submit" />
                    
                
             </div>
         </div>
         </>
     )
 }
 export default Appointment