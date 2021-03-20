import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function About() {
  const { image } = useStaticQuery(query)
  const pic = getImage(image)

  return (
    <section>
      <div className="container full-vh pt-6 flex flex-col justify-evenly ">
        {/* Profile Pic */}
        <section className="w-52 h-52 border-4 border-yellow-500 self-center mb-10 rounded-lg">
          <GatsbyImage
            image={pic}
            alt="Me"
            loading="eager"
            className="transform -translate-x-4 translate-y-4 rounded-lg"
          />
        </section>

        {/* Text/About section */}
        <section>
          <p className="text-sm text-yellow-500 font-bold mb-2 font-heading">
            Hey, my name is
          </p>
          <h2 className="text-4xl font-bold mb-2">Carlos Gauci</h2>
          <p>
            I'm a frontend web developer from Malta. I specialize in building
            fast & responsive websites and apps using modern JavaScript
            frameworks and tools like React and Gatsby.
          </p>
        </section>
      </div>
    </section>
  )
}

// Profile pic query
const query = graphql`
  {
    image: file(relativePath: { eq: "profilepic.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 85
        )
      }
    }
  }
`
