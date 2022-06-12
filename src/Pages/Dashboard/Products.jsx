import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import DashboardLayout from "../../Layouts/DashboardLayout";
import productService from "../../features/products/productService";
import { toast } from 'react-toastify';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [onDelete, setOnDelete] = useState(false);
    const [search, setSearch] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: null,
        quantity: null,
        
    })

    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

    const gotoPrevious = () => {
        setPage(Math.max(0, page - 1));
      };
    
      const gotoNext = () => {
        setPage(Math.min(numberOfPages - 1, page + 1));
      };

    const { name, description, price, quantity } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    useEffect(() => {

        window.scrollTo(0,0);
      
      }, []);
      
    useEffect(() => {


        productService.getProductsPagination(page,size).then((data) => {
            setProducts(data.content);
            setNumberOfPages(data.totalPages)
        })
            .catch((err) => console.log("error : fetching data failed", err))

    }, [onDelete,page,size])

 

    return (
        <DashboardLayout>
            <section class="col-md-9 w-100 col-lg-10 ">
            <div  className="row">
                <h3 className="fst-italic fw-bolder text-center mb-2 py-2">Products List</h3>
                <div  className="col-md-12 mb-3">
                    <div  className="card">
                        <div  className="card-header">
                            <span><i  className="fa fa-table me-2"></i>
                            </span> Products Table
                            <div className="float-end d-flex">
                            <input class="form-control form-control-dark w-100" type="text" value={search} placeholder="Search" aria-label="Search"  onChange={(e) => setSearch(e.target.value)}  />
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
                                            <th>Category</th>
                                            <th>Image</th>
                                            <th>Created At</th>
                                            <th>Updated At</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                           (products.length !== 0) ? (

                            products && products.filter((val) => {
                                if (search === "") {
                                    return val
                                } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                                    return val
                                }
                            }).map( (product, index) => {
                                return(
                                    <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                   {
                                       product['product-category'] ?  <td>{product['product-category'].name}</td> : <td>Unknown</td>
                                   }
                                    <td>{product.image}</td>
                                    <td>{product.createdAt}</td>
                                    <td>{product.updatedAt}</td>
                                    <td
                                    
                                   style={{
                                    'cursor' : 'pointer'
                                    }}
                                    >
                                        <Link className="text-success fw-bold text-decoration-none " to={`/dashboard/update/product/${product.id}`}>
                                        Update
                                        </Link>
                                        
                                        </td>
                                    <td 
                                    className="text-danger fw-bold"
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

                           ):(
                               
                             <></>
                           )
                                         
                                        }
                                      
                                       

                                    </tbody>
                                </table>
                            </div>
                        </div>
           
                    </div>
                </div>
            </div>
            <button onClick={gotoPrevious}>Previous</button>
      {pages.map((pageIndex) => (
        <button key={pageIndex} onClick={() => setPage(pageIndex)}>
          {pageIndex + 1}
        </button>
      ))}
      <button onClick={gotoNext}>Next</button>
            </section>
        </DashboardLayout>
    );
}

export default Products;