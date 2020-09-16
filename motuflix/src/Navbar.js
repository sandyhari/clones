import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [handleShow,sethandleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                sethandleShow(true);
            }
            else{
                sethandleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])

    return (
        <div className={`nav ${handleShow && "nav__black"}`}>
            <h1>motuflix</h1>

        </div>
    )
}

export default Navbar;
