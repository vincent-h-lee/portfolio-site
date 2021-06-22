import React from "react"

export const Hero = ({ title, content }) => (
  <section className="module pt-48">
    <div className="container flex flex-col md:flex-row md:space-x-8">
      <div className="max-w-sm w-full">
        <h1 className="text-3xl font-bold lowercase">{title}</h1>
      </div>
      <div className="w-full">
        <div
          className="text-2xl max-w-xl font-thin"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  </section>
)

Hero.defaultProps = {
  title: "Software Engineer, Web Applications",
  content:
    "I'm a software engineer based in Vancouver, BC. I build solutions in complex domains. <span class='text-brand-orange font-semibold' style='text-decoration: underline'>Currently working on security reporting tools @ Cisco.</span>",
}