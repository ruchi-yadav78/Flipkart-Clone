import './about-head.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
 function Abouthead(){
    const [isActive, setIsActive] = useState('false');
    const ToggleClass = () => {
      setIsActive(!isActive); 
     };
    return(
        <div class="about-cont1">
                <div class="aboutheadpart1">
                    <div class="aboutheadimg"><img src={require('../image/flipkart3.png')}></img></div>
                    <div class="aboutheadtag">
                        <div class="ababouthd">About</div>
                        <div class="abethicshd">Ethics</div>
                        <div class="abculturehd">Culture</div>
                        <div class="abtechhd">Technology</div>
                        <div class="absusthd"><Link to="/Sunstainblity/sunst">Sustainabilty</Link></div>
                        <div class="abstorieshd">Stories</div>
                    </div>
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
                </div>
            </div>
    );
 }

 export default Abouthead;