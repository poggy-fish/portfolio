import React, { useState } from "react"
import ContactForm from "./ContactForm"
import { PhoneIcon, MailIcon, GithubIcon } from "../svg/svg"
import { motion } from "framer-motion"
import { contactVariants } from "../framer/variants"
import { InView } from "react-intersection-observer"

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <InView threshold={0} triggerOnce={true}>
      {({ ref, inView }) => (
        <section
          id="contact"
          className="container py-6 flex flex-col items-center"
        >
          <h2 className="text-3xl inline-block relative mb-6 text-white">
            Contact Me
            <div className="absolute w-full border-b-2 border-primary"></div>
          </h2>
          <section className="flex my-4" ref={ref}>
            {/* Mail icon / link */}
            <a href="mailto:carlosgauci@gmail.com">
              <motion.button
                className="w-14 h-14 mx-3 flex items-center justify-center p-3 rounded-full bg-gray-800"
                variants={contactVariants}
                initial="initialLeft"
                animate={inView && "animateLeft"}
              >
                <MailIcon />
              </motion.button>
            </a>

            {/* Phone icon / link */}
            <a href="tel:+35679007289">
              <button className="w-14 h-14 mx-3 flex items-center justify-center p-3 rounded-full bg-gray-800">
                <PhoneIcon />
              </button>
            </a>

            {/* Github icon / link */}
            <a
              href="https://github.com/carlosgauci"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="w-14 h-14 mx-3 flex items-center justify-center p-2 rounded-full bg-gray-800"
                variants={contactVariants}
                initial="initialRight"
                animate={inView && "animateRight"}
              >
                <GithubIcon />
              </motion.button>
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
      )}
    </InView>
  )
}
