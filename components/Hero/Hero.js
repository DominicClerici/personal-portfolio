import React from "react"
import styles from "@/components/Hero/Hero.module.css"
import ScrollModule from "./ScrollModule"

const Hero = () => {
  return (
    <div id="hero" className={styles.heroContainer}>
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
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <a>Github</a>
          </li>
          <li>
            <a>TikTok</a>
          </li>
          <li>
            <a>LinkedIn</a>
          </li>
          <li>
            <a>Email</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
