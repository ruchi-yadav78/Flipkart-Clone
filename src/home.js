//import Maps from './datajsx/mapping';
//import Maps2 from './datajsx/mapping2';
import Footer from './footer';
import Headpart from './header';
import Section4 from './section4';
import Swiperslider2 from './secton8';
import Slidercont from './sliders';
import SimpleSlider from './swiper';
function Homes(){
    return(
    <div>
      <Headpart/>
      <Slidercont/>
      <SimpleSlider/>
      <Section4/>
      <Swiperslider2/>
      <Footer/>
      {/* <Maps/> */}
      {/* <Maps2/> */}
    </div>
    );
}
export default Homes;