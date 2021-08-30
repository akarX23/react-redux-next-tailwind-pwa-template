import React from "react";
import { wrapper } from "../store";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
