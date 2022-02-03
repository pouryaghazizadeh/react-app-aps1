import { render } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from "@mui/private-theming";
import theme from "./constants/theme";
test('renders learn react link', () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
 
});
