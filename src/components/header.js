import React from "react"
import { NavIcon } from "../svg/svg"

export default function Header() {
  return (
    <header>
      <div className="container h-14 flex justify-between items-center">
        <h1 className="text-3xl ">CG</h1>
        <div className="w-8 h-8">
          <NavIcon />
        </div>
      </div>
    </header>
  )
}
