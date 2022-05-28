import React from "react";
import "./Style.css";

const SignUp = () => {
    return (
        <section id="login" className="style-body" >
            <div className="container-fluid py-5 ">
                <div className="cont  mt-3">
                    <div className="form sign-in">
                        <h2>Time to feel like home &#128578;</h2>
                        <label>
                            <span>Username</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" />
                        </label>
                        <p className="forgot-pass"></p>
                        <button type="button" className="submit">Sign Up</button>
                        <button type="button" className="fb-btn">Register with <span>facebook</span></button>
                        <p className="forgot-pass">Already has an account? <a href="/Sign-UP">Login Right Now</a></p>
                    </div>
                    <div className="sub-cont">
                        <div className="img">
                            <div className="__text m--up">
                                <h2>One of us?</h2>
                                <p>If you already has an account, just sign in. We've missed you!</p>
                            </div>
                            <a href="/Sign-IN">
                            <div className="__btn">
                                <span className="m--up">Sign In</span>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SignUp;