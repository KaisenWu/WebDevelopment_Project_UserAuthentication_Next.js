// Import Provider package.
import { Provider } from "next-auth/client";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // By using the Provider, next-auth will skip the extra session check performed by use session if we already have the session from our getServerSideProps() function.
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
