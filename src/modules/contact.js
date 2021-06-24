import React from "react"
import PropTypes from "prop-types"
import { FaArrowRight } from "react-icons/fa"
import { Markdown } from "../components/markdown"

export const Contact = ({ title, content }) => (
  <section className="module module--top" id="contact">
    <div className="container flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      <div className="max-w-sm w-full">
        <h2 className="module__heading">{title}</h2>
        <Markdown className="paragraph" content={content} />
      </div>

      <div
        className="w-full"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        <div className="mx-auto p-4 md:p-8 shadow rounded bg-white relative">
          <div
            className="absolute w-full h-full bg-brand-blue rounded"
            style={{ zIndex: -10, top: "1.5rem", left: "1.5rem" }}
          ></div>
          <form
            name="contact"
            method="post"
            action="/pages/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="w-full"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid gap-2">
              <label className="text-xl">
                <span className="lowercase">Email</span>
                <input
                  autoComplete="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  className="mt-1 border border-solid border-brand-gray rounded p-2 focus:border-brand-blue w-full outline-none"
                  required
                />
              </label>
              <label className="text-xl">
                <span className="lowercase">Message</span>
                <textarea
                  name="message"
                  type="text"
                  placeholder="message"
                  style={{ minHeight: "100px" }}
                  className="mt-1 border border-solid border-brand-gray rounded p-2 focus:border-brand-blue w-full outline-none"
                  required
                />
              </label>
            </div>
            <div className="flex flex-row justify-center w-full">
              <button className="group flex flex-row items-center text-brand-orange border-brand-orange border-2 outline-none px-5 py-3 mt-4 rounded font-bold duration-150 lowercase">
                Contact
                <span className="ml-1 transform transition-transform duration-150 group-hover:translate-x-1">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
)

Contact.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
}
