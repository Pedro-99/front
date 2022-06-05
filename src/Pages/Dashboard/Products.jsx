import React, {useState, useEffect} from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import productService from "../../features/products/productService";
import { toast } from 'react-toastify';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [onDelete, setOnDelete] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {

        window.scrollTo(0,0);
      
      }, []);
      
    useEffect(() => {


        productService.getProducts().then((data) => {
            setProducts(data)
        })
            .catch((err) => console.log("error : fetching data failed", err))

    }, [onDelete])

    // const updateProduct = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('name',name);
    //     formData.append('description',description);
    //     formData.append('price',parseFloat(price));
    //     formData.append('quantity',parseInt(quantity));
    //     formData.append('image',image);
    //     formData.append('categoryOption',parseInt(categoryOption));

         
    //     productService.updateProduct(formData)
    //       .then((product)=>{
             
    //        if(product) toast.success('product updated successufully');
    //     })
    //     .catch((err)=> {
    //         toast.error(err.message);
    //     })
        

    // }

    return (
        <DashboardLayout>
            <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
            <div  className="row">
                <h3 className="fst-italic fw-bolder text-center mb-2 py-2">Products List</h3>
                <div  className="col-md-12 mb-3">
                    <div  className="card">
                        <div  className="card-header">
                            <span><i  className="fa fa-table me-2"></i>
                            </span> Products Table
                            <div className="float-end d-flex">
                            <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary">Search</button>
                            </div>
                        </div>
                        <div  className="card-body">
                            <div  className="table-responsive">
                                <table
                                    id="example"
                                     className="table table-striped data-table"

                                >
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Product Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Image</th>
                                            <th>Created At</th>
                                            <th>Updated At</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products && products.map( (product, index) => {
                                                return(
                                                    <tr key={index}>
                                                    <td>{product.id}</td>
                                                    <td>{product.name}</td>
                                                    <td>{product.description}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>{product.image}</td>
                                                    <td>{product.createdAt}</td>
                                                    <td>{product.updatedAt}</td>
                                                    <td
                                                   style={{
                                                    'cursor' : 'pointer'
                                                    }}
                                                    >
                                                        Update
                                                        </td>
                                                    <td 
                                                      style={{
                                                          'cursor' : 'pointer'
                                                      }}
                                                           onClick={() => {
                                                            if(window.confirm('Are you sure you want to delete this product')){
                                                                productService.deleteProduct(product.id).then((response)=>{
                                                                    setOnDelete(!onDelete)
                                                                    
                                                                    toast.error(response.message)
                                                                })
                                                               
                                                            }
                                                           
                                                        }}
                                                    >Delete</td>
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
    );
}

export default Products;