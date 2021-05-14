import React from "react"
import { motion } from "framer-motion"
import { skillsVariants, skillIconVariants } from "../framer/variants"
import { InView } from "react-intersection-observer"

export default function Skills({ skills }) {
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
              className="flex flex-row flex-wrap justify-center max-w-4xl"
              variants={skillsVariants}
              initial="hidden"
              animate={inView && "show"}
            >
              {/* Filter and map skills data from graphql (some skills are only shown on project card) */}
              {skills
                .filter(skill => skill.data.published === true)
                .map(skill => {
                  const { order, link, svg, name } = skill.data
                  return (
                    <motion.a
                      key={order}
                      className="my-4 mx-2 lg:mr-0 lg:mx-8 w-14 block text-xs text-white focus:outline-none focus:text-primary"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={skillIconVariants}
                    >
                      <motion.div
                        className="w-full flex flex-col items-center"
                        whileHover={{
                          y: -5,
                          scale: 1.05,
                        }}
                      >
                        {/* SVG icon */}
                        <motion.div
                          className="w-14 h-14 flex items-center justify-center p-2 rounded-full bg-gray-800"
                          whileHover={{ backgroundColor: "rgba(64, 76, 94)" }}
                          dangerouslySetInnerHTML={{ __html: svg }}
                        />

                        {/* Name */}
                        <button
                          className="mt-2 font-body inherit focus:outline-none"
                          tabIndex={-1}
                        >
                          {name}
                        </button>
                      </motion.div>
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
