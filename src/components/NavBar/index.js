import React, { useState, useEffect } from 'react';
import './index.css';

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div>    
                <img 
                    className="nav_logo"
                    src ="https://i.ibb.co/KLGxw4Q/Screenshot-from-2020-11-29-14-22-45-removebg-preview.png" 
                    alt="Netflix-Logo" 
                />
            </div>
            <img 
                className="nav_avatar"
                src="https://i.ibb.co/FV7Jg6R/logo-Q-removebg-preview-KHy67-CBt-Z3-K-removebg-preview.png"
                alt="avatar"
            />
        </div>
    );
}

export default Nav;