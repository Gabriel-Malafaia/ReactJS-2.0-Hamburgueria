import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }

    img {
        width: 100%;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        background: none;
    }

    body {
        font-family: 'Inter', sans-serif;
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-2: ##93D7AF;
        --color-secundary: #EB5757;
        --color-grey-1: #333333;
        --color-grey-2: #828282;
        --color-grey-3: #E0E0E0;
        --color-grey-4: #F5F5F5;
        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;

        --font-title-1: 26px;
        --font-title-2: 22px;
        --font-title-3: 18px;
        --font-title-4: 14px;
        --font-text-1: 16px;
        --font-text-2: 14px;
        --font-text-3: 14px;
        --font-text-4: 12px;
    }

    .buttonDefault {
        max-width: 130px;
        width: 100%;
        height: 60px;
        padding: 0 8px;
        font-size: 18px;
        color: var(--color-grey-4);
        border-radius: 6px;
        transition: ease 0.3s;
    }

    .buttonDefault:hover{
        filter: brightness(1.2);
    }

    .buttonDefault.medium {
        height: 40px;
    }
`;

export default GlobalStyle;
