import React from "react";
import './contact.css'

export function Contact(){
    return(
        <>

    <section className="contact bgcontact " id="contact">
        <div className="container">
            <div className="heading text-center display-4">
                <h2 className="text-white">Contact Us
                   </h2>
                <p className="text-white">An "About Me" page is one of the most important parts of your portfolio, website, or blog. 
                    <br/>Most important is that you choose one and remain consistent, rather than alternating .</p>
            </div>
            <div className="row">
                <div className="col-md-5 text-white">
                    <div className="title">
                        <h3>Contact detail</h3>
                       
                    </div>
                    <div className="content">
                        {/* <!-- Info-1 --> */}
                        <div className="info">
                            <h4 className="d-inline-block">PHONE :
                                <br/>
                                <span className="text-white">8072154362</span></h4>
                        </div>
                        {/* <!-- Info-2 --> */}
                        <div className="info">
                          <h4 className="d-inline-block">EMAIL :
                                <br/>
                                <span className="text-white">jayaseelanjs2012@gmail.com</span></h4>
                        </div>
                        {/* <!-- Info-3 --> */}
                        <div className="info">
                          <h4 className="d-inline-block">ADDRESS :<br/>
                                <span className="text-white">Chennai 600118</span></h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-7">

                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <input type="text" class="form-control" placeholder="Name"/>
                            </div>
                            <div className="col-sm-6">
                                <input type="email" class="form-control" placeholder="Email"/>
                            </div>
                            <div className="col-sm-12">
                                <input type="text" class="form-control" placeholder="Subject"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                        </div>
                        <button className="btn btn-block" type="submit">Send Now!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
           
        </>
    )
};