import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
    .fontTitle1 {
        font-size: var(--font-title-1);
        font-weight: 700;
    }

    .fontTitle2 {
        font-size: var(--font-title-2);
        font-weight: 700;
    }

    .fontTitle3 {
        font-size: var(--font-title-3);
        font-weight: 700;
    }

    .fontTitle4 {
        font-size: var(--font-title-4);
        font-weight: 700;
    }

    .fontText1 {
        font-size: var(--font-text-1);
        font-weight: 400;
    }

    .fontText2 {
        font-size: var(--font-text-2);
        font-weight: 400;
    }

    .fontText3{
        font-size: var(--font-text-3);
        font-weight: 600;
    }

    .fontText4 {
        font-size: var(--font-text-4);
        font-weight: 400;
    }
`;

export default Fonts;
