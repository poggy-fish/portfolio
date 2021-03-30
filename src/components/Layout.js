import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Navigation from "./Navigation"

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      {navOpen && <Navigation setNavOpen={setNavOpen} />}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
