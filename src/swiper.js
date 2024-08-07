import './swiper.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React from "react";
import Slider from "react-slick";
export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div class="swiperfirst">
      <Slider {...settings}>
        <div class="prod1">
        <div class="product1">
         <div class="watch"><img src={require('./image/watch1.jpg')}></img></div>
         <div class="prodname">Stylish Women Watches</div>
         <div class="prodprice">₹200 Onwords</div>
         </div> 
        </div>
        <div class="prod1">
         <div class="product1">   
        <div class="watch"><img src={require('./image/men-t-shirt.jpg')}></img></div>
        <div class="prodname">Polo Blue Tshirts for men</div>
        <div class="prodprice">₹500 Onwords</div>
        </div>  
        </div>
        <div class="prod1">
        <div class="product1">  
        <div class="watch"><img src={require('./image/purs.jpg')}></img></div>
        <div class="prodname"> Women Handbags</div>
        <div class="prodprice">₹400 Onwords</div>
        </div>
        </div>
        <div class="prod1">
        <div class="product1">  
        <div class="watch"><img src={require('./image/beg.jpg')}></img></div>
        <div class="prodname">School bag</div>
        <div class="prodprice">₹250 Onwords</div>
        </div>
        </div>
        <div class="prod1">
        <div class="product1">  
        <div class="watch"><img src={require('./image/shoes.jpg')}></img></div>
        <div class="prodname">Fabulous Men Shoes</div>
        <div class="prodprice">₹550 Onwords</div>
        </div>
        </div>
        <div class="prod1">
        <div class="product1">  
        <div class="watch"><img src={require('./image/cap.jpg')}></img></div>
        <div class="prodname">Men Caps</div>
        <div class="prodprice">₹180 Onwords</div>
        </div>
        </div>
        
      </Slider>
      </div>
    );
  }

