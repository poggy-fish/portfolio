import React from "react"
import { NavIcon } from "../svg/svg"

const Header = () => (
  <header>
    <div className="container py-2 flex justify-between items-center">
      <h1 className="text-3xl">CG</h1>
      <div className="w-8 h-8">
        <NavIcon />
      </div>
    </div>
  </header>
)

export default Header
