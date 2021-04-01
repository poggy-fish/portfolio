import React from "react"
import { skills } from "../data/skills"
import { motion } from "framer-motion"
import { skillsVariants, skillIconVariants } from "../framer/variants"
import { InView } from "react-intersection-observer"

export default function Skills() {
  return (
    <InView threshold={0} triggerOnce={true}>
      {({ ref, inView }) => (
        <section className="my-4 lg:my-14">
          <div className="container py-6 flex flex-col items-center">
            {/* Title */}
            <motion.h2
              className="text-3xl relative mb-6 text-white"
              ref={ref}
              variants={skillsVariants}
              initial="initialTitle"
              animate={inView && "animateTitle"}
            >
              My Skills
              <div className="absolute w-full border-b-2 border-primary"></div>
            </motion.h2>

            {/* Icons section */}
            <motion.section
              className="flex flex-row flex-wrap justify-center max-w-3xl"
              variants={skillsVariants}
              initial="hidden"
              animate={inView && "show"}
            >
              {/* Skill list from data/skills.js */}
              {skills
                .filter(skill => !skill.hidden)
                .sort((a, b) => a.id - b.id)
                .map(skill => {
                  return (
                    <motion.a
                      key={skill.id}
                      className="flex flex-col items-center my-4 mr-4 lg:mr-0 lg:mx-8 w-14"
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={skillIconVariants}
                      whileHover={{ y: -4, scale: 1.1 }}
                    >
                      {/* SVG icon */}
                      <motion.div
                        className="w-14 h-14 flex items-center justify-center p-2 rounded-full bg-gray-800"
                        whileHover={{ backgroundColor: "rgba(64, 76, 94)" }}
                      >
                        {skill.svg}
                      </motion.div>

                      {/* Name */}
                      <p className="mt-2 text-xs  text-white">{skill.name}</p>
                    </motion.a>
                  )
                })}
            </motion.section>
          </div>
        </section>
      )}
    </InView>
  )
}
