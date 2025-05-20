import { Theme } from '.';

export const MainTitleTemplate = `
    font-size: 1.8em;
    font-family: Barlow-bold;
    font-weight: bold;
    text-align: center;
    color: ${Theme.colors.primary};
`;

export const SubmitButton = `
    margin-top: 15px;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
    background-color: ${Theme.colors.secondary};
    cursor: pointer;
    border: 1px solid #1a1919;
    font-family: Barlow-light;
    font-size: 15px;

    &:hover {
        background-color: ${Theme.colors.primary};
        color: ${Theme.colors.secondary};
        transition: .1s ease-in-out;
    }
`;