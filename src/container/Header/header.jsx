import React from 'react'
import logo from "../../new assets/images/logo_.png"

function Header() {
  return (
    <div>
        <header>
            <div className="header-top">

                <div className="container">

                    <ul className="header-social-container">

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>

                    </ul>

                    <div className="header-alert-news">
                        <p>
                            <b>Free Delivery</b>
                            above order value of 200000/-INR
                        </p>
                    </div>

                    <div className="header-top-actions">

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

            <div className="header-main">

                <div className="container">

                    <a href="#" className="header-logo">
                        <img src={logo} alt="UDYOG LOGO" width="50" height="50" />
                    </a>

                    <div className="header-search-container">

                    <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />

                    <button className="search-btn">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>

                    </div>

                    <div className="header-user-actions">

                    <button className="action-btn"><a href="./DASHBOARD/Udyog-Admin/index.html"> {/*<!-- insted of--> */}
                        <ion-icon name="person-outline"></ion-icon>
                        <span className="count">0</span></a>
                    </button>

                    <button className="action-btn">
                        <ion-icon name="heart-outline"></ion-icon>
                        <span className="count">0</span>
                    </button>

                    <button className="action-btn"><a href="./order_for.html">
                        <ion-icon name="bag-handle-outline"></ion-icon>
                        <span className="count">0</span></a>
                    </button>

                    </div>

                </div>

            </div>

            <nav className="desktop-navigation-menu">

                <div className="container">

                    <ul className="desktop-menu-category-list">

                        <li className="menu-category">
                            <a href="#" className="menu-title">Home</a>
                        </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">Categories</a>

                        <div className="dropdown-panel">

                        <ul className="dropdown-panel-list">

                            <li className="menu-title">
                            <a href="#">Mankind Pharma</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Glimistar-M1</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Glimistar-M2</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Amlokind-AT</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Monocef-O 200</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Zerodol-P</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">
                                <img src="./new assets/images/products/prodcut-2.png" alt="headphone collection" width="250" height="119" />
                            </a>
                            </li>

                        </ul>

                        <ul className="dropdown-panel-list">

                            <li className="menu-title">
                            <a href="#">SUN PHARMA</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Gemer 1</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Gemer 2</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Pantocid - DSR</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Pantocid - 40</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Pantocid - D</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">
                                <img src="./new assets/images/products/product-7.png" alt="men's fashion" width="250" height="119" />
                            </a>
                            </li>

                        </ul>

                        <ul className="dropdown-panel-list">

                            <li className="menu-title">
                            <a href="#">ALKEM LABORATORIES</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Pan-40 Cap's</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Pan-D cap's</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Taxim o-200 Tab</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">O2 Tab</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Hemfer Syp</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">
                                <img src="./new assets/images/products/product-4.png" alt="women's fashion" width="250" height="119" />
                            </a>
                            </li>

                        </ul>

                        <ul className="dropdown-panel-list">

                            <li className="menu-title">
                            <a href="#">Aristo Pharmaceuticals</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Pantop-40</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Pantop-D</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Pantop-DSR</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Monocef 1gm Inj</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">Monocef 500mg Inj</a>
                            </li>

                            <li className="panel-list-item">
                            <a href="#">
                                <img src="./new assets/images/products/prodcut-3.png" alt="mouse collection" width="250" height="119" />
                            </a>
                            </li>

                        </ul>

                        </div>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">Surgical Items</a>

                        <ul className="dropdown-list">

                        <li className="dropdown-item">
                            <a href="#">Item-1</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-2</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-3</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-4</a>
                        </li>

                        </ul>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">OTC PRODUCTS</a>

                        <ul className="dropdown-list">

                        <li className="dropdown-item">
                            <a href="#">Item-1</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-2</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-3</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-4</a>
                        </li>

                        </ul>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">SPECIALITIES</a>

                        <ul className="dropdown-list">

                        <li className="dropdown-item">
                            <a href="#">Item-1</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-2</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-3</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-4</a>
                        </li>

                        </ul>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">GENERICS</a>

                        <ul className="dropdown-list">

                        <li className="dropdown-item">
                            <a href="#">Item-1</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-2</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-3</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Item-4</a>
                        </li>

                        </ul>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">Blog</a>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">Deal's of the Day</a>
                    </li>

                    </ul>

                </div>

            </nav>

            <div className="mobile-bottom-navigation">

                <button classNameName="action-btn data-mobile-menu-open-btn" >
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
            

                <button classNameName="action-btn"><a href="./order_for.html">
                    <ion-icon name="bag-handle-outline"></ion-icon>
                    
                    <span classNameName="count">0</span></a>

                </button>

                <button classNameName="action-btn">
                    <a href="/DASHBOARD/Udyog-Admin/index.html">
                        <ion-icon name="person-outline"></ion-icon>
                    </a>
                </button>

                <button classNameName="action-btn">
                    <ion-icon name="heart-outline"></ion-icon>

                    <span classNameName="count">0</span>
                </button>

                <button classNameName="action-btn" data-mobile-menu-open-btn>
                    <ion-icon name="grid-outline"></ion-icon>
                </button>

            </div>

            <nav classNameName="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

                <div classNameName="menu-top">
                    <h2 classNameName="menu-title">Menu</h2>

                    <button classNameName="menu-close-btn" data-mobile-menu-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>

                <ul classNameName="mobile-menu-category-list">

                    <li classNameName="menu-category">
                    <a href="#" classNameName="menu-title">Home</a>
                    </li>

                    <li classNameName="menu-category">

                    <button classNameName="accordion-menu" data-accordion-btn>
                        <p classNameName="menu-title">Company List</p>

                        <div>
                        <ion-icon name="add-outline" classNameName="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" classNameName="remove-icon"></ion-icon>
                        </div>
                    </button>

                    <ul classNameName="submenu-category-list" data-accordion>

                        <li classNameName="submenu-category">
                        <a href="#" className="submenu-title">Aristo Pharmaceuticals</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Abbott India</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Mankind Phrama</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Sun Pharma</a>
                        </li>

                    </ul>

                    </li>

                    <li className="menu-category">

                    <button className="accordion-menu" data-accordion-btn>
                        <p className="menu-title">OTC PRODUCTS</p>

                        <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                        </div>
                    </button>

                    <ul className="submenu-category-list" data-accordion>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Item-1</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Item-2</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Item-3</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Item-4</a>
                        </li>

                    </ul>

                    </li>

                    <li className="menu-category">

                    <button className="accordion-menu" data-accordion-btn>
                        <p className="menu-title">SURGICAL ITEM'S</p>

                        <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                        </div>
                    </button>

                    <ul className="submenu-category-list" data-accordion>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Item-1</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Item-2</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Item-3</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">item-4</a>
                        </li>

                    </ul>

                    </li>

                    <li className="menu-category">

                    <button className="accordion-menu" data-accordion-btn>
                        <p className="menu-title">SPECIALITIES</p>

                        <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                        </div>
                    </button>

                    <ul className="submenu-category-list" data-accordion>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Item-1</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Itemm-2</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Item-3</a>
                        </li>

                        <li className="submenu-category">
                        <a href="#" className="submenu-title">Item-4</a>
                        </li>

                    </ul>

                    </li>

                    <li className="menu-category">
                    <a href="#" className="menu-title">Blog</a>
                    </li>

                    <li className="menu-category">
                    <a href="#" className="menu-title">Latest Deal's of the Day</a>
                    </li>

                </ul>

                <div className="menu-bottom">

                    <ul className="menu-category-list">

                    <li className="menu-category">

                        <button className="accordion-menu" data-accordion-btn>
                        <p className="menu-title">Language</p>

                        <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                        </button>

                        <ul className="submenu-category-list" data-accordion>

                        <li className="submenu-category">
                            <a href="#" className="submenu-title">English</a>
                        </li>
                        <li className="submenu-category">
                            <a href="#" className="submenu-title">Hindi</a>
                        </li>
                        <li className="submenu-category">
                            <a href="#" className="submenu-title">ଓଡିଆ</a>
                        </li>
                        <li className="submenu-category">
                            <a href="#" className="submenu-title">বাংলা</a>
                        </li>
                        <li className="submenu-category">
                            <a href="#" className="submenu-title">தமிழ்</a>
                        </li>
                        <li className="submenu-category">
                            <a href="#" className="submenu-title">ગુજરાતી</a>
                        </li>
                        <li className="submenu-category">
                            <a href="#" className="submenu-title">રાજસ્થાની ભાસા</a>
                        </li>
                        <li className="submenu-category">
                            <a href="#" className="submenu-title">मराठी</a>
                        </li>
                        <li className="submenu-category">
                            <a href="#" className="submenu-title">తెలుగు</a>
                        </li>
                        

                        </ul>

                    </li>

                    <li className="menu-category">
                        <button className="accordion-menu" data-accordion-btn>
                        <p className="menu-title">Currency</p>
                        <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                        </button>

                        <ul className="submenu-category-list" data-accordion>
                        <li className="submenu-category">
                            <a href="#" className="submenu-title">USD &dollar;</a>
                        </li>

                        <li className="submenu-category">
                            <a href="#" className="submenu-title">EUR &euro;</a>
                        </li>
                        </ul>
                    </li>

                    </ul>

                    <ul className="menu-social-container">

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
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