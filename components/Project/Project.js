import React from "react"
import ProjectModule from "./ProjectModule"
import img from "@/app/hollisLandscaping.png"

const Project = () => {
  return (
    <section id="projects" className="shouldDoAnim">
      <h3 className="defaultHeading">Projects.</h3>
      <div className="hoverCont">
        <ProjectModule
          link={"https://hollislandscaping.vercel.app/"}
          image={img}
          name="Hollis Landscaping"
          desc="Some kind of long description about the project that I completed will
          go here, underneath will be tags that simply show the skills,
          languages, and frameworks that I used to complete the project for the
          client."
        ></ProjectModule>
        <ProjectModule
          image={img}
          name="Hollis Landscaping"
          desc="Some kind of long description about the project that I completed will
          go here, underneath will be tags that simply show the skills,
          languages, and frameworks that I used to complete the project for the
          client."
        ></ProjectModule>
        <ProjectModule
          image={img}
          name="Hollis Landscaping"
          desc="Some kind of long description about the project that I completed will
          go here, underneath will be tags that simply show the skills,
          languages, and frameworks that I used to complete the project for the
          client."
        ></ProjectModule>
      </div>
    </section>
  )
}

export default Project
