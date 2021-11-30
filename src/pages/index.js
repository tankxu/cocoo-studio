import React from "react"
import { Router, Route, Link } from "@reach/router"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Home from "../components/Home"
import Header from "../components/header";

const Home = React.lazy(() => import("../components/Home"))
const Monkit = React.lazy(() => import("../components/Monkit"))
const Blog = React.lazy(() => import("../components/Blog"))

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={"<p>Loading...</p>"}>
    <Component {...props} />
  </React.Suspense>
)

const IndexPage = () => (
  <Router>
    <Layout path="/" >
      
      {/* <SEO title="Home" /> */}
      <LazyComponent Component={Home} path="/" />
      <LazyComponent Component={Monkit} path="/monkit" />
      <LazyComponent Component={Blog} path="/blog" />
    </Layout>
  </Router>
)

export default IndexPage
