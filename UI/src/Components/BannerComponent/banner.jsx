import './banner.css'

function banner(){

    return(
        <>
         {/* banner section start */}
      <div className="banner_section layout_padding">
         <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="banner_main">
                        <h1 className="banner_taital">Welcome to Shipping War Transport</h1>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="banner_main">
                        <h1 className="banner_taital">Welcome to Shipping War Transport</h1>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="banner_main">
                        <h1 className="banner_taital">Welcome to Shipping War Transport</h1>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
            <i className=""><img src="./assets/images/left-arrow.png"/></i>
            </a>
            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
            <i className=""><img src="./assets/images/right-arrow.png"/></i>
            </a>
         </div>
      </div>
    {/* banner section end */}

        </>
    )
}

export default banner;