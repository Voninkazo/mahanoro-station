import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
    font-size: 16px;
}

body {
    margin: 0;
    font-family: monospace;
}

h1 {
   
}


ul {
    list-style: none;
    padding: 0;
}

a {
    text-decoration: none;
}

@media (min-width:1114px) {
    #root {
        max-width: 1114px;
        margin: auto;
        padding: 0;
        padding-bottom: 40px;
    }
}
`;