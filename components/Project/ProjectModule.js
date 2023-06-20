import React from "react"
import styles from "@/components/Project/ProjectModule.module.css"
import Image from "next/image"

const ProjectModule = ({ desc, name, image }) => {
  return (
    <div className={styles.projModuleContainer}>
      <div className={styles.projImageContainer}>
        <div className={styles.imgCont}>
          <Image src={image}></Image>
        </div>
      </div>
      <div className={styles.projInfoContainer}>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default ProjectModule
