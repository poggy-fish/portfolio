import React from "react"
import { graphql } from "gatsby"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
import { InView } from "react-intersection-observer"

const IndexPage = ({ setSelected, data }) => {
  const { about, projects, skills } = data
  return (
    <>
      <SEO title="Carlos Gauci | Front-End Developer" />
      {/* About & Skills */}
      {/* InView components to control nav animation with intersection observer */}
      <InView
        threshold={0.5}
        as="section"
        onChange={inView => inView && setSelected(1)}
      >
        <About aboutInfo={about.nodes} />
        <Skills skills={skills.nodes} />
      </InView>

      {/* Projects */}
      <InView
        threshold={0.2}
        as="section"
        onChange={inView => inView && setSelected(2)}
      >
        <Projects projects={projects.nodes} skills={skills.nodes} />
      </InView>

      {/* Contact */}
      <InView
        threshold={0.8}
        as="section"
        onChange={inView => inView && setSelected(3)}
      >
        <Contact />
      </InView>
    </>
  )
}

// Airtable query
export const query = graphql`
  {
    about: allAirtable(filter: { table: { eq: "About" } }) {
      nodes {
        data {
          aboutPrefix
          aboutTitle
          aboutDesc
          aboutPic {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP, AVIF]
                  layout: FULL_WIDTH
                  quality: 85
                  sizes: "400"
                )
              }
            }
          }
        }
      }
    }

    skills: allAirtable(
      filter: { table: { eq: "Skills" } }
      sort: { fields: data___order }
    ) {
      nodes {
        data {
          name
          svg
          link
          order
          cardOrder
          published
        }
      }
    }

    projects: allAirtable(
      filter: { data: { enabled: { eq: true } }, table: { eq: "Projects" } }
      sort: { fields: data___order, order: ASC }
    ) {
      nodes {
        data {
          title
          order
          description
          site
          github
          skills
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  sizes: "500"
                  formats: [AUTO, WEBP, AVIF]
                  quality: 80
                )
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
