import React from "react"
import styles from "@/components/Hero/Hero.module.css"
import ScrollModule from "./ScrollModule"
import Image from "next/image"
import linkedin from "@/app/linkedin.webp"
import github from "@/app/github.webp"
import email from "@/app/email.webp"

const Hero = () => {
  return (
    <div id="hero" className={`${styles.heroContainer} shouldDoAnim`}>
      <ScrollModule></ScrollModule>
      <div>
        <h1 className={styles.heroText}>Dominic Clerici</h1>
        <h2 className={styles.descText}>
          I build web apps for the <span className="emphasis">future</span>
        </h2>
        <nav id="linksCont" className={styles.navigation}>
          <div id="scrollInd" className={styles.scrollInd}></div>
          <ul>
            <li>
              <a id="aboutLink" href="#about">
                About
              </a>
            </li>
            <li>
              <a id="expLink" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a id="projLink" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <a
          download="Dominic_Clerici_Resume"
          href="/Dominic_Clerici_Resume.pdf"
          alt="View my resume"
          rel="noopener noreferrer"
          className={styles.button}
        >
          View my resume
        </a>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dominic-clerici/"
            >
              <Image
                draggable="false"
                src={linkedin}
                alt="LinkedIn"
                height="30"
                width="30"
              ></Image>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/DominicClerici">
              <Image
                src={github}
                alt="Github"
                height="30"
                width="30"
                draggable="false"
              ></Image>
            </a>
          </li>
          <li>
            <a href="mailto:contact@dominicclerici.com">
              <Image
                src={email}
                alt="Email"
                height="30"
                width="30"
                draggable="false"
              ></Image>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
