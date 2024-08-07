import './flips.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
function Headpart(){
    const [isActive, setIsActive] = useState('false');
    const ToggleClass = () => {
      setIsActive(!isActive); 
     };
    return(
    <div>
         <div class="main">
        <div class="flipimg"><img src={require('./image/fliplogo2.png')}></img></div>
         <div class="search"><i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search for product,Brands and More"></input></div>
        <div class="logon"><i class="fa-solid fa-user"></i>Login<i class="fa-solid fa-angle-down"></i>
        <div class="loginpages">
            <div class="custom">
                <div class="new-customer">New customer ?</div>
                <div class="singup">Sing up</div>
            </div>
            <div class="profile"><i class="fa-solid fa-user"></i> My Profile</div>
            <div class="pluszone"><i class="fa-solid fa-circle-plus"></i> Flipkart Plus Zone </div>
            <div class="orders"><i class="fa-solid fa-box"></i> Orders</div>
            <div class="wishlist"><i class="fa-regular fa-heart"></i> Wishlist</div>
            <div class="reward"><i class="fa-solid fa-gift"></i> Rewards</div>
            <div class="giftcard"><i class="fa-solid fa-box-archive"></i> Gift Card</div>
        </div>
        </div>
       <div class="cart"><i class="fa-solid fa-cart-shopping"></i>Cart</div>
       <div class="hamburgur">
        <div onClick={ToggleClass}>
            <i class="fa-solid fa-bars"></i>
        </div>
       <div class={!isActive ? 'menubarcont active' : 'menubarcont'}>
       
        <div class="hamburgur-menu"><span><i class="fa-brands fa-slack"></i></span><Link to="/aboutallfile/abouts-com">About Us</Link></div> 
        <div class="hamburgur-menu"><span><i class="fa-brands fa-slack"></i></span><Link to="/Sunstainblity/sunst">Sustainabilty</Link></div>
        <div class="hamburgur-menu"><span><i class="fa-brands fa-slack"></i></span><Link to="/datajsx/mapping2">Mobile</Link></div>
        <div class="hamburgur-menu"><span><i class="fa-brands fa-slack"></i></span><Link to="/datajsx/mapping">Fashion</Link></div>
        <div class="hamburgur-menu"><span><i class="fa-brands fa-slack"></i></span><Link to="/datajsx/mapping3">Electronics</Link></div>
       </div>
        
        </div>
       <div class="sellr"><i class="fa-solid fa-shop"></i>Become a seller</div>
       <div class="threedot"><i class="fa-solid fa-ellipsis-vertical"></i>
       <div class="theedotpages">
        <div class="prefrance"><i class="fa-solid fa-bell"></i> Notification Prefrance</div>
        <div class="custo-care"><i class="fa-solid fa-headphones"></i> 24X7 Customer Care</div>
        <div class="advertise"><i class="fa-solid fa-arrow-trend-up"></i> Advertise</div>
        <div class="downloads"><i class="fa-solid fa-download"></i> Downloads App</div>
       </div>
       </div>
        </div>
        <div class="cont2">
            <div class="cont2section">
                <div class="cont2main">
                <div class="cont2img"><img src={require('./image/product1.png')}></img></div>
                <div class="cont2tag">Grocery</div>
                </div>
                <div class="cont2main"><Link to="/datajsx/mapping2">
                <div class="cont2img"><img src={require('./image/product2.png')}></img></div>
                <div class="cont2tag">Mobile</div></Link>
                </div>
                <div class="cont2main"><Link to="/datajsx/mapping">
                <div class="cont2img"><img src={require('./image/product3.jpg')}></img></div>
                <div class="cont2tag">Fashion <i class="fa-solid fa-angle-down"></i> 
                </div></Link>
                <div class="maindd">
                    <div class="maindd1">
                    <div class="dropdown1">
                        <div class="fashionicon">
                            <div class="menswear">Men's Top Wear</div>
                            <div class="fashionicon2"><i class="fa-solid fa-angle-right"></i></div>
                        <div class="dropdownfa1">
                        <div class="dropdown1">
                        <div class="fashionicon">
                            <div class="menswear"><b>More in Men's Top Wear</b></div>
                            <div class="fashionicon2"></div>
                        </div>
                        <div class="men-bottom-wear">All</div>
                        <div class="women-ethnic">Men's T-Shirts</div>
                        <div class="womenwestern">Men's Casual Shirts</div>
                        <div class="menfootwear">Men's Formal Shirts</div>
                        <div class="womenfotwear">Men's Kurtas</div>
                        <div class="watches">Men's Ethnic Sets</div>
                        <div class="bags">Men's Blazers</div>
                        <div class="kids">Men's Raincourt</div>
                        <div class="essential">Men's Windcheaters</div>
                        <div class="winter">Men's Suit</div>
                        <div class="mensfebric">Men's Febric</div>
                    </div>
                        </div>
                        </div>
                        <div class="men-bottom-wear">Men's Bottom Wear
                        <div class="dropdownfa1">
                        <div class="dropdown1">
                        <div class="fashionicon">
                            <div class="menswear"><b>Men's Bottom Wear</b></div>
                            <div class="fashionicon2"></div>
                        </div>
                        <div class="men-bottom-wear">ALL</div>
                        <div class="women-ethnic">Men's Jeans</div>
                        <div class="womenwestern">Men's Troseres</div>
                        <div class="menfootwear">Men's Trackpants</div>
                        <div class="womenfotwear">Men's Shorts</div>
                        <div class="watches">Men's Cargos</div>
                        <div class="bags">Men's Threefourths</div>
                        <div class="kids">Men's pyjamas</div>
                        <div class="essential">Men's Dhoti</div>
                        <div class="winter">Men's Suit</div>
                        <div class="mensfebric">Men's ethnic pyjamas</div>
                    </div>
                        </div>
                        </div>
                        <div class="women-ethnic">Women-Ethnic
                           <div class="ethnicdrop2">
                           <div class="dropdown1">
                        <div class="fashionicon">
                            <div class="menswear"><b> the womwn ethnic</b></div>
                            <div class="fashionicon2"></div>
                        </div>
                        <div class="men-bottom-wear">ALL</div>
                        <div class="women-ethnic">Women Sarees</div>
                        <div class="womenwestern">women kurtis</div>
                        <div class="menfootwear">Women salwar Suits</div>
                        <div class="womenfotwear">Ethnic dresses</div>
                        <div class="watches">Women dress material</div>
                        <div class="bags">Womwn gowns</div>
                        <div class="kids">Women Lehngas</div>
                        <div class="essential">Women Lenggings</div>
                        <div class="winter">Womens Palazzos</div>
                        <div class="mensfebric">Womens Blouse</div>
                    </div>
                           </div>
                        </div>
                        <div class="womenwestern">Women Western
                         <div class="westerndrop3">
                         <div class="dropdown1">
                        <div class="fashionicon">
                            <div class="menswear"><b>Women Top</b></div>
                            <div class="fashionicon2"></div>
                        </div>
                        <div class="men-bottom-wear">ALL</div>
                        <div class="women-ethnic">Women Dresses</div>
                        <div class="womenwestern">Women T-shirt</div>
                        <div class="menfootwear">Women Jeans</div>
                        <div class="womenfotwear">Women Nighties</div>
                        <div class="watches">Women Nightsuit</div>
                        <div class="bags">Womwn Tracks Pants</div>
                        <div class="kids">Women Trouser</div>
                        <div class="essential">Women Jumpsuit</div>
                        <div class="winter">Womens Shapewear</div>
                        <div class="mensfebric">Womens Blouse</div>
                    </div>
                         </div>
                        </div>
                        <div class="menfootwear">Men Footwear
                        <div class="menfootweardrop4">
                           <div class="dropdown1">
                        <div class="fashionicon">
                            <div class="menswear"><b>Men's Sports Shoes </b></div>
                            <div class="fashionicon2"></div>
                        </div>
                        <div class="men-bottom-wear">ALL</div>
                        <div class="women-ethnic">Men's Casual Shoes</div>
                        <div class="womenwestern">Men's Sandals</div>
                        <div class="menfootwear">Men'Slippers</div>
                        <div class="womenfotwear">Men's Formal shoes</div>
                        <div class="watches">Men's ethnic shoes</div>
                        <div class="bags">shoe care</div>
                     </div>
                           </div>
                        </div>
                        <div class="womenfotwear">Women Footwear
                        <div class="womendop5">
                        <div class="dropdown1">
                        <div class="fashionicon">
                            <div class="menswear"><b>More in women footware</b></div>
                            <div class="fashionicon2"></div>
                        </div>
                        <div class="men-bottom-wear">ALL</div>
                        <div class="women-ethnic">Women Flets</div>
                        <div class="womenwestern">Women Heels</div>
                        <div class="menfootwear">Women Wedges</div>
                        <div class="womenfotwear">Women Slippers</div>
                        <div class="watches">Women Casual Shoes</div>
                        <div class="bags">Women Sports Shoes</div>
                     </div> 
                        </div>
                        </div>
                        <div class="kids">Kids
                        <div class="kidsdrop6">
                        <div class="dropdown1">
                        <div class="fashionicon">
                            <div class="menswear"><b>More in Kids</b></div>
                            <div class="fashionicon2"></div>
                        </div>
                        <div class="men-bottom-wear">ALL</div>
                        <div class="women-ethnic">girls Dresses</div>
                        <div class="womenwestern">Boys-girls T-shirt</div>
                        <div class="menfootwear">Boys-girls combosets</div>
                        <div class="womenfotwear">Boys and girls Jeans</div>
                        <div class="watches">Boys and girls Shorts</div>
                        <div class="bags">Boys Tracks Pants</div>
                        <div class="kids">Girls innerwear</div>
                        <div class="essential">Infant Wear</div>
                    </div>    
                        </div>
                        </div>
                        <div class="essential">Essential
                         <div class="essentialdrop">
                         <div class="dropdown1">
                        <div class="fashionicon">
                            <div class="menswear"><b>More in Essential</b></div>
                            <div class="fashionicon2"></div>
                        </div>
                        <div class="men-bottom-wear">ALL</div>
                        <div class="women-ethnic">Men Vests</div>
                        <div class="womenwestern">Men's Boxers</div>
                        <div class="menfootwear">Women Sarees</div>
                        <div class="womenfotwear">Women Kurtas</div>
                        <div class="watches">Women salwarsuits</div>
                        <div class="bags">Boys Kurtas</div>
                        <div class="kids">Women innerwear</div>
                        <div class="essential">Men's Boxers</div>
                    </div>
                         </div>
                        </div>
                        <div class="winter">Winter
                        <div class="winterdrop">
                        <div class="dropdown1">
                        <div class="fashionicon">
                            <div class="menswear"><b>More in Winter</b></div>
                            <div class="fashionicon2"></div>
                        </div>
                        <div class="men-bottom-wear">ALL</div>
                        <div class="women-ethnic">Mens T-shirts</div>
                        <div class="womenwestern">Mens Sweters</div>
                        <div class="menfootwear">Women Jeckets</div>
                        <div class="womenfotwear">Women Sweters</div>
                        <div class="watches">Women Kurtas</div>
                        <div class="bags">Women Shrugs</div>
                        <div class="kids">Kids Sweatshirts</div>
                        <div class="essential">kids Jeckets</div>
                    </div>
                        </div>
                        </div>
                    </div>
                 
                    </div>
                </div>
                </div>
                <div class="cont2main"><Link to="/datajsx/mapping3">
                <div class="cont2img"><img src={require('./image/product4.jpg')}></img></div>
                <div class="cont2tag">Electronics<i class="fa-solid fa-angle-down"></i></div>
                
                <div class="electodropmain">
                    <div class="electodrop1">
                       <div class="electotag1">Audio</div>
                       <div class="electotag">Electronics GST Store</div>
                       <div class="electotag">Gaming</div>
                       <div class="electotag">Health and personal care</div>
                       <div class="electotag">Laptop Accessories</div>
                       <div class="electotag">Laptop and Desktop</div>
                       <div class="electotag">Mobile Accessories</div>
                    </div>
                    <div class="electodrop2">
                    <div class="electotag1">More in Audio</div>
                       <div class="electotag">All</div>
                       <div class="electotag">Bluetooth Headphones</div>
                       <div class="electotag">Wired Headphones</div>
                       <div class="electotag">Bluetooth Speaker</div>
                       <div class="electotag">Soundbasrs</div>
                       <div class="electotag">Home Theateres</div>
                    </div>
                </div>
                </Link>
                </div>
                {/* <div class="cont2main">
                <div class="cont2img"><img src={require('./image/product5.jpg')}></img></div>
                <div class="cont2tag">Home & Furniture <i class="fa-solid fa-angle-down"></i></div>
                </div> */}
                {/* <div class="cont2main">
                <div class="cont2img"><img src={require('./image/product6.jpg')}></img></div>
                <div class="cont2tag">Applinces</div>
                </div> */}
                <div class="cont2main">
                <div class="cont2img"><img src={require('./image/product7.jpg')}></img></div>
                <div class="cont2tag">Travel</div>
                </div>
                <div class="cont2main">
                <div class="cont2img"><img src={require('./image/product8.jpg')}></img></div>
                <div class="cont2tag">Beauty,Toys&More <i class="fa-solid fa-angle-down"></i></div>
                <div class="electodropmain">
                    <div class="electodrop1">
                       <div class="electotag1">Beauty & personal care</div>
                       <div class="electotag">Men's Grooming</div>
                       <div class="electotag">Food and Drinks</div>
                       <div class="electotag">Baby Care</div>
                       <div class="electotag">Music</div>
                       <div class="electotag">Sports and Fitness </div>
                       <div class="electotag">Books</div>
                    </div>
                    <div class="electodrop2">
                    <div class="electotag1">View All</div>
                       <div class="electotag">Bath and Oral Care</div>
                       <div class="electotag">Pelsonal Hygiene</div>
                       <div class="electotag">Eye Makeup</div>
                       <div class="electotag">Face Makeup</div>
                       <div class="electotag">Lips Makeup</div>
                       <div class="electotag">Hair Care</div>
                    </div>
                </div>
                </div>
                <div class="cont2main">
                <div class="cont2img"><img src={require('./image/product9.jpg')}></img></div>
                <div class="cont2tag">Two Wheeles <i class="fa-solid fa-angle-down"></i></div>
                <div class="twowheeles-hover">
                <div class="electodropmain">
                    <div class="electodrop1">
                       <div class="electotag1">Petrol vehicles</div>
                       <div class="electotag">Electronics GST Store</div>
                       <div class="electotag">Electric vehical</div>
                       <div class="electotag">Two vehical multiple desings</div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Headpart; 
