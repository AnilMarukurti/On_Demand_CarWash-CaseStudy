import React from 'react'
import {useEffect , useState} from "react";
import "./Home.css"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Bookedappoinments() {
    const [washers, setWashers] = useState([])

   

    useEffect(()=>{
        fetch("http://localhost:8888/od/allorders").then(result =>{
            result.json().then(
                resp=>{
                setWashers(resp)
                console.log(resp)
            })
        })
    } ,[])

    function cancelOrder(){
        fetch(`"http://localhost:8084/od/cancelorder?"id=5`).then(resp=>{
            if (resp.status == 200){
                toast.success('Your Appointment Cancelled Successfully', {
                    
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        })
    }
  

   
    return (
        
        <div>
            <div>
                <h1 className="bookAppointTitle mb-5 text-center mt-5">MY WASHES</h1>
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
                                <button onClick={cancelOrder} className="cancelbtn" >Cancel Wash</button>
                            </div>
                            <hr style={{marginTop:"30px"}}/>
                        </div>
                        ))
                    }
        </div>
    )
}

export default Bookedappoinments
