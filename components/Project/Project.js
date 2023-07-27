import React from "react"
import ProjectModule from "./ProjectModule"
import img from "@/app/hollisLandscaping.png"
import spo from "@/app/spo.webp"
import start from "@/app/start.webp"

const Project = () => {
  return (
    <section id="projects" className="shouldDoAnim">
      <h3 className="defaultHeading">Projects.</h3>
      <div className="hoverCont">
        <ProjectModule
          link={"https://spotifystats.dominicclerici.com/"}
          image={start}
          name="Spotify Stats"
          desc="Displays your spotify listening stats. Shows your most listened to artists and songs over three timeframes."
          skills={["API", "User Authentication", "Next.js", "CSS Modules"]}
        ></ProjectModule>
        <ProjectModule
          link={"https://startjs.dominicclerici.com/"}
          image={spo}
          name="Start.js"
          desc="A simple start page made with Next.js. Features cosmetic customization, as well as user modifiable shortcuts. "
          skills={["Next.js", "Localstorage", "Cookies", "Dynamic Styling"]}
        ></ProjectModule>
        <ProjectModule
          link={"https://hollislandscaping.vercel.app/"}
          image={img}
          name="Hollis Landscaping"
          desc="A mockup design landing page for a local landscaping company."
          skills={["React", "CSS Modules", "SSR", "HTML Forms"]}
        ></ProjectModule>
      </div>
    </section>
  )
}

export default Project
