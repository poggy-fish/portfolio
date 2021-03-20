import React from "react"
import Layout from "./src/components/Layout"
import "./src/styles/global.css"

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props} location={props.location}>
      {element}
    </Layout>
  )
}
