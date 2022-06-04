import React, { useState, useEffect } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import categoryService from '../../features/categories/categoryService';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const FormAdd = () => {


    // useEffect(() => {

        // categoryService.addCategory().then( (data) => {
        //     setCategories(data)
        // })

    // }, [])

    return (
      <></>
    );
}
const ProductsCategories = () => {
    const [categories, setCategories] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [onSubmit, setOnSubmit] = useState(false);
    const [onDelete, setOnDelete] = useState(false);
    const [category, setCategory] = useState(null);
    const [name, setName] = useState("");


   const handleSubmit = (e) => {
        e.preventDefault();

        let category = {}
        category.name = name

        categoryService.addCategory(category)
          .then((category)=>{
            setOnSubmit(!onSubmit) 
           if(category) toast.success('category created successufully');
        })
        .catch((err)=> {
            toast.warning(err);
        })
        //  

    }

    const onClick = () => setShowResults(!showResults)
    // const onRerender = () => setOnSubmit(!onSubmit)

    useEffect(() => {

        categoryService.getCategories()
                       .then((data) => {
                           setCategories(data)
                       })

    }, [onSubmit,onDelete])

    // const handleMenuClick = (record, e) => {

    //     const { onDeleteItem, onEditItem } = props
    
    //     if (e.key === '1') {
    //       onEditItem(record)
    //     } else if (e.key === '2') {
    //       confirm({
    //         title: `Are you sure delete this record?`,
    //         onOk() {
    //           onDeleteItem(record.id)
    //         },
    //       })
    //     }
    //   }

    return (
        <>
            <DashboardLayout>
                <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                    <div className="row">
                        <h3 className="fst-italic fw-bolder text-center mb-2 py-2">Categories List</h3>
                        <div className="col-md-12 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <span><i className="fa fa-table me-2"></i>
                                    </span> Categories Table
                                    <div className="float-end d-flex">
                                        <button className="btn btn-outline-secondary" onClick={onClick}>Add Category</button>
                                    </div>
                                    <div className="row mt-3">
                                        {showResults ?   
            <form>
                <div class="col-md-4 d-flex">
                    <label for="firstName " className="form-label fw-bolder">Categoy Name
                        <span className="require">&nbsp;*</span></label>
                    <input
                        type="text"
                        className="form-control ms-2"
                        id="firstName"
                        name="name"
                        placeholder="Enter category name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        required
                    />
                    <button 
                    type="button"
                     className="btn btn-outline-secondary ms-2"
                     onClick={(e) => {
                        handleSubmit(e);
                        // onRerender()
                     } }
                      >Submit</button>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
            </form>
         : <></>}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table id="example" className="table table-striped data-table">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Category</th>
                                                    <th>Created At</th>
                                                    <th>Updated At</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    categories && categories.map((category, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{category.id}</td>
                                                                <td>{category.name}</td>
                                                                <td>{category.createdAt}</td>
                                                                <td>{category.updatedAt}</td>

                                                                <th><a className="text-dark" href="/Dashboard/Products/id">Update</a></th>
                                                                <th>
                                                                    <Link 
                                                                    className="text-dark"
                                                                    to="/dashboard/products/categories"
                                                                    onClick={() => {
                                                                        if(window.confirm('Are you sure you want to delete this item')){
                                                                            categoryService.deleteCategory(category.id)
                                                                            toast.error('category deleted successufully')
                                                                            setOnDelete(!onDelete)
                                                                        }
                                                                       
                                                                        // confirm(
                                                                        //     { title :`Are you sure delete this record?`,
                                                                        //      onOk : () => {categoryService.deleteCategory(category.id)}}
                                                                        //   )
                                                                       
                                                                    }}
                                                                    >
                                                                        Delete
                                                                    </Link>
                                                                </th>
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
        </>
    );
}

export default ProductsCategories;