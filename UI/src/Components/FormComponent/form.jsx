import './form.css'

function form(){
    return(
        <>
        
    {/* form section start */}
      <div class="booking_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-12 col-lg-8">
                  <div class="book_main">
                     <h1 class="book_text">Book  Your Vehicle</h1>
                     <div class="location_main">
                        <div class="row">
                           <div class="col-md-6">
                              <h2 class="location_text">Location</h2>
                              <input type="text" class="where_text" placeholder="Where" name="Where"/>
                           </div>
                           <div class="col-md-6">
                              <h2 class="location_text">To</h2>
                              <div class="form-group">
                                 <select class="form-control" id="exampleFormControlSelect1">
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
                     <div class="location_main">
                        <div class="row">
                           <div class="col-md-6">
                              <h2 class="location_text">Date </h2>
                              <input id="datepicker" width="100%" type="text" placeholder="01/12/2020" />
                           </div>
                           <div class="col-md-6">
                              <h2 class="location_text">Vehicle</h2>
                              <div class="dropdown show">
                                 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Select Truck</button>
                                 <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Truck Transport</a>
                                    <a class="dropdown-item" href="#">Air Transport</a>
                                    <a class="dropdown-item" href="#">ship Transport</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="submit_bt"><a href="#">Submit</a></div>
                  </div>
               </div>
               <div class="col-sm-12 col-lg-4">
                  <div><img src="./assets/images/img-1.png" class="image_1"/></div>
               </div>
            </div>
         </div>
      </div>
    {/* form section end */}
        </>
    )
}


export default form;