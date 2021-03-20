import React from "react"
import "./src/styles/global.css"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props} location={props.location}>
      {element}
    </Layout>
  )
}
