import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import userService from '../../features/users/userService';
import CountrySelect from 'react-bootstrap-country-select';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import "./Style.css";

const EditForm = () => {
    const { user } = useSelector((state) => state.auth)
    const [value, setValue] = useState(null);
    const [localUser, setLocalUser] = useState({
        username: "",
        email: "",
        addresses: [{
            address1: "",
            address2: "",
            country: "",
            city: "",
            phone: "",
            postal_code: "",
            gender: "",
            userId: user.id,
        }]
    });

    const {
        username, email
    } = localUser
    const {
        address1, address2, country, postal_code, city, phone, gender, userId
    } = localUser.addresses[0]


    const onChange = (e) => {
        setLocalUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }
    useEffect(() => {
        userService.getUserById(user.id).then((user) => setLocalUser(user))
    }, []);
    return (
        <>
            <div className="tab-pane mt-3 fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                <form className="needs-validation" novalidate>
                    <div className="row g-3">


                        <div className="col-sm-6">
                            <label for="lastName" className="form-label fw-bolder">Username
                                <span className="require">&nbsp;*</span></label>
                            {
                                localUser && <input type="text" className="form-control"
                                    name='username'
                                    onChange={onChange}
                                    value={username} id="username" placeholder="" required />


                            }

                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="email" className="form-label fw-bolder">Email
                                <span className="require">&nbsp;*</span></label>
                            {
                                localUser && <input type="text" className="form-control"
                                    name='email'
                                    onChange={onChange}
                                    value={email} id="email" placeholder="" required />


                            }
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label for="addresses" className="form-label fw-bolder">Phone
                                <span className="require">&nbsp;*</span></label>
                            {
                                localUser && (<input type="text" className="form-control"
                                    name='addresses'
                                    onChange={onChange}
                                    value={phone} id="addresses" placeholder="" required />)


                            }
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="photo" className="form-label fw-bolder">Photo</label>
                            <input type="file" className="form-control" id="photo" />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="state" className="form-label fw-bolder">Country
                                <span className="require">&nbsp;*</span></label>
                            <CountrySelect
                                value={value}
                                onChange={setValue}
                            // className="form-select"
                            />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="lastName" className="form-label fw-bolder">City
                                <span className="require">&nbsp;*</span></label>
                            {
                                localUser && (
                                    <input
                                        onChange={onChange}
                                        value={city}
                                        name="addresses"
                                        type="text" className="form-control" id="lastName" placeholder="" required />
                                )
                            }
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label for="address" className="form-label fw-bolder">
                                Address 1 <span className="require">&nbsp;*</span>
                            </label>
                            {
                                localUser && (
                                    <input
                                        onChange={onChange}
                                        value={address1}
                                        name="addresses"
                                        type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                )
                            }
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="col-12">
                            <label for="address" className="form-label fw-bolder">
                                Address 2 <span className="require">&nbsp;*</span>
                            </label>
                            {
                                localUser && (
                                    <input
                                        onChange={onChange}
                                        value={address2}
                                        name="addresses"
                                        type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                )
                            }
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="col-12">
                            <label for="address" className="form-label fw-bolder">
                                ZIP <span className="require">&nbsp;*</span>
                            </label>
                            {
                                localUser && (
                                    <input
                                        onChange={onChange}
                                        value={postal_code}
                                        name="addresses"
                                        type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                )
                            }
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <label for="address" className="form-label fw-bolder">
                            Gender selected <span className="require">&nbsp;*</span>
                            {
                                localUser && (<span className="require">{gender}</span>)
                            }
                        </label>
                        {
                            (localUser && (localUser.addresses[0].gender))
                            &&  (<div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" checked for="inlineRadio2">Female</label>
                                </div>
                                <div className="form-check form-check-inline ">
                                    <input className="form-check-input" checked type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                            </div>)

                        }



                    </div>
                    <hr className="my-4" />

                    <button className="w-100 btn btn-outline-dark btn-lg" type="submit">Save</button>
                </form>
            </div>
        </>
    );
}

export default EditForm;