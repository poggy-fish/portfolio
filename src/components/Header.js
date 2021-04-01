import React from "react"
import NavLinks from "./NavLinks"
import { NavIcon } from "../svg/svg"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { headerVariants } from "../framer/variants"

export default function Header({ navOpen, setNavOpen, selected, setSelected }) {
  // Change header on scroll
  const { scrollY } = useViewportScroll()
  const headerShadow = useTransform(
    scrollY,
    [0, 10],
    ["0 0 0 rgba(0, 0, 0, 0)", "0 -2px 7px rgba(0,0,0, 0.3)"]
  )

  return (
    <motion.header
      className="fixed top-0 left-0 w-full h-14 overflow-hidden z-50 bg-black transition-shadow ease-in-out duration-300"
      style={{ boxShadow: headerShadow }}
    >
      <div className="container h-full flex justify-between items-center">
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
          onClick={() => setNavOpen(!navOpen)}
          className="w-8 h-8 md:hidden"
          variants={headerVariants}
          initial="initialNav"
          animate="animateNav"
        >
          <NavIcon />
        </motion.div>

        {/* Desktop nav */}
        <motion.nav
          className="hidden md:block"
          variants={headerVariants}
          initial="initialNav"
          animate="animateNav"
        >
          <NavLinks
            mobile={false}
            selected={selected}
            setSelected={setSelected}
          />
        </motion.nav>
      </div>
    </motion.header>
  )
}
