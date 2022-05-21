import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSignInAlt, FaSignOutAlt, FaUser, FaShoppingCart } from 'react-icons/fa'
import { logout, reset } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, SetIsMobile] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
    toast.warn('user logged out');
  }
  return (
    <div className="nav">
      <div className="leftSide">
        <Link to='/'>
          <img className="logo" src={logo} />
        </Link>


      </div>

      <div className="rightSide">
        {
          user ? (
            <>
            <Link to='/' >
              <FaShoppingCart />
            </Link>
              <span onClick={onLogout} style={{ cursor: 'pointer' }}>
                <FaSignOutAlt /> Logout
              </span>
            </>
          ) : (
            <>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </>

          )
        }

      </div>
    </div>
  )
}
export default Navbar