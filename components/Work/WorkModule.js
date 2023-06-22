import React from "react"
import styles from "@/components/Work/WorkModule.module.css"

const WorkModule = ({ children, establishment, dates, color1, color2 }) => {
  return (
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
    rgba(${color1}, 0.3) 0%,
    rgba(${color2}, 0.3) 33%,
    rgba(0, 67, 255, 0) 66%,
    rgba(0, 1, 255, 0) 100%
  )`,
          }}
        >
          <h3>{establishment}</h3>
          <p>{children}</p>
          <div className={styles.workSkillsCont}>
            <p className={styles.workSkill}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkModule
