import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [ email , setEmail ] = useState();    
  const [ password , setPassword ] = useState();
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    const userDetails={"email":email,"password":password};
    axios.post(__userapiurl+"login",userDetails).then((response)=>{
        //console.log(response.data);
        const user = response.data.userDetails;
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("name",user.name);
        localStorage.setItem("email",user.email);
        localStorage.setItem("mobile",user.mobile);
        localStorage.setItem("address",user.address);
        localStorage.setItem("city",user.city);
        localStorage.setItem("gender",user.gender);
        localStorage.setItem("role",user.role);
        localStorage.setItem("info",user.info);
        
        (user.role=="admin")?navigate("/admin"):navigate("/user");

      }).catch((error)=>{
        setEmail("");
        setPassword("");
        setOutput("Invalid user or please verify your account....");  
      });
  };

  return (
    <>
    {/* About Start */}

<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
<div class="col-lg-12">
<h2 style={{'color':'orange'}} >{output}</h2>              
<h1 class="mb-4">Login <span class="text-primary text-uppercase">Here!!!</span></h1>
<form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={(e)=>{ setEmail(e.target.value)}} />
  </div>

  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={(e)=>{ setPassword(e.target.value)}} />
  </div>
  <br/>
  <button type="button" class="btn btn-warning" onClick={handleSubmit}>Submit</button>
</form>    
</div>
        </div>
    </div>
</div>

{/* About End */}
    </>
  )
}

export default Login;
  

