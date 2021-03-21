import React from "react"
import { skills } from "../data/skills"

export default function Skills() {
  return (
    <section>
      <div className="container py-6">
        <h2 className="text-3xl inline-block relative">
          Skills
          <div className="absolute w-full border-b-2 border-yellow-500"></div>
        </h2>

        <section>
          {skills.map(skill => {
            return (
              <div key={skill.id}>
                {skill.svg}
                {skill.name}
              </div>
            )
          })}
        </section>
      </div>
    </section>
  )
}
