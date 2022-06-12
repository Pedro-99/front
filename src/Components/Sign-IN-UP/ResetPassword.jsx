import {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import authService from '../../features/auth/authService'
import "./Style.css";

 const ResetPassword = () => {
   const [password, setPassword] = useState('');
   const [isSuccess, setIsSuccess] = useState(false);
   const [message, setMessage] = useState("");
   const [error, setError] = useState("");
 
   const  {resetLink}  = useParams()

  const onSubmit = () => {
    authService.resetPassword(resetLink,password)
               .then((done)=>{
                console.log(done)
                    setIsSuccess(!isSuccess);
                    setMessage(done.message);
                
                 
                  
               })
               .catch((err) => {
               console.log(err)
               setError(err.response.data.error);
                
               })
              
  }

  return(
    <div className="style-body " id="style1">
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card">
         
           {
             isSuccess ?  <div>
               <p>{message}</p>
               <Link to='/login'>Go to login</Link>
             </div>
             :
             <div className="row d-flex">
               
             <div className="col-lg-6">
                 <div className="card border-0 style-card px-4 py-5">
                     
                     <div className="row px-3 mb-4">
                       
                         <h6 className="mb-0 mr-4 mt-2 ">Rest Password</h6>
                         <div className="line"></div>
                     </div>
                 
                     <div className="row px-3">
                         <label className="mb-1"><h6 className="mb-0 text-sm">New Password</h6></label>
                         <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" value={password} onChange={(e) => setPassword(e.target.value)} />
                     </div>
                     <div className="row mb-3 px-3">
                                 <button
                                 onClick={onSubmit}
                                  type="submit" class="btn btn-outline-dark text-center" >Submit</button>
                             </div>
                  
                            {
                              (error.length !== 0) ?  <><p>{error + ", "+"restart this operation please"}</p>
                              <Link to='/forget-password'>Click here</Link></> : <></>
                            }
                  
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

export default ResetPassword