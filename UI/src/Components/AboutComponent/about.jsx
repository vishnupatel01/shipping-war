import "./about.css";
function about() {
  return (
    <>
      {/* about section start */}
      <div class="chose_section layout_padding">
        <div class="container">
          <h1 class="blog_taital">About </h1>
          <p class="lorem_text">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            in voluptates porro debitis laboriosam? Ratione autem fugiat aut
            omnis ipsam. Maiores, similique harum! Magni, facere corporis quae
            nemo maxime neque!20 Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed d
          </p>
          <div class="chose_section_2 layout_padding">
            <div class="row">
              <div class="col-sm-3">
                <div class="icon_1">
                  <img src="./assets/images/icon-1.png" />
                </div>
                <h2 class="price_text">1000+</h2>
                <h2 class="years_text">Years of Transport</h2>
              </div>
              <div class="col-sm-3">
                <div class="icon_1">
                  <img src="./assets/images/icon-2.png" />
                </div>
                <h2 class="price_text">20000+</h2>
                <h2 class="years_text">Projects Delivered</h2>
              </div>
              <div class="col-sm-3">
                <div class="icon_1">
                  <img src="./assets/images/icon-3.png" />
                </div>
                <h2 class="price_text">10000+</h2>
                <h2 class="years_text">Satisfied Customers</h2>
              </div>
              <div class="col-sm-3">
                <div class="icon_1">
                  <img src="./assets/images/icon-4.png" />
                </div>
                <h2 class="price_text">1500+</h2>
                <h2 class="years_text">Cheap Rates</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section end */}
    </>
  );
}

export default about;
