import React, { useState, useEffect } from "react";
import categoryService from '../../features/categories/categoryService';
import productService from '../../features/products/productService';
import { Link, useParams } from "react-router-dom";
import Card from "../../Components/Products/Card";

const ByPopularity = () =>{
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const {name} = useParams();

    useEffect(() => {

        window.scrollTo(0,0);
      
      }, []);

    useEffect(() => {

        categoryService.getCategoryByName(name)
                       .then((data) => {
                           setCategory(data[0])
                           
                       })
                       .catch((err) => console.log("error",err))

    }, [name])

  
      
    useEffect(() => {


        productService.getProducts().then((data) => {
            setProducts(data)
        })
            .catch((err) => console.log("error : fetching data failed", err))

    }, [])
    // console.log(category)
    return(
        <>
                    <div class="col-md-8">
                <h3 class="pb-4 mb-4 fst-italic border-bottom">
                    Products By Popularity
                </h3>
                <article class="blog-post">
                    <h2 class="blog-post-title mb-5">Most Popular Products</h2>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-6">
                                {
                                    products && products.filter((item) => (item.productCategoryId == category.id )).map((product, index) => {
                                        return(
                                            <Card
                                            key={index}
                                            id={product.id}
                                            name={product.name}
                                            description={product.description}
                                            price={product.price}
                                            image={product.image}

                                        />
                                        )
                                    })
                                }
                            </div>
                          
                        </div>
                    </div>
                </article>

            </div>
        </>
    )
}

export default ByPopularity;