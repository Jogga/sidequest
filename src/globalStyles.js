import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    line-height: 20px;
  }
`;

export const colors = {
  Foreground100: `#111111`,
  Background0: `#ffffff`,
  Background5: `#efefef`,
  Background10: `#dddddd`,
  Background20: `#cccccc`,
  Active10: `#e3e4ff`,
  Active80: `#1d25a6`
}

export default GlobalStyle;