import React from "react";
import "./Style.css";

const SignIn = () => {
    return (
        <section id="login" className="style-body" >
            <div className="container-fluid py-5 ">
                <div className="cont  mt-3">
                    <div className="form sign-in">
                        <h2>Welcome Back</h2>
                        <label>
                            <span>Email</span>
                            <input type="email" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" />
                        </label>
                        <p className="forgot-pass">Forgot password?</p>
                        <button type="button" className="submit">Sign In</button>
                        <button type="button" className="fb-btn">Connect with <span>facebook</span></button>
                        <p className="forgot-pass">Don't have an account? <a href="/Sign-UP">Register Right Now</a></p>
                    </div>
                    <div className="sub-cont">
                        <div className="img">
                            <div className="__text m--up">
                                <h2>New here?</h2>
                                <p>Sign up and discover great amount of new opportunities!</p>
                            </div>
                            <a href="/Sign-UP">
                            <div className="__btn">
                                <span className="m--up">Sign Up</span>
                            </div>
                            </a>
                        
                        </div>   
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SignIn;