import'./sliders.css';
 
function Slidercont() {
    return(
       <div class="firstslider">
       <div id="carouselExampleCaptions1" class="carousel slide" data-bs-ride="carousel">
       <div class="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="3" aria-label="Slide 4"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="4" aria-label="Slide 5"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="5" aria-label="Slide 6"></button>

       </div>
       <div class="carousel-inner">
         <div class="carousel-item active imgslide1">
           <div class="webslide1"> <img src={require('./image/flipslide7.jpg')}></img></div>
         </div>
         <div class="carousel-item imgslide1">
           <div class="webslide1"> <img src={require('./image/flipslide6.jpg')}></img></div>
         </div>
         <div class="carousel-item imgslide1">
           <div class="webslide1"> <img src={require('./image/flipslide8.jpg')}></img></div>
         </div>
         <div class="carousel-item imgslide1">
           <div class="webslide1"> <img src={require('./image/flipslide9.jpg')}></img></div>
         </div>
         <div class="carousel-item imgslide1">
           <div class="webslide1"> <img src={require('./image/flipslide10.jpg')}></img></div>
         </div>
       </div>
       <button class="carousel-control-prev leftbtn" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
         <span class="carousel-control-prev-icon ryb" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
       </button>
       <button class="carousel-control-next rightbtn" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
         <span class="carousel-control-next-icon bby" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
       </button>
     </div> 
     <div class="toptag"><h1>Top Deals</h1></div>
     </div>
    );
}

export default Slidercont;

