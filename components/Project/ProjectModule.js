import React from "react"
import styles from "@/components/Project/ProjectModule.module.css"
import Image from "next/image"
import arrow from "@/app/arrow.png"

const ProjectModule = ({ desc, name, image, link }) => {
  return (
    <>
      {link != null ? (
        <a href={link} target="_blank">
          <div className={`${styles.projModuleContainer} hoverFade`}>
            <div className={styles.projImageContainer}>
              <div className={styles.imgCont}>
                <Image
                  alt="An image depicting this project."
                  src={image}
                ></Image>
              </div>
            </div>
            <div className={styles.projInfoContainer}>
              <div className={styles.maybeExternalLink}>
                <h3>{name}</h3>
                {link != null ? (
                  <Image
                    src={arrow}
                    width="30"
                    height="30"
                    alt="external link"
                  ></Image>
                ) : null}
              </div>
              <p>{desc}</p>
              <div className={styles.row}>
                <p className={styles.skill}>React</p>
                <p className={styles.skill}>Node.js</p>
                <p className={styles.skill}>HTML</p>
                <p className={styles.skill}>CSS</p>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div className={`${styles.projModuleContainer} hoverFade`}>
          <div className={styles.projImageContainer}>
            <div className={styles.imgCont}>
              <Image alt="An image depicting this project." src={image}></Image>
            </div>
          </div>
          <div className={styles.projInfoContainer}>
            <div className={styles.maybeLink}>
              <h3>{name}</h3>
              {link != null ? (
                <Image
                  src={arrow}
                  width="30"
                  height="30"
                  alt="external link"
                ></Image>
              ) : null}
            </div>
            <p>{desc}</p>
            <div className={styles.row}>
              <p className={styles.skill}>React</p>
              <p className={styles.skill}>Node.js</p>
              <p className={styles.skill}>HTML</p>
              <p className={styles.skill}>CSS</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectModule
