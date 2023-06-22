import React from "react"
import styles from "@/components/Project/ProjectModule.module.css"
import Image from "next/image"

const ProjectModule = ({ desc, name, image }) => {
  return (
    <div className={`${styles.projModuleContainer} hoverFade`}>
      <div className={styles.projImageContainer}>
        <div className={styles.imgCont}>
          <Image alt="An image depicting this project." src={image}></Image>
        </div>
      </div>
      <div className={styles.projInfoContainer}>
        <h3>{name}</h3>
        <p>{desc}</p>
        <div className={styles.row}>
          <p className={styles.skill}>React</p>
          <p className={styles.skill}>Node.js</p>
          <p className={styles.skill}>HTML</p>
          <p className={styles.skill}>CSS</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectModule
