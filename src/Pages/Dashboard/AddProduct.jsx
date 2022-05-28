import React from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";

const AddProduct = () => {
    return (
        <DashboardLayout>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <div className="card p-4 mb-2">
                            <div className="card-header mb-3 text-center">
                                <h1 className="text-secondary">Add Product</h1>
                            </div>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label for="firstName" className="form-label fw-bold">Title <span className="text-danger"> *</span></label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="lastName" className="form-label fw-bold">Price <span className="text-danger"> *</span></label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="country" className="form-label fw-bold">Category <span className="text-danger"> *</span></label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Category 1</option>
                                        <option>Category 2</option>
                                        <option>Category 3</option>
                                        <option>Category 4</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>


                                <div className="col-sm-6">
                                    <label for="lastName" className="form-label fw-bold">Quantity <span className="text-danger"> *</span></label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="address2" className="form-label fw-bold">Description <span className="text-danger"> *</span></label>
                                    <textarea type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                </div>

                                <div className="col-12">
                                    <label for="photo" className="form-label fw-bold">Photos <span className="text-danger"> *</span></label>
                                    <input type="file" className="form-control" id="photo" />
                                </div>
                                <button type="button" className="btn btn-outline-secondary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}

export default AddProduct;