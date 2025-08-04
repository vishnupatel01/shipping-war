
import './service.css'

function services(){
    return (
        <>
        

  {/*  service section start */}
      <div class="blog_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <h1 class="blog_taital"> Service</h1>
                  <p class="services_text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit voluptate impedit a at iure. Eveniet nobis recusandae blanditiis illum iure? Odit, repellat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                  <div class="readmore_bt"><a href="#">Read More</a></div>
               </div>
               <div class="col-md-6">
                  <div id="main_slider" class="carousel slide" data-ride="carousel">
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="image_2"><img src="./assets/images/ttt.png"/></div>
                        </div>
                        <div class="carousel-item">
                           <div class="image_2"><img src="./assets/images/airoplane.png"/></div>
                        </div>
                        <div class="carousel-item">
                           <div class="image_2"><img src="./assets/images/Ship_img.jpg" height={"230px"}/></div>
                        </div>
                     </div>
                     <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                     <i class="fa fa-angle-left"></i>
                     </a>
                     <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                     <i class="fa fa-angle-right"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    {/* service section end*/}
        </>
    )
}

export default services;