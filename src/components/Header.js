import React, { useState } from "react"
import { NavIcon } from "../svg/svg"
import { motion } from "framer-motion"
import { headerVariants, navVariants } from "../framer/variants"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Header() {
  const [selected, setSelected] = useState(1)
  return (
    <header id="top" className="overflow-hidden">
      <div className="container h-14 flex justify-between items-center">
        <motion.h1
          className="text-3xl text-white"
          variants={headerVariants}
          initial="initialTitle"
          animate="animateTitle"
        >
          CG
        </motion.h1>

        {/* Nav toggle */}
        <motion.div
          className="w-8 h-8 lg:hidden"
          variants={headerVariants}
          initial="initialNav"
          animate="animateNav"
        >
          <NavIcon />
        </motion.div>

        {/* Desktop nav */}
        <motion.nav
          className="hidden lg:block"
          variants={headerVariants}
          initial="initialNav"
          animate="animateNav"
        >
          <ul className="flex flex-row font-heading text-white">
            {/* About link */}
            <li className="mr-4 relative">
              <AnchorLink to="/#top">About</AnchorLink>
              {selected === 1 && (
                <motion.div
                  className="absolute w-full border-b-2 border-primary"
                  variants={navVariants}
                  initial="underlineInitial"
                  animate="underlineAnimate"
                ></motion.div>
              )}
            </li>

            {/* Projects link */}
            <li className="mr-4 relative">
              <AnchorLink to="/#projects">
                <button
                  onMouseEnter={() => setSelected(2)}
                  onMouseLeave={() => setSelected(1)}
                >
                  Projects
                </button>
              </AnchorLink>
              {selected === 2 && (
                <motion.div
                  className="absolute w-full border-b-2 border-primary"
                  variants={navVariants}
                  initial="underlineInitial"
                  animate="underlineAnimate"
                ></motion.div>
              )}
            </li>

            {/* Contact Link */}
            <li className="relative">
              <AnchorLink to="/#contact">
                <button
                  onMouseEnter={() => setSelected(3)}
                  onMouseLeave={() => setSelected(1)}
                >
                  Contact
                </button>
              </AnchorLink>
              {selected === 3 && (
                <motion.div
                  className="absolute w-full border-b-2 border-primary"
                  variants={navVariants}
                  initial="underlineInitial"
                  animate="underlineAnimate"
                ></motion.div>
              )}
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  )
}
