import './footer.css';     

function Footer(){
    return(
        <>
        
    {/* footer section start */}
      <div class="footer_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-lg-3 col-sm  -6">
                  <h3 class="rolio_text">Shipping WAR Tranporting</h3>
                  <p class="footer_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur</p>
                  <div class="social_icon">
                     <ul>
                        <li><a href="#"><img src="./assets/images/fb-icon.png"/></a></li>
                        <li><a href="#"><img src="./assets/images/twitter-icon.png"/></a></li>
                        <li><a href="#"><img src="./assets/images/linkedin-icon.png"/></a></li>
                        <li><a href="#"><img src="./assets/images/instagram-icon.png"/></a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                  <h3 class="rolio_text">Adderess</h3>
                  <p class="footer_text">Healing Center, 176 W Street name,Loram ipusum</p>
                  <div class="number_text"><a href="#">(+91) 8522369417</a></div>
                  <div class="number_text"><a href="#">(+91) 9876543210</a></div>
                  <div class="number_text"><a href="#">ShippingWar@gmail.com</a></div>
               </div>
               <div class="col-lg-3 col-sm-6">
                  <h3 class="rolio_text">Links</h3>
                  <div class="footer_menu">
                     <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Service</a></li>
                        <li><a href="reviews.html">locations Models Reviews</a></li>
                        <li><a href="locations.html">Locations</a></li>
                        <li><a href="contact.html">Contact</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                  <h3 class="rolio_text">Newsletter</h3>
                  <input type="text" class="mail_text" placeholder="Your Name" name="Your Name"/>
                  <input type="text" class="mail_text" placeholder="Email" name="Email"/>
                  <div class="subscribe_bt"><a href="#">Subscribe</a></div>
               </div>
            </div>
         </div>
      </div>
    {/* footer section end */}
    
        </>
    )
}

export default Footer;