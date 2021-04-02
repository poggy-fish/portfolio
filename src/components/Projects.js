import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"
import { projectVariants } from "../framer/variants"
import { InView } from "react-intersection-observer"

export default function Projects() {
  const {
    allAirtable: { nodes },
  } = useStaticQuery(query)

  return (
    <InView threshold={0} triggerOnce={true}>
      {({ ref, inView }) => (
        <section id="projects" className="mb-4 lg:mb-14" ref={ref}>
          <div className="container py-6 flex flex-col items-center">
            {/* Title */}
            <motion.h2
              className="text-3xl inline-block relative mb-6 text-white"
              variants={projectVariants}
              initial="initialTitle"
              animate={inView && "animateTitle"}
            >
              Latest Projects
              <div className="absolute w-full border-b-2 border-primary"></div>
            </motion.h2>

            {/* Projects */}
            <motion.section
              className="w-full flex flex-row flex-wrap justify-center"
              variants={projectVariants}
              initial="hidden"
              animate={inView && "show"}
            >
              {nodes.map(project => {
                return (
                  <ProjectCard
                    key={project.data.order}
                    project={project.data}
                  />
                )
              })}
            </motion.section>
          </div>
        </section>
      )}
    </InView>
  )
}

const query = graphql`
  {
    allAirtable(
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
