import { HeaderStyles } from './headerStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';


function Header() {
  return (

    <>
        <HeaderStyles>
            <a href="#newsletter-section" rel="noreferrer noopener">
                <img src="/media/Logo-2.png" alt="Caras Logo" className="nav-img" id="header-logo"/>
            </a>

            <nav>
                <a href="https://www.caras.com.mx/entretenimiento/" target="_blank" rel="noreferrer noopener" className="nav-header-links">Entretenimiento</a>

                <a href="https://www.caras.com.mx/realeza/" target="_blank" rel="noreferrer noopener" className="nav-header-links">Realeza</a>

                <a href="https://www.caras.com.mx/moda/" target="_blank" rel="noreferrer noopener" className="nav-header-links">Moda</a>

                <a href="https://www.caras.com.mx/lifestyle/" target="_blank" rel="noreferrer noopener" className="nav-header-links">Lifestyle</a>

                <a href="https://www.caras.com.mx/personalidades/" target="_blank" rel="noreferrer noopener" className="nav-header-links">Personalidades</a>

                <a href="https://www.caras.com.mx/arte-cultura/" target="_blank" rel="noreferrer noopener" className="nav-header-links">Arte y Cultura</a>

                <a href="https://www.caras.com.mx/deportes/" target="_blank" rel="noreferrer noopener" className="nav-header-links">Sport</a>

                <a href="https://www.caras.com.mx/revista" target="_blank" rel="noreferrer noopener" className="nav-header-links">Revista</a>

                <a href="https://www.facebook.com/Revista.Caras" target="_blank" rel="noreferrer noopener" className="social-media-icon-white">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a href="https://www.instagram.com/carasmexico/" target="_blank" rel="noreferrer noopener" className="social-media-icon-white">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a href="https://twitter.com/carasmexico" target="_blank" rel="noreferrer noopener" className="social-media-icon-white">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
            </nav>

        </HeaderStyles>
    </>
  );
}


export { Header };