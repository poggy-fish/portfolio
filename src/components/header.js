import React from "react"
import { NavIcon } from "../svg/svg"

export default function Header() {
  return (
    <header>
      <div className="container h-14 flex justify-between items-center">
        <h1 className="text-3xl text-white">CG</h1>

        {/* Nav toggle */}
        <div className="w-8 h-8 lg:hidden">
          <NavIcon />
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex flex-row font-heading text-white">
            <li className="mr-4">About</li>
            <li className="mr-4">Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
