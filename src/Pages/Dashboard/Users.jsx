import React from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";

const ListUsers = () => {
    return (
        <>
            <DashboardLayout>
                <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                    <div className="row">
                        <h3 className="fw-bolder text-center fst-italic">Users List</h3>
                        <div className="col-md-12 mb-3">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table class="table table-sm table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Full Name</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Date Registred</th>                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>25/02/2022</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>25/02/2022</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry </td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>25/02/2022</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
            </DashboardLayout>
        </>
    );
}

export default ListUsers; 