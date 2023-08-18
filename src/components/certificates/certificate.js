import React from "react";
import './certificate.css'
import img1 from './Tech.jpg'
import img2 from './Html.jpg'
import img3 from './Css.jpg'

export function Certificate(){
    return(
        <>
            <div className="bgcertficate">
            <div class="container text-center align-items-center">
                <h1 class=" display-4 text-white p-5">CERTIFICATES</h1>
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col">
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