import './flips.css';

function Headmap(){
    return(
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
    );
}
export default Headmap;