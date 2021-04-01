import React from "react"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
import { InView } from "react-intersection-observer"

const IndexPage = ({ setSelected }) => {
  // State for nav animations with intersection observer
  const selectNavItem = (item, inView) => {
    if (item === 1 && inView) {
      setSelected(1)
    }

    if (item === 2 && inView) {
      setSelected(2)
    }

    if (item === 3 && inView) {
      setSelected(3)
    }
  }

  return (
    <>
      <SEO title="Carlos Gauci" />
      {/* About & Skills */}
      <InView
        threshold={0.5}
        as="section"
        onChange={inView => selectNavItem(1, inView)}
      >
        <About />
        <Skills />
      </InView>

      {/* Projects */}
      <InView
        threshold={0.2}
        as="section"
        onChange={inView => selectNavItem(2, inView)}
      >
        <Projects />
      </InView>

      {/* Contact */}
      <InView
        threshold={0.5}
        as="section"
        onChange={inView => selectNavItem(3, inView)}
      >
        <Contact />
      </InView>
    </>
  )
}

export default IndexPage
