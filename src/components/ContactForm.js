import React, { useState } from "react"

export default function ContactForm({ setSent }) {
  // Error message
  const [message, setMessage] = useState("")

  // Contact form submit
  const onSubmit = async e => {
    e.preventDefault()
    const formElements = [...e.currentTarget.elements]

    // Check honeypot
    const isValid =
      formElements.filter(elem => elem.name === "bot-field")[0].value === ""
    const validFormElements = isValid ? formElements : []
    if (validFormElements.length < 1) {
      setMessage("Looks like you've filled in too many fields..")
    } else {
      // Send form
      const filledOutElements = validFormElements
        .filter(elem => !!elem.value)
        .map(
          element =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&")

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          setSent(true)
        })
        .catch(_ => {
          setMessage(
            "There was an error submitting the form, please email me at carlosgauci@gmail.com"
          )
        })
    }
  }

  return (
    <div className="max-w-xl w-full rounded-lg bg-gray-800 border-2 border-primary my-8 p-4 md:p-6">
      <form
        className="flex flex-col"
        name="contact-form"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={e => onSubmit(e)}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-form" />

        <input
          className="my-2 rounded p-2 placeholder-gray-800 placeholder-opacity-70 font-heading"
          type="text"
          name="name"
          placeholder="Name"
          aria-label="Your Name"
          required
        />

        <input
          className="my-2 rounded p-2 placeholder-gray-800 placeholder-opacity-70 font-heading"
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Your email address"
          required
        />

        <input
          className="my-2 rounded p-2 placeholder-gray-800 placeholder-opacity-70 font-heading"
          type="number"
          name="number"
          placeholder="Phone number"
          aria-label="Your Phone Number"
          required
        />

        <textarea
          className="my-2 rounded p-2 placeholder-gray-800 placeholder-opacity-70 font-heading"
          name="message"
          rows="7"
          placeholder="Type your message here..."
          aria-label="Your Message"
          required
        ></textarea>
        {message && <p className="my-4 text-center">{message}</p>}
        <button
          type="submit"
          className="bg-primary py-1 w-28 mt-2 md:mt-4 self-center font-heading rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
