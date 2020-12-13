import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

import "./Layout.scss";
import "./index.scss";

import navButtons from "../config/buttons";

const Layout = props => {
  const appTitle = `Mateus Franco`;

  return (
    <div className="Layout">
      <meta name="theme-color" content="$secondary" />
      <Head>
        <title>Mateus Franco</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} />
      <div className="Content">{props.children}</div>
      <NavBar navButtons={navButtons} />
    </div>
  );
};

export default Layout;