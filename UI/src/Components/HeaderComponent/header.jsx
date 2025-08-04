
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
             <div className="header_section">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="logo" href="index.html"><img src="./assets/images/my_logo.png" height={"70px"} width={"85px"}/>SHIPPING WAR</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                     <a className="nav-link"><Link to={"/admin"}>Admin</Link></a>
                  </li>
              
                       
                  <li className="nav-item">
                     <a className="nav-link" ><Link to='/Manageusers'>Manageusers</Link></a>
                   </li>
                      
                      <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ 'color': 'black' }} >Category</a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <a className="dropdown-item"><Link to="/AddCategory">AddCategory</Link></a>
                      <a className="dropdown-item"><Link to="/AddSubCategory">AddSubCategory</Link></a>
                    </div>
                  </div>
{/*                       
                    <li className="nav-item">
                     <a className="nav-link" ><Link to='/AddCategory'>AddCategory</Link></a>
                      </li>

                         <li className="nav-item">
                     <a className="nav-link" ><Link to='/AddCategory'>AddSubCategory</Link></a>
                      </li> */}

                      

                    <li className="nav-item">
                     <a className="nav-link" ><Link to='/Search'>Search</Link></a>
                      </li>

                  <li className="nav-item">
                     <a className="nav-link" ><Link to='/logout'>Logout</Link></a>
                 </li>

                  
                  
               </ul>
               <div className="search_icon"><a href="#"><img src="./assets/images/search-icon.png"/></a></div>
            </div>
         </nav>
      </div>
            </>
         )
      } else if(localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user")
      {
         setHeaderContent(<>
          <div className="header_section">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="logo" href="index.html"><img src="./assets/images/my_logo.png" height={"70px"} width={"85px"}/>SHIPPING WAR</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                     <a className="nav-link"><Link to="/user">User Home</Link></a>
                  </li>
                   <a className="nav-item nav-link"><Link to="/addproduct">Add Product</Link></a>
                            <a className="nav-item nav-link"><Link to="/search">Search</Link></a>
                  
                  <li className="nav-item">
                     <a className="nav-link" ><Link to='/logout'>Logout</Link></a>
                     
                  </li>
                  
               </ul>
               <div className="search_icon"><a href="#"><img src="./assets/images/search-icon.png"/></a></div>
            </div>
         </nav>
      </div></>)
      }else{
         setHeaderContent(<>
          <div className="header_section">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="logo" href="index.html"><img src="./assets/images/my_logo.png" height={"70px"} width={"85px"}/>SHIPPING WAR</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                     <a className="nav-link"><Link to={"/home"}>Home</Link></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link"><Link to={"/about"}>About</Link></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link"><Link to ={"/Register"}>Register</Link> </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link"><Link to={"/Service"}>Service</Link></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link"><Link to={"/Contact"}>Contact</Link></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" ><Link to={"/Login"}>Login</Link></a>
                     
                  </li>
                  
               </ul>
               <div className="search_icon"><a href="#"><img src="./assets/images/search-icon.png"/></a></div>
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