import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const {
    allAirtable: { nodes },
  } = useStaticQuery(query)

  return (
    <section>
      <div className="container py-6 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl inline-block relative mb-6">
          Latest Projects
          <div className="absolute w-full border-b-2 border-yellow-500"></div>
        </h2>

        {/* Projects */}
        <section className="w-full flex flex-row flex-wrap justify-evenly">
          {nodes.map(project => {
            return (
              <ProjectCard key={project.data.order} project={project.data} />
            )
          })}
        </section>
      </div>
    </section>
  )
}

const query = graphql`
  {
    allAirtable(
      filter: { data: { enabled: { eq: true } } }
      sort: { order: ASC, fields: data___order }
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
                  placeholder: BLURRED
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
