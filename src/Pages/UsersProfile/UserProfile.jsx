import React ,{useState, useEffect} from "react";
import {useSelector} from 'react-redux';
import userService from '../../features/users/userService';

import "./Style.css";
const UserProfile = () => {

    const [localUser, setLocalUser] = useState(null)
    const {user} = useSelector((state) => state.auth)
    useEffect(() => {
        userService.getUserById(user.id).then((user) => setLocalUser(user))
    },[])
    return (
        <>
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                {/* <h1 className="text-center justify-content-center ">Your Information</h1>
                                    <hr /> */}
                <div className="container py-3">
                    {/* <div className="card py-4 text-center justify-content-center "> */}
                    <div className="row ">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Username</h6>
                        </div>
                        {
                             localUser &&   <div className="col-sm-9 text-secondary">
                             {localUser.username}
                         </div>
                        }
                       
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        {
                             localUser &&   <div className="col-sm-9 text-secondary">
                             {localUser.email}
                         </div>
                        }
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                        </div>
                        {
                             localUser &&   <div className="col-sm-9 text-secondary">
                             {localUser.addresses[0].phone}
                         </div>
                        }
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Address 1</h6>
                        </div>
                        {
                             localUser &&   <div className="col-sm-9 text-secondary">
                             {localUser.addresses[0].address1}
                         </div>
                        }
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Address 2</h6>
                        </div>
                        {
                             localUser &&   <div className="col-sm-9 text-secondary">
                             {localUser.addresses[0].address2}
                         </div>
                        }
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">County</h6>
                        </div>
                        {
                             localUser &&   <div className="col-sm-9 text-secondary">
                             {localUser.addresses[0].country}
                         </div>
                        }
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">City</h6>
                        </div>
                        {
                             localUser &&   <div className="col-sm-9 text-secondary">
                             {localUser.addresses[0].city}
                         </div>
                        }
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Postal code</h6>
                        </div>
                        {
                             localUser &&   <div className="col-sm-9 text-secondary">
                             {localUser.addresses[0].postal_code}
                         </div>
                        }
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default UserProfile;