
import './service.css'

function services(){
    return (
        <>
        

  {/*  service section start */}
      <div className="blog_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <h1 className="blog_taital"> Service</h1>
                  <p className="services_text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit voluptate impedit a at iure. Eveniet nobis recusandae blanditiis illum iure? Odit, repellat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                  <div className="readmore_bt"><a href="#">Read More</a></div>
               </div>
               <div className="col-md-6">
                  <div id="main_slider" className="carousel slide" data-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="image_2"><img src="./assets/images/ttt.png"/></div>
                        </div>
                        <div className="carousel-item">
                           <div className="image_2"><img src="./assets/images/airoplane.png"/></div>
                        </div>
                        <div className="carousel-item">
                           <div className="image_2"><img src="./assets/images/Ship_img.jpg" height={"230px"}/></div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                     <i className="fa fa-angle-left"></i>
                     </a>
                     <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                     <i className="fa fa-angle-right"></i>
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