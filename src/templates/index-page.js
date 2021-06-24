import React from "react"
import { Hero } from "../modules/hero"
import { Flashcard } from "../modules/flashcard"
import { Details } from "../modules/details"
import { Contact } from "../modules/contact"

export const IndexPageTemplate = ({
  hero,
  about,
  professional_background,
  contact,
}) => (
  <>
    <Hero {...hero} />

    <Flashcard
      {...about}
      avatar={{ src: "/profile.png", alt: "vincent lee profile avatar" }}
    />

    <Details
      {...professional_background}
      workExperience={professional_background.work_experience}
    />

    <Contact {...contact} />
  </>
)
