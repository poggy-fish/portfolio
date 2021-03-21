import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { skills } from "../data/skills"

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
    <article className="w-full max-w-xl bg-black my-6 rounded-lg overflow-hidden">
      {/* Project image */}
      <div className=" w-full">
        <GatsbyImage
          image={siteImage}
          alt={title}
          loading="eager"
          className="w-full"
        />
      </div>

      {/* Text Section */}
      <section className="p-4">
        {/* Title & Desc */}
        <h3 className="text-white mb-4 text-xl">{title}</h3>
        <p className="text-white mb-4">{description}</p>

        {/* Buttons */}
        <div className="flex flex-row mb-4">
          <a href={site} target="blank">
            <button className="bg-yellow-500 py-1 w-32 font-heading rounded-lg">
              Live Website
            </button>
          </a>
          <a href={github} target="blank">
            <button className="bg-yellow-500 py-1 w-32 font-heading ml-2 rounded-lg">
              Github
            </button>
          </a>
        </div>

        {/* Icons */}
        <section className="flex flex-row mt-4">
          {skillIcons.map(icon => {
            return (
              <div className="w-10 h-10 flex justify-center items-center mr-3 bg-gray-800 rounded-full p-2">
                {icon.svg}
              </div>
            )
          })}
        </section>
      </section>
    </article>
  )
}
