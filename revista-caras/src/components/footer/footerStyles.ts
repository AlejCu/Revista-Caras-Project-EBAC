import styled from 'styled-components';

export const FooterSection = styled.footer`

    background-color: #fbfbfb;
    padding: 10px;


        a {
            text-decoration: none;
            margin: 10px;
            text-align: center;
        }


        .footer-text {
            color: #666666;
        }


        #footer-logo {
            width: 250px;
            height: auto;
            border: 2px 1px;
        }


        .footer-first-section {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }


        .footer-media-section {
            display: flex;
            text-align: center;
        }

    @media (max-width: 765px) {
        font-size: 0.9em;

        #footer-logo {
            width: 180px;
        }
    }

    @media (max-width: 624px) {
        .footer-first-section {
            flex-direction: column;
        }
    }
`;