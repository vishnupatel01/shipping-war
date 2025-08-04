import "./App.css";

import { Route, Routes } from "react-router-dom";
import Header from "./Components/HeaderComponent/header";
import Form from "./Components/FormComponent/form";
import Pricing from "./Components/PricingComponent/pricing";
import Service from "./Components/ServiceComponent/service";
import About from "./Components/AboutComponent/about";
import Contact from "./Components/ContactComponent/contact";
import Register from "./Components/RegisterComponent/register";
import Footer from "./Components/FooterComponent/footer";
import Home from "./Components/HomeComponent/home";
import Login from "./Components/LoginComponent/login";
import Logout from "./Components/LogoutComponent/Logout";
import Admin from "./Components/AdminComponent/Admin";
import User from "./Components/UserComponent/User";
import AddCategory from "./Components/AddCategoryComponent/AddCategory";
import AddSubCategory from "./Components/AddSubCategoryComponent/AddSubCategory";
import Manageusers from "./Components/ManageusersComponent/Manageusers";
import Search from "./Components/SearchComponent/Search";
import Addproduct from "./Components/Addproduct/Addproduct";
import CPAdmin from "./Components/CPAdminComponent/CPAdmin";
import EPAdmin from "./Components/EPAdminComponent/EPAdmin";
import Searchsc from "./Components/SearchscComponent/Searchsc";
import Auth from "./Components/AuthComponent/Auth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        <Route path="/Pricing" element={<Pricing />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Footer" element={<Footer />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Logout" element={<Logout />}></Route>               
        <Route path="/Auth" element={<Auth />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/EPAdmin" element={<EPAdmin />}></Route>
        <Route path="/CPAdmin" element={<CPAdmin />}></Route>
        <Route path="/Manageusers" element={<Manageusers />}></Route>
        <Route path="/AddCategory" element={<AddCategory />}></Route>
        <Route path="/AddSubCategory" element={<AddSubCategory />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/Addproduct" element={<Addproduct />}></Route>
        <Route path="/Search" element={<Search />}></Route>
          <Route path="/Searchsc/:catnm" element={<Searchsc />}></Route>

      </Routes>

      {/* copyright section start  */}
      {/* <div class="copyright_section">
      <div class="container">
        <div class="copyright_text">
        Shipping War 2025  Revolutionizing Global Transport.
          <a href="https://html.design"></a>
        </div>
      </div>
    </div> */}
      {/* copyright section end  */}
    </>
  );
}

export default App;
