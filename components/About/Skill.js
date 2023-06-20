import React from "react"
import styles from "@/components/About/About.module.css"

const Skill = ({ children, percent }) => {
  return (
    <div>
      <p className={styles.skillLabel}>{children}</p>
      <div className={styles.skillBack}>
        <div className={styles.skillBar} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  )
}

export default Skill
