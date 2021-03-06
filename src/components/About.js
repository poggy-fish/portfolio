import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { aboutVariants, arrowVariants } from "../framer/variants"

export default function About({ aboutInfo }) {
  const about = aboutInfo[0].data

  // Profile pic
  const pic = getImage(about.aboutPic.localFiles[0])

  // Framer motion - hide scroll down arrow on scroll
  const { scrollY } = useViewportScroll()
  const arrowDisplay = useTransform(scrollY, [0, 5], ["3rem", "0rem"])

  return (
    <motion.section
      variants={aboutVariants}
      initial="initialSection"
      animate="animateSection"
      id="about"
      className="pt-14"
    >
      <div className="container full-vh py-14 flex flex-col justify-evenly md:justify-center lg:flex-row-reverse lg:justify-evenly lg:items-center relative">
        {/* Profile Pic */}

        <motion.section
          className="w-5/6 max-w-xs self-center mb-8 rounded-lg overflow-visible relative"
          variants={aboutVariants}
          initial="initialPic"
          animate="animatePic"
        >
          <GatsbyImage
            image={pic}
            alt="Me"
            loading="eager"
            className="rounded-lg z-10"
            backgroundColor="#191919"
          />
          {/* Empty div with borders for pic outline */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-full border-4 border-primary rounded-lg z-0"
            variants={aboutVariants}
            initial="initialPicBG"
            animate="animatePicBG"
          ></motion.div>
        </motion.section>

        {/* Text/About section */}
        <section className="flex flex-col items-center md:mt-6 lg:mt-0 lg:mr-12 lg:items-start">
          <p className="text-sm text-primary font-bold mb-2 tracking-wider ">
            {about.aboutPrefix}
          </p>
          <h2 className="text-4xl lg:text-5xl mb-4 relative text-white">
            {about.aboutTitle}

            <div className="absolute w-full border-b-2 border-primary"></div>
          </h2>
          <p className="text-center lg:text-left md:max-w-md px-4 lg:px-0 text-white">
            {about.aboutDesc}
          </p>
        </section>
        {/* Scroll down arrow */}
        <motion.div
          className="hidden md:flex absolute bottom-0 left-2/4 w-12 h-12 mb-2 transform -translate-x-1/2 flex-col justify-center items-center overflow-hidden"
          style={{
            height: arrowDisplay,
          }}
          variants={arrowVariants}
          initial="containerInitial"
          animate="containerAnimate"
        >
          <motion.span
            className="w-2 h-2 border-r border-b border-primary transform rotate-45"
            variants={arrowVariants}
            initial="initial"
            animate="animate"
          ></motion.span>
          <span className="w-4 h-4 border-r-2 border-b-2 border-primary transform rotate-45"></span>
        </motion.div>
      </div>
    </motion.section>
  )
}
