import React, { useState } from "react";
import "./Style.css";
import CountrySelect from 'react-bootstrap-country-select';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';

const EditForm = () => {
    const [value, setValue] = useState(null);
    return (
        <>
            <div className="tab-pane mt-3 fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                <form className="needs-validation" novalidate>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label for="firstName " className="form-label fw-bolder">Full Name
                            <span className="require">&nbsp;*</span></label>
                            <input type="text" className="form-control" id="firstName" placeholder="" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="lastName" className="form-label fw-bolder">Username
                            <span className="require">&nbsp;*</span></label>
                            <input type="text" className="form-control" id="lastName" placeholder="" required />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="email" className="form-label fw-bolder">Email
                            <span className="require">&nbsp;*</span></label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Your Email" required />
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
                            <input type="text" className="form-control" id="lastName" placeholder="" required />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label for="address" className="form-label fw-bolder">
                                Address <span className="require">&nbsp;*</span>
                            </label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" for="inlineRadio2">Famale</label>
                        </div>
                    </div>
                    <hr className="my-4" />

                    <button className="w-100 btn btn-outline-dark btn-lg" type="submit">Continue</button>
                </form>
            </div>
        </>
    );
}

export default EditForm;