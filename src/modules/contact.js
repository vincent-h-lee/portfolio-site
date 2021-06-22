import React from "react"
import { FaArrowRight } from "react-icons/fa"

export const Contact = () => {
  return (
    <section className="module module--top" id="contact">
      <div className="container flex flex-col md:flex-row md:space-x-8">
        <div className="max-w-sm w-full">
          <h2 className="module__heading">
            Let's connect! Tell me about your team, projects, product
          </h2>
        </div>

        <div className="w-full">
          <div className="mx-auto p-4 md:p-8 shadow rounded bg-white relative">
            <div
              className="absolute w-full h-full bg-brand-red rounded"
              style={{ zIndex: -10, top: "5%", left: "5%" }}
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
                  <span class="lowercase">Email</span>
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
                  <span class="lowercase">Message</span>
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
                <button className="group flex flex-row items-center text-brand-red border-brand-red border-2 outline-none px-5 py-3 mt-4 rounded font-bold hover:bg-brand-red hover:text-white transition-colors duration-150">
                  Contact
                  <span className="ml-1 transform transition-transform duration-150 group-hover:translate-x-2">
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
}
