"use client"
import React, { useEffect, useState } from "react"

const ScrollModule = () => {
  const [position, setPosition] = useState(0)
  const scrollHandler = (e) => {
    let percentScrolled =
      window.scrollY /
      (document.body.scrollHeight - window.visualViewport.height)
    let about = document.getElementById("about").getBoundingClientRect().top
    let work = document.getElementById("experience").getBoundingClientRect().top
    if (about > -100) {
      setPosition(0)
    } else if (work > -100) {
      setPosition(1)
    } else {
      setPosition(2)
    }

    // console.log(result)
  }
  const handleSetPosition = (e) => {
    let scrollPart = document.getElementById("scrollInd")
    let cont = document.getElementById("linksCont").getBoundingClientRect()
    let abt = document.getElementById("aboutLink")
    let work = document.getElementById("expLink")
    let proj = document.getElementById("projLink")
    let abtB = abt.getBoundingClientRect()
    let workB = work.getBoundingClientRect()
    let projB = proj.getBoundingClientRect()
    let abtHeightOffset = (abtB.bottom - abtB.top) / 2 + abtB.top - cont.top
    let workHeightOffset = (workB.bottom - workB.top) / 2 + workB.top - cont.top
    let projHeightOffset = (projB.bottom - projB.top) / 2 + projB.top - cont.top
    console.log(e)

    switch (e) {
      case 0:
        scrollPart.style.top = `${abtHeightOffset - 5}px`
        proj.style.color = "gray"
        work.style.color = "gray"
        abt.style.color = "white"
        break
      case 1:
        scrollPart.style.top = `${workHeightOffset - 5}px`
        proj.style.color = "gray"
        work.style.color = "white"
        abt.style.color = "gray"
        break
      case 2:
        scrollPart.style.top = `${projHeightOffset - 5}px`
        proj.style.color = "white"
        work.style.color = "gray"
        abt.style.color = "gray"
        break
    }
  }
  useEffect(() => {
    handleSetPosition(position)
  }, [position])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [scrollHandler])

  return <></>
}

export default ScrollModule
