import './sunst.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
function Sustainability() {
    const [isActive, setIsActive] = useState('false');
    const ToggleClass = () => {
      setIsActive(!isActive); 
     };
    return (
        <div class="sunstmain">
            <div class="about-cont1">
                <div class="aboutheadpart1">
                    <div class="aboutheadimg"><img src={require('../image/flipkart3.png')}></img></div>
                    <div class="aboutheadtag">
                        <div class="">About</div>
                        <div class="">Ethics</div>
                        <div class="">Culture</div>
                        <div class="">Technology</div>
                        <div class="">Sustainabilty</div>
                        <div class="">Stories</div>
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
            <div class="sbcont1">
                <div class="chiefimg"><img src={require('../image/chief2.jpg')}></img></div>
            </div>
            <div class="sbcont2">
                <div class="sbcont2part1">
                    <div class="sustainablityinfo">
                        <div class="sustainablityinfo1">Sustainability</div>
                        <div class="sustainablityinfo2">At Flipkart, our goal is to use the power of our platform for the good of people and our planet. We are driven by a mission to fulfil our responsibility to the planet and the society as we maximise our efforts to build value for the Indian consumer.</div>
                        <div class="sustainablityinfo2">As an early adopter of sustainability in the e-commerce space in India, our endeavour has been to embed sustainability across business strategies and functions. In these past couple of years, we have focused on creating a systems change through thought leadership and effective partnerships to create long term and sustained impact.</div>
                        <div class="sustainablityinfo3">Through our powerful partnerships with communities, civil society organisations, and coalitions, we seek to drive positive impact with ecosystem conversations, enable cross learning and contribute to building a sustainable future for all. As we start our journey, we know that it would not be easy. We believe that it is important to develop a culture of sustainability where we can bring everyone together through our journey.</div>
                    </div>
                    <div class="sustainaimg"><img src={require('../image/sustainblity3.jpg')}></img></div>
                </div>
            </div>
            <div class="sbcont3">
                <div class="milestones">Key Milestones in our journey</div>
                <div class="journey">
                    <div class="leftjourney">
                        <div class="journeyinfo">
                            <div class="november">In November 2023</div>
                            <div class="novemberinfo">Flipkart Group diverts approximately 3000 tonnes of waste from landfills in one year,taking further strides towards sustainability commitment</div>
                        </div>
                        <div class="journeyinfo">
                            <div class="november">In January 2023</div>
                            <div class="novemberinfo">Flipkart launches Flipkart Green, an e-store for sustainable products.</div>
                        </div>
                        <div class="journeyinfo">
                            <div class="november">In April 2022</div>
                            <div class="novemberinfo">A report by the World Business Council for Sustainable Development (WBCSD), revealed that 100% electrification of e-commerce delivery fleets is possible in India.</div>
                        </div>
                        <div class="journeyinfo">
                            <div class="november">In September 2021</div>
                            <div class="novemberinfo">Flipkart recorded over 75% of its seller partners adopting sustainable packaging, thanks to the company’s continuous efforts of providing feasible transition support</div>
                        </div>
                    </div>
                    <div class="dhasedline"></div>
                    <div class="rightjourney">
                        <div class="journeyinfo1">
                            <div class="november">In August 2023</div>
                            <div class="novemberinfo">Walmart Foundation and Flipkart Foundation help promote sustainable solutions for effective crop residue management and build eco-consciousness among children and youth</div>
                        </div>
                        <div class="journeyinfo1">
                            <div class="november">In June 2022</div>
                            <div class="novemberinfo">The Flipkart Group, India’s homegrown internet ecosystem, has committed to setting an ambitious Net Zero target to decarbonise its own operations by 2030 and the larger value chain by 2040.</div>
                        </div>
                        <div class="journeyinfo1">
                            <div class="november">In February 2022</div>
                            <div class="novemberinfo">participation by private stakeholders and other members of the value chain to build a holistic, circular plastic ecosystem and reduce plastic leakage into nature.</div>
                        </div>
                        <div class="journeyinfo1">
                            <div class="november">In September 2021</div>
                            <div class="novemberinfo">Flipkart achieved the milestone of deploying 2000+ electric vehicles well ahead of its target under the EV100 initiative. The company has committed to deploy 25000 electric vehicles in its logistics operations by 2030</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sustainaendcon"><h1>Together for the Future</h1>
                <div class="dotimg">
                    <div id="carouselExampleControls7" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="slidemainsec">
                                    <div class="slidemainsec1">
                                        <div class="slideppara">In Uttarakhand, an online game on Flipkart is enabling a regenerative future</div>
                                        <button>READ MORE</button>
                                    </div>
                                    <div class="slidemainsec2"><img src={require('../image/sustslideimg.jpg')}></img></div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="slidemainsec">
                                    <div class="slidemainsec1">
                                        <div class="slideppara">At Flipkart, sustainability extends to Green Buildings across our supply chain</div>
                                        <button>READ MORE</button>
                                    </div>
                                    <div class="slidemainsec2"><img src={require('../image/sustslideimg3.jpg')}></img></div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="slidemainsec">
                                    <div class="slidemainsec1">
                                        <div class="slideppara">#TogetherForBetter: Flipkart Group commits to Net Zero carbon emissions by 2040</div>
                                        <button>READ MORE</button>
                                    </div>
                                    <div class="slidemainsec2"><img src={require('../image/sustslideimg1.jpg')}></img></div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls7" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls7" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="abfootersec">
                <div class="abfoot1">
                    <div class="abfootimg2"><img src={require('../image/flipkart3.png')}></img></div>
                    <div class="abfoottag1">Legal</div>
                    <div class="abfoottag1">Media</div>
                    <div class="abfoottag1">Careers</div>
                    <div class="abfoottag1">Flipkart Group</div>
                    <div class="abfoottag1">Flipkart Foundation</div>
                </div>
                <div class="abfoot2">© 2022 www.flipkart.com. All rights reserved.</div>
            </div>
        </div>
    );
}
export default Sustainability;