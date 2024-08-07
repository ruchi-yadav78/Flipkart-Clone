import './section8.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
 export default function Swiperslider2() {
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
          <div class="sec8main">
          <Slider {...settings}>
            <div class="prod1">
            <div class="product1">
             <div class="watch"><img src={require('./image/sec8img8.jpg')}></img></div>
             <div class="prodname">Bread Toaster</div>
             <div class="prodprice">₹1,800 Onwords</div>
             </div> 
            </div>
            <div class="prod1">
             <div class="product1">   
            <div class="watch"><img src={require('./image/sec8img4.jpg')}></img></div>
            <div class="prodname">PKK TRADERS Spice Set plastic</div>
            <div class="prodprice">₹690 Onwords</div>
            </div>  
            </div>
            <div class="prod1">
            <div class="product1">  
            <div class="watch"><img src={require('./image/sec8img3.jpg')}></img></div>
            <div class="prodname">Kinsco Aqua Punch</div>
            <div class="prodprice">₹5,000 Onwords</div>
            </div>
            </div>
            <div class="prod1">
            <div class="product1">  
            <div class="watch"><img src={require('./image/sec8img5.jpg')}></img></div>
            <div class="prodname">Solo Microwavw Oven</div>
            <div class="prodprice">₹4,990 Onwords</div>
            </div>
            </div>
            <div class="prod1">
            <div class="product1">  
            <div class="watch"><img src={require('./image/sec8img6.jpg')}></img></div>
            <div class="prodname">Roti and Khakra Maker</div>
            <div class="prodprice">₹2,990 Onwords</div>
            </div>
            </div>
            <div class="prod1">
            <div class="product1">  
            <div class="watch"><img src={require('./image/sec8img7.jpg')}></img></div>
            <div class="prodname">PHILIPS induction Cooktop</div>
            <div class="prodprice">₹2,999O nwords</div>
            </div>
            </div>
            
          </Slider>
          <div class="cont8part2">
            <div class="moreitems">
              <div class="cont8prodtag">Season's Top Picks</div>
              <div class="sec8moreitems">
              <div class="cont8prod1">
                <div class="cont8prod1img"><img src={require('./image/cont8img7.jpg')}></img></div>
                   <div class="cont8prod1tag1">Fancy shirt</div>
                   <div class="cont8prod1tag2">From Rs 429</div>
              </div>
              <div class="cont8prod1">
                <div class="cont8prod1img"><img src={require('./image/cont8img6.jpg')}></img></div>
                   <div class="cont8prod1tag1">Jewellery Set</div>
                   <div class="cont8prod1tag2">From Rs 230</div>
              </div>
              </div>
              <div class="sec8moreitems">
              <div class="cont8prod1">
                <div class="cont8prod1img"><img src={require('./image/cont8prod5.jpg')}></img></div>
                   <div class="cont8prod1tag1">Bedsheets Cover</div>
                   <div class="cont8prod1tag2">From Rs 300</div>
              </div>
              <div class="cont8prod1">
                <div class="cont8prod1img"><img src={require('./image/con8prod1.jpg')}></img></div>
                   <div class="cont8prod1tag1">Messenger Bags</div>
                   <div class="cont8prod1tag2">Min.70% OFF</div>
              </div>
              </div>
            </div>
            <div class="sidebgimg"><img src={require('./image/sidebgimg3.jpg')}></img></div>
          </div>
          <div class="sec9">
          <div class="toptag3"><h1>New Items</h1></div>  
          <div class="sec5">
                <div class="shoesmain">
                <div class="shoescont1"><img src={require('./image/sec9img6.jpg')}></img></div>
                <div class="sec5tag">Befresh Color Saunf</div>
                <div class="sec5price">Rs 280 Onwords</div>
                </div>
                <div class="shoesmain">
                <div class="shoescont1"><img src={require('./image/sec9img7.jpg')}></img></div>
                <div class="sec5tag">Peanut Butter Chocolate</div>
                <div class="sec5price">Rs 185 OFF</div>
                </div>
                <div class="shoesmain">
                <div class="shoescont1"><img src={require('./image/sec9img8.jpg')}></img></div>
                <div class="sec5tag">Latest masala Mixes</div>
                <div class="sec5price">Rs 80 Onwords</div>
                </div>
                <div class="shoesmain">
                <div class="shoescont1"><img src={require('./image/sec9img10.jpg')}></img></div>
                <div class="sec5tag">Freshly Papad</div>
                <div class="sec5price">From Rs 161</div>
                </div>
                <div class="shoesmain">
                <div class="shoescont1"><img src={require('./image/sec9img11.jpg')}></img></div>
                <div class="sec5tag">Tasty Turmeric Powder</div>
                <div class="sec5price">Rs 110 Onwords</div>
                </div>
           </div>
           <div class="sec5">
                <div class="shoesmain">
                <div class="shoescont1"><img src={require('./image/sec9img1.jpg')}></img></div>
                <div class="sec5tag">Fancy Face Packs</div>
                <div class="sec5price">Rs 113 Onwords</div>
                </div>
                <div class="shoesmain">
                <div class="shoescont1"><img src={require('./image/sec9img2.jpg')}></img></div>
                <div class="sec5tag">Lipstick Collection</div>
                <div class="sec5price">From Rs 199</div>
                </div>
                <div class="shoesmain">
                <div class="shoescont1"><img src={require('./image/sec9img3.jpg')}></img></div>
                <div class="sec5tag">Unique FaceWash</div>
                <div class="sec5price">Rs 150 Onwords</div>
                </div>
                <div class="shoesmain">
                <div class="shoescont1"><img src={require('./image/sec9img4.jpg')}></img></div>
                <div class="sec5tag">Wonderful Mugs</div>
                <div class="sec5price">From Rs 174</div>
                </div>
                <div class="shoesmain">
                <div class="shoescont1"><img src={require('./image/sec9img5.jpg')}></img></div>
                <div class="sec5tag">Fancy Irone</div>
                <div class="sec5price">Rs 580 Onwords</div>
                </div>
           </div>
           </div>
          </div>
        );
      }