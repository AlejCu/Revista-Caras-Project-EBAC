import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import carasLogo1 from '../../media/Logo-1.png';


function Footer () {
  return (
    <footer>

        <div class="footer-first-section">

            <img src={ carasLogo1 } alt="Caras Logo" id="footer-logo"/>

            <div class="contact-info">
                <h1 id="footer-contact-us">CONTACTANOS</h1>
                <p class="footer-text">55-3333-4444</p>
                <p class="footer-text">carasrevista@email.com</p>
            </div>

            <div class="footer-media-section">
                <a href="https://www.facebook.com/Revista.Caras" target="_blank" rel="noreferrer noopener" class="social-media-icons-footer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a href="https://www.instagram.com/carasmexico/" target="_blank" rel="noreferrer noopener" class="social-media-icons-footer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a href="https://twitter.com/carasmexico" target="_blank" rel="noreferrer noopener" class="social-media-icons-footer">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
            </div>

        </div>

        <div class="footer-second-section">
            
            <p class="footer-text">EDITORIAL TELEVISA S.A. DE C.V. TODOS LOS DERECHOS RESERVADOS. TBG - EDITORIAL TELEVISA - ENTERTAINMENT - NEWS</p>

        </div>

    </footer>

  );
}


export { Footer };