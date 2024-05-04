import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook ,faSquareInstagram, faTiktok,faSquareXTwitter} from '@fortawesome/free-brands-svg-icons';
const Footer =() =>{
    return(
        <div className="footer">
            <div className="social-icons">
                    <nav><FontAwesomeIcon icon={faSquareInstagram} /></nav>
                    <nav><FontAwesomeIcon icon={faSquareFacebook} /></nav>
                    <nav><FontAwesomeIcon icon={faTiktok} /></nav>
                    <nav><FontAwesomeIcon icon={faSquareXTwitter} /></nav>
            </div>

            <div className="footer-policy">
                <nav>Privacy Policy</nav>
                <nav>Cookie Policy</nav>
                <nav>Legal Notice</nav>
                <nav>Accessibility Policy</nav>
                <nav>Cookies Settings</nav>
            </div>

            <div className="footer-info">
                <p>United States -English</p>
                <p>Copyright by Treasure</p>
            </div>
        </div>
    );
}
export default Footer;