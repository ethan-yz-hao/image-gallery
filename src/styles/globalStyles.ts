import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body, h1, h2, h3, p, ul, li {
        margin: 0;
        padding: 0;
    }
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        line-height: 1.6;
    }
    
    #root {
        text-align: center;
    }
`;

export default GlobalStyles;