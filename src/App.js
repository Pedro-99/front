import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Sign-IN-UP/Login';
import Register from './Components/Sign-IN-UP/Register';
import HomeLayout from './Components/Layouts/HomeLayout';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <>
    <Routes>
    <Route path="/Sign-IN" element={<Login />} />
    <Route path="/Sign-UP" element={<Register />} />
    <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
