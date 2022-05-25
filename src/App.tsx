import { Global } from "@emotion/react";
import Router from "./Router";
import { reset } from "./style/Global/reset";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Router />
    </>
  );
}

export default App;
