import React from "react";
import { Link } from "react-router-dom";
import "./HeroServices.css"
const BottomServices = () => {
    return (
        <div id="bottomservices" >
            <div className="bg-bottom">
              <div className="container bg-bottom col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        {/* <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> */}
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-uppercase lh-1 mb-3">arynass <i>cosmitics</i></h1>
        <h4 className="display-6 fw-light lh-1 mb-3">Results that will amaze you</h4>
         
        
        <p className="lead">If you're trying to buy a product that shows results overnight, book now and order before they run out of stock and no obligation required.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link type="button" className="btn btn-secondary btn-lg px-4 me-md-2" to='/products'>Shop Now</Link>
        
        </div>
      </div>
    </div>
  </div>
  </div>
           
        </div>
    );
}

export default BottomServices;