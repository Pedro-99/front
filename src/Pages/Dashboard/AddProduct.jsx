import React, { useState, useEffect } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import productService from '../../features/products/productService';
import categoryService from '../../features/categories/categoryService';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const AddProduct = () => {

    const [onSubmit, setOnSubmit] = useState(false);
    
    const [categories, setCategories] = useState(null);
    const [categoryOption, setCategoryOption] = useState("Unknown");
    const [image, setImage] = useState("");
   
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: null,
        quantity: null,
        
    })

    const { name, description, price, quantity } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    useEffect(() => {
        categoryService.getCategories()
            .then((categories) => {

                setCategories(categories)

            })
            .catch((err) => {
                toast.warning(err.msg);
            })
    }, [])
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('description',description);
        formData.append('price',parseFloat(price));
        formData.append('quantity',parseInt(quantity));
        formData.append('image',image);
        formData.append('categoryOption',parseInt(categoryOption));

         
        productService.createProduct(formData)
          .then((product)=>{
             
           if(product) toast.success('product created successufully');
        })
        .catch((err)=> {
            toast.error(err.message);
        })
        

    }
    return (
        <DashboardLayout>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <div className="card p-4 mb-2">
                            <div className="card-header mb-3 text-center">
                                <h1 className="text-secondary">Add Product</h1>
                            </div>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label for="firstName" className="form-label fw-bold">Name <span className="text-danger"> *</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="Enter product name"
                                        value={name}
                                        name="name"
                                        onChange={onChange}
                                        required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="lastName" className="form-label fw-bold">Price <span className="text-danger"> *</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="price"
                                        placeholder="Add price"
                                        value={price}
                                        name="price"
                                        onChange={onChange}
                                        required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="category" className="form-label fw-bold">Category <span className="text-danger"> *</span></label>
                                    <select 
                                    className="form-select"
                                     id="category"
                                     value={categoryOption}
                                     onChange= { (e) => {
                                         setCategoryOption(e.target.value)
                                     }} 
                                      required
                                      >
                                        {
                                            categories && categories.map((category, index) => {
                                                                                              
                                                return (

                                                    <option
                                                      
                                                        key={index}
                                                        value={category.id}
                                                    >
                                                        {category.name}
                                                    </option>

                                                )
                                            })
                                        }

                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid category.
                                    </div>
                                </div>


                                <div className="col-sm-6">
                                    <label for="lastName" className="form-label fw-bold">Quantity <span className="text-danger"> *</span></label>
                                    <input type="number"
                                     className="form-control"
                                      id="quantity"
                                       placeholder="Add product's quantity"
                                        value={quantity}
                                        onChange={onChange}
                                        name="quantity"
                                         required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="description" className="form-label fw-bold">Description <span className="text-danger"> *</span></label>
                                    <textarea type="text"
                                     className="form-control"
                                      id="description"
                                      name="description"
                                      placeholder="Write a description about your product"
                                      value={description}
                                      onChange={onChange}
                                      />
                                </div>

                                <div className="col-12">
                                    <label for="image" className="form-label fw-bold">Image <span className="text-danger"> *</span></label>
                                    <input 
                                     type="file"
                                    //  className="form-control"
                                     name="image"
                                     id="image"
                                     onChange={(e) => setImage( e.target.files[0].name)}
                                   
                                        />
                                </div>
                                <button 
                                      type="button"
                                      className="btn btn-outline-secondary"                                
                                      onClick={handleSubmit}
                                      >Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}

export default AddProduct;