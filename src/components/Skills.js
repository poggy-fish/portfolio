import React from "react"
import { skills } from "../data/skills"

export default function Skills() {
  return (
    <section className="lg:mb-10">
      <div className="container py-6 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl relative mb-6 text-white">
          My Skills
          <div className="absolute w-full border-b-2 border-primary"></div>
        </h2>

        {/* Icons section */}
        <section className="flex flex-row flex-wrap justify-center ">
          {/* Skills list from data/skills.js */}
          {skills.map(skill => {
            return (
              <div
                key={skill.id}
                className="flex flex-col items-center my-4 mr-4 lg:mr-0 lg:mx-8 w-14"
              >
                {/* SVG icon */}
                <div className="w-14 h-14 flex items-center justify-center p-2 rounded-full bg-gray-800">
                  {skill.svg}
                </div>

                {/* Name */}
                <p className="mt-2 text-xs  text-white">{skill.name}</p>
              </div>
            )
          })}
        </section>
      </div>
    </section>
  )
}
