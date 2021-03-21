import React from "react"
import { skills } from "../data/skills"

export default function Skills() {
  return (
    <section>
      <div className="container py-6">
        <h2 className="text-3xl inline-block relative mb-4">
          My Skills
          <div className="absolute w-full border-b-2 border-yellow-500"></div>
        </h2>

        {/* Icons section */}
        <section className="flex flex-row flex-wrap justify-evenly">
          {skills.map(skill => {
            return (
              <div
                key={skill.id}
                className="flex flex-col items-center my-4 mx-2"
              >
                <div className="w-14 h-14 flex items-center justify-center p-2 rounded-full bg-gray-200">
                  {skill.svg}
                </div>

                <p className="mt-2 text-xs font-heading">{skill.name}</p>
              </div>
            )
          })}
        </section>
      </div>
    </section>
  )
}
