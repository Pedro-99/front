import React from "react";

const ProfileNav = () => {
    return (
        <>
            <div className="profile-nav col-md-3">
                <div className="panel">
                    <div className="user-heading round">
                        <a href="#">
                            <img src="/assests/m.png" alt="" />
                        </a>
                        <h1>User Name</h1>
                        <p>email@example.com</p>
                    </div>
                    <div className="card mt-3">
                        <div className="nav flex-column nav-pills justify-content-center text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                            <button className="nav-link mb-2 active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                <i className="fa fa-user"></i>&nbsp; Profile
                            </button>
                            <button className="nav-link mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <i className="fa fa-edit"></i>&nbsp; Edit Profile
                                
                            </button>
                            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                            <i className="fa fa-calendar"></i>&nbsp; Orders
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileNav;