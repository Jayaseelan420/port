import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import './home.css'

export function Home(){
 
    return(
       
       <>
        <div className="bghome">
        <div className="container row ">
            <div  className="col-lg-12 frntalg text-white ">
                <h2  className="display-4" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" >
                     Hi, I am JAYASEELAN
                </h2>
                <h1  data-aos="zoom-out-right" data-aos-duration="2000" className="pt-3">
                    WEB DEVELOPER
                </h1>
                <Link to='/abt'><button type="button" className="btn btn-outline-dark m-5 text-white">About Me</button></Link>
           </div>
        </div>
        </div>
        </>
        
        );
}