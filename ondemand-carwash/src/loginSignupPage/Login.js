import React, {useEffect, useState} from 'react';
import './Navbar.css'
import './Home.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate()
    
    const [washers, setWashers] = useState([])

    /*const changeHandler = e => {
        setWasher({...washer,[e.target.name]:e.target.value}); 
        
    } */

    const [name, setname] = useState("");
    const [password, setPassword] = useState("");

    


    useEffect(()=>{
        fetch("http://localhost:8888/od/allorders").then(result =>{
            result.json().then(
                resp=>{
                setWashers(resp)
                
            })
        })
    } ,[])

   async function log()
    {
        console.log(name,password)
        /*let item = {name,password};
        let result=await fetch("http://localhost:8083/wash/allwashers",{
            body:JSON.stringify(item)
        });
        result =await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))*/
        navigate('/washer')




    } 



  

   
    return (
        
        
        <div>
            <div className='col-sm-6 offset-sm-3 mt-5'>
            
                <input placeholder="Enter UserName" name="email" className='form-control' type="text"
                 onChange={(e)=>setname(e.target.value)} 
                 /><br/><br/>
                <input placeholder="Enter password" name="password" className='form-control'
                onChange={(e)=>setPassword(e.target.value)}
                type="text" /><br/><br/>
                <button onClick={log} className='btn btn-primary'>Login</button>
            
            </div>
           
        </div>
    )
}
            

export default Login

