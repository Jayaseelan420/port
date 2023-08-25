import React from "react";
import './certificate.css'
import img1 from './Tech.jpg'
import img2 from './Html.jpg'
import img3 from './Css.jpg'

export function Certificate(){
    return(
        <>
            <div className="bgcertficate">
            <div class="container text-center p-5">
                <h1 class=" text-white">CERTIFICATES</h1>
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col-lg-4">
                    <div class="card">
                        <img src={img1} className="one"/>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                        <img src={img2} className="two"/>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={img3} className="one"/>
                    </div>
                </div>
                </div>
            </div>
                
            </div>
        </>
    );
}