import React from 'react'

function HomePage() {
  return (
      <div>
        <div class="overlay" data-overlay></div>

        {/* <!--
          - MODAL
        --> */}

        <div class="modal" data-modal>

          <div class="modal-close-overlay" data-modal-overlay></div>

          <div class="modal-content">

            <button class="modal-close-btn" data-modal-close>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div class="newsletter-img">
              <img src="./new assets/images/Newsletter -1.png" alt="subscribe newsletter" width="400" height="400">
            </div>

            <div class="newsletter">

              <form action="#">

                <div class="newsletter-header">

                  <h3 class="newsletter-title">Subscribe Newsletter.</h3>

                  <p class="newsletter-desc">
                    Subscribe the <b>Udyog</b> to get latest products and discount update.
                  </p>

                </div>

                <input type="email" name="email" class="email-field" placeholder="Email Address" required>

                <button type="submit" class="btn-newsletter">Subscribe</button>

              </form>

            </div>

          </div>

        </div>





        {/* <!--
          - NOTIFICATION TOAST
        --> */}

        
        
        {/* <!--
          - MAIN
        --> */}

        <main>

          {/* <!--
            - BANNER
          --> */}

         




          {/* <!--
            - CATEGORY
          --> */}






          {/* <!--
            - PRODUCT
          --> */}

          <div class="product-container">

            <div class="container">


              {/* <!--
                - SIDEBAR
              --> */}

              <div class="sidebar  has-scrollbar" data-mobile-menu>

                <div class="sidebar-category">

                  <div class="sidebar-top">
                    <h2 class="sidebar-title">Top Product's List</h2>

                    <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                      <ion-icon name="close-outline"></ion-icon>
                    </button>
                  </div>

                  <ul class="sidebar-menu-category-list">

                    <li class="sidebar-menu-category">

                      <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                          <img src="./new assets/images/sun pharma_icon.png" alt="clothes" width="20" height="20"
                            class="menu-title-img">

                          <p class="menu-title">SUN PHARMA</p>
                        </div>

                        <div>
                          <ion-icon name="add-outline" class="add-icon"></ion-icon>
                          <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                      </button>

                      <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Gemer-1</p>
                            <data value="300" class="stock" title="Available Stock">9% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Gemer-2</p>
                            <data value="60" class="stock" title="Available Stock">9% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Pantocid-40</p>
                            <data value="50" class="stock" title="Available Stock">9% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Pantocid-D</p>
                            <data value="87" class="stock" title="Available Stock">9% CD</data>
                          </a>
                        </li>

                      </ul>

                    </li>

                    <li class="sidebar-menu-category">

                      <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                          <img src="./new assets/images/alkem_icon.png" alt="footwear" class="menu-title-img" width="20"
                            height="20">

                          <p class="menu-title">ALKEM LABORATORIES</p>
                        </div>

                        <div>
                          <ion-icon name="add-outline" class="add-icon"></ion-icon>
                          <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                      </button>

                      <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Rifakem-200</p>
                            <data value="45" class="stock" title="Available Stock">12% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Rifakem-400</p>
                            <data value="75" class="stock" title="Available Stock">12% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Rifakem-550</p>
                            <data value="35" class="stock" title="Available Stock">12% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Obetohep-5</p>
                            <data value="26" class="stock" title="Available Stock">12% CD</data>
                          </a>
                        </li>

                      </ul>

                    </li>

                    <li class="sidebar-menu-category">

                      <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                          <img src="./new assets/images/aristo_icon.jpg" alt="clothes" class="menu-title-img" width="20"
                            height="20">

                          <p class="menu-title">ARISTO INDIA</p>
                        </div>

                        <div>
                          <ion-icon name="add-outline" class="add-icon"></ion-icon>
                          <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                      </button>

                      <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Pantop-40</p>
                            <data value="46" class="stock" title="Available Stock">11% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Pantop-D</p>
                            <data value="73" class="stock" title="Available Stock">11% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Pantop-DSR</p>
                            <data value="61" class="stock" title="Available Stock">11% CD</data>
                          </a>
                        </li>

                      </ul>

                    </li>

                    <li class="sidebar-menu-category">

                      <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                          <img src="./new assets/images/franco indian_icon.png" alt="perfume" class="menu-title-img" width="20"
                            height="20">

                          <p class="menu-title">Franco-india</p>
                        </div>

                        <div>
                          <ion-icon name="add-outline" class="add-icon"></ion-icon>
                          <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                      </button>

                      <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Glyciphage-500</p>
                            <data value="12" class="stock" title="Available Stock">17% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Glyciphage SR-500</p>
                            <data value="60" class="stock" title="Available Stock">17% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Glyciphage VG-1</p>
                            <data value="50" class="stock" title="Available Stock">17% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Glyciphage VG-2</p>
                            <data value="87" class="stock" title="Available Stock">17% CD</data>
                          </a>
                        </li>

                      </ul>

                    </li>

                    <li class="sidebar-menu-category">

                      <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                          <img src="./new assets/images/centaur pharma_icon.jpg" alt="cosmetics" class="menu-title-img" width="20"
                            height="20">

                          <p class="menu-title">Centaur Pharma</p>
                        </div>

                        <div>
                          <ion-icon name="add-outline" class="add-icon"></ion-icon>
                          <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                      </button>

                      <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Sinarest tab</p>
                            <data value="68" class="stock" title="Available Stock">19% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Sinarest Syp.</p>
                            <data value="46" class="stock" title="Available Stock">19% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Sinarest Drop</p>
                            <data value="79" class="stock" title="Available Stock">19% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Sinarest Caps.</p>
                            <data value="23" class="stock" title="Available Stock">19% CD</data>
                          </a>
                        </li>

                      </ul>

                    </li>

                    <li class="sidebar-menu-category">

                      <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                          <img src="./new assets/images/cipla_icon.png" alt="glasses" class="menu-title-img" width="20"
                            height="20">

                          <p class="menu-title">Cipla India</p>
                        </div>

                        <div>
                          <ion-icon name="add-outline" class="add-icon"></ion-icon>
                          <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                      </button>

                      <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Azee-250</p>
                            <data value="50" class="stock" title="Available Stock">7% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Azee-500</p>
                            <data value="48" class="stock" title="Available Stock">7% CD</data>
                          </a>
                        </li>

                      </ul>

                    </li>

                    <li class="sidebar-menu-category">

                      <button class="sidebar-accordion-menu" data-accordion-btn>

                        <div class="menu-title-flex">
                          <img src="./new assets/images/Ipca logo_icon.png" alt="bags" class="menu-title-img" width="20" height="20">

                          <p class="menu-title">IPCA LABS.</p>
                        </div>

                        <div>
                          <ion-icon name="add-outline" class="add-icon"></ion-icon>
                          <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                      </button>

                      <ul class="sidebar-submenu-category-list" data-accordion>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Zoryl M1</p>
                            <data value="62" class="stock" title="Available Stock">11% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Zoryl M2</p>
                            <data value="35" class="stock" title="Available Stock">11% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Zerodol-P</p>
                            <data value="80" class="stock" title="Available Stock">14% CD</data>
                          </a>
                        </li>

                        <li class="sidebar-submenu-category">
                          <a href="#" class="sidebar-submenu-title">
                            <p class="product-name">Zerodol-SP</p>
                            <data value="75" class="stock" title="Available Stock">14% CD</data>
                          </a>
                        </li>

                      </ul>

                    </li>

                  </ul>

                </div>

                <div class="product-showcase">

                  <h3 class="showcase-heading">Deal Of The Day :</h3>

                  <div class="showcase-wrapper">

                    <div class="showcase-container">

                      <div class="showcase">

                        <a href="#" class="showcase-img-box">
                          <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 mg capsules" width="75" height="75"
                            class="showcase-img">
                        </a>

                        <div class="showcase-content">

                          <a href="#">
                            <h4 class="showcase-title">PAN-40</h4>
                          </a>

                          <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                          </div>

                          <div class="price-box">
                            <del>Mrp-199</del>
                            <p class="price">117 /-</p>
                          </div>

                        </div>

                      </div>

                      <div class="showcase">

                        <a href="#" class="showcase-img-box">
                          <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan d capsules" class="showcase-img"
                            width="75" height="75">
                        </a>

                        <div class="showcase-content">

                          <a href="#">
                            <h4 class="showcase-title">PAN-D</h4>
                          </a>
                          <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-half-outline"></ion-icon>
                          </div>

                          <div class="price-box">
                            <del>Mrp-119</del>
                            <p class="price">98 /-</p>
                          </div>

                        </div>

                      </div>

                      <div class="showcase">

                        <a href="#" class="showcase-img-box">
                          <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="girls t-shirt" class="showcase-img" width="75"
                            height="75">
                        </a>

                        <div class="showcase-content">

                          <a href="#">
                            <h4 class="showcase-title">Pan-40</h4>
                          </a>
                          <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-half-outline"></ion-icon>
                          </div>

                          <div class="price-box">
                            <del>Mrp-119</del>
                            <p class="price">98/-</p>
                          </div>

                        </div>

                      </div>

                      <div class="showcase">

                        <a href="#" class="showcase-img-box">
                          <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="woolen hat for men" class="showcase-img" width="75"
                            height="75">
                        </a>

                        <div class="showcase-content">

                          <a href="#">
                            <h4 class="showcase-title">Pan-40</h4>
                          </a>
                          <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                          </div>

                          <div class="price-box">
                            <del>Mrp-119</del>
                            <p class="price">98/-</p>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>



              <div class="product-box">

                {/* <!--
                  - PRODUCT MINIMAL
                --> */}

                <div class="product-minimal">

                  <div class="product-showcase">

                    <h2 class="title">ALKEM Laboratories :</h2>

                    <div class="showcase-wrapper has-scrollbar">

                      <div class="showcase-container">

                        <div class="showcase">

                          <a href="./order_for.html" class="showcase-img-box">
                            <img src="./new assets/images/alkem_icon.png" alt="EMTY SOL. SYP." width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">EMTY SOL. SYP.</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>





                            
                                
                              

                            </div>

                          </div>

                        </div>

                        <div class="showcase">

                          <a href="./order_for.html" class="showcase-img-box">
                            <img src="./new assets/images/alkem_icon.png" alt="SWICH RANGE" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">SWICH RANGE</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">As per order</p>
                              <del>Company</del>
                            </div>

                          </div>

                        </div>

                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/alkem_icon.png" alt="SUMO RANGE" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">SUMO RANGE</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price"><a href="./order_for.html">Order Now</a></p>
                              <del>Get Update</del>
                            </div>

                          </div>

                        </div>

                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/alkem_icon.png" alt="XONE RANGE" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">XONE RANGE</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price"><a href="./order_for.html">Order Now</a></p>
                              <del>Get Update</del>
                            </div>

                          </div>

                        </div>
                      </div>

                      <div class="showcase-container">
                      
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/alkem_icon.png" alt="ZEDEX RANGE" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">ZEDEX AND BROZEDEX</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price"><a href="./order_for.html">Order Now</a></p>
                              <del>Get Update</del>
                            </div>

                          </div>

                        </div>
                      
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/alkem_icon.png" alt="A TO Z  GROUP" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">A TO Z GROUP</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price"><a href="./order_for.html">Order Now</a></p>
                              <del>Get Update</del>
                            </div>

                          </div>

                        </div>
                      
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/alkem_icon.png" alt="SUMO RANGE" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">PIPZO- 4.5 GM</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price"><a href="./order_for.html">Order Now</a></p>
                              <del>Get Update</del>
                            </div>

                          </div>

                        </div>
                      
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">199/-</p>
                              <del>119/-</del>
                            </div>

                          </div>

                        </div>
                      
                      </div>

                    </div>

                  </div>

                  <div class="product-showcase">
                  
                    <h2 class="title">Trending</h2>
                  
                    <div class="showcase-wrapper  has-scrollbar">
                  
                      <div class="showcase-container">
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                      </div>
                  
                      <div class="showcase-container">
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="product-showcase">
                  
                    <h2 class="title">Top Rated</h2>
                  
                    <div class="showcase-wrapper  has-scrollbar">
                  
                      <div class="showcase-container">
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                      </div>
                  
                      <div class="showcase-container">
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                        <div class="showcase">

                          <a href="#" class="showcase-img-box">
                            <img src="./new assets/images/products/combo-Pan 40 & pan d.png" alt="pan 40 and pan d" width="70" class="showcase-img">
                          </a>

                          <div class="showcase-content">

                            <a href="#">
                              <h4 class="showcase-title">Pan- 40 & Pan-D</h4>
                            </a>

                            <a href="#" class="showcase-category">Alkem Laboratories</a>

                            <div class="price-box">
                              <p class="price">119/-</p>
                              <del>199/-</del>
                            </div>

                          </div>

                        </div>
                  
                      </div>
                  
                    </div>
                  
                  </div>

                </div>



                {/* <!--
                  - PRODUCT FEATURED
                --> */}

                <div class="product-featured">

                  <h2 class="title">Deal of the day</h2>

                  <div class="showcase-wrapper has-scrollbar">

                    <div class="showcase-container">

                      <div class="showcase">
                        
                        <div class="showcase-banner">
                          <img src="./new assets/images/product combo ipca.png" alt="zoryl M1 & M2 combo" class="showcase-img">
                        </div>

                        <div class="showcase-content">
                          
                          <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                          </div>

                          <a href="#">
                            <h3 class="showcase-title">Zoryl M-1 & Zoryl M-2</h3>
                          </a>

                          <p class="showcase-desc">
                            Zoryl M-1 & Zoryl M-2 Tablet PR belongs to a category of medicines known as anti-diabetic drugs. It is a combination of two medicines used to treat type 2 diabetes mellitus in adults. It helps control blood sugar levels in people with diabetes.
                          </p>

                          <div class="price-box">
                            <p class="price">600/-</p>

                            <del></del>
                          </div>

                          <button class="add-cart-btn">add to cart</button>

                          <div class="showcase-status">
                            <div class="wrapper">
                              <p>
                                already sold: <b>100</b>
                              </p>

                              <p>
                                available: <b>500</b>
                              </p>
                            </div>

                            <div class="showcase-status-bar"></div>
                          </div>

                          <div class="countdown-box">

                            <p class="countdown-desc">
                              Hurry Up! Offer ends in:
                            </p>

                            <div class="countdown">

                              <div class="countdown-content">

                                <p class="display-number">360</p>

                                <p class="display-text">Days</p>

                              </div>

                              <div class="countdown-content">
                                <p class="display-number">24</p>
                                <p class="display-text">Hours</p>
                              </div>

                              <div class="countdown-content">
                                <p class="display-number">59</p>
                                <p class="display-text">Min</p>
                              </div>

                              <div class="countdown-content">
                                <p class="display-number">00</p>
                                <p class="display-text">Sec</p>
                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                    <div class="showcase-container">
                    
                      <div class="showcase">
                    
                        <div class="showcase-banner">
                          <img src="./new assets/images/product combo ipca.png" alt="Zoryl M-1 & Zoryl M-2" class="showcase-img">
                        </div>
                    
                        <div class="showcase-content">
                    
                          <div class="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                          </div>
                    
                          <h3 class="showcase-title">
                            <a href="#" class="showcase-title">Zoryl M-1 & Zoryl M-2</a>
                          </h3>
                    
                          <p class="showcase-desc">
                            Zoryl M-1 & Zoryl M-2 Tablet PR belongs to a category of medicines known as anti-diabetic drugs. It is a combination of two medicines used to treat type 2 diabetes mellitus in adults. It helps control blood sugar levels in people with diabetes.
                          </p>
                    
                          <div class="price-box">
                            <p class="price">600/-</p>
                            <del></del>
                          </div>
                    
                          <button class="add-cart-btn">add to cart</button>
                    
                          <div class="showcase-status">
                            <div class="wrapper">
                              <p> already sold: <b>100</b> </p>
                    
                              <p> available: <b>500</b> </p>
                            </div>
                    
                            <div class="showcase-status-bar"></div>
                          </div>
                    
                          <div class="countdown-box">
                    
                            <p class="countdown-desc">Hurry Up! Offer ends in:</p>
                    
                            <div class="countdown">
                              <div class="countdown-content">
                                <p class="display-number">360</p>
                                <p class="display-text">Days</p>
                              </div>
                    
                              <div class="countdown-content">
                                <p class="display-number">24</p>
                                <p class="display-text">Hours</p>
                              </div>
                    
                              <div class="countdown-content">
                                <p class="display-number">59</p>
                                <p class="display-text">Min</p>
                              </div>
                    
                              <div class="countdown-content">
                                <p class="display-number">00</p>
                                <p class="display-text">Sec</p>
                              </div>
                            </div>
                    
                          </div>
                    
                        </div>
                    
                      </div>
                    
                    </div>

                  </div>

                </div>



                {/* <!--
                  - PRODUCT GRID
                --> */}

                





          {/* <!--
            - TESTIMONIALS, CTA & SERVICE
          --> */}

          <div>

            <div class="container">

              <div class="testimonials-box">

                {/* <!--
                  - TESTIMONIALS
                --> */}

                <div class="testimonial">

                  <h2 class="title">testimonial</h2>

                  <div class="testimonial-card">

                    <img src="./new assets/images/VPD LOGO.png" alt="alan doe" class="testimonial-banner" width="80" height="80">

                    <p class="testimonial-name">Naitik Vardhmaan</p>

                    <p class="testimonial-title">CEO & Founder VPD Medi Pvt. Ltd.</p>

                    <img src="./assets/images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26">

                    <p class="testimonial-desc">
                      Anant Enterprises is been very helpful for me, I have grown my customers as well as Profits.
                    </p>

                  </div>

                </div>



                {/* <!--
                  - CTA
                --> */}

                <div class="cta-container">

                  <img src="./new assets/images/CTA banne.png" alt="summer collection" class="cta-banner">

                  <a href="#" class="cta-content">

                    <p class="discount">10%</p>

                    <h2 class="cta-title">New Openings Sale</h2>

                    <p class="cta-text">Starting @ 10% CD</p>

                    <button class="cta-btn">Order now</button>

                  </a>

                </div>



                {/* <!--
                  - SERVICE
                --> */}

                <div class="service">

                  <h2 class="title">Our Services</h2>

                  <div class="service-container">

                    <a href="#" class="service-item">

                      <div class="service-icon">
                        <ion-icon name="boat-outline"></ion-icon>
                      </div>

                      <div class="service-content">

                        <h3 class="service-title">All India Services Available</h3>
                        <p class="service-desc">For every order above 200000/-</p>

                      </div>

                    </a>

                    <a href="#" class="service-item">
                    
                      <div class="service-icon">
                        <ion-icon name="rocket-outline"></ion-icon>
                      </div>
                    
                      <div class="service-content">
                    
                        <h3 class="service-title">Delivery Within 48 Hours</h3>
                        <p class="service-desc">India Only</p>
                    
                      </div>
                    
                    </a>

                    <a href="#" class="service-item">
                    
                      <div class="service-icon">
                        <ion-icon name="call-outline"></ion-icon>
                      </div>
                    
                      <div class="service-content">
                    
                        <h3 class="service-title">Best Online & Offline Support</h3>
                        <p class="service-desc">Hours: 8AM - 9PM</p>
                    
                      </div>
                    
                    </a>

                    <a href="#" class="service-item">
                    
                      <div class="service-icon">
                        <ion-icon name="arrow-undo-outline"></ion-icon>
                      </div>
                    
                      <div class="service-content">
                    
                        <h3 class="service-title">Return Policy</h3>
                        <p class="service-desc">Easy & Hassle Free Return</p>
                    
                      </div>
                    
                    </a>

                    <a href="#" class="service-item">
                    
                      <div class="service-icon">
                        <ion-icon name="ticket-outline"></ion-icon>
                      </div>
                    
                      <div class="service-content">
                    
                        <h3 class="service-title">Money Saving Guarantee</h3>
                        <p class="service-desc">For Order Over 300000</p>
                    
                      </div>
                    
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>





          {/* <!--
            - BLOG
          --> */}

          <div class="blog">

            <div class="container">

              <div class="blog-container has-scrollbar">

                <div class="blog-card">

                  <a href="#">
                    <img src="./new assets/images/blog-jb chemicals.png" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner">
                  </a>

                  <div class="blog-content">

                    <a href="#" class="blog-category">J.B. Chemicals Ltd.</a>

                    <a href="#">
                      <h3 class="blog-title">We have alll the divisons in J.B. Chemicals, order now.</h3>
                    </a>

                    <p class="blog-meta">
                      By <cite>Team Udyog</cite> / <time datetime="2022-04-06">Apr 19, 2023</time>
                    </p>

                  </div>

                </div>

                <div class="blog-card">
                
                  <a href="#">
                    <img src="./new assets/images/blog-glenmark.png" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                      class="blog-banner" width="300">
                  </a>
                
                  <div class="blog-content">
                
                    <a href="#" class="blog-category">Glenmark</a>
                
                    <h3>
                      <a href="#" class="blog-title">We have all the divisions of Glenmark, order now.</a>
                    </h3>
                
                    <p class="blog-meta">
                      By <cite>Team Udyog</cite> / <time datetime="2022-01-18">April 19, 2023</time>
                    </p>
                
                  </div>
                
                </div>

                <div class="blog-card">
                
                  <a href="#">
                    <img src="./new assets/images/blog-gsk.png" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                      class="blog-banner" width="300">
                  </a>
                
                  <div class="blog-content">
                
                    <a href="#" class="blog-category">GSK</a>
                
                    <h3>
                      <a href="#" class="blog-title">We have all the divisions of Glenmark, order now.</a>
                    </h3>
                
                    <p class="blog-meta">
                      By <cite>Team Udyog</cite> / <time datetime="2022-02-10">April 19, 2023</time>
                    </p>
                
                  </div>
                
                </div>

                <div class="blog-card">
                
                  <a href="#">
                    <img src="./new assets/images/blog-dr.reddy.png" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                      class="blog-banner" width="300">
                  </a>
                
                  <div class="blog-content">
                
                    <a href="#" class="blog-category">Dr. Reddy</a>
                
                    <h3>
                      <a href="#" class="blog-title">We have all the divisions of Dr. Reddy, order now.</a>
                    </h3>
                
                    <p class="blog-meta">
                      By <cite>Team Udyog</cite> / <time datetime="2022-03-15">April 19, 2023</time>
                    </p>
                
                  </div>
                
                </div>

              </div>

            </div>

          </div>

        </main>


        {/* 
        <!--
          - FOOTER
        -->  DONE*/}
        
 
        {/* <!--
          - custom js link
        --> */}
        <script src="./assets/js/script.js"></script>
        <script src="./assets/js/main.js"></script>

        {/* <!--
          - ionicon link
        --> */}
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </div>
      
    </div>
  )
}

export default HomePage;