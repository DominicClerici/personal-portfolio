import React from "react"
import styles from "@/components/About/About.module.css"
import Image from "next/image"
import img from "@/app/profile.webp"
import Skill from "./Skill"

const About = () => {
  return (
    <section
      id="about"
      className={`${styles.aboutContainer} shouldDoAnim doingAnim`}
    >
      <h3 className="defaultHeading">About me</h3>
      <p className="defaultParagraph">
        I am a student at{" "}
        <a
          target="_blank"
          href="https://bloomington.iu.edu/index.html"
          className="emphasis"
        >
          Indiana University
        </a>
        , in the{" "}
        <a
          href="https://luddy.indiana.edu/index.html"
          target="_blank"
          className="emphasis"
        >
          Luddy school of informatics
        </a>{" "}
        majoring in computer science, with a Business Minor from the{" "}
        <a
          href="https://kelley.iu.edu/programs/undergrad/academics/majors-minors-certificates/index.html"
          target="_blank"
          className="emphasis"
        >
          Kelley school of business.
        </a>{" "}
        I have a passion for building inspiring and fun web apps that help to
        move society in a positive direction.
        <br></br> <br></br>I began my journey as a programmer all the way back
        in 2014, when I was a 6th grader. I played the game{" "}
        <a
          href="https://www.ubisoft.com/en-us/game/watch-dogs/watch-dogs"
          target="_blank"
          className="emphasis"
        >
          Watch_Dogs
        </a>{" "}
        and became obsessed with learning how to &apos;hack.&apos; It has only
        been up from there.
      </p>
      <div className={styles.row}>
        <div className={styles.skillContainer}>
          <div>
            <Skill percent={80}>React</Skill>
            <Skill percent={60}>CSS</Skill>
            <Skill percent={45}>Python</Skill>
          </div>
          <div>
            <Skill percent={70}>Javascript</Skill>
            <Skill percent={40}>ML/AI</Skill>
            <Skill percent={15}>C++</Skill>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={img} alt="A photo of me." fill></Image>
        </div>
      </div>
    </section>
  )
}

export default About
