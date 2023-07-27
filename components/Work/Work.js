import React from "react"
import styles from "@/components/Work/Work.module.css"
import Module from "../Module/Module"

const Work = () => {
  return (
    <section id="experience" className={`${styles.workContainer} shouldDoAnim`}>
      <h3 className={`defaultHeading`}>Experience</h3>
      <div className="hoverCont">
        <Module
          date="May 2022 - Present"
          title="Indiana University"
          subtitle="Student"
          link="https://www.indiana.edu/"
          desc="Full time student studying Computer Science in the Luddy school of
          Informatics, with a minor in Business Management from the Kelley
          School of Business."
        ></Module>
        <Module
          date="May 2021 - Mar 2022"
          title="Artesian Builds"
          subtitle="Front-end Developer"
          link="https://en.wikipedia.org/wiki/Artesian_Builds"
          desc="Collaborated in a team to design, deploy, and maintain a full website
          redesign, built internal tools, and brand partnership pages."
        ></Module>
        <Module
          date="Mar 2021 - May 2022"
          title="Goodwill"
          subtitle="Crew Member"
          link="https://www.goodwill.org/"
          desc="Maintained shelf organization and cleanliness, creating a smoother
          customer experience. Analyzed donations to determine value and
          likelihood of conversion, increasing store revenue."
        ></Module>
      </div>
    </section>
  )
}

export default Work
