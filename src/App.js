import {lazy,Suspense} from 'react'
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Components/spinner/index';
// import Login from './Components/Sign-IN-UP/Login';
// import Register1 from './Components/Sign-IN-UP/Register';
// import HomePage from './Pages/Home/Index';
// import PageDetails from './Pages/Products/PageDetails';
// import ContactPage from './Pages/Contact/ContactPage';
// import SearchPage from './Pages/Search/SearchPage';
// import Profile from './Pages/UsersProfile/Index.jsx';
// import AddProduct from './Pages/Dashboard/AddProduct';
// import Products from './Pages/Dashboard/Products';
// import ProductsOutOfStock from './Pages/Dashboard/Stock';
// import ListUsers from './Pages/Dashboard/Users';
// import ProductsCategories from './Pages/Dashboard/ProductsCategories';
// import DashboardPage from './Pages/Dashboard';
// import ProductsOption from './Pages/Dashboard/ProductsOptions';
// import Cart from './Components/Cart/Cart';

const LazyLogin = lazy(() => import('./Components/Sign-IN-UP/Login'));
const LazyRegister = lazy(() => import('./Components/Sign-IN-UP/Register'));
const LazyHomePage = lazy(() => import('./Pages/Home/Index'));
const LazyDashboardPage = lazy(() => import('./Pages/Dashboard/index'));
const LazyPageDetails = lazy(() => import('./Pages/Products/PageDetails'));
const LazyContactPage = lazy(() => import('./Pages/Contact/ContactPage'));
const LazySearchPage = lazy(() => import('./Pages/Search/SearchPage'));
const LazyProfile = lazy(() => import('./Pages/UsersProfile/Index.jsx'));
const LazyCart = lazy(() => import('./Components/Cart/Cart'));
const LazyAddProduct = lazy(() => import('./Pages/Dashboard/AddProduct'));
const LazyProducts = lazy(() => import('./Pages/Dashboard/Products'));
const LazyProductsOutOfStock = lazy(() => import('./Pages/Dashboard/Stock'));
const LazyProductsCategories = lazy(() => import('./Pages/Dashboard/ProductsCategories'));
const LazyListUsers = lazy(() => import('./Pages/Dashboard/Users'));
const LazyProductsOption = lazy(() => import('./Pages/Dashboard/ProductsOptions'));

function App() {
  
  // const user = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <div>
        <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path="/login" element={<LazyLogin />} />
        <Route path="/register" element={<LazyRegister />} />
        <Route path="/" element={<LazyHomePage />} />
        <Route path='/products/:pid' element={<LazyPageDetails />} />
        <Route path='/contact-us' element={<LazyContactPage />} />
        <Route path='/products' element={<LazySearchPage />} />
        <Route path='/profile' element={<LazyProfile />} />
        <Route path='/cart' element={<LazyCart />} />
        {/* <Route path="/profile" element={
          <ProtectedRoute  isAuth={ (user.isLoggedIn) ? true : false } >
            <Profile />
          </ProtectedRoute>
        } 
        /> */}
        {/* dashboard routes */}
        <Route path='/dashboard' element={<LazyDashboardPage />} />
        <Route path='/dashboard/add/product' element={<LazyAddProduct />} />
        <Route path='/dashboard/products' element={<LazyProducts />} />
        <Route path='/dashboard/products/stock' element={<LazyProductsOutOfStock />} />
        <Route path='/dashboard/users' element={<LazyListUsers />} />
        <Route path='/dashboard/products/categories' element={<LazyProductsCategories />} />
        <Route path='/dashboard/products/options' element={<LazyProductsOption />} />
      </Routes>
        </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
