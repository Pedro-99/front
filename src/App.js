import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Components/spinner/index';


const LazyRequireAuth = lazy(() => import('./Components/RequireAuth'));
const LazyNotFound = lazy(() => import('./Components/NotFound/NotFound'));
const LazyUnauthorized = lazy(() => import('./Components/Unauthorized'));
const LazyForgetPassword = lazy(() => import('./Components/Sign-IN-UP/ForgetPassword'));
const LazyResetPassword = lazy(() => import('./Components/Sign-IN-UP/ResetPassword'));
const LazyLogin = lazy(() => import('./Components/Sign-IN-UP/Login'));
const LazyRegister = lazy(() => import('./Components/Sign-IN-UP/Register'));
const LazyHomePage = lazy(() => import('./Pages/Home/Index'));
const LazyDashboardPage = lazy(() => import('./Pages/Dashboard/index'));
const LazyPageDetails = lazy(() => import('./Pages/Products/PageDetails'));
const LazyContactPage = lazy(() => import('./Pages/Contact/ContactPage'));
const LazySearchPage = lazy(() => import('./Pages/Search/SearchPage'));
const LazyProfile = lazy(() => import('./Pages/UsersProfile/Index.jsx'));
const LazyCart = lazy(() => import('./Components/Cart/Cart'));
const LazyCheckout = lazy(() => import('./Pages/Checkout/Index'));
const LazyProductsByCtaegory = lazy(() => import('./Pages/Categories/ProductsByCategories'));
const LazyAddProduct = lazy(() => import('./Pages/Dashboard/AddProduct'));
const LazyUpdateProduct = lazy(() => import('./Pages/Dashboard/UpdateProduct'));
const LazyProducts = lazy(() => import('./Pages/Dashboard/Products'));
const LazyProductsOutOfStock = lazy(() => import('./Pages/Dashboard/Stock'));
const LazyProductsCategories = lazy(() => import('./Pages/Dashboard/ProductsCategories'));
const LazyListUsers = lazy(() => import('./Pages/Dashboard/Users'));
const LazyOrder = lazy(() => import('./Components/Order'));




function App() {


  const ROLES = {
    'User': 'ROLE_USER',
    'Admin': 'ROLE_ADMIN'
  }

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/forget-password" element={<LazyForgetPassword />} />
          <Route path={`/resetpassword/user/:userId/:resetLink`} element={<LazyResetPassword />} />
          <Route path="/register" element={<LazyRegister />} />
          {["/home", "/"].map((path, index) =>
            <Route path={path} key={index} element={<LazyHomePage />}
            />
          )}
          <Route path='/products/:pid' element={<LazyPageDetails />} />
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path='/contact-us' element={<LazyContactPage />} />
          </Route>
          <Route path='/products' element={<LazySearchPage />} />
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path='/profile' element={<LazyProfile />} />
          </Route>
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path='/cart' element={<LazyCart />} />
          </Route>
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.User]} />}>
             <Route path='/order/:orderId' element={<LazyOrder />} />
          </Route>
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path='/cart/checkout' element={<LazyCheckout />} />
          </Route>
          <Route path='/products/category/:name' element={<LazyProductsByCtaegory />} />
   
          {/* dashboard routes */}
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path='/dashboard' element={<LazyDashboardPage />} />
          </Route>
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.Admin]} />}>

            <Route path='/dashboard/add/product' element={<LazyAddProduct />} />
          </Route>
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.Admin]} />}>

          <Route path='/dashboard/update/product/:id' element={<LazyUpdateProduct />} />
          </Route>
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.Admin]} />}>

          <Route path='/dashboard/products' element={<LazyProducts />} />
          </Route>
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.Admin]} />}>

          <Route path='/dashboard/products/stock' element={<LazyProductsOutOfStock />} />
          </Route>
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.Admin]} />}>

          <Route path='/dashboard/users' element={<LazyListUsers />} />
          </Route>
          <Route element={<LazyRequireAuth allowedRoles={[ROLES.Admin]} />}>

          <Route path='/dashboard/products/categories' element={<LazyProductsCategories />} />
          </Route>

        
        <Route path="/unauthorized" element={<LazyUnauthorized />} />
        <Route path='*' element={<LazyNotFound />} />
         
         
         
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
