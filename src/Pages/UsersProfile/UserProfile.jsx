import React from "react";
import "./Style.css";
const UserProfile = () => {
    return (
        <>
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                {/* <h1 className="text-center justify-content-center ">Your Information</h1>
                                    <hr /> */}
                <div className="container py-3">
                    {/* <div className="card py-4 text-center justify-content-center "> */}
                    <div className="row ">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            Kenneth Valdez
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            fip@jukmuh.al
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            (239) 816-9029
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            (320) 380-4539
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            Bay Area, San Francisco, CA
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
            </div>
        </>
    );
}

export default UserProfile;