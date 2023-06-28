import React from "react"
import styles from "@/components/About/About.module.css"

const Skill = ({ children, percent }) => {
  return (
    <div className={styles.indivSkill}>
      <p className={styles.skillLabel}>{children}</p>
      <div className={styles.skillBack}>
        <div className="skillBar" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  )
}

export default Skill
