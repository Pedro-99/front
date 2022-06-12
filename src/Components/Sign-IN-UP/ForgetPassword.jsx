import {useState, useEffect} from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import authService from '../../features/auth/authService'
import "./Style.css";

 const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const onSubmit = () => {
    authService.forgotPassword(email)
               .then((done)=>{
                  if(done) setIsSent(!isSent)
               })
              
  }

  return(
    <div className="style-body " id="style1">
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card">
           {
             isSent ?  <div>
               <p>Email has sent , check your email please.</p>
             </div>
             :
             <div className="row d-flex">
               
             <div className="col-lg-6">
                 <div className="card border-0 style-card px-4 py-5">
                     
                     <div className="row px-3 mb-4">
                       
                         <h6 className="mb-0 mr-4 mt-2 ">Forget Password</h6>
                         <div className="line"></div>
                     </div>
                 
                     <div className="row px-3">
                         <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                         <input className="mb-4" type="text" name="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                     </div>
                     <div className="row mb-3 px-3">
                                 <button
                                 onClick={onSubmit}
                                  type="submit" class="btn btn-outline-dark text-center" >Submit</button>
                             </div>
                  
                 
                  
                 </div>
             </div>
         </div>
           }
        </div>
        <div class="bg-dark text-white py-4">
            <div class="row px-3">
                <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2022. All rights reserved.</small>
                <div class="social-contact ml-4 ml-sm-auto">
                    <span class="fa fa-facebook mr-4 text-sm "></span>
                    <span class="fa fa-google-plus mr-4 text-sm ms-1 "></span>
                    <span class="fa fa-linkedin mr-4 text-sm ms-1"></span>
                    <span class="fa fa-twitter mr-4 mr-sm-5 text-sm ms-1"></span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ForgetPassword