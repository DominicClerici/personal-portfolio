"use client"
import React, { useEffect, useState } from "react"

const ScrollModule = () => {
  const [position, setPosition] = useState(0)
  const [using, setUsing] = useState(false)
  const scrollHandler = () => {
    if (window.visualViewport.width >= 1024) {
      let about = document.getElementById("about").getBoundingClientRect().top
      let work = document
        .getElementById("experience")
        .getBoundingClientRect().top
      if (about > -100) {
        setPosition(0)
      } else if (work > -100) {
        setPosition(1)
      } else {
        setPosition(2)
      }
    }
  }
  const handleSetPosition = (e) => {
    if (window.visualViewport.width >= 1024) {
      let scrollPart = document.getElementById("scrollInd")
      let cont = document.getElementById("linksCont").getBoundingClientRect()
      let abt = document.getElementById("aboutLink")
      let work = document.getElementById("expLink")
      let proj = document.getElementById("projLink")
      let abtB = abt.getBoundingClientRect()
      let workB = work.getBoundingClientRect()
      let projB = proj.getBoundingClientRect()
      let abtHeightOffset = (abtB.bottom - abtB.top) / 2 + abtB.top - cont.top
      let workHeightOffset =
        (workB.bottom - workB.top) / 2 + workB.top - cont.top
      let projHeightOffset =
        (projB.bottom - projB.top) / 2 + projB.top - cont.top

      switch (e) {
        case 0:
          scrollPart.style.top = `${abtHeightOffset - 5}px`
          proj.style.color = "var(--color-second-text)"
          work.style.color = "var(--color-second-text)"
          abt.style.color = "white"
          break
        case 1:
          scrollPart.style.top = `${workHeightOffset - 5}px`
          proj.style.color = "var(--color-second-text)"
          work.style.color = "white"
          abt.style.color = "var(--color-second-text)"
          break
        case 2:
          scrollPart.style.top = `${projHeightOffset - 5}px`
          proj.style.color = "white"
          work.style.color = "var(--color-second-text)"
          abt.style.color = "var(--color-second-text)"
          break
      }
    }
  }
  useEffect(() => {
    handleSetPosition(position)
  }, [position])
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        entry.target.classList.contains("shouldDoAnim")
      ) {
        entry.target.classList.add("scrollAnimClass")
        entry.target.classList.remove("shouldDoAnim", "doingAnim")
        setTimeout(() => {
          entry.target.classList.remove("scrollAnimClass")
        }, 500)
      }
    })
  }
  const createScrollObserver = () => {
    if (!using) {
      if (window.visualViewport.width < 1024) {
        setUsing(true)
        const observer = new IntersectionObserver(callback, {
          root: null,
          rootMargin: "0px",
          threshold: 0.3,
        })
        let els = document.getElementsByClassName("shouldDoAnim")
        for (let i = 0; i < els.length; i++) {
          observer.observe(els[i])
        }
      }
    }
  }
  useEffect(() => {
    window.addEventListener("resize", createScrollObserver)
    return () => {
      window.removeEventListener("resize", createScrollObserver)
    }
  }, [createScrollObserver])
  useEffect(() => {
    createScrollObserver()
  })

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [scrollHandler])

  return <></>
}

export default ScrollModule
