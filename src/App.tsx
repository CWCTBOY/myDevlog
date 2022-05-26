import { Global, ThemeProvider } from "@emotion/react";
import { day, night } from './themes/theme';
import Router from "./modules/Router";
import { globalStyle } from "./styles/Global/globalStyle";

function App() {
  return (
    <ThemeProvider theme={day || night}>
      <Global styles={globalStyle} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
