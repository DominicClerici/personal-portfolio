"use client"
import React, { useEffect } from "react"
import styles from "@/components/BackgroundEffect/BackgroundEffect.module.css"

const BackgroundEffect = () => {
  return (
    <div className={styles.effectBlurCont}>
      <div id="mouseX" className={styles.object}></div>
      <div className={styles.effect}></div>
    </div>
  )
}

export default BackgroundEffect
