import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { skills } from "../data/skills"
import { motion } from "framer-motion"
import { projectCardVariants } from "../framer/variants"

export default function ProjectCard({ project }) {
  // Destructure project
  const {
    title,
    description,
    site,
    github,
    skills: projectSkills,
    image,
  } = project

  //   Get image
  const siteImage = getImage(image.localFiles[0].childImageSharp)

  //   Get the skill icons we need
  const skillIcons = skills.filter(item => {
    return projectSkills.includes(item.name)
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

        {/* Buttons */}
        <div className="flex flex-row flex-wrap mb-2 mt-auto">
          <a href={site} target="_blank" rel="noreferrer">
            <button className="bg-primary py-1 w-28 mr-2 my-1 font-heading rounded-lg">
              Website
            </button>
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <button className="bg-primary py-1 w-28 my-1 font-heading rounded-lg">
              Github
            </button>
          </a>
        </div>

        {/* Icons */}
        <section className="flex flex-row flex-wrap">
          {skillIcons.map(icon => {
            return (
              <div
                key={icon.id}
                className="w-10 h-10 flex justify-center items-center mr-2 sm:mr-3 my-1 bg-gray-700 rounded-full p-2"
              >
                {icon.svg}
              </div>
            )
          })}
        </section>
      </section>
    </motion.article>
  )
}
