import './aboutus.css';
 
function About(){
    return(
        <div class="aboutmain">
            
         <div class="vedio"><iframe width="560" height="315" src="https://www.youtube.com/embed/QEL7GaoIGEo?si=lzLqUFyCFZ9Xgpkv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> 
          <div class="aboutcont3">
            <div class="inovation">
                <div class="inovaimg"><img src={require('../image/inovation.jpg')}></img></div>
                <div class="inovainfo">
                    <div class="inovainfo1">TECHNOLOGY AT FLIPKART</div>
                    <div class="inovainfo2">INNOVATION</div>
                    <div class="inovainfo3">Flipkart technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.</div>
                    <div class="inovainfo4"><button>READ MORE</button></div>
                </div>
            </div>
          </div>
    </div>
    );
}

export default About;