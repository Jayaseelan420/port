import React from "react";
import './about.css'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import image from './pic1.jpg'

export function About(){
    return(
        <>
            <div className="bgabout">
                <h1 className="text-center text-white display-4 pt-2">About Me</h1>
                <h5  className="text-white text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">To be Short Front-End-Developer dynamic person with a fighting and commulating spirit. 
                <br/>Often used to correct from the mistake made by others.</h5>
                <div className="container row">
                    <div className="col-lg-6 pt-5 padt ">
                       <img src={image} className="col-lg-12"/>
                    </div>
                    <div className="col-lg-6 pads text-white">
                        {/* <h5>Resume</h5> */}
                       
                        <br/>
                        <br/>
                        <div className="d-flex flex-row justify-content-around ">
                        <Link to="mailto:jayaseelanjs2012@gmail.com"><FontAwesomeIcon icon={faEnvelope} className=" fonticon"/> </Link>
                        <Link to="https://github.com/Jayaseelan420"> <FontAwesomeIcon icon={faGithub} className=" fonticon"/></Link>
                        <Link to="https://www.linkedin.com/in/jayaseelan-v-3588b3287"><FontAwesomeIcon icon={faLinkedin} className=" fonticon"/></Link>
                        <Link to="https://www.linkedin.com/in/jayaseelan-v-3588b3287"><FontAwesomeIcon icon={faLinkedin} className=" fonticon"/></Link>
                        </div>
                        <br/>
                        <br/>
                     
                </div>
            </div>
            </div>
        </>
    );
}