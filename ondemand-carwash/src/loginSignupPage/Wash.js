import React from 'react'
import { useState, useEffect } from 'react'
import './Navbar.css'
import './Home.css';
import { useNavigate } from 'react-router-dom';


const Wash = () => {
    let navigate = useNavigate()
    
    const [washers, setWashers] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8888/od/allorders").then(result =>{
            result.json().then(
                resp=>{
                setWashers(resp)
                
            })
        })
    } ,[])

    return (
        <div>
            <div>
                <h1 className="bookAppointTitle mb-5 text-center mt-5">ALL WASHES</h1>
            </div>
            
            { washers.map((emp, ind)=>(
                            <div className="bk2 ml-5" >
                            
                            <div>
                                <p className="bk3">Name : {emp.washerName}</p>
                                <p className="bk3">Car Name : {emp.carName}</p>
                                <p className="bk3">Car Model: {emp.carModel}</p>
                                <p className="bk3">Appointment Date : {emp.date}</p>
                                <p className="bk3">Wash Pack: {emp.washpackId}</p>
                                <p className="bk3">Contact-No : {emp.contactno}</p>
                                <p className="bk3">Address: {emp.address}</p>
                                <button className="bookBtn2" >Confirm Appointment</button>
                            </div>
                            <hr style={{marginTop:"30px"}}/>
                        </div>
                        ))
                    }
            
        </div>
    )
}

export default Wash
