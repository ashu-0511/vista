import React from 'react'
import './Header.css'
import Logo from "../images/logo.png"
import india from "../images/india.png"
import call from "../images/customer-care.png"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <div className='topline'>
                <div className='contact'>
                    <div className='clogo'>  <img src={call} alt="phone" /></div>
                    <div>  +91 9289228888  </div>
                </div>
                <div className='country'>
                    <div>  <img src={india} alt="flag" /> </div>
                    <div class="dropdown">
                        <button class=" boot btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            India
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p>Bangladesh</p>
                            <p>France</p>
                            <p>Germany</p>
                            <p>Hong kong</p>
                            <p>Indonesia</p>
                            <p>Maldives</p>
                            <p>Mauritius</p>
                            <p>Nepal</p>
                            <p>Oman</p>
                            <p>Qatar</p>
                            <p>Saudi Arabia</p>
                            <p>Singapore</p>
                            <p>Sri Lanka</p>
                            <p>Thailand</p>
                            <p>Uae</p>
                            <p>UK</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main'>
                <div className='head'>
                    <Link to="/">  <img src={Logo} alt="logo" /></Link>
                </div>
                <div className='navbar'>
                    <ul className='list'>
                        <li className='logs'>Plan Travel</li>
                        <li className='logs'>Travel Information</li>
                        <li className='logs'>Club Vistara</li>
                        <Link to="/Login"> <li className='logs'>Login</li></Link>
                        <li className='logs'>Enrol</li>
                        <div>
                            <input placeholder='Search' className='search' type="search"></input>
                            {/* <Icon icon="gg:search" /> */}
                        </div>

                    </ul>
                </div>
            </div>
            <button id='top' ><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#b69355" d="M5 15h4v6h6v-6h4l-7-8zM4 3h16v2H4z" /></svg></span><a href='#'>Top</a></button>
        </div>
    )
}
