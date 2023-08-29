import React from "react"
import styles from "@/components/About/About.module.css"

const Skill = ({ children }) => {
  return (
    <div className={styles.indivSkill}>
      <svg className={styles.skillIcon} width={30} height={30}>
        <polygon points="15,5 27,27 3,27" />
      </svg>
      <p className={styles.skillLabel}>{children}</p>
    </div>
  )
}

export default Skill
