import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function About() {
  const { image } = useStaticQuery(query)
  const pic = getImage(image)

  return (
    <section>
      <div className="container full-vh py-4 flex flex-col justify-evenly ">
        {/* Profile Pic */}
        <section className="w-5/6 max-w-xs border-2 border-yellow-500 self-center mb-8 rounded-lg overflow-visible">
          <GatsbyImage
            image={pic}
            alt="Me"
            loading="eager"
            className="transform -translate-x-3 translate-y-3 rounded-lg"
          />
        </section>

        {/* Text/About section */}
        <section className="flex flex-col items-center">
          <p className="text-sm text-yellow-500 font-bold mb-2 font-heading ">
            Hey, my name is
          </p>
          <h2 className="text-4xl mb-4 relative">
            Carlos Gauci
            <div className="absolute w-full border-b-2 border-yellow-500"></div>
          </h2>
          <p className="text-center">
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
          layout: FULL_WIDTH
          placeholder: BLURRED
          quality: 85
          sizes: "400"
        )
      }
    }
  }
`
