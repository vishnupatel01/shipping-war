
 import { useEffect, useState } from 'react';
import './header.css'
 import { Link } from 'react-router-dom';

function header(){

   const [HeaderContent, setHeaderContent] = useState();

   useEffect(()=>{
      setInterval(()=>{
      if(localStorage.getItem("token") != undefined && localStorage.getItem("role") == "admin"){
         setHeaderContent(
            <>
             <div class="header_section">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="logo" href="index.html"><img src="./assets/images/my_logo.png" height={"70px"} width={"85px"}/>SHIPPING WAR</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                     <a class="nav-link"><Link to={"/admin"}>Admin</Link></a>
                  </li>
              
                       
                  <li class="nav-item">
                     <a class="nav-link" ><Link to='/Manageusers'>Manageusers</Link></a>
                   </li>
                      
                      <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ 'color': 'black' }} >Category</a>
                    <div class="dropdown-menu rounded-0 m-0">
                      <a class="dropdown-item"><Link to="/AddCategory">AddCategory</Link></a>
                      <a class="dropdown-item"><Link to="/AddSubCategory">AddSubCategory</Link></a>
                    </div>
                  </div>
{/*                       
                    <li class="nav-item">
                     <a class="nav-link" ><Link to='/AddCategory'>AddCategory</Link></a>
                      </li>

                         <li class="nav-item">
                     <a class="nav-link" ><Link to='/AddCategory'>AddSubCategory</Link></a>
                      </li> */}

                      

                    <li class="nav-item">
                     <a class="nav-link" ><Link to='/Search'>Search</Link></a>
                      </li>

                  <li class="nav-item">
                     <a class="nav-link" ><Link to='/logout'>Logout</Link></a>
                 </li>

                  
                  
               </ul>
               <div class="search_icon"><a href="#"><img src="./assets/images/search-icon.png"/></a></div>
            </div>
         </nav>
      </div>
            </>
         )
      } else if(localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user")
      {
         setHeaderContent(<>
          <div class="header_section">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="logo" href="index.html"><img src="./assets/images/my_logo.png" height={"70px"} width={"85px"}/>SHIPPING WAR</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                     <a class="nav-link"><Link to="/user">User Home</Link></a>
                  </li>
                   <a class="nav-item nav-link"><Link to="/addproduct">Add Product</Link></a>
                            <a class="nav-item nav-link"><Link to="/search">Search</Link></a>
                  
                  <li class="nav-item">
                     <a class="nav-link" ><Link to='/logout'>Logout</Link></a>
                     
                  </li>
                  
               </ul>
               <div class="search_icon"><a href="#"><img src="./assets/images/search-icon.png"/></a></div>
            </div>
         </nav>
      </div></>)
      }else{
         setHeaderContent(<>
          <div class="header_section">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="logo" href="index.html"><img src="./assets/images/my_logo.png" height={"70px"} width={"85px"}/>SHIPPING WAR</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                     <a class="nav-link"><Link to={"/home"}>Home</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to={"/about"}>About</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to ={"/Register"}>Register</Link> </a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to={"/Service"}>Service</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to={"/Contact"}>Contact</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" ><Link to={"/Login"}>Login</Link></a>
                     
                  </li>
                  
               </ul>
               <div class="search_icon"><a href="#"><img src="./assets/images/search-icon.png"/></a></div>
            </div>
         </nav>
      </div>
         </>)
      }
      },1)
   },[])
    return(

        <>
           {HeaderContent}

        </>
    )
}

export default header;