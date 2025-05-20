import styled from 'styled-components';
import { Theme } from '../../theme';

export const HeaderStyles = styled.header`
    background-color: ${Theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;
    padding-left: 50px;
    height: 120px;
    max-height: 120px;
    position: sticky;
    top: 0;


    #header-logo {
        width: 150px;
        max-height: 50px;
        border: 2px 1px;

        &:hover {
            cursor: pointer;
            opacity: 0.85;
        }
    }


    nav {
        display: flex;
        align-items: center;
    
    
        .nav-header-links {
            text-decoration: none;
            margin: 10px;
            font-family: Playfair;
            color: ${Theme.colors.secondary};
            font-weight: bold;
            padding: 5px;

            &:hover {
                color: ${Theme.colors.primary};
                background-color: ${Theme.colors.secondary};
                border-radius: 5px;
                transition: .1s ease-in-out;
            }
        }
    
    }
`;