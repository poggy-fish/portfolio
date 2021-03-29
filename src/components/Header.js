import React from "react"
import { NavIcon } from "../svg/svg"
import { motion } from "framer-motion"
import { headerVariants } from "../framer/variants"

export default function Header() {
  return (
    <header className="overflow-hidden">
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
            <li className="mr-4">About</li>
            <li className="mr-4">Projects</li>
            <li>Contact</li>
          </ul>
        </motion.nav>
      </div>
    </header>
  )
}
