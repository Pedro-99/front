import React from "react";

const ReviewsCard = () => {
    return (
        <div id="reviews">
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">
                    <div className=" image d-flex flex-column justify-content-center align-items-center">
                        <img className="rounded-circle" src="./assests/m.png" height="100" width="100" />
                        <span className="name mt-3">User Full Name</span>
                        <span className="idd">@Username</span>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span className="idd1"> review</span>
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                            <span className="follow"> Comment of user </span>
                        </div>
                        <div className="text mt-3">
                        </div>
                        <div className=" px-2 rounded mt-2 date ">
                            <span className="join">Joined May,2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewsCard;