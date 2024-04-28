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
    
    button {
        padding: 8px 16px;
        margin: 5px;
        background: blue;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background: darkblue;
        }
    }

    input, select {
        padding: 8px;
        margin: 5px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
`;

export default GlobalStyles;