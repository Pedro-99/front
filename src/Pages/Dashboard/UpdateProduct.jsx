import React, { useEffect, useState } from "react";
import Spinner from '../../Components/spinner/index';
import {Link} from 'react-router-dom';
import productService from '../../features/products/productService';
import categoryService from '../../features/categories/categoryService';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLayout from "../../Layouts/DashboardLayout";

const UpdateProduct = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({
    name : "",
    description : "",
    price : 0,
    quantity : 0,
    // image : "",
    productCategoryId : 0
  });
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState(null);
  const [categoryOption, setCategoryOption] = useState("Unknown");

  const onChange = (e) => {
    setProduct((prevState) => ({
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


  useEffect(() => {
  
    productService.getProductById(parseInt(id))
      .then((data) => setProduct(data[0]))
      .catch((err) => console.log(err))
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

     
    productService.updateProduct(formData, parseInt(id) )
      .then((product)=>{
         
       if(product) toast.success('product updated successufully');
    })
    .catch((err)=> {
        toast.error(err.message);
    })
    

}

  const {
    name,
    description,
    price,
    quantity,
    // image,
    
  } = product

  console.log(image)
    return (
        <DashboardLayout>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <h1 className="text-center mb-3 text-uppercase text-warning shadow">Update Product</h1>
                        <div className="card p-4 mb-2">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label for="firstName" className="form-label fw-bold">Title <span className="text-danger"> *</span></label>
                                   {
                                     product ?  <input type="text" className="form-control" id="name" placeholder="" value={name}  onChange={onChange} name="name" required /> : <Spinner />
                                   }
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="lastName" className="form-label fw-bold">Price <span className="text-danger"> *</span></label>
                                    {
                                      product ? <input type="text" className="form-control" id="lastName" placeholder="" name="price" value={price} onChange={onChange} required /> : <Spinner />
                                    }
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
                                   {
                                     product ?  <input type="text" className="form-control" id="lastName" placeholder="" name="quantity" value={quantity} onChange={onChange} required />
                                     :
                                     <Spinner />
                                   }
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="description" className="form-label fw-bold">Description <span className="text-danger"> *</span></label>
                                    {
                                     product ?   <textarea type="text" className="form-control" value={description} name="description" onChange={onChange} id="description" placeholder="Apartment or suite" />
                                     :
                                     <Spinner />
                                   }
                                   
                                </div>

                                <div className="col-12">
                                    <label for="photo" className="form-label fw-bold">Photos <span className="text-danger"> *</span></label>
                                    {/* <div>
                                    <img src={image} alt={image} width="70px" height="70px"/>
                                    </div> */}
                                    <input 
                                     type="file"
                                    //  className="form-control"
                                     name="image"
                                     id="image"
                                     onChange={(e) => setImage( e.target.files[0].name)}
                                   
                                        />
                                </div>
                                <Link to="/dashboard/products"
                                 className="btn btn-outline-warning"
                                  onClick={handleSubmit}
                                  
                                  >Save</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}

export default UpdateProduct;