import { createGlobalStyle } from 'styled-components';
import { Theme } from '.';


const GlobalStyles = createGlobalStyle`

html {
    margin: 0;
    padding: 0;
}

  :root {
    margin: 0;
    padding: 0;
}

  @font-face {
    font-family: Playfair;
    src: url(../media/Playfair-display-Regular.ttf);
}


@font-face {
    font-family: Barlow-light;
    src: url(../media/Barlow-light.ttf);
}


@font-face {
    font-family: Barlow-bold;
    src: url(../media/Barlow-bold.ttf);
}
  
body {
    width: 100%;
    margin: 0;
    border: 0;
    font-size: 15px;
    font-family: Playfair;
}

h1 {
    font-size: 1.8em;
    font-family: Barlow-bold;
    font-weight: bold;
    text-align: center;
    color: ${Theme.colors.primary};
}

h2 {
    font-family: Playfair;
    font-weight: bold;
    font-size: 18px;
}

.social-media-icon-white {
    border: 1px solid #FFF;
    color: #FFF;
    border-radius: 50%;
    padding: 5px 7px;
    margin: 10px;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: #FFF;
        transition: .1s ease-in-out;
        color: #1a1919;
    }
}

.social-media-icon-red {
    border: 1px solid #1a1919;
    border-radius: 50%;
    padding: 5px 7px;
    color: #1a1919;
    margin: 10px;

    a {
        padding: 5px;
    }

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {

        background-color: #ED1E1E;
        transition: .1s ease-in-out;
        color: #FFF;
    }
}
`;

export default GlobalStyles;