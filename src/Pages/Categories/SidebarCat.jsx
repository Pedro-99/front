import React, { useState, useEffect } from "react";
import categoryService from '../../features/categories/categoryService';
import { Link } from "react-router-dom";

const SidebarCat = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {

        categoryService.getCategories()
                       .then((data) => {
                           setCategories(data)
                       })

    }, [])
    return (
        <>
            <div class="col-md-4">
                <div class="position-sticky" >
                    <div class="p-4 mb-3 bg-light rounded">
                        <h4 class="fst-italic">Chose your filter</h4>
                        <p class="mb-0"> Take you opportunity.</p>
                    </div>

                    <div class="p-4">
                        <h4 class="fst-italic">Categories</h4>
                        <ol class="list-unstyled mb-0">
                            {
                           categories && categories.map((category, index) => {
                               return(
                                   <li><Link className="nav-link fw-bold" to={`/products/category/${category.name}`}>{category.name}</Link></li>

                               )
                           })
                            }
                          
                        </ol>
                    </div>

                    <div class="p-4">
                        <h4 class="fst-italic">filter :</h4>
                        <ol class="list-unstyled">
                            <li><a className="nav-link" href="#">by popularity</a></li>
                            <li><a className="nav-link" href="#">by price</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SidebarCat