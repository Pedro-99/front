import React, { useState, useEffect } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import categoryService from '../../features/categories/categoryService';

const FormAdd = () => {
    return (
        <>
            <form>
                <div class="col-md-4 d-flex">
                    <label for="firstName " className="form-label fw-bolder">Categoy Name
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
const ProductsCategories = () => {
    const [categories, setCategories] = useState(null);
    const [showResults, setShowResults] = useState(false)

    const onClick = () => setShowResults(true)

    useEffect( () => {
 
        categoryService.getCategories().then( (data) => {
            setCategories(data)
        })

    }, [])
    
    return (
        <>
            <DashboardLayout>
                <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                    <div className="row">
                        <h3 className="fst-italic fw-bolder text-center mb-2 py-2">Categories List</h3>
                        <div className="col-md-12 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <span><i className="fa fa-table me-2"></i>
                                    </span> Categories Table
                                    <div className="float-end d-flex">
                                        <button className="btn btn-outline-secondary" onClick={onClick}>Add Category</button>
                                    </div>
                                    <div className="row mt-3">
                                    { showResults ? <FormAdd /> : null }
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table id="example" className="table table-striped data-table">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Category</th>
                                                    <th>Created At</th>
                                                    <th>Updated At</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    categories && categories.map( (category, index) => {
                                                        return(
                                                            <tr key={index}>
                                                            <td>{category.id}</td>
                                                            <td>{category.name}</td>
                                                            <td>{category.createdAt}</td>
                                                            <td>{category.updatedAt}</td>
                                                           
                                                            <th><a className="text-dark" href="/Dashboard/Products/id">Update</a></th>
                                                            <th><a className="text-dark" href="/Dashboard/Products/id">Delete</a></th>
                                                        </tr>
                                                        )
                                                    })
                                                }
                                               
                                              
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DashboardLayout>
        </>
    );
}

export default ProductsCategories;