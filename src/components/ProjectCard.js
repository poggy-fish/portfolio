import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { projectCardVariants } from "../framer/variants"
import ReactTooltip from "react-tooltip"

export default function ProjectCard({ project, skills }) {
  // Destructure project
  const {
    title,
    description,
    site,
    github,
    skills: projectSkills,
    image,
  } = project

  //   Get project image
  const siteImage = getImage(image.localFiles[0].childImageSharp)

  //   Get the skill icons we need for this project
  const skillIcons = skills.filter(item => {
    return projectSkills.includes(item.data.name)
  })

  return (
    <motion.article
      className="w-full max-w-sm bg-gray-800 my-6 rounded-lg overflow-hidden lg:mx-6"
      variants={projectCardVariants}
    >
      {/* Project image */}
      <div className="w-full">
        <GatsbyImage
          image={siteImage}
          alt={title}
          loading="eager"
          className="w-full h-full"
        />
      </div>

      {/* Text Section */}
      <section className="p-4 flex flex-col card-height">
        {/* Title & Desc */}
        <h3 className="text-white mb-2 text-xl">{title}</h3>
        <p className="text-white mb-4">{description}</p>

        {/* Links/Buttons */}
        <div className="flex flex-row flex-wrap mb-2 mt-auto">
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary py-1 w-28 font-heading rounded-lg mr-2 my-1 text-center"
          >
            Website
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white py-1 w-28 font-heading my-1 rounded-lg text-center"
          >
            Github
          </a>
        </div>

        {/* Icons */}
        <section className="flex flex-row flex-wrap">
          {skillIcons
            .sort((a, b) => a.data.cardOrder - b.data.cardOrder)
            .map(icon => {
              const { order, link, name, svg } = icon.data
              return (
                <a
                  key={order}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  tabIndex={-1}
                >
                  <motion.div
                    className="w-10 h-10 flex justify-center items-center mr-2 sm:mr-3 my-1 bg-gray-700 rounded-full p-2 cursor-pointer duration-100 focus:outline-none"
                    data-tip={name}
                    variants={projectCardVariants}
                    initial="initial"
                    whileHover="hover"
                    whileFocus="hover"
                    tabIndex={0}
                    dangerouslySetInnerHTML={{ __html: svg }}
                  />

                  <ReactTooltip
                    place="bottom"
                    type="dark"
                    effect="solid"
                    offset={{ bottom: -5 }}
                    className="react-tooltip"
                    backgroundColor="#111"
                  />
                </a>
              )
            })}
        </section>
      </section>
    </motion.article>
  )
}
