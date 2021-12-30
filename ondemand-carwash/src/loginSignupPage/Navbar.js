import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
                <div className='logo'>
                    <h1>Green<font>Wash</font></h1>
                </div>
                <div className='menu-icon'>
                    <i className='fa fa-bars'></i>
                </div>
                <div className='menu-div' >
                    <div >
                        <ul className='menu-list'>
                        <NavLink to="/" ><li className="nav-link try">Home</li></NavLink>

                        
                        <li className="nav-item" >
                        <a className="nav-link try" href="#aboutUs_contactUs" >Contact-Us</a>
                        </li>
                        <li className="nav-item" >
                        <a className="nav-link try"  href="#services" >Services</a>
                        </li>

                        <li className="nav-item active" style={{marginRight:"20px" }}>
                            <NavLink  exact className="nav-link" to="/bookedappointments"  
                       >    Booked-Appointments <span className="sr-only">(current)</span></NavLink>
                        </li>

                        <NavLink to="/login"><li className="nav-link try">Login</li></NavLink>
                        </ul>
                    </div>
                </div>
            
        </nav>
    )
}

export default Navbar
