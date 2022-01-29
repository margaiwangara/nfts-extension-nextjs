import TopBar from './TopBar';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@src/theme';

describe('TopBar', () => {
  it('renders HomePage if there is no title data prop passed', () => {
    render(
      <ThemeProvider theme={theme}>
        <TopBar />
      </ThemeProvider>,
    );

    const title = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === 'HomePage';
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child),
      );

      return nodeHasText && childrenDontHaveText;
    });

    expect(title).toBeInTheDocument();
  });

  it('renders title if title prop is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <TopBar title="Register" />
      </ThemeProvider>,
    );

    const title = screen.getByText(/Register/i);

    expect(title).toBeInTheDocument();
  });
});
