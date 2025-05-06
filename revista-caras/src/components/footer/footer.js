import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import carasLogo1 from '../../media/Logo-1.png';


function Footer () {
  return (
    <footer>

        <div className="footer-first-section">

            <img src={ carasLogo1 } alt="Caras Logo" id="footer-logo"/>

            <div className="contact-info">
                <h1 id="footer-contact-us">CONTACTANOS</h1>
                <p className="footer-text">55-3333-4444</p>
                <p className="footer-text">carasrevista@email.com</p>
            </div>

            <div className="footer-media-section">
                <a href="https://www.facebook.com/Revista.Caras" target="_blank" rel="noreferrer noopener" className="social-media-icon-red">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a href="https://www.instagram.com/carasmexico/" target="_blank" rel="noreferrer noopener" className="social-media-icon-red">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a href="https://twitter.com/carasmexico" target="_blank" rel="noreferrer noopener" className="social-media-icon-red">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
            </div>

        </div>

        <div className="footer-second-section">
            
            <p className="footer-text">EDITORIAL TELEVISA S.A. DE C.V. TODOS LOS DERECHOS RESERVADOS. TBG - EDITORIAL TELEVISA - ENTERTAINMENT - NEWS</p>

        </div>

    </footer>

  );
}


export { Footer };