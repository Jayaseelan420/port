import React from "react";
import { Link } from "react-router-dom";
import './experiment.css'
import main from './main.jpg'

export function Experiment(){
    return(
        <>
        <div className="bgexp ">
            <h1 className=" text-center fontnormal textsp text-white">Experience</h1>
          <div className="container row p-5">
            <div className="col-lg-6 ">
              <img src={main} className="col-lg-9 img"/>
            </div>
            <div className="col-lg-6 ">
            <h2 class="text-white">Fox Glove Studio</h2>
                 <h5 class="text-white">2022-2023</h5>
            <div className="d-flex flex-row justify-content-around pt-5">
                <h6 class="text-white">Have one year Experience in Fox Glove Studio. My role on their worked with wedding clients to understand marriage ceremony for delivery of best photography Photo editor and videography. Ensured all the photographic equipment was functional and cared for, Including DSLR, Lenses,tripod,lighting,.more</h6> 
            </div>
           
            </div>
          </div>
          </div>
        </>
    );
}