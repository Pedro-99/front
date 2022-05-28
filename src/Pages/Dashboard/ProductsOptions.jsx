import React, { useState } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import "./Contain.css";
const FormAdd = () => {
    return (
        <>
            <form>
                <div className="col-md-4 d-flex">
                    <label for="firstName " className="form-label fw-bolder">Option Name
                        <span className="require">&nbsp;*</span></label>
                    <input type="text" className="form-control ms-2" id="firstName" placeholder="" required />
                    <button type="button" className="btn btn-outline-secondary ms-2">Save</button>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
            </form>
        </>
    );
}
const ProductsOption = () => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
    return (
        <>
            <DashboardLayout>
                <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                    <div id="option" className="row">
                        <h3 className="fst-italic fw-bolder text-center mb-2 py-2">Options List</h3>
                        <div className="col-md-12 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <span><i className="fa fa-table me-2"></i>
                                    </span> Options
                                    <div className="float-end ">
                                        <button className="btn btn-outline-secondary" onClick={onClick}>Add Option</button>
                                    </div>
                                    <div className="row mt-3">
                                        {showResults ? <FormAdd /> : null}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div class="container justify-content-center align-items-center">
                                            <form class="needs-validation" novalidate>
                                                <div class="row g-3">
                                                    <div class="col-sm-6">
                                                    <label for="Product" class="form-label fw-bold">Select Product<span className="text-danger"> *</span></label>
                                                        <select class="form-select" id="product" required >
                                                        <option value="">Choose...</option>
                                                        <option>Product 1</option>
                                                        <option>Product 2</option>
                                                        <option>product 3</option>
                                                    </select>
                                                    </div>

                                                    <div class="col-sm-6">
                                                    <label for="Product" class="form-label fw-bold">Select option<span className="text-danger"> *</span></label>
                                                        <select class="form-select" id="product" required >
                                                        <option value="">Choose...</option>
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                    </select>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <label for="firstName" class="form-label fw-bold">price increase<span className="text-danger"> *</span></label>
                                                        <input type="text" class="form-control" id="firstName" placeholder="" required />
                                                        <div class="invalid-feedback">
                                                            Valid first name is required.
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <label for="lastName" class="form-label fw-bold">Option Entity<span className="text-danger"> *</span></label>
                                                        <input type="text" class="form-control" id="lastName" placeholder="" required />
                                                        <div class="invalid-feedback">
                                                            Valid last name is required.
                                                        </div>
                                                    </div>
                                                </div>
                                        <hr class="my-4" />
                                        <button class="w-100 btn btn-primary btn-lg" type="submit">Save</button>
                                    </form>
                                </div>
                                {/* <div className="row g-3">
                                        <form className="needs-validation">
                                            <div className="col-sm-6">
                                                <label for="firstName " className="form-label fw-bolder">Categoy Name
                                                    <span className="require">&nbsp;*</span></label>
                                                <input type="text" className="form-control ms-2" id="firstName" placeholder="" required />
                                                <div className="invalid-feedback">
                                                    Valid first name is required.
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label for="firstName " className="form-label fw-bolder">Categoy Name
                                                    <span className="require">&nbsp;*</span></label>
                                                <input type="text" className="form-control ms-2" id="firstName" placeholder="" required />
                                                <div className="invalid-feedback">
                                                    Valid first name is required.
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label for="firstName " className="form-label fw-bolder">Categoy Name
                                                    <span className="require">&nbsp;*</span></label>
                                                <input type="text" className="form-control ms-2" id="firstName" placeholder="" required />
                                                <div className="invalid-feedback">
                                                    Valid first name is required.
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label for="firstName " className="form-label fw-bolder">Categoy Name
                                                    <span className="require">&nbsp;*</span></label>
                                                <input type="text" className="form-control ms-2" id="firstName" placeholder="" required />
                                                <div className="invalid-feedback">
                                                    Valid first name is required.
                                                </div>
                                            </div>
                                        </form>
                                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </DashboardLayout >
        </>
    );
}

export default ProductsOption;