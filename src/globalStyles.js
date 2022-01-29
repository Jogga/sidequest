import { createGlobalStyle } from 'styled-components';

export const colors = {
  Foreground100: `#111111`,
  Background0: `#ffffff`,
  Background5: `#fdfdff`,
  Background10: `#dddddd`,
  Background20: `#cccccc`,
  Active05: `#f1f2ff`,
  Active10: `#e3e4ff`,
  Active80: `#1d25a6`
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    line-height: 20px;
    background-color: ${ colors.Background5 };
  }
`;

export default GlobalStyle;