import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
    font-size: 16px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

body {
    margin: 0;
}

#root {
    padding-bottom: 274px;
}

h1 {
   margin: 0,
}

h2 {
    margin: 0
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