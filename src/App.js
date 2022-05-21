import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import Login from './Components/Sign-IN-UP/Login';
import Register from './Components/Sign-IN-UP/Register';
// import ProtectedRoute from './Components/ProtectedRoute/index';
// import Profile from './Components/UsersProfile/Profile';


function App() {
  
  // const user = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/profile" element={
          <ProtectedRoute  isAuth={ (user.isLoggedIn) ? true : false } >
            <Profile />
          </ProtectedRoute>
        } 
        /> */}



      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
