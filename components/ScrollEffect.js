"use client"
import React, { useEffect } from "react"

const ScrollEffect = () => {
  let completed = false
  const complete = (h) => {
    console.log("scrolling")
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
    // document.getElementById("contentContainer").style.transitionDuration = "1s"
    document.getElementById("contentContainer").style.top = `${-h / 2}px`
    document.getElementById("hider").style.opacity = "0"
    document.getElementById("widContainer").style.maxWidth = `1400px`
    completed = true
  }
  const scrollHandler = (e) => {
    if (!completed) {
      let rect = document.getElementById("heroSec").getBoundingClientRect()
      let h = rect.bottom - rect.top
      if (window.scrollY <= h) {
        let newWidth = (window.scrollY / h) * 700
        document.getElementById("widContainer").style.maxWidth = `${
          newWidth + 700
        }px`
        document.getElementById("contentContainer").style.top = `${
          newWidth / 4
        }px`
      } else {
        complete(h)
      }
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [scrollHandler])

  return <div style={{ position: "absolute" }}></div>
}

export default ScrollEffect
