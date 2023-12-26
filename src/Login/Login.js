import React from "react";
import "../Login/Login.css"
import club from "../images/club.png"


function Login() {
    return (
        <div className="Login">
            <div className="mains">
                <div className="section">
                    <div className="sec1"><img src={club} alt="none" />
                        <div>
                            <h3>Login</h3>
                            <div className="bar">
                                <form className="bar">
                                    <input name="username" placeholder="Email or Club Vistara ID"></input>
                                    <input name="password" required placeholder="Password" type='password'></input>
                                </form>
                                <div>
                                    <button className="btn">Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec2">
                        <div className="txt">
                            <h3>Not a Club Vistara member yet? </h3>
                            <h5>Enrol now to enjoy a host of privileges and benefits:</h5>
                            <ul>
                                <li>Bonus 500 CV Points on your first flight</li>
                                <li>Complimentary Lounge access, extra baggage allowance, priority services</li>
                                <li>Rewards when you fly on Vistara and Partner airlines</li>
                                <li>Redeem CV Points for free flights and upgrades</li>
                                <li>Earn CV Points with 35+ partners and much more!</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;