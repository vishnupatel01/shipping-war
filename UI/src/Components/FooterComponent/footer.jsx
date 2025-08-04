import './footer.css';     

function Footer(){
    return(
        <>
        
    {/* footer section start */}
      <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-sm  -6">
                  <h3 className="rolio_text">Shipping WAR Tranporting</h3>
                  <p className="footer_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur</p>
                  <div className="social_icon">
                     <ul>
                        <li><a href="#"><img src="./assets/images/fb-icon.png"/></a></li>
                        <li><a href="#"><img src="./assets/images/twitter-icon.png"/></a></li>
                        <li><a href="#"><img src="./assets/images/linkedin-icon.png"/></a></li>
                        <li><a href="#"><img src="./assets/images/instagram-icon.png"/></a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h3 className="rolio_text">Adderess</h3>
                  <p className="footer_text">Healing Center, 176 W Street name,Loram ipusum</p>
                  <div className="number_text"><a href="#">(+91) 8522369417</a></div>
                  <div className="number_text"><a href="#">(+91) 9876543210</a></div>
                  <div className="number_text"><a href="#">ShippingWar@gmail.com</a></div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h3 className="rolio_text">Links</h3>
                  <div className="footer_menu">
                     <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Service</a></li>
                        <li><a href="reviews.html">locations Models Reviews</a></li>
                        <li><a href="locations.html">Locations</a></li>
                        <li><a href="contact.html">Contact</a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h3 className="rolio_text">Newsletter</h3>
                  <input type="text" className="mail_text" placeholder="Your Name" name="Your Name"/>
                  <input type="text" className="mail_text" placeholder="Email" name="Email"/>
                  <div className="subscribe_bt"><a href="#">Subscribe</a></div>
               </div>
            </div>
         </div>
      </div>
    {/* footer section end */}
    
        </>
    )
}

export default Footer;