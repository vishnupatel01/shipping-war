import './banner.css'

function banner(){

    return(
        <>
         {/* banner section start */}
      <div class="banner_section layout_padding">
         <div id="my_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     <div class="banner_main">
                        <h1 class="banner_taital">Welcome to Shipping War Transport</h1>
                        <div class="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <div class="banner_main">
                        <h1 class="banner_taital">Welcome to Shipping War Transport</h1>
                        <div class="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <div class="banner_main">
                        <h1 class="banner_taital">Welcome to Shipping War Transport</h1>
                        <div class="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
               </div>
            </div>
            <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
            <i class=""><img src="./assets/images/left-arrow.png"/></i>
            </a>
            <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
            <i class=""><img src="./assets/images/right-arrow.png"/></i>
            </a>
         </div>
      </div>
    {/* banner section end */}

        </>
    )
}

export default banner;