import React from "react";
import "./Contact.css";

const Contact = () => {
    return(
        <section id="contact" class="bg-light ">
        <div class="container ">
          <div class="row mt-3 justify-content-center text-center">
            <div class="col-lg-12 mt-3">
                <h2 class="font-weight-light">Contact With Us</h2>
                <p class="text-muted mt-4 title-subtitle mx-auto">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
            </div>
          </div>
  
          <div class="row justify-content-center mt-3 mb-5">
              <div class="col-lg-12">
                  <div class="row justify-content-center align-items-center">
                      <div class="col-lg-6">
                          <form class="my-form">
                              <div class="form-group mb-2">
                                  <label for="myemail"><i class="fa fa-envelope-o"></i></label>
                                  <input type="email" class="form-control" id="myemail" placeholder="Email" />
                              </div>
                              <div class="form-group mb-2">
                                  <label for="fname"><i class="fa fa-user-o"></i></label>
                                  <input type="text" class="form-control" id="fname" placeholder="First Name" />
                              </div>
                              <div class="form-group mb-2">
                                  {/* <label for="mnumber"><i class="fa fa-phone"></i></label> */}
                                  <textarea type="text" class="form-control-text" id="mnumber" placeholder="Your Mesaage" />
                              </div>
                              <div className="mb-3">
                                  <button class="btn btn-common btn-block">Send </button>
                              </div>
                          </form>               
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
    );
} 

export default Contact;