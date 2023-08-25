import React from "react";
import './about.css'

import image from './pic1.jpg'

export function About(){
    return(
        <>
<div className="bgabout">
  <div class="container ">
    <h2 class="section-title load-hidden text-center text-white display-4 ">About me</h2>
    <div class="row about-wrapper">
      <div class="col-md-6 col-sm-12">
        <div class="about-wrapper__image load-hidden">
         <img src={image}  class="img-fluid rounded shadow-lg col-lg-9 pt-3"/>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="about-wrapper__info load-hidden">
          <p class="about-wrapper__info-text mt-5 text-white">
          To be Short Front-End-Developer dynamic person with a fighting and commulating spirit.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
}