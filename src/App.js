import DashboardPage from './Pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Sign-IN-UP/Login';
import Register1 from './Components/Sign-IN-UP/Register';
import HomePage from './Pages/Home/Index';
import PageDetails from './Pages/Products/PageDetails';
import ContactPage from './Pages/Contact/ContactPage';
import SearchPage from './Pages/Search/SearchPage';
// import Register from './Pages/Sign-IN-UP/Register';
import Profile from './Pages/UsersProfile/Index.jsx';
import AddProduct from './Pages/Dashboard/AddProduct';
import Products from './Pages/Dashboard/Products';
import ProductsOutOfStock from './Pages/Dashboard/Stock';
import ListUsers from './Pages/Dashboard/Users';
import ProductsCategories from './Pages/Dashboard/ProductsCategories';
import ProductsOption from './Pages/Dashboard/ProductsOptions';
import Cart from './Components/Cart/Cart';

function App() {
  
  // const user = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register1 />} />
        <Route path="/" element={<HomePage />} />
        <Route path='/products/:pid' element={<PageDetails />} />
        <Route path='/contact-us' element={<ContactPage />} />
        <Route path='/products' element={<SearchPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path="/profile" element={
          <ProtectedRoute  isAuth={ (user.isLoggedIn) ? true : false } >
            <Profile />
          </ProtectedRoute>
        } 
        /> */}
        {/* dashboard routes */}
        <Route path='/Dashboard' element={<DashboardPage />} />
        <Route path='/Dashboard/add/Product' element={<AddProduct />} />
        <Route path='/Dashboard/products' element={<Products />} />
        <Route path='/Dashboard/products/stock' element={<ProductsOutOfStock />} />
        <Route path='/Dashboard/Users' element={<ListUsers />} />
        <Route path='/Dashboard/products/Categories' element={<ProductsCategories />} />
        <Route path='/Dashboard/products/Options' element={<ProductsOption />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
