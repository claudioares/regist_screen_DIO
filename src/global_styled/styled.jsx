import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        line-height: 2.5rem;
        
        min-height: 100vh;
    
        font-size: 1.6rem;
        margin: 0;

        color: #F0F3F6;
    }
    li{
        list-style-type: none;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }
    }
`

export default GlobalStyle;