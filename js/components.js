// ================= HEADER COMPONENT =================

function createHeader() {
    return `
        <header class="main-header">
             <div class="flash-sale-bar">
                <p class="scrolling-text">
                    EXCLUSIVE OFFER — Code <strong>TREND20</strong> for 20% off · Complimentary shipping on orders over 500,000 VND
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Curated luxury menswear · Authentic brands only
                </p>
            </div>
            <div class="header-top">
                <div class="container header-top-container">
                    <a href="index.html" class="logo-box">
                        <img src="assets/images/logo/logo.png" alt="Logo">
                        <span>MEN'S WEAR</span>
                    </a>

                    <div class="header-right">
                        <div class="header-search">
                            <input type="text" id="headerSearchInput" placeholder="Search for products and brands...">
                            <button type="button" id="headerSearchBtn" aria-label="Search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>

                        <div class="header-actions">
                            <a href="orders.html" class="header-icon tooltip-item" data-tooltip="Orders">
                                <i class="fa-solid fa-receipt"></i>
                            </a>
                             <!-- CART ICON - MỞ MINI CART -->
                            <a href="#" class="header-icon cart-icon tooltip-item" id="cartToggle" data-tooltip="Cart">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span id="cartCount">0</span>
                            </a>
                            <a href="wishlist.html" class="header-icon wishlist-icon tooltip-item" data-tooltip="Wishlist">
                                <i class="fa-regular fa-heart"></i>
                                <span id="wishlistCount">0</span>
                            </a>
                            <a href="login.html" class="header-icon tooltip-item" data-tooltip="Account">
                                <i class="fa-solid fa-circle-user"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <nav class="main-nav">
                <ul class="nav-menu">
                    <li>
                        <a href="index.html">Home</a>
                    </li>

                    <li class="nav-dropdown">
                        <a href="products.html">
                            Products <i class="fa-solid fa-chevron-down"></i>
                        </a>

                        <div class="mega-menu product-mega-menu">
                            <div class="container mega-menu-container">
                                <div class="mega-column">
                                    <h3><a href="products.html">ALL PRODUCTS</h3>
        
                                    <a href="products.html?filter=new">New Product</a>
                                    <a href="products.html?filter=best-seller">Best Seller</a>
                                </div>

                                <div class="mega-column">
                                    <h3> <a href="products.html?category=topwear">MEN'S SHIRT</h3>
                        
                                    <a href="products.html?category=topwear&sub=tshirt">T-shirt</a>
                                    <a href="products.html?category=topwear&sub=polo">Polo shirt</a>
                                    <a href="products.html?category=topwear&sub=shirt">Shirt</a>
                                    <a href="products.html?category=topwear&sub=jacket">Jacket</a>
                                    <a href="products.html?category=topwear&sub=hoodie">Hoodie</a>
                                    <a href="products.html?category=topwear&sub=sweater">Sweater</a>
                                </div>

                                <div class="mega-column">
                                    <h3><a href="products.html?category=bottomwear"> MEN'S PANTS</h3>
                                    
                                    <a href="products.html?category=bottomwear&sub=jeans">Jeans</a>
                                    <a href="products.html?category=bottomwear&sub=shorts">Shorts</a>
                                    <a href="products.html?category=bottomwear&sub=pants">Kaki pants</a>
                                    <a href="products.html?category=bottomwear&sub=pants"> Trousers</a>
                                 </div>

                                <div class="mega-column">
                                    <h3><a href="products.html?category=footwear"> SHOES & SANDALS</h3>
                                     <a href="products.html?category=footwear&sub=sneakers">Sport shoes</a>
                                    <a href="products.html?category=footwear&sub=sneakers">Sneakers</a>
                                    <a href="products.html?category=footwear&sub=slides">Sandals</a>
                                </div>

                                <div class="mega-column">
                                    <h3><a href="products.html?category=accessories"> ACCESSORIES</h3>
                                    
                                    <a href="products.html?category=accessories&sub=backpack">Backpacks </br>Bags & Wallets</a>
                                    <a href="products.html?category=accessories&sub=cap">Hat</a>
                                    <a href="products.html?category=accessories&sub=belt">Belt</a>
                                    <a href="products.html?category=accessories&sub=sunglasses">Glasses</a>
                                </div>

                                <div class="mega-image-wrapper">
                                    <div class="mega-image-box">
                                        <div class="product-menu-slider two-images">
                                            <img src="assets/images/product/calvin/ck-reversible-leather-belt-4.webp" alt="New Collection 1">
                                            <img src="assets/images/product/calvin/ck-campus-backpack-2.webp" alt="New Collection 2">
                                        </div>
                                        <div class="mega-image-content">
                                            <h3>New Collection</h3>
                                            <a href="products.html?filter=new">Shop Now</a>
                                        </div>
                                    </div>

                                    <div class="mega-image-box">
                                        <div class="product-menu-slider two-images">
                                            <img src="assets/images/product/nike/nike-lebron-20-1.webp" alt="Sport Style 1">
                                            <img src="assets/images/product/nike/nike-air-max-90-2.webp" alt="Sport Style 2">
                                        </div>
                                        <div class="mega-image-content">
                                            <h3>Sport Style</h3>
                                            <a href="products.html?category=footwear">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-dropdown">
                        <a href="brand.html">
                            Brand <i class="fa-solid fa-chevron-down"></i>
                        </a>

                        <div class="mega-menu brand-mega-menu">
                            <div class="container mega-menu-container">
                                <div class="mega-column">
                                    <h3></i> SPORT BRANDS</h3>
                                    <a href="brand-detail.html?brand=Adidas">Adidas</a>
                                    <a href="brand-detail.html?brand=Nike">Nike</a>
                                </div>

                                <div class="mega-column">
                                    <h3></i> LUXURY BRANDS</h3>
                                    <a href="brand-detail.html?brand=Gucci">Gucci</a>
                                    <a href="brand-detail.html?brand=Calvin Klein">Calvin Klein</a>
                                </div>

                                <div class="mega-column">
                                    <h3></i> CASUAL BRANDS</h3>
                                    <a href="brand-detail.html?brand=Levi's">Levi's</a>
                                    <a href="brand-detail.html?brand=Tommy Hilfiger">Tommy Hilfiger</a>
                                </div>

                                <div class="brand-image-box">
                                    <div class="brand-slider three-images">
                                        <img src="assets/images/brand/adidas.jpg" alt="Brands Adidas">
                                        <img src="assets/images/brand/tommy.jpg" alt="Brands Tommy">
                                        <img src="assets/images/brand/nike.webp" alt="Brands Nike">
                                     </div>
                                    <div class="brand-image-content">
                                        <h3>Top Brands</h3>
                                        <a href="brand.html">View All Brands</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- ===== MINI CART SIDEBAR ===== -->
        <div class="cart-overlay" id="cartOverlay"></div>
        <div class="mini-cart" id="miniCart">
            <div class="mini-cart-header">
                <h3>Shopping Cart</h3>
                <button class="mini-cart-close" id="cartClose">&times;</button>
            </div>
            <div class="mini-cart-body" id="miniCartBody">
                <!-- Cart items will be rendered here -->
                <div class="mini-cart-empty">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>Your cart is empty.</p>
                    <a href="products.html" class="continue-shopping-btn">Continue Shopping</a>
                </div>
            </div>
            <div class="mini-cart-footer" id="miniCartFooter" style="display: none;">
                <div class="mini-cart-total">
                    <span>Total:</span>
                    <span id="miniCartTotal">0 VND</span>
                </div>
                <a href="cart.html" class="view-cart-btn">View Cart</a>
                <a href="payment.html" class="checkout-btn">Checkout</a>
            </div>
        </div>
    `;
}


// ================= FOOTER COMPONENT =================

function createFooter() {
    return `
        <footer class="main-footer">
            <div class="container footer-container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 footer-column">
                        <h3>Men's Wear</h3>
                        <p>
                            Men's Wear provides modern, stylish and high-quality fashion products for men.
                        </p>

                        <div class="footer-socials">
                            <a href="#" class="social-icon facebook" title="Facebook">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon instagram" title="Instagram">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" class="social-icon tiktok" title="TikTok">
                                <i class="fa-brands fa-tiktok"></i>
                            </a>
                            <a href="#" class="social-icon linkedin" title="LinkedIn">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="brand.html">Brand</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-column">
                        <h4>Customer Service</h4>
                        <ul>
                            <li><a href="cart.html">Shopping Cart</a></li>
                            <li><a href="payment.html">Payment</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Return Policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-column footer-payment">
                        <h4>Payment Methods</h4>
                        <div class="payment-icons">
                            <span><i class="fa-solid fa-money-bill-wave"></i> COD</span>
                            <span><i class="fa-brands fa-cc-visa"></i> Visa</span>
                            <span><i class="fa-solid fa-wallet"></i> Momo</span>
                            <span><i class="fa-solid fa-qrcode"></i> ZaloPay</span>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-column">
                        <h4>Contact Information</h4>
                        <p><i class="fa-solid fa-map-pin"></i>66 Vo Van Tan Street, Da Nang City, Vietnam</p>
                        <p><i class="fa-solid fa-square-phone"></i> 034 2230 2344</p>
                        <p><i class="fa-solid fa-square-envelope"></i> cskh.support.mens@menswear.com</p>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>© 2026 Men's Wear. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}