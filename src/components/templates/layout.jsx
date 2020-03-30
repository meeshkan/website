import React from "react"
import './layout.css'

const Layout = ({ children }) => {

  return (
    <>
      {/* nav */}
      <main>{children}</main>
      {/* footer */}
    </>
  )
}

export default Layout
