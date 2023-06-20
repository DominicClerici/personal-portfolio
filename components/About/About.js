import React from "react"
import styles from "@/components/About/About.module.css"
import Image from "next/image"
import img from "@/app/gigachad.jpg"
import Skill from "./Skill"

const About = () => {
  return (
    <section id="about" className={`${styles.aboutContainer}`}>
      <h3 className="defaultHeading">Who I am.</h3>
      <p className="defaultParagraph">
        I am a student at <span className="emphasis">Indiana University</span>,
        in the <span className="emphasis">Luddy school of informatics</span>{" "}
        studying computer science, and a major in Business management from the{" "}
        <span className="emphasis">Kelley school of business.</span> I have a
        passion for building inspiring and fun web apps that help to move
        society in a positive direction.
        <br></br> <br></br>I began my journey as a programmer all the way back
        in 2014, when I was a 6th grader. I played the game{" "}
        <span className="emphasis">Watch_Dogs</span> and became obsessed with
        learning how to 'hack.' It has only been up from there.
      </p>
      <div className={styles.row}>
        <div className={styles.skillContainer}>
          <div>
            <Skill percent={80}>React</Skill>
            <Skill percent={60}>React</Skill>
            <Skill percent={45}>React</Skill>
          </div>
          <div>
            <Skill percent={50}>React</Skill>
            <Skill percent={70}>React</Skill>
            <Skill percent={25}>React</Skill>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={img} fill></Image>
        </div>
      </div>
    </section>
  )
}

export default About
