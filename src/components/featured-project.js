import React from "react"

const FeaturedProject = () => (
  <article className="flex flex-col w-full my-8 md:flex-row">
    <img className="md:w-1/2 rounded-sm" />
    <div className="w-full md:w-1/2">
      <h4 className="text-brand-lightgreen m-0 text-right font-semibold">
        Featured Project
      </h4>
      <h4 className="m-0 text-right font-semibold">Portfolio</h4>

      <div className="mt-12" style={{ direction: "rtl" }}>
        <p
          className="p-4 text-white bg-brand-darkgreen rounded-sm text-left"
          style={{ width: "102%" }}
        >
          Description desc long featured project lorem ipsum carpe diem dolce
          amore
        </p>
      </div>
      <div className="text-right text-brand-darkgray mb-8">react nodejs</div>
    </div>
  </article>
)

export default FeaturedProject
