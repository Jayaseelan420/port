import React,{useEffect} from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './home.css'

export function Home(){
 
    return(
       
       <>
            <section id="hero " class=" bghome">
            <div class="container">
                <h1 class="hero-title load-hidden text-white display-4 pt-5">
                Hi, my name is <span class="text-color-main">Jayaseelan</span>
                <br />
                I'm the FrontEnd Developer.
                </h1> 
                <p class="hero-cta load-hidden">
                <Link to='/abt'><button type="button" className="btn btn-outline-dark mt-5 text-white">About Me</button></Link>
                </p>
                <div className= "pl-5">
                        <Link to="mailto:jayaseelanjs2012@gmail.com"><FontAwesomeIcon icon={faEnvelope} className=" fonticon"/> </Link>
                        <Link to="https://github.com/Jayaseelan420"> <FontAwesomeIcon icon={faGithub} className=" pl-5 fonticon"/></Link>
                        <Link to="https://www.linkedin.com/in/jayaseelan-v-3588b3287"><FontAwesomeIcon icon={faLinkedin} className="pl-5  fonticon"/></Link>
                </div>
            </div>
            </section>
        </>
        
        );
}