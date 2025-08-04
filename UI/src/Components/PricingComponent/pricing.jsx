import './pricing.css'
 import { Link } from 'react-router-dom';

function pricing(){
    return(
        <>
            {/* pricing section start */}
      <div class="services_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <h1 class="services_taital">Pricing </h1>
                  <p class="services_text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet deleniti at quasi obcaecati quod aspernatur omnis tempore, nemo cupiditate?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                  <div class="readmore_bt"><a href="#">Read More</a></div>
               </div>
               <div class="col-md-6">
                  <div class="box_main active">
                     <h1 class="cargo_text">Emergency Transport <br />$50000</h1>
                  </div>
                  <div class="boxes_main">
                     <div class="box_main_2">
                        <h1 class="cargo_text">AIR TRANSPORT <br /> $15000</h1>
                     </div>
                     <div class="box_main_3">
                        <h1 class="cargo_text">SEA TRANSPORT <br />$22000</h1>
                     </div>
                  </div>
                  <div class="box_main_4">
                     <h1 class="cargo_text">GROUND TRANSPORT <br /> $1000</h1>
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