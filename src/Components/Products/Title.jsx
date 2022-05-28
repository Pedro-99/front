import React from "react";
import "./Title.css"
const Title = () => {
    return (
        <div id="title" className="mt-5">
            <div class="section-head">
                <h2 class="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Latest <span>Products</span></h2>
                <hr class="lines wow zoomIn" data-wow-delay="0.3s" />
            </div>
        </div>
    );
}

export default Title;