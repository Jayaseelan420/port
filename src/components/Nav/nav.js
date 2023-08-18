import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
export function Navbar(){

    return(
        <>

        {/* <..............NavBar Section..............>  */}
        
            <nav class="navbar navbar-expand-lg navbar-light bgmenu ">
                <a class="navbar-brand text-white " href="#">JayaSeelan</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link text-white" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white " to='/about'>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white " to='/qualification'>Qualification</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white " to='/experiences'>Experiences</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white " to='/certificates'>Certificates</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white " to='/skills'>Skills</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to='/contact'>Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>
    
        </>
    );
}