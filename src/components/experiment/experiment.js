import React from "react";
import { Link } from "react-router-dom";
import './experiment.css'
import main from './main.jpg'

export function Experiment(){
    return(
        <>
            <div className="bgexp">
                <h1 className="text-center text-white display-4 pt-2">Experiences</h1>
                <div className="container row ">
                    <div className="col-lg-6">
                        <img src={main} className="col-lg-8 pt-3 pl-5"/>
                    </div>
                    <div className="col-lg-6 pl-5 pt-5 text-center text-white" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="3000">
                        <h2 className="pt-4">Fox Glove Studio</h2>
                        <br/>
                        <h5>2022-2023</h5>
                        <br/>
                        <h6>Have one year Experience in Fox Glove Studio. My role on their worked with wedding clients to understand marriage<br/>ceremony for delivery of best photography Photo editor and
                        <br/>videography. Ensured all the photographic equipment was
                        <br/>functional and cared for, Including DSLR,
                        <br/>Lenses,tripod,lighting,.more</h6>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    );
}