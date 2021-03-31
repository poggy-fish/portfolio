import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div className="container w-full flex flex-col items-center justify-center py-8">
    <h1 className="text-white text-7xl mb-6">404: Not Found</h1>
    <p className="text-white mb-6">
      You just hit a route that doesn&#39;t exist... the sadness :(
    </p>
    <Link to="/" className="">
      <button className="bg-primary py-1 w-28 my-1 font-heading rounded-lg">
        Go Back
      </button>
    </Link>
  </div>
)

export default NotFoundPage
