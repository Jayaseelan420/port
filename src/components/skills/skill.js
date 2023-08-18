import React from "react";
import './skill.css'
export function Skill(){
    return(
        <>
                <div className="bgskills">
                <h1 class="text-center text-white display-4 pt-5">MY SKILLS</h1>
                <div class="container">
                    <div class="row p-lg-3 p-0 mb-lg-3 mb-0">
                    <div class="col-lg-6 col-12 pt-lg-0 pt-3 text-white">
                        <label >HTML</label>
                        <div class="progress">
                        <div class="progress-bar" role="progressbar">80%</div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12 pt-lg-0 pt-3 text-white">
                        <label>CSS</label>
                        <div class="progress">
                        <div class="progress-bar" role="progressbar">70%</div>
                        </div>
                    </div>
                    </div>
                    <div class="row p-lg-3 p-0 mb-lg-3 mb-0">
                    <div class="col-lg-6 col-12 pt-lg-0 pt-3 text-white">
                        <label>BOOTSTRAP</label>
                        <div class="progress">
                        <div class="progress-bar" role="progressbar" >60%</div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12 pt-lg-0 pt-3 text-white">
                        <label>JavaScript</label>
                        <div class="progress">
                        <div class="progress-bar" role="progressbar">50%</div>
                        </div>
                    </div>
                    </div>
                    <div class="row p-lg-3 p-0 mb-lg-3 mb-0">
                    <div class="col-lg-6 col-12 pt-lg-0 pt-3 text-white">
                        <label >MySQL</label>
                        <div class="progress">
                        <div class="progress-bar" role="progressbar">80%</div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12 pt-lg-0 pt-3 text-white">
                        <label>ReactJs</label>
                        <div class="progress">
                        <div class="progress-bar" role="progressbar">70%</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>        
        </>
    )
};