import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function About() {
  const { image } = useStaticQuery(query)
  const pic = getImage(image)

  return (
    <section>
      <div className="container full-vh py-4 flex flex-col justify-evenly md:justify-center lg:flex-row-reverse lg:justify-evenly lg:items-center">
        {/* Profile Pic */}

        <section className="w-5/6 max-w-xs self-center mb-8 rounded-lg overflow-visible relative">
          <GatsbyImage
            image={pic}
            alt="Me"
            loading="eager"
            className="rounded-lg z-10 transform -translate-x-3 translate-y-3"
          />
          {/* Empty div with borders for pic outline */}
          <div className="absolute bottom-0 left-0 w-full h-full border-2 border-primary rounded-lg z-0 transform translate-x-3 -translate-y-3"></div>
        </section>

        {/* Text/About section */}
        <section className="flex flex-col items-center md:mt-12 lg:mt-0 lg:mr-12 lg:items-start">
          <p className="text-sm text-primary font-bold mb-2 tracking-wider ">
            Hey, my name is
          </p>
          <h2 className="text-4xl lg:text-5xl mb-4 relative text-white">
            Carlos Gauci
            <div className="absolute w-full border-b-2 border-primary"></div>
          </h2>
          <p className="text-center lg:text-left md:max-w-md px-4 lg:px-0 text-white">
            I'm a frontend developer from Malta. I specialize in building fast &
            responsive websites and apps using JS frameworks and technologies
            like React and Gatsby.
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
