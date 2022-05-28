import React from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import Panel from "./Panel";
import ProfileNav from "./ProfileNav";
import UserProfile from "./UserProfile";
import "./Style.css";
import EditForm from "./FormEdit";
import UserOrders from "./UserOrders";
const Profile = () => {
    return (
        <>
            <HomeLayout>
                <section id="profile">
                    <div className="container bootstrap snippets bootdey mt-5 py-5">
                        <div className="row">
                            <ProfileNav />
                            <div className="profile-info col-md-9">
                                <div className="row">
                                    <Panel />
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <UserProfile />
                                        <EditForm />
                                        <UserOrders />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </HomeLayout>
        </>
    );
}

export default Profile;