import React from "react"
import { motion } from "framer-motion"
import { mobileNavVariants } from "../framer/variants"

export default function Navigation({ setNavOpen }) {
  return (
    <motion.nav
      className="fixed inset-0 bg-gray-900 z-50 flex justify-center items-center"
      variants={mobileNavVariants}
      initial="initialBG"
      animate="showBG"
    >
      <motion.div
        className="flex flex-col items-center  text-3xl"
        variants={mobileNavVariants}
        initial="initialLinkContainer"
        animate="animateLinkContainer"
      >
        <p className="mb-10 text-white">About</p>
        <p className="mb-10 text-white">Projects</p>
        <p className="text-white">Contact</p>
      </motion.div>
      <motion.span
        className="absolute bottom-0 left-0 border-l border-primary w-0 h-0"
        variants={mobileNavVariants}
        initial="initial"
        animate="bottomLeft"
      ></motion.span>
      <motion.span
        className="absolute top-0 left-0 border-t border-primary w-0 h-0"
        variants={mobileNavVariants}
        initial="initial"
        animate="topLeft"
      ></motion.span>
      <motion.span
        className="absolute top-0 right-0 border-l border-primary"
        variants={mobileNavVariants}
        initial="initial"
        animate="topRight"
      ></motion.span>
      <motion.span
        className="absolute bottom-0 right-0 border-b border-primary w-0 h-0"
        variants={mobileNavVariants}
        initial="initial"
        animate="bottomRight"
      ></motion.span>

      {/* Close button */}
      <span
        className="absolute top-0 right-0 pt-4 pr-6 text-white text-2xl"
        onClick={() => setNavOpen(false)}
      >
        X
      </span>
    </motion.nav>
  )
}
