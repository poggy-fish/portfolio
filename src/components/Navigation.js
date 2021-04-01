import React from "react"
import NavLinks from "./NavLinks"
import { BackIcon } from "../svg/svg"
import { motion } from "framer-motion"
import { mobileNavVariants } from "../framer/variants"

export default function Navigation({ setNavOpen, selected, setSelected }) {
  return (
    <motion.nav
      className="fixed top-0 right-0 left-0 h-full bg-gray-900 z-50 flex justify-center items-center"
      variants={mobileNavVariants}
      initial="initialBG"
      animate="showBG"
      exit="exit"
    >
      <motion.div
        className="flex flex-col items-center  text-3xl"
        variants={mobileNavVariants}
        initial="initialLinkContainer"
        animate="animateLinkContainer"
      >
        {/* Nav links */}
        <NavLinks
          mobile={true}
          setNavOpen={setNavOpen}
          selected={selected}
          setSelected={setSelected}
        />
      </motion.div>

      {/* Animated sides */}
      <motion.span
        className="absolute bottom-0 left-0 border-r-4 border-primary w-0 h-0"
        variants={mobileNavVariants}
        initial="initial"
        animate="bottomLeft"
      ></motion.span>
      <motion.span
        className="absolute top-0 left-0 border-b-4 border-primary w-0 h-0"
        variants={mobileNavVariants}
        initial="initial"
        animate="topLeft"
      ></motion.span>
      <motion.span
        className="absolute top-0 right-0 border-l-4 border-primary"
        variants={mobileNavVariants}
        initial="initial"
        animate="topRight"
      ></motion.span>
      <motion.span
        className="absolute bottom-0 right-0 border-t-4 border-primary w-0 h-0"
        variants={mobileNavVariants}
        initial="initial"
        animate="bottomRight"
      ></motion.span>

      {/* Close button */}
      <motion.div
        className="absolute h-4 w-4 top-5 right-6"
        onClick={() => setNavOpen(false)}
        variants={mobileNavVariants}
        initial="initialBtn"
        animate="animateBtn"
      >
        <BackIcon />
      </motion.div>
    </motion.nav>
  )
}
