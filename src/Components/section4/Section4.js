import "./section4.css";
import arr from "./cities.js";
import playstore from "../../images/googleplay.png";
import macos from "../../images/appstore.png";
import swiggy from "../../images/swiggyfooter.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import pininterest from "../../images/pininterest.png";

function Section4() {
  return (
    <div className="main_foooter">
      <div className="grid">
        <div className="uppergrid">
          <div className="headoflist">COMPANY</div>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Swiggy Blog</a>
            </li>
            <li>
              <a href="#">Bug Bounty</a>
            </li>
            <li>
              <a href="#">Swiggy Super</a>
            </li>
            <li>
              <a href="#">Swiggy Corporate</a>
            </li>
            <li>
              <a href="#">Swiggy Instamart</a>
            </li>
          </ul>
        </div>
        <div className="uppergrid">
          <div className="headoflist">CONTACT</div>
          <ul>
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Partner with us</a>
            </li>
            <li>
              <a href="#">Ride with us</a>
            </li>
          </ul>
        </div>
        <div className="uppergrid">
          <div className="headoflist">LEGAL</div>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Refund & Cancellation</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Offer Terms</a>
            </li>
            <li>
              <a href="#">Phishing & Fraud</a>
            </li>
          </ul>
        </div>
        <div className="playstore">
          <a href="https://web.archive.org/web/20210903174711/https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
            <img src={macos} />
          </a>
          <a href="https://web.archive.org/web/20210903174711/https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheadoflister">
            <img src={playstore} />
          </a>
        </div>
      </div>
      <hr />
      <div className="middle">
        <h4>WE DELIVER TO</h4>
        <div className="grid">
          <div className="headoflist">
            <ul >
              <li>
                <a href="#">Abohar</a>
              </li>
              <li>
                <a href="#">Adilabad</a>
              </li>
              <li>
                <a href="#">Adityapur</a>
              </li>
              <li>
                <a href="#">Adoni</a>
              </li>
              <li>
                <a href="#">Agartala</a>
              </li>
            </ul>
          </div>
          <div className="headoflist">
            <ul >
              <li>
                <a href="#">Dausa</a>
              </li>
              <li>
                <a href="#">Davanagere</a>
              </li>
              <li>
                <a href="#">Dehradun</a>
              </li>
              <li>
                <a href="#">Dehri</a>
              </li>
              <li>
                <a href="#">Delhi</a>
              </li>
            </ul>
          </div>
          <div  className="headoflist">
            <ul>
              <li>
                <a href="#">Kishanganj</a>
              </li>
              <li>
                <a href="#">Kishangarh</a>
              </li>
              <li>
                <a href="#">Kochi</a>
              </li>
              <li>
                <a href="#">Kodaikanal</a>
              </li>
              <li>
                <a href="#">Kolar</a>
              </li>
            </ul>
          </div>
          <div class="headoflist">
            <ul >
              <li>
                <a href="#">Pudukkottai</a>
              </li>
              <li>
                <a href="#">Pune</a>
              </li>
              <li>
                <a href="#">Puri</a>
              </li>
              <li>
                <a href="#">Purnea</a>
              </li>
              <li>
                <a href="#">Purulia</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div className="lastpart">
        <a href="/web/20210903174711/https://www.swiggy.com/">
          <img width="50%" src={swiggy} />
        </a>

        <div className="copy">© 2021 Swiggy</div>
        <div className="social">
          <a href="https://web.archive.org/web/20210903174711/https://www.facebook.com/swiggy.in">
            <img width="50%" src={facebook} />
          </a>
          <a href="https://web.archive.org/web/20210903174711/https://pinterest.com/swiggyindia">
            <img width="50%" src={twitter} />
          </a>
          <a href="https://web.archive.org/web/20210903174711/https://instagram.com/swiggyindia/">
            <img width="50%" src={instagram} />
          </a>
          <a href="https://web.archive.org/web/20210903174711/https://twitter.com/swiggy_in">
            <img width="50%" src={pininterest} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section4;
