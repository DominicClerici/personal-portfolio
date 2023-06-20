import React from "react"
import styles from "@/components/Hero/Hero.module.css"

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroText}>Dominic Clerici</h1>
      <h2 className={styles.descText}>
        I build web apps for the <span className="emphasis">future</span>
      </h2>
    </div>
  )
}

export default Hero
