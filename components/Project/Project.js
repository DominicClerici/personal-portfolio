import React from "react"
import img from "@/app/hollisLandscaping.png"
import spo from "@/app/spo.webp"
import start from "@/app/start.webp"
import Module from "../Module/Module"

const Project = () => {
  return (
    <section id="projects" className="shouldDoAnim">
      <h2 className="defaultHeading">Projects</h2>
      <div className="hoverCont">
        <Module
          link={"https://www.spotifystats.dominicclerici.com/"}
          img={start}
          title="Spotify Stats"
          desc="Displays your spotify listening stats. Shows your most listened to artists and songs over three timeframes."
          skills={["API", "User Authentication", "Next.js", "CSS Modules"]}
        ></Module>
        <Module
          link={"https://www.startjs.dominicclerici.com/"}
          img={spo}
          title="Start.js"
          desc="A simple start page made with Next.js. Features cosmetic customization, as well as user modifiable shortcuts. "
          skills={["Next.js", "Localstorage", "Cookies", "Dynamic Styling"]}
        ></Module>
        <Module
          link={"https://hollislandscaping.vercel.app/"}
          img={img}
          title="Hollis Landscaping"
          desc="A mockup design landing page for a local landscaping company."
          skills={["React", "CSS Modules", "SSR", "HTML Forms"]}
        ></Module>
      </div>
    </section>
  )
}

export default Project
