import React from 'react'
import logo from "../../new assets/images/logo_.png"

function Header() {
  return (
    <div>
        {/* <!--
          - HEADER
        --> */}

        <header>

        <div class="header-top">

            <div class="container">

                <ul class="header-social-container">

                <li>
                    <a href="#" class="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" class="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>

                </ul>

                <div class="header-alert-news">
                <p>
                    <b>Free Delivery</b>
                    above order value of 200000/-INR
                </p>
                </div>

                <div class="header-top-actions">

                <select name="currency">

                    <option value="usd">USD &dollar;;</option>
                    <option value="eur">EUR &euro;</option>

                </select>

                <select name="language">

                    <option value="en-US">English</option>
                    <option value="es-ES">Hindi</option>
                    <option value="fr">ଓଡିଆ</option>
                    <option value="fr">বাংলা</option>
                    <option value="fr">தமிழ்</option>
                    <option value="fr">ગુજરાતી</option>
                    <option value="fr">રાજસ્થાની ભાસા</option>
                    <option value="fr">मराठी</option>
                    <option value="fr">తెలుగు</option>

                </select>

                </div>

            </div>

        </div>

        <div class="header-main">

            <div class="container">

                <a href="#" class="header-logo">
                    <img src={logo} alt="UDYOG LOGO" width="50" height="50" />
                </a>

                <div class="header-search-container">

                <input type="search" name="search" class="search-field" placeholder="Enter your product name..." />

                <button class="search-btn">
                    <ion-icon name="search-outline"></ion-icon>
                </button>

                </div>

                <div class="header-user-actions">

                <button class="action-btn"><a href="./DASHBOARD/Udyog-Admin/index.html"> {/*<!-- insted of--> */}
                    <ion-icon name="person-outline"></ion-icon>
                    <span class="count">0</span></a>
                </button>

                <button class="action-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                    <span class="count">0</span>
                </button>

                <button class="action-btn"><a href="./order_for.html">
                    <ion-icon name="bag-handle-outline"></ion-icon>
                    <span class="count">0</span></a>
                </button>

                </div>

            </div>

        </div>

        <nav class="desktop-navigation-menu">

        <div class="container">

            <ul class="desktop-menu-category-list">

                <li class="menu-category">
                    <a href="#" class="menu-title">Home</a>
                </li>

            <li class="menu-category">
                <a href="#" class="menu-title">Categories</a>

                <div class="dropdown-panel">

                <ul class="dropdown-panel-list">

                    <li class="menu-title">
                    <a href="#">Mankind Pharma</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Glimistar-M1</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Glimistar-M2</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Amlokind-AT</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Monocef-O 200</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Zerodol-P</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">
                        <img src="./new assets/images/products/prodcut-2.png" alt="headphone collection" width="250" height="119" />
                    </a>
                    </li>

                </ul>

                <ul class="dropdown-panel-list">

                    <li class="menu-title">
                    <a href="#">SUN PHARMA</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Gemer 1</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Gemer 2</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Pantocid - DSR</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Pantocid - 40</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Pantocid - D</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">
                        <img src="./new assets/images/products/product-7.png" alt="men's fashion" width="250" height="119" />
                    </a>
                    </li>

                </ul>

                <ul class="dropdown-panel-list">

                    <li class="menu-title">
                    <a href="#">ALKEM LABORATORIES</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Pan-40 Cap's</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Pan-D cap's</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Taxim o-200 Tab</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">O2 Tab</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Hemfer Syp</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">
                        <img src="./new assets/images/products/product-4.png" alt="women's fashion" width="250" height="119" />
                    </a>
                    </li>

                </ul>

                <ul class="dropdown-panel-list">

                    <li class="menu-title">
                    <a href="#">Aristo Pharmaceuticals</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Pantop-40</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Pantop-D</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Pantop-DSR</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Monocef 1gm Inj</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">Monocef 500mg Inj</a>
                    </li>

                    <li class="panel-list-item">
                    <a href="#">
                        <img src="./new assets/images/products/prodcut-3.png" alt="mouse collection" width="250" height="119" />
                    </a>
                    </li>

                </ul>

                </div>
            </li>

            <li class="menu-category">
                <a href="#" class="menu-title">Surgical Items</a>

                <ul class="dropdown-list">

                <li class="dropdown-item">
                    <a href="#">Item-1</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-2</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-3</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-4</a>
                </li>

                </ul>
            </li>

            <li class="menu-category">
                <a href="#" class="menu-title">OTC PRODUCTS</a>

                <ul class="dropdown-list">

                <li class="dropdown-item">
                    <a href="#">Item-1</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-2</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-3</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-4</a>
                </li>

                </ul>
            </li>

            <li class="menu-category">
                <a href="#" class="menu-title">SPECIALITIES</a>

                <ul class="dropdown-list">

                <li class="dropdown-item">
                    <a href="#">Item-1</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-2</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-3</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-4</a>
                </li>

                </ul>
            </li>

            <li class="menu-category">
                <a href="#" class="menu-title">GENERICS</a>

                <ul class="dropdown-list">

                <li class="dropdown-item">
                    <a href="#">Item-1</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-2</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-3</a>
                </li>

                <li class="dropdown-item">
                    <a href="#">Item-4</a>
                </li>

                </ul>
            </li>

            <li class="menu-category">
                <a href="#" class="menu-title">Blog</a>
            </li>

            <li class="menu-category">
                <a href="#" class="menu-title">Deal's of the Day</a>
            </li>

            </ul>

        </div>

        </nav>

        <div class="mobile-bottom-navigation">

        <button class="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
        </button>
        

        <button class="action-btn"><a href="./order_for.html">
            <ion-icon name="bag-handle-outline"></ion-icon>
            
            <span class="count">0</span></a>

        </button>

        <button class="action-btn"><a href="/DASHBOARD/Udyog-Admin/index.html">
            <ion-icon name="person-outline"></ion-icon>
        </a>
        </button>

        <button class="action-btn">
            <ion-icon name="heart-outline"></ion-icon>

            <span class="count">0</span>
        </button>

        <button class="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="grid-outline"></ion-icon>
        </button>

        </div>

        <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

        <div class="menu-top">
            <h2 class="menu-title">Menu</h2>

            <button class="menu-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
            </button>
        </div>

        <ul class="mobile-menu-category-list">

            <li class="menu-category">
            <a href="#" class="menu-title">Home</a>
            </li>

            <li class="menu-category">

            <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Company List</p>

                <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>
            </button>

            <ul class="submenu-category-list" data-accordion>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Aristo Pharmaceuticals</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Abbott India</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Mankind Phrama</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Sun Pharma</a>
                </li>

            </ul>

            </li>

            <li class="menu-category">

            <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">OTC PRODUCTS</p>

                <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>
            </button>

            <ul class="submenu-category-list" data-accordion>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Item-1</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Item-2</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Item-3</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Item-4</a>
                </li>

            </ul>

            </li>

            <li class="menu-category">

            <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">SURGICAL ITEM'S</p>

                <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>
            </button>

            <ul class="submenu-category-list" data-accordion>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Item-1</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Item-2</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Item-3</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">item-4</a>
                </li>

            </ul>

            </li>

            <li class="menu-category">

            <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">SPECIALITIES</p>

                <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>
            </button>

            <ul class="submenu-category-list" data-accordion>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Item-1</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Itemm-2</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Item-3</a>
                </li>

                <li class="submenu-category">
                <a href="#" class="submenu-title">Item-4</a>
                </li>

            </ul>

            </li>

            <li class="menu-category">
            <a href="#" class="menu-title">Blog</a>
            </li>

            <li class="menu-category">
            <a href="#" class="menu-title">Latest Deal's of the Day</a>
            </li>

        </ul>

        <div class="menu-bottom">

            <ul class="menu-category-list">

            <li class="menu-category">

                <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Language</p>

                <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                </button>

                <ul class="submenu-category-list" data-accordion>

                <li class="submenu-category">
                    <a href="#" class="submenu-title">English</a>
                </li>
                <li class="submenu-category">
                    <a href="#" class="submenu-title">Hindi</a>
                </li>
                <li class="submenu-category">
                    <a href="#" class="submenu-title">ଓଡିଆ</a>
                </li>
                <li class="submenu-category">
                    <a href="#" class="submenu-title">বাংলা</a>
                </li>
                <li class="submenu-category">
                    <a href="#" class="submenu-title">தமிழ்</a>
                </li>
                <li class="submenu-category">
                    <a href="#" class="submenu-title">ગુજરાતી</a>
                </li>
                <li class="submenu-category">
                    <a href="#" class="submenu-title">રાજસ્થાની ભાસા</a>
                </li>
                <li class="submenu-category">
                    <a href="#" class="submenu-title">मराठी</a>
                </li>
                <li class="submenu-category">
                    <a href="#" class="submenu-title">తెలుగు</a>
                </li>
                

                </ul>

            </li>

            <li class="menu-category">
                <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Currency</p>
                <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                </button>

                <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                    <a href="#" class="submenu-title">USD &dollar;</a>
                </li>

                <li class="submenu-category">
                    <a href="#" class="submenu-title">EUR &euro;</a>
                </li>
                </ul>
            </li>

            </ul>

            <ul class="menu-social-container">

            <li>
                <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
                </a>
            </li>

            <li>
                <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
                </a>
            </li>

            <li>
                <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </li>

            <li>
                <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </li>

            </ul>

        </div>

        </nav>

        </header>
    </div>
  )
}

export default Header;        