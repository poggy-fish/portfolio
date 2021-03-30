import React from "react"
import { skills } from "../data/skills"
import { motion } from "framer-motion"
import { skillIconVariants } from "../framer/variants"

export default function Footer() {
  // Get skills for powered by section
  const projectSkills = ["React", "Gatsby", "Tailwind", "Airtable"]
  const skillIcons = skills.filter(item => {
    return projectSkills.includes(item.name)
  })

  return (
    <footer className="w-full py-6">
      <section className="container flex flex-col items-center">
        <p className="text-white text-xs mb-1">© Carlos Gauci 2021</p>
        <p className="text-white text-xs">Website powered by:</p>
        <section className="flex flex-row flex-wrap">
          {skillIcons.map(skill => {
            return (
              <motion.a
                key={skill.id}
                className="flex flex-col items-center my-4 mr-4 lg:mr-0 lg:mx-4 w-14"
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {/* SVG icon */}
                <motion.div
                  className="w-12 h-12 flex items-center justify-center p-2 rounded-full bg-gray-800"
                  whileHover={{ backgroundColor: "rgba(64, 76, 94)" }}
                >
                  {skill.svg}
                </motion.div>

                {/* Name */}
                <p className="mt-2 text-xs  text-white">{skill.name}</p>
              </motion.a>
            )
          })}
        </section>
      </section>
    </footer>
  )
}
