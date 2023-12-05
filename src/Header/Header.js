import React from 'react'
import './Header.css'
import Logo from "../images/logo.png"
import india from "../images/india.png"
export default function Header() {
    return (
        <div className='header'>
            <div className='topline'>
                <div className='contact'>
                    <div>  +91 9289228888  </div>
                </div>
                <div className='country'>
                    <div>  <img src={india} /> </div>
                    <div>India</div>
                </div>
            </div>
            <div className='head'>
                <img src={Logo} />
            </div>
        </div>
    )
}
