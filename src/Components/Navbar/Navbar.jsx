import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice';
import categoryService from '../../features/categories/categoryService';
import { toast } from 'react-toastify';
import "./Navbar.css";

const Navbar = () => {
    // const [isMobile, SetIsMobile] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const [categories, setCategories] = useState(null)
    // const { cart } = useSelector( (state) => state.cart)
    const ROLE_ADMIN = "ROLE_ADMIN"

    useEffect( () => {
 
        categoryService.getCategories().then( (data) => {
            setCategories(data)
        })

    }, [])

 
    const [colorChange, setColorchange] = useState(false);
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
        toast.warn('user logged out');
    }
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (

        <>
            <nav className={colorChange ? 'navbar navbar-expand-md navbar-dark fixed-top background-color-down' : 'navbar navbar-expand-md navbar-dark fixed-top background-color'}>
                <div id="nav-style" className="container-fluid">
                    <a className="navbar-brand bg-transparent" href="/">
                        <img className="align-top img-style" src="/assests/logo2.png" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link link-dark active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link link-dark active dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                                    {
                                        categories ? categories.map( (category, index) => {
                                            return(
                                                <li key={index}>
                                                    <Link className="dropdown-item" to={`/products/category/${category.name}`}>{category.name}</Link>
                                                    </li>
                                            )
                                        }) : <>Loading...</>
                                    }
                                  
                                   
                                </ul>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link link-dark active dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    New
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href="#">Categorie 1</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 2</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 3</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 4</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <form className="d-flex align-items-center text-center justify-content-center">
                        <Link className="btn " to="/products" ><i className="fa fa-search me-1">
                             </i>
                              </Link>
                        
                        {
                             
                                (auth.user != null) ? (
                                    <>
                                   
                                      
                                        <Link to="/cart" className="btn  ms-2" type="submit"><i className="fa fa-shopping-cart me-1"></i></Link>
                                        <form className="d-flex align-items-center text-center justify-content-center">
                                    <div className="btn-group">
                                        <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                                                {/* <img src="/assests/profile.jpg" alt="mdo" width="24" height="24" className="rounded-circle" /> */}
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end text-small shadow" >
                                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                                {
                                                    auth.user && auth.user.roles.includes(ROLE_ADMIN) && 
                                                    <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                                                }
                                                <li><hr className="dropdown-divider" /></li>
                                                <li>   <Link className="btn dropdown-item " to='/' onClick={onLogout}>
                                            <i className="fa fa-sign-in me-1"></i> Logout
                                        </Link> </li>
                                            </ul>
                                        </div>
                                  
                                    </form>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className="btn  " type="submit"><i className="fa fa-sign-in me-1"></i> Login</Link>
                                        <Link to="/register" className="btn  ms-2" type="submit"><i className="fa fa-user-plus me-1"></i>Register</Link>
                                    </>

                                )
                            }
                          
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;