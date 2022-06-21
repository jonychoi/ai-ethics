import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import {darkBg, lightBg, unlimitColor} from './index';

 
export const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.darkMode ? darkBg : lightBg};
  }

  .jupyter, .readme {
    color: ${(props) => props.darkMode ? "white" : "black"};
    line-height: 24px;
    font-size: 15px;
  }

  p {
    margin: 10px 0px;
    font-size: 16.5px;
    color: rgb(235, 235, 235);
    padding: 0 20%;
  }

  strong {
    font-weight: 700;
  }
  
  ul, ol {
    margin: 20px 0px;
    padding: 0 20%;
    font-size: 16.5px;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  .mont {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: ${unlimitColor};
  }

  a:visited {
    color: inherit;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0); 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

`;
 
export default GlobalStyle;