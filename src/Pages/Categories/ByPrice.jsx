import React from "react";
import Card from "../../Components/Products/Card";
const ByPrice = () => {
    return (
        <>
            <div class="col-md-8">
                <h3 class="pb-4 mb-4 fst-italic border-bottom">
                    Products By Price
                </h3>
                <div className="col-sm-6 mb-2">
                    <label for="country" className="form-label fst-italic fw-bold">Choose your filter </label>
                    <select className="form-select" id="country" required>
                        <option value="">Price 1</option>
                        <option>Price 2</option>
                        <option>Price 3</option>
                        <option>Price 4</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid country.
                    </div>
                </div>

                <article class="blog-post">
                    <h2 class="blog-post-title mb-5">category name</h2>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-6">
                                {/* <Card /> */}
                            </div>
                            <div className="col-6">
                                {/* <Card /> */}
                            </div>
                            <div className="col-6">
                                {/* <Card /> */}
                            </div>
                            <div className="col-6">
                                {/* <Card /> */}
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        </>
    )
}

export default ByPrice;