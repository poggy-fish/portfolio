import React, { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Navigation from "./Navigation"
import { AnimatePresence } from "framer-motion"

const Layout = ({ children }) => {
  // Nav modal open/close state
  const [navOpen, setNavOpen] = useState(false)

  // Disable scrolling when mobile nav is open
  let html
  if (typeof document !== "undefined") {
    html = document.querySelector("html")
  }
  useEffect(() => {
    navOpen
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible")
  }, [navOpen])

  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className="flex flex-col min-h-full overflow-hidden">
        <AnimatePresence>
          {navOpen && <Navigation setNavOpen={setNavOpen} />}
        </AnimatePresence>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
