import React from "react"
import { skills } from "../data/skills"
import { motion } from "framer-motion"
import { skillsVariants, skillIconVariants } from "../framer/variants"
import { InView } from "react-intersection-observer"

export default function Skills() {
  return (
    <InView threshold={0} triggerOnce={true}>
      {({ ref, inView }) => (
        <section className="lg:mb-10">
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
              {/* Skills list from data/skills.js */}
              {skills.map(skill => {
                return (
                  <motion.div
                    key={skill.id}
                    className="flex flex-col items-center my-4 mr-4 lg:mr-0 lg:mx-8 w-14"
                    variants={skillIconVariants}
                  >
                    {/* SVG icon */}
                    <div className="w-14 h-14 flex items-center justify-center p-2 rounded-full bg-gray-800">
                      {skill.svg}
                    </div>

                    {/* Name */}
                    <p className="mt-2 text-xs  text-white">{skill.name}</p>
                  </motion.div>
                )
              })}
            </motion.section>
          </div>
        </section>
      )}
    </InView>
  )
}
