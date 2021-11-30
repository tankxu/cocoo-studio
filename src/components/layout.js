import * as React from 'react'
import { Link } from 'gatsby'
import Header from "./header";


const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default Layout