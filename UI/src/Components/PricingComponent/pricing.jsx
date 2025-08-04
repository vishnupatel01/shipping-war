import './pricing.css'
 import { Link } from 'react-router-dom';

function pricing(){
    return(
        <>
            {/* pricing section start */}
      <div className="services_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <h1 className="services_taital">Pricing </h1>
                  <p className="services_text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet deleniti at quasi obcaecati quod aspernatur omnis tempore, nemo cupiditate?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                  <div className="readmore_bt"><a href="#">Read More</a></div>
               </div>
               <div className="col-md-6">
                  <div className="box_main active">
                     <h1 className="cargo_text">Emergency Transport <br />$50000</h1>
                  </div>
                  <div className="boxes_main">
                     <div className="box_main_2">
                        <h1 className="cargo_text">AIR TRANSPORT <br /> $15000</h1>
                     </div>
                     <div className="box_main_3">
                        <h1 className="cargo_text">SEA TRANSPORT <br />$22000</h1>
                     </div>
                  </div>
                  <div className="box_main_4">
                     <h1 className="cargo_text">GROUND TRANSPORT <br /> $1000</h1>
                  </div>
               </div>
            </div>
         </div>
      </div>
    {/* pricing section end */}

        </>
    )
}

export default pricing;