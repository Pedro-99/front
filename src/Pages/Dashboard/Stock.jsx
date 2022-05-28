import React from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";


const ProductsOutOfStock = () => {
    return (
        <>
        <DashboardLayout>
            <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                <div className="row mt-5">
                    <div className="col-md-12 mb-3">
                        <div className="card">
                            <div className="card-header">
                                <span><i className="fa fa-table me-2"></i>
                                </span> Products Out Of Stock
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table
                                        id="example"
                                        className="table table-striped data-table"

                                    >
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Category</th>
                                                <th>Created At</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>Tiger Nixon</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Add Quantity</a></th>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Delete</a></th>
                                            </tr>
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Tokyo</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Add Quantity</a></th>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Delete</a></th>
                                            </tr>
                                            <tr>
                                                <td>Ashton Cox</td>
                                                <td>San Francisco</td>
                                                <td>2009/01/12</td>
                                                <td>$86,000</td>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Add Quantity</a></th>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Delete</a></th>
                                            </tr>
                                            <tr>
                                                <td>Cedric Kelly</td>
                                                <td>Edinburgh</td>
                                                <td>2012/03/29</td>
                                                <td>$433,060</td>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Add Quantity</a></th>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Delete</a></th>
                                            </tr>
                                            <tr>
                                                <td>Airi Satou</td>
                                                <td>Tokyo</td>
                                                <td>2008/11/28</td>
                                                <td>$162,700</td>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Add Quantity</a></th>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Delete</a></th>
                                            </tr>
                                            <tr>
                                                <td>Brielle Williamson</td>
                                                <td>New York</td>
                                                <td>2012/12/02</td>
                                                <td>$372,000</td>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Add Quantity</a></th>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Delete</a></th>
                                            </tr>
                                            <tr>
                                                <td>Herrod Chandler</td>
                                                <td>San Francisco</td>
                                                <td>2012/08/06</td>
                                                <td>$137,500</td>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Add Quantity</a></th>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Delete</a></th>
                                            </tr>
                                            <tr>
                                                <td>Rhona Davidson</td>
                                                <td>Tokyo</td>
                                                <td>2010/10/14</td>
                                                <td>$327,900</td>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Add Quantity</a></th>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Delete</a></th>
                                            </tr>
                                            <tr>
                                                <td>Colleen Hurst</td>
                                                <td>San Francisco</td>
                                                <td>2009/09/15</td>
                                                <td>$205,500</td>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Add Quantity</a></th>
                                                <th><a className="text-dark" href="/Dashboard/Products/id">Delete</a></th>
                                            </tr>

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

export default ProductsOutOfStock;