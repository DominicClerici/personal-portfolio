import React from "react"
import styles from "@/components/Work/Work.module.css"
import WorkModule from "./WorkModule"

const Work = () => {
  return (
    <section id="work" className={styles.workContainer}>
      <h3 className={`defaultHeading`}>What have I been up to?</h3>
      <WorkModule
        color1={"0,5,255"}
        color2={"125,5,255"}
        dates="May 2021 - Mar 2022"
        establishment="Artesian Builds - Front-end Developer"
      >
        Collaborated in a team to design, deploy, and maintain a full website
        redesign, built internal tools, and brand partnership pages.
      </WorkModule>
      <WorkModule
        color1={"0,5,255"}
        color2={"0,150,255"}
        dates="Mar 2021 - May 2022"
        establishment="Goodwill - Crew Member"
      >
        Maintained shelf organization and cleanliness, creating a smoother
        customer experience. Analyzed donations to determine value and
        likelihood of conversion, increasing store revenue.
      </WorkModule>
    </section>
  )
}

export default Work
