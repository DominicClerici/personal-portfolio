"use client"
import React, { useEffect, useState } from "react"
import styles from "@/components/BackgroundEffect/BackgroundEffect.module.css"


const BackgroundEffect = () => {
const [counter, setCounter] = useState(0)
  const makeParticle = () => {
    let rect = document.getElementById('objectArea').getBoundingClientRect()
    let x = Math.round(Math.random() * rect.right)
    // let y = Math.random() * rect.bottom
    // console.log(x,y)
      let newEl = document.createElement('div')
      newEl.style.left = x + 'px'
      newEl.className = ['fallingObj']
      document.getElementById("objectArea").appendChild(newEl)
      setCounter(counter+1)
  }
  useEffect(() => {
      setTimeout(makeParticle, 2000)
  }, [makeParticle])
  return (
    <div className={styles.effectBlurCont} id="objectArea">
]
    </div>
  )
}

export default BackgroundEffect
