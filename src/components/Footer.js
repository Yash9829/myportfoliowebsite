import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className = "left">
                    <div className="location">
                        <FaHome size={20} 
                        style={{color : "white", 
                        marginRight : "2rem"}}/>
                        <div>
                            <p>IIT Bhubaneswar</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} 
                        style = {{color : "white", marginRight : "2rem"}}
                        />+91 9581799333</h4>
                        {/* <div>
                            <p>+91 9581799333</p>
                        </div> */}
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} 
                        style = {{color : "white", marginRight : "2rem"}}/>
                        yasaswinnalanaga@gmail.com</h4>
                    </div>
                    
                </div>
                <div className = "right">
                    <h4>About me</h4>
                    <p>Myself Yasaswin web developer
                    you can follow me on</p>
                    <div className="social">
                    <FaFacebook size={30} 
                        style = {{color : "white", marginRight : "1rem"}}/>
                    <FaInstagram size={30} 
                        style = {{color : "white", marginRight : "1rem"}}/>
                    <FaTwitter size={30} 
                        style = {{color : "white", marginRight : "1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer