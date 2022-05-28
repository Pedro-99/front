import React from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import "./ContactPage.css"
const ContactPage = () => {
    return (
        <>
        <HomeLayout>
            <div id="contactpage">
                <div className="py-5 mt-5 mb-5">
                <div className="content">
                    <div className="contact">
                        <div className="other">
                            <div className="info">
                                <h2>More Methods </h2>
                                <h3>Email</h3>
                                <div className="svg-wrap">
                                    <a href="mailto:contact@arynasscos.info">
                                        <i className="fa fa-envelope-o"></i>&nbsp;
                                        connor@connorgaunt.com
                                        </a>
                                </div>
                                <h3>Call</h3>
                                <div className="svg-wrap">
                                    <a href="">
                                        <i className="fa fa-mobile"></i>&nbsp;
                                        +212 600 000000
                                        </a>
                                </div>
                                <h3>Address</h3>
                                <div className="svg-wrap">
                                    <a href="">
                                        <i className="fa fa-map-marker"></i>&nbsp;
                                        71 Street name , Agadir, 3332, MOROCCO
                                        </a>
                                </div>

                                <h3>Connect</h3>
                                <div className="svg-wrap">
                                    <a href="http://instagram.com/connorgaunt" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                       </a>
                                    <a href="http://twitter.com/connor_gaunt" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="http://facebook.com/connorgauntdesign" target="_blank">
                                    <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="http://linkedin.com/in/connorgaunt" target="_blank">
                                    <i className="fa fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="form">
                            <h1 className="text-uppercase">Get In Touch</h1>
                            <form action="">
                                <div className="flex-rev">
                                    <input type="text" placeholder="Enter your Name" name="name" id="name" />
                                    <label for="name">Full Name</label>
                                </div>
                                <div className="flex-rev">
                                    <input type="email" placeholder="Enter your Email" name="email" id="email" />
                                    <label for="email">Your Email</label>
                                </div>

                                <div className="flex-rev">
                                    <textarea placeholder="Your message...." name="message" id="message" />
                                    <label for="message">Email Message</label>
                                </div>
                                <button>Send Email <i className="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </HomeLayout>
        </>
    );
}

export default ContactPage;