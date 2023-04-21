import "./heroimgStyles.css";
import React from "react";
import {Link} from "react-router-dom";
const HeroImg = () => {

    return <div className = "hero">
        <div className = "mask">
            <img className = "intro-img"
             src = "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt = "Intro-Img"/>
        </div>

        <div className = "content">
            <p>HI, I AM YASASWIN</p>
            <h1>React Developer</h1>
            <div>
                <Link to = "/project" 
                className = "btn">
                Projects
                </Link>

                <Link to = "/contact" 
                className = "btn btn-light">
                Contact
                </Link>

            </div>
        </div>
    </div>;

}
export default HeroImg;