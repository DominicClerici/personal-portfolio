import React from "react"
import styles from "@/components/Work/Work.module.css"
import WorkModule from "./WorkModule"

const Work = () => {
  return (
    <section id="experience" className={`${styles.workContainer} shouldDoAnim`}>
      <h3 className={`defaultHeading`}>Experience.</h3>
      <div className="hoverCont">
        <WorkModule
          color1={"255,62,0"}
          color2={"255,0,0"}
          dates="May 2022 - Present"
          establishment="Indiana University"
          position="Student"
          link="https://www.indiana.edu/"
        >
          Full time student studying Computer Science in the Luddy school of
          Informatics, with a minor in Business Management from the Kelley
          School of Business.
        </WorkModule>
        <WorkModule
          color1={"0,5,255"}
          color2={"125,5,255"}
          dates="May 2021 - Mar 2022"
          establishment="Artesian Builds"
          position="Front-end Developer"
          link="https://en.wikipedia.org/wiki/Artesian_Builds"
        >
          Collaborated in a team to design, deploy, and maintain a full website
          redesign, built internal tools, and brand partnership pages.
        </WorkModule>
        <WorkModule
          color1={"0,5,255"}
          color2={"0,150,255"}
          dates="Mar 2021 - May 2022"
          establishment="Goodwill"
          position="Crew Member"
          link="https://www.goodwill.org/"
        >
          Maintained shelf organization and cleanliness, creating a smoother
          customer experience. Analyzed donations to determine value and
          likelihood of conversion, increasing store revenue.
        </WorkModule>
      </div>
    </section>
  )
}

export default Work
