import React from "react";
import { Router } from "@reach/router";
import { Helmet } from "react-helmet";

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
    <Header location={props.location} />
    {props.children}
  </>
);

const ShopContent = () => <div>shop</div>;

const Shop = (props) => <div>{props.children}</div>;
const NotFound = () => <p>Sorry, nothing here</p>;

const IndexPage = () => (
  <div className="antialiased">
    <Helmet>
      <meta charSet="utf-8" />
      <title>CoCoo Studio | 腾云CODING体验设计</title>
      <meta
        name="description"
        content="CoCoo Studio官方网站，CoCoo Studio是腾讯云CODING的体验设计团队，专注DevOps、开发工具类SaaS产品体验设计。提出“云端工作美学”体验设计语言，让云研发工作体验变得更加“纯净简单”，更能“动态适应”不同场景和功能服务，也能企业变得更有“文化和思考”。"
      />
    </Helmet>
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
