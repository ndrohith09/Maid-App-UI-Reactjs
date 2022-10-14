import {FiFacebook , FiTwitter ,FiLinkedin ,FiInstagram , FiPhone} from 'react-icons/fi'; 
import {IoMailOutline } from 'react-icons/io5';
import razorpayimg from './assets/images/razorpay.png';
const Footer = () => { 
    return ( 
        <>
        <footer class="footer-dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 item">
                    <h3 class="footer-links-title">Useful Links</h3>
                    <ul class="footer-links">
                        <li><a href="/about">What is HomieTouch</a></li>
                        <li><a href="/#team">Our Team</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/terms-privacy">Terms & Conditions</a></li>
                        <li><a href="/terms-privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                    <h3><strong>Cities</strong></h3>
                    <ul class="footer-links">
                        <li><a>Banglore</a></li>
                    </ul>
                </div>
                
                <div class="col-sm-6 col-md-3 item">
                    <h3><strong>Work with us</strong></h3>
                    <ul class="footer-links">
                        <li><a href="/maidapp">Work as Maid</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                    <h3><strong>Connect with us</strong></h3>
                    <ul class="footer-links">
                        <li><a><FiPhone style={{fontSize:'25px' , paddingRight: '1%'}}/>1234567890</a></li>
                        <li><a><IoMailOutline style={{fontSize:'25px' , paddingRight: '1%'}}/>homietouch@gmail.com</a></li>
                        <br />
                        <li class="footer-icons"><a href="#"><FiLinkedin /></a><a href="#"><FiFacebook /></a><a href="#"><FiTwitter /></a><a href="#"><FiInstagram /></a></li>
                        <br />
                        <li className="footer-icons"><img src={razorpayimg} alt="Razorpay" /></li>
                        
                    </ul>
                </div>
            </div>
            <p class="copyright">HomieTouch © 2021</p>
        </div>
    </footer>
        </>
    )
}
export default Footer; 