import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { AnimatePresence } from "framer-motion"
import UnderlineAnimated from "./UnderlineAnimated"

export default function NavLinks({ mobile, setNavOpen, selected }) {
  const links = ["about", "projects", "contact"]

  return (
    <ul
      className={`flex ${
        mobile ? "flex-col items-center" : "flex-row"
      } font-heading text-white`}
    >
      {links.map((link, index) => {
        return (
          <NavLink
            link={link}
            mobile={mobile}
            setNavOpen={setNavOpen}
            selected={selected}
            key={index}
            index={index + 1}
          />
        )
      })}
    </ul>
  )
}

const NavLink = ({ link, index, mobile, setNavOpen, selected }) => {
  return (
    <li className={`relative ${mobile ? "mb-6" : "mr-6"}`}>
      <AnchorLink
        to={`/#${link}`}
        onAnchorLinkClick={mobile ? () => setNavOpen(false) : null}
        className="focus:text-primary focus:outline-none"
      >
        <button className="capitalize focus:outline-none" tabIndex={-1}>
          {link}
        </button>
      </AnchorLink>
      <AnimatePresence>
        {selected === index && <UnderlineAnimated />}
      </AnimatePresence>
    </li>
  )
}
