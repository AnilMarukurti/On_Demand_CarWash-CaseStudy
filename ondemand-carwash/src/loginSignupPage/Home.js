import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Container,Row,Col } from 'react-bootstrap'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import './Navbar.css'
import './Home.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {

        let navigate = useNavigate();

    return (
        
        <div>
            
                    <Row>
                        <Col xs={12} >
                    <div>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                className="w-100"
                                src="https://media.istockphoto.com/photos/worker-washing-red-car-with-sponge-on-a-car-wash-picture-id1287044692?b=1&k=20&m=1287044692&s=170667a&w=0&h=0ulsNOaeo2qw-dp50djX8Lv59Jh_JzvxnIuEuI-RsaI="
                                
                                alt="First slide"
                                />
                                <Carousel.Caption className='carousel-caption'>
                                <div>
                                    <h4 className='caption-heading'>HIGH-END TECHNOLOGY</h4>
                                    <h3 className='caption-heading2'>Quality Service For You</h3>
                                    <p className='caption-para'>Excellence is our best habit. We wash cars with modern Detailing Technology</p>
                                    <button className='btn btn-danger btn-1' onClick={()=>{navigate('/appointment')}}>Book a Wash <AiOutlineArrowRight /></button>
                                </div>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                className="d-block w-100"
                                src="https://media.istockphoto.com/photos/car-detailing-service-deep-interior-cleaning-picture-id1288964234?b=1&k=20&m=1288964234&s=170667a&w=0&h=c0ngV3x6YLmbgvxPFZPxXjtrU_Kkjagv6lNRLhvoryc="
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <div>
                                    <h4 className='caption-heading-1'>HIGH-END TECHNOLOGY</h4>
                                    <h3 className='caption-heading2-1'>Care Service For Your Car</h3>
                                    <p className='caption-para-1'>Keeping your car clean is a symbol of loving it. Be ready to shine!.</p>
                                    <button className='btn btn-danger' onClick={()=>{navigate('/appointment')}} >Book a Wash <AiOutlineArrowRight /></button>
                                </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwd2FzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <div>
                                    <h4 className='caption-heading-2'>HIGH-END TECHNOLOGY</h4>
                                    <h3 className='caption-heading2-2'>Interior And Exterior Cleaning</h3>
                                    <p className='caption-para-2'>Your car deserves better. It’s more than a car, get him a spa service.</p>
                                    <button className='btn btn-danger' onClick={()=>{navigate('/appointment')}}>Book a Wash <AiOutlineArrowRight /></button>
                                </div>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    </Col>
                    </Row>
                    
               
                    <Row>
                        <Col xs={6}>
                        <div className='text-center pt-5 mb-5 ml-3 d-flex flex-column justify-content-end img-text'>
                        <div className='text-center pt-5 img-text'>
                            <h1>We love to shine cars. Book now to feel the experience</h1>
                            <button className='btn btn-danger'  onClick={()=>{navigate('/appointment')}}>Book a Wash <AiOutlineArrowRight /></button>
                        </div>
                        </div>
                        </Col>

                        <Col xs={6}>
                        <div className='pt-5 mb-5'>
                            <img className='d-block w-100' src="https://door2doorcarwash.com/inside/images/banners/ola-car-washing-man-1920x1000.webp" />
                        </div>
                        </Col>
                    </Row>
                  
                    <Row>
                        <Col xs={12} md={3} >
                        <div className='text-center mb-5'>
                            <img src='https://door2doorcarwash.com/inside/images/icons/Impressive-Interior-65x65.webp'/>
                            <h2 className='pt-3 head'>Impressive Interior</h2>
                            <p className='para'>Internal cleaning with dry steam and suction vacuuming using our special car cleaning accessories.</p>
                        </div>
                        </Col>

                        <Col xs={12} md={3}>
                        <div className='text-center mb-5'>
                            <img src='https://door2doorcarwash.com/inside/images/icons/Ready-To-Shine-65x65.webp'/>
                            <h2 className='pt-3 head'>Ready To Shine</h2>
                            <p className='para'>External cleaning with Wet steam and also High Pressure wash using our special car cleaning accessories.</p>
                        </div>
                        </Col>
                 

                        <Col xs={12} md={3}>
                        <div className='text-center mb-5'>
                            <img src='https://door2doorcarwash.com/inside/images/icons/disinfection-65x65.webp'/>
                            <h2 className='pt-3 head'>Disinfection</h2>
                            <p className='para'>Sanitizing is a procedure of proper cleaning and removing virus and germs, it is also a part of Anti-bacterial Treatment.</p>
                        </div>
                        </Col>
                    

                        <Col xs={12} md={3}>
                        <div className='text-center mb-5'>
                            <img src='https://door2doorcarwash.com/inside/images/icons/Detailing-Glow-65x65.webp'/>
                            <h2 className='pt-3 head'>Detailing Glow</h2>
                            <p className='para'>Rubbing is a process that results in the removal of stains and marks on the paint surface of the car and gives your car a smooth and clean look.</p>
                        </div>
                        </Col>
                        </Row>


                <div className="priceingParent">
            <div className="priceingTitle">
                <div>
                    <p className="c1">AFFORDABLE PRICING FOR EVERYONE</p>
                </div>
                <div className="priceDescription">
                    <p className="c2">
                        Choosing Car wash is a constant process in the life of
                        every motorist. We try to give you Only positive emotions.
                        Entrust your car cleaning to our professionals
                    </p>
                </div>
            </div>

            <div className="orderParent" id="services">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 orderRow">
                        <div>
                            <div>
                                <p className="o1">Rs. 999</p>
                                <p className="o2">BASIC WASH</p>
                            </div>
                            <div>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/> Exterior Hand Wash</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/> Wheel Shine</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Tire Dressing</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Windows in and out</p>
                                <p><ImCross  style={{color:"red" , marginRight:"15px", fontSize:"18px",}}/> Interior Vaccum</p>
                                <p><ImCross  style={{color:"red" , marginRight:"15px", fontSize:"18px",}}/>Dashboard Clean</p>
                                <p><ImCross  style={{color:"red" , marginRight:"15px", fontSize:"18px",}}/>Febreze Odor Eliminator</p>
                                <p><ImCross  style={{color:"red" , marginRight:"15px", fontSize:"18px",}}/>Hand Dry</p>
                                <button className="bookBtn" onClick={()=>{navigate('/appointment')}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 orderRow2">
                        <div>
                            <div>
                                <p className="o1">Rs. 1499</p>
                                <p className="o2">DELUXE WASH</p>
                            </div>
                            <div>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Exterior Hand Wash</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Wheel Shine</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Tire Dressing</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Windows in and out</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Interior Vaccum</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Dashboard Clean</p>
                                <p><ImCross  style={{color:"red" , marginRight:"15px", fontSize:"18px",}}/>Febreze Odor Eliminator</p>
                                <p><ImCross  style={{color:"red" , marginRight:"15px", fontSize:"18px",}}/>Hand Dry</p>
                                <button className="bookBtn" onClick={()=>{navigate('/appointment')}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 orderRow3">
                        <div>
                            <div>
                                <p className="o1">Rs. 1999</p>
                                <p className="o2">ULTIMATE WASH</p>
                            </div>
                            <div>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Exterior Hand Wash</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Wheel Shine</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Tire Dressing</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Windows in and out</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Interior Vaccum</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Dashboard Clean</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Febreze Odor Eliminator</p>
                                <p><TiTick style={{color:"green" , marginRight:"15px", fontSize:"25px",}}/>Hand Dry</p>
                                <button className="bookBtn" onClick={()=>{navigate('/appointment')}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             </div>  


             <div className="footer" id="aboutUs_contactUs">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 aboutDiv">
                        <p className="footer1">ABOUT US</p>
                        <p className="c2 desp">Making cars clean, shiny and glossy is our main specialty! 
                            On par with dedicated and thorough exterior and interior washing services,
                            we also offer such detailing help as interior vacuuming, polishing, 
                            waxing and many others...</p>
                    </div>
                    <div className="col-lg-4 needHelpDiv" >
                        <p className="footer1">NEED HELP ?</p>
                        <p  className="footer1"> WE ARE HERE TO HELP YOU</p>
                       
                    </div>
                    <div  className="col-lg-4">
                        <div className="footerIcons">
                            <div>
                             <i className="far fa-clock fa-2x ficon"></i>
                            </div>
                            <div>
                                <p className="footer2">We are open</p>
                                <p className="footer2">Sun-sat 10:00 am - 8:00 pm</p>
                            </div> 
                        </div>
                        <div className="footerIcons">
                            <div>
                                <i className="fas fa-phone-square-alt fa-2x ficon"></i>
                            </div>
                            <div>
                                <p className="footer2">Contact</p>
                                <p className="footer2">(+91) 7981353199</p>
                            </div>               
                        </div>
                        <div className="footerIcons">
                            <div>
                                <i className="fas fa-map-marker-alt fa-2x ficon"></i>
                            </div>
                            <div>
                                <p className="footer2">We're HERE</p>
                                <p className="footer2">Near oldbusstand , shop no-1 , Green Wash , Parvathipuram - 535501 </p>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
             
                
        

        </div>
        
            
           
    )
}

export default Home
