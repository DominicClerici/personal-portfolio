import React from "react"
import img from "@/app/sorting.png"
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
          link={"https://github.com/DominicClerici/sorting-visualizer"}
          img={img}
          title="Sorting Algorithm Visualizer"
          desc="A small app to visualize various sorting algorithms such as insertion sort, bubble sort, and more. Built in python with pygame"
          skills={["Python", "pygame"]}
        ></Module>
      </div>
    </section>
  )
}

export default Project
