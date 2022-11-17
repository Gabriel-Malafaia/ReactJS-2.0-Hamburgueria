import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
    .colorPrimary {
        color: var(--color-primary);
    }

    .colorPrimary2 {
        color: grey;
    }

    .colorSecundary {
        color: var(--color-secundary);
    }
    
    .colorGrey1 {
        color: var(--color-grey-1);
    }
    
    .colorGrey2 {
        color: var(--color-grey-2);
    }

    .colorGrey3 {
        color: var(--color-grey-3);
    }
    
    .colorGrey4 {
        color: var(--color-grey-4);
    }

    .colorNegative {
        color: var(--negative);
    }

    .colorSucess {
        color: var(--sucess);
    }

    .colorInformation {
        color: var(--information);
    }

    .colorWarning {
        color: var(--warning);
    }

    .bg-color-primary {
        background-color: var(--color-primary);
    }

    .bg-color-primary-2 {
        background-color: var(--color-primary-2);
    }

    .bg-color-secundary {
        background-color: var(--color-secundary);
    }

    .bg-color-grey-4 {
        background-color: var(--color-grey-4);
    }

    .bg-color-grey-3 {
    background-color: var(--color-grey-3);
    }

    .bg-color-grey-2 {
        background-color: var(--color-grey-2);
    }

    .bg-color-grey-1 {
        background-color: var(--color-grey-1);
    }
`;

export default Colors;
