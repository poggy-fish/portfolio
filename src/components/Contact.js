import React, { useState } from "react"
import ContactForm from "./ContactForm"
import { PhoneIcon, MailIcon, GithubIcon } from "../svg/svg"

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="container py-6 flex flex-col items-center">
      <h2 className="text-3xl inline-block relative mb-6 text-white">
        Contact Me
        <div className="absolute w-full border-b-2 border-primary"></div>
      </h2>
      <section className="flex my-4">
        <a href="mailto:carlosgauci@gmail.com">
          <div className="w-14 h-14 mx-3 flex items-center justify-center p-3 rounded-full bg-gray-800">
            <MailIcon />
          </div>
        </a>
        <a href="tel:+35679007289">
          <div className="w-14 h-14 mx-3 flex items-center justify-center p-3 rounded-full bg-gray-800">
            <PhoneIcon />
          </div>
        </a>
        <a
          href="https://github.com/carlosgauci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-14 h-14 mx-3 flex items-center justify-center p-2 rounded-full bg-gray-800">
            <GithubIcon />
          </div>
        </a>
      </section>
      {!sent ? (
        <ContactForm setSent={setSent} />
      ) : (
        <p className="text-white mt-4 mb-40">
          Your message was sent successfully!
        </p>
      )}
    </section>
  )
}
