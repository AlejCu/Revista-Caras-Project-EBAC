import styled from 'styled-components';
import { Theme } from '../../theme';
import { SubmitButton } from '../../theme/mixins';

export const NewsLetterSection = styled.section`
    fieldset {
    border: 0;
    display: flex;
    flex-direction: column;
}

input {
    width: 150px;
    padding: 5px;
}

#submitButton {
    ${SubmitButton};
}


.newsletter-main-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #eeece7;
    align-items: center;


    #newsletter-img {
        width: 400px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 35px;
        margin-bottom: 35px;

        
            h1, p {
                text-align: center;
            }
    }
}


.newsletter__not-valid {
    color: ${Theme.colors.primary};
    font-size: 0.9em;
    margin-top: 10px;
    text-align: center;
    padding: 2px;
    width: 150px;
}


.newsletter__valid {
    @extend .newsletter__not-valid;
    color: #000000;
}


article {
    width: auto;
    padding: 20px;

    section {
        margin: 20px;
    }
}

.newsletter-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

        h1 {
        font-size: 1.8em;
        }
}

        
    .newsletter-text{
        padding: 20px;
        text-align: center;
    }
}
`;