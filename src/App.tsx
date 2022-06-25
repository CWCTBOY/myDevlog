import { Global, ThemeProvider } from "@emotion/react";
import { day } from "./themes/theme";
import Router from "./modules/Router";
import { globalStyle } from "./styles/global/reset";

function App() {
  return (
    <ThemeProvider theme={day}>
      <Global styles={globalStyle} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
