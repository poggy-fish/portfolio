import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"

export default function Footer() {
  const {
    allAirtable: { nodes: skills },
  } = useStaticQuery(query)

  // Get skills needed for powered by section
  const projectSkills = ["React", "Gatsby", "Tailwind", "Airtable"]
  const skillIcons = skills.filter(item => {
    return projectSkills.includes(item.data.name)
  })

  return (
    <footer className="w-full py-6">
      <section className="container flex flex-col items-center">
        <p className="text-white text-xs mb-1">Carlos Gauci © 2021</p>
        <p className="text-white text-xs">Website powered by:</p>
        <section className="flex flex-row flex-wrap">
          {skillIcons.map(skill => {
            const { order, link, name, svg } = skill.data
            return (
              <motion.a
                key={order}
                className="flex flex-col items-center my-4 mr-4 lg:mr-0 lg:mx-4 w-14 focus:outline-none"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                whileFocus={{ y: -2, scale: 1.05 }}
              >
                {/* SVG icon */}
                <motion.div
                  className="w-12 h-12 flex items-center justify-center p-2 rounded-full bg-gray-800"
                  whileHover={{ backgroundColor: "rgba(64, 76, 94)" }}
                  dangerouslySetInnerHTML={{ __html: svg }}
                />

                {/* Name */}
                <p className="mt-2 text-xs  text-white">{name}</p>
              </motion.a>
            )
          })}
        </section>
      </section>
    </footer>
  )
}

const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Skills" } }
      sort: { fields: data___order }
    ) {
      nodes {
        data {
          name
          svg
          link
          order
        }
      }
    }
  }
`
