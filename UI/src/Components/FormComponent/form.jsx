import './form.css'

function form(){
    return(
        <>
        
    {/* form section start */}
      <div className="booking_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12 col-lg-8">
                  <div className="book_main">
                     <h1 className="book_text">Book  Your Vehicle</h1>
                     <div className="location_main">
                        <div className="row">
                           <div className="col-md-6">
                              <h2 className="location_text">Location</h2>
                              <input type="text" className="where_text" placeholder="Where" name="Where"/>
                           </div>
                           <div className="col-md-6">
                              <h2 className="location_text">To</h2>
                              <div className="form-group">
                                 <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Drop Your iteam</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="location_main">
                        <div className="row">
                           <div className="col-md-6">
                              <h2 className="location_text">Date </h2>
                              <input id="datepicker" width="100%" type="text" placeholder="01/12/2020" />
                           </div>
                           <div className="col-md-6">
                              <h2 className="location_text">Vehicle</h2>
                              <div className="dropdown show">
                                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Select Truck</button>
                                 <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Truck Transport</a>
                                    <a className="dropdown-item" href="#">Air Transport</a>
                                    <a className="dropdown-item" href="#">ship Transport</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="submit_bt"><a href="#">Submit</a></div>
                  </div>
               </div>
               <div className="col-sm-12 col-lg-4">
                  <div><img src="./assets/images/img-1.png" className="image_1"/></div>
               </div>
            </div>
         </div>
      </div>
    {/* form section end */}
        </>
    )
}


export default form;