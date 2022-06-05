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
    
    return(
        <>
                    <div class="col-md-8">
                <h3 class="pb-4 mb-4 fst-italic border-bottom">
                    Products By Category
                </h3>
                <article class="blog-post">             
                    <div className="container">
                        <div className="row">
                            
                                {
                                    products && products.filter((item) => (item.productCategoryId == category.id )).map((product, index) => {
                                        return(
                                            <div className="col-sm-6">
                                            <Card
                                            key={index}
                                            id={product.id}
                                            name={product.name}
                                            description={product.description}
                                            price={product.price}
                                            image={product.image}

                                        />
                                        </div>
                                        )
                                    })
                                }
                            
                          
                        </div>
                    </div>
                </article>

            </div>
        </>
    )
}

export default ByPopularity;