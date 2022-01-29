import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { normalize } from 'polished';
import { wrapper } from '@src/store';
import theme from '@src/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: 16px;
    width: 100%;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
`;

export default wrapper.withRedux(App);
