import React from "react"
import styles from "@/components/Work/WorkModule.module.css"
import arrow from "@/app/arrow.png"
import Image from "next/image"

const WorkModule = ({
  children,
  establishment,
  dates,
  color1,
  color2,
  position,
  link,
}) => {
  return (
    <>
      {link != null ? (
        <a href={link}>
          <div className={`${styles.workModuleContainer} hoverFade`}>
            <div className={styles.workTimeContainer}>
              <p className={styles.workTime}>{dates}</p>
            </div>
            <div className={styles.workInfoContainer}>
              <div
                className={styles.workInfoBackground}
                style={{
                  background: `linear-gradient(
    90deg,
    rgba(${color1}, 1) 0%,
    rgba(${color2}, 1) 33%,
    rgba(0, 67, 255, 0) 66%,
    rgba(0, 1, 255, 0) 100%
  )`,
                }}
              >
                <div className={styles.backgroundOverlay}>
                  <div className={styles.maybeExternalLink}>
                    <h3>{establishment}</h3>
                    {link != null ? (
                      <Image
                        src={arrow}
                        alt="external link"
                        height="30"
                        width="30"
                      ></Image>
                    ) : (
                      <a></a>
                    )}
                  </div>
                  <h4>{position}</h4>
                  <p>{children}</p>
                  <div className={styles.workSkillsCont}>
                    <p className={styles.workSkill}></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div className={`${styles.workModuleContainer} hoverFade`}>
          <div className={styles.workTimeContainer}>
            <p className={styles.workTime}>{dates}</p>
          </div>
          <div className={styles.workInfoContainer}>
            <div
              className={styles.workInfoBackground}
              style={{
                background: `linear-gradient(
    90deg,
    rgba(${color1}, 1) 0%,
    rgba(${color2}, 1) 33%,
    rgba(0, 67, 255, 0) 66%,
    rgba(0, 1, 255, 0) 100%
  )`,
              }}
            >
              <div className={styles.backgroundOverlay}>
                <div className={styles.maybeExternalLink}>
                  <h3>{establishment}</h3>
                  {link != null ? (
                    <Image
                      src={arrow}
                      alt="external link"
                      height="30"
                      width="30"
                    ></Image>
                  ) : (
                    <a></a>
                  )}
                </div>
                <h4>{position}</h4>
                <p>{children}</p>
                <div className={styles.workSkillsCont}>
                  <p className={styles.workSkill}></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WorkModule
