import React from "react";
import CartLayout from "../../Layouts/CartLayout";
const UserInfo = () => {
    return (
        <>
            <CartLayout >
                <div id="UserInfo">
                <div  className="cont-checkout cont-div ">
                <div  className="container cont-checkout">
                    <main className="cont-checkout ">
                        <div className="py-5 text-center">
                            <h2>Checkout form</h2>
                            <p className="lead">complete this below form </p>
                        </div>

                        <div className="row g-5">
                            {/* <div className="col-md-5 col-lg-4 order-md-last">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-primary">Your cart</span>
                                    <span className="badge bg-primary rounded-pill">3</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">Product name</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$12</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">Second product</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$8</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">Third item</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$5</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (USD)</span>
                                        <strong>$20</strong>
                                    </li>
                                </ul>

                                <form className="card p-2">
                                        <button type="submit" className="btn btn-secondary">Redeem</button>
                                </form>
                            </div> */}
                            <div className="col-md-7 col-lg-8">
                                <form className="needs-validation" novalidate>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label for="firstName" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="firstName" name="firstname" placeholder=""   required />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label for="lastName" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="" name="lastname"    required />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label for="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="" name="email"    required />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label for="phone" className="form-label">Phone</label>
                                            <input type="number" className="form-control" name="phone" id="phone" placeholder=""  required />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" name="address"  required />
                                            <div className="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                            <input type="text" className="form-control" id="address2" name="address2"  placeholder="Apartment or suite" />
                                        </div>

                                        <div className="col-md-5">
                                            <label for="country" className="form-label">Country</label>
                                            <input type="text" className="form-control" id="zip" placeholder=""  name="country"  required />
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <label for="state" className="form-label">City</label>
                                            <input type="text" className="form-control" id="zip" placeholder=""  name="city" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <label for="zip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="zip" placeholder="" name="zip"  required />
                                            <div className="invalid-feedback">
                                                Zip code required.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 my-3">
                                    <label  className="form-label">Gender</label>
                                    <div className="my-2">
                                    <div className="form-check">
                                            <input id="male" name="paymentMethod" type="radio" className="form-check-input" checked required />
                                            <label className="form-check-label" for="male">Male</label>
                                        </div>
                                        <div className="form-check">
                                            <input id="famale" name="paymentMethod" type="radio" className="form-check-input" required />
                                            <label className="form-check-label" for="famale">Famale</label>
                                        </div>
                                         </div>
                                         </div>
                                    <hr className="my-4" />
                                    {/* <a href="/arynass-frontend/#/cart/order-details"> */}
                                    <a className="w-100 btn btn-primary btn-lg" href="/arynass-frontend/#/cart/order-details">Continue to checkout</a>
                                    {/* </a> */}
                                </form>
                            </div>
                        </div>
                    </main>

                    <footer className="py-4 mt-5 text-muted text-center text-small">
                        <span className="">&copy; 2022–2023 ARYNASS <span className="fst-italic">cosmitics</span></span>
                        {/* <ul className="list-inline">
                        </ul> */}
                    </footer>
                </div>
                </div>
                </div>
            </CartLayout>

        </>
    );
}

export default UserInfo;