import React from "react"
import ProjectModule from "./ProjectModule"
import img from "@/app/hollisLandscaping.png"

const Project = () => {
  return (
    <section>
      <h3 className="defaultHeading">My Projects</h3>
      <ProjectModule
        image={img}
        name="Hollis Landscaping"
        desc="Some kind of long description about the project that I completed will
          go here, underneath will be tags that simply show the skills,
          languages, and frameworks that I used to complete the project for the
          client."
      ></ProjectModule>
    </section>
  )
}

export default Project
