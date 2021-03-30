import React from "react"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import SEO from "../components/SEO"

const IndexPage = () => (
  <>
    <SEO title="Carlos Gauci" />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
)

export default IndexPage
