import { createGlobalStyle } from 'styled-components';

export const colors = {
  Foreground100: `#0A0A14`,
  Foreground30: `#C3C3CE`,
  Background0: `#ffffff`,
  Background5: `#F9FAFF`,
  Background10: `#F0F1F8`,
  Background20: `#cccccc`,
  Primary05: `#f1f2ff`,
  Primary10: `#e3e4ff`,
  Primary80: `#1D25A6`,
  Primary90: `#0F1D8B`
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    line-height: 20px;
    color: ${ colors.Foreground100 };
    background-color: ${ colors.Background5 };
  }
  a {
    text-decoration: none;
    color: ${ colors.Primary80 };
  }
`;

export default GlobalStyle;