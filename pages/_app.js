import "../styles/style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
  config.autoAddCss = false;
}

export default MyApp;
