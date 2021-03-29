import React, { useState } from "react"
import ContactForm from "./ContactForm"

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section className="container py-6 flex flex-col items-center">
      <h2 className="text-3xl inline-block relative mb-6 text-white">
        Contact Me
        <div className="absolute w-full border-b-2 border-primary"></div>
      </h2>
      {!sent ? (
        <ContactForm setSent={setSent} />
      ) : (
        <p className="text-white my-4">Your message was sent successfully!</p>
      )}
    </section>
  )
}
