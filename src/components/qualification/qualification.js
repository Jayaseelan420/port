import React from "react";

import './qualification.css'
export function Qualification(){
    return(
        <>
    <section id="team" class="bgqualification ">
    <div class="container-fluid p-5">
        <h5 class="section-title h1 text-white">EDUCATION</h5>
        <div class="row">
            {/* <!-- Team member --> */}
            <div class="col-lg-4">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                   
                                    <h4 class="card-title mt-3">SSLC</h4>
                                    <h5 class="card-text mt-5">Don Bosco Matriculation School State Board</h5>
                                    <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn mt-5">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title mt-5">2013-2014</h4>
                                    <p class="card-text mt-4">Don Bosco Matriculation School Aggregate with 80%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member --> */}
            {/* <!-- Team member --> */}
            <div class="col-lg-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">

                                    <h4 class="card-title mt-3">HSC</h4>
                                    <h5 class="card-text mt-5">St. Matthias Anglo Indian Higher Secondary School</h5>
                                    <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn mt-5">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title mt-5">2015-2016</h4>
                                    <p class="card-text mt-4">St. Matthias Anglo Indian Higher Secondary School aggregate with 66%</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member --> */}
            {/* <!-- Team member --> */}
            <div class="col-lg-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    
                                    <h4 class="card-title mt-3">UG Degree</h4>
                                    <h5 class="card-text mt-5">Chennai National Arts and Science College Madras University</h5>
                                    <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn mt-5">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title mt-5">2017-2019</h4>
                                    <p class="card-text mt-4">Bachelor of Science in Viscom 2016-2019 Chennai National Arts and Science College Madras University with 80%</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member --> */}
            

        </div>
    </div>
</section>
        </>
    );
}