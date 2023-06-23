import React, { useState, useEffect } from 'react'
// import styled, { createGlobalStyle } from "styled-components";

// import { Link } from 'react-router-dom';
import image from "../../Images/MyLogo1.jpg"
import './NavBarComponent.css'

function NavBarComponent() {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
            {/* Navbar content */}

            <div className="navbar-container">
                <div className="testDesign">
                    <a href="/" className="navbar-logo">
                        <img className="logoDesign" src={image} alt="this is my logo"></img>

                    </a>
                </div>

                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Home</a>
                    </li>
                    {/* <li className="navbar-item">
                        <a href="/about" className="navbar-link">About</a>
                    </li> */}
                    <li className="navbar-item">
                        <a href="/Projects" className="navbar-link">Projects</a>
                    </li>
                    {/* <li className="navbar-item">
                        <a href="/contact" className="navbar-link">Contact</a>
                    </li> */}
                    <li className="navbar-item">
                        <a href="/certifications" className="navbar-link">certificates</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
    // return (
    // <nav className="navbar">
    //     <div className="navbar-container">
    //         <a href="/" className="navbar-logo">Logo</a>
    //         <ul className="navbar-menu">
    //             <li className="navbar-item">
    //                 <a href="/" className="navbar-link">Home</a>
    //             </li>
    //             <li className="navbar-item">
    //                 <a href="/about" className="navbar-link">About</a>
    //             </li>
    //             <li className="navbar-item">
    //                 <a href="/services" className="navbar-link">Services</a>
    //             </li>
    //             <li className="navbar-item">
    //                 <a href="/contact" className="navbar-link">Contact</a>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>
    // )
}
export default (NavBarComponent)