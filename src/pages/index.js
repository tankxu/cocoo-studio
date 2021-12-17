import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
// import SEO from "../components/seo"
import Header from "../components/header";

// const Home = React.lazy(() => import("../components/Home"));
// const Monkit = React.lazy(() => import("../components/Monkit"));
// const Store = React.lazy(() => import("../components/Store"));
// const Blog = React.lazy(() => import("../components/Blog"));

import Home from "../components/Home";
import Monkit from "../components/Monkit";
import Store from "../components/Store";
import Blog from "../components/Blog";

const LazyComponent = ({ Component, ...props }) => (
  // <React.Suspense fallback={"Loading..."}>
  <div className="animate-fade-in-page opacity-100">
    <Component {...props} />
  </div>
  // </React.Suspense>
);

const Index = (props) => (
  <>
    <Header />
    {/* <SEO title="Home" /> */}
    {props.children}
  </>
);

const ShopContent = () => <div>shop</div>;

const Shop = (props) => <div>{props.children}</div>;
const NotFound = () => <p>Sorry, nothing here</p>;

const IndexPage = () => (
  <div className="antialiased">
    <Router>
      {/* <NotFound default /> */}

      <Index path="/">
        <LazyComponent Component={Home} path="/" />
        <LazyComponent Component={Monkit} path="/monkit" />
        <LazyComponent Component={Store} path="/store" />
        <LazyComponent Component={Blog} path="/blog" />
      </Index>
      <Shop path="shop">
        <ShopContent path="/" />
      </Shop>
    </Router>
  </div>
);

export default IndexPage;
