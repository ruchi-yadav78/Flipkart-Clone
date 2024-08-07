import './footer.css';
import { Link } from "react-router-dom";
function Footer(){
    return(
    <div>
    <footer>
      <div class="footerpart1">
        <div class="footcont1">
          <div class="foottag1">ABOUT</div>
          <div class="foottag2">Contact Us</div>
          <div class="foottag3"><Link to="/aboutallfile/abouts-com">About Us</Link></div>
          <div class="foottag4">Careers</div>
          <div class="foottag5">Flipkart Stories</div>
          <div class="foottag6">Press</div>
          <div class="foottag7">Corporate Information</div>
        </div>
        <div class="footcont1">
          <div class="foottag1">GROUP COMPANIES</div>
          <div class="foottag2">Myntra</div>
          <div class="foottag3">Flipkart Wholesale</div>
          <div class="foottag4">Cleartrip</div>
          <div class="foottag5">Shopsy</div>
        </div>
        <div class="footcont1">
          <div class="foottag1">HELP</div>
          <div class="foottag2">Payments</div>
          <div class="foottag3">Shipping</div>
          <div class="foottag4">Cancllation & Return</div>
          <div class="foottag5">FAQ</div>
          <div class="foottag6">Report Infigriment</div>
        </div>
        <div class="footcont1">
          <div class="foottag1">CONSUMER POLICY</div>
          <div class="foottag2">Terms Of Use</div>
          <div class="foottag3">Security</div>
          <div class="foottag4">privacy</div>
          <div class="foottag5">Sitemap</div>
          <div class="foottag6">Grievance Redressal</div>
          <div class="foottag7">EPR Compliance</div>
        </div>
        <div class="footcont1">
          <div class="foottag1">MAIL US:</div>
          <div class="foottag2">Flipkart Internal Private Limited,</div>
          <div class="foottag3">Bulidings Alyssa, Begonia &</div>
          <div class="foottag4">Clove Embassy Tech village,</div>
          <div class="foottag5">Bengluru, 560103,</div>
          <div class="foottag6">Karnataka, India</div>
        </div>
        <div class="footcont1">
          <div class="foottag1">REGISTRERED OFFICE ADDRESS</div>
          <div class="foottag2">Flipkart Internal Private Limited,</div>
          <div class="foottag3">Bulidings Alyssa, Begonia &</div>
          <div class="foottag4">Clove Embassy Tech village,</div>
          <div class="foottag5">Bengluru, 560103,</div>
          <div class="foottag6">Karnataka, India</div>
          <div class="foottag7">CIN : U51109KA2012PTC066107</div>
          <div class="foottag8">Telephone : <span>044-45614700</span></div>

        </div>
      </div>
      <div class="footerpart2">
        <div class="fcont2sec1">
          <div class="becomeseller"><i class="fa-solid fa-store"></i> Become a Seller</div>
          <div class="advertize"><i class="fa-regular fa-star"></i> Advertize</div>
          <div class="giftcard"><i class="fa-solid fa-gift"></i> Gift Cards</div>
          <div class="helpcenter"><i class="fa-regular fa-circle-question"></i> Help Center</div>
          <div class="flipcarkmail">© 2007-2024 Flipkart.com</div>
        </div>
        <div class="fcont2sec2">
        <div class="paymethod"><img src={require('./image/visa2.png')}></img></div>
        </div>
      </div>
    </footer>
    </div>
    );
}

export default Footer;