import './Contact.css';

function Contact(){
    return(
        <>
        
        
    {/* contact section start */}
      <div className="contact_section layout_padding">
   
            <h1 className="contact_taital">Contact Us</h1>
            <div className="contact_section_2">
               <div className="row">
                  <div className="col-md-8">
                     <div className="map_main">
                        <div className="map-responsive">
                           <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="420" frameBorder="0" style={{"border":"0", "width": "100%" }} allowFullScreen=""></iframe>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="email_text">
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Name" name="Email"/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Phone Numbar" name="Email"/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Email" name="Email"/>
                        </div>
                        <div className="form-group">
                           <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                        </div>
                        <div className="send_btn"><a href="#">SEND</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
     
    {/* contact section end */}
        
        </>
    )

} export default Contact;