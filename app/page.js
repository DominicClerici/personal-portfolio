import About from "@/components/About/About"
import Hero from "@/components/Hero/Hero"
import styles from "@/app/page.module.css"
import Work from "@/components/Work/Work"
import Project from "@/components/Project/Project"
import End from "@/components/EndSection/End"
import ScrollEffect from "@/components/ScrollEffect"

export default function Home() {
  return (
    <>
      {/* <ScrollEffect></ScrollEffect> */}
      <div id="widContainer" className={styles.twoColumns}>
        {/* <div><CopyHero></CopyHero></div> */}
        <header className={`${styles.staticInfo} ${styles.equalCol}`}>
          <Hero></Hero>
        </header>
        <main
          id="contentContainer"
          className={`${styles.content} ${styles.equalCol}`}
        >
          <About></About>
          <Work></Work>
          <Project></Project>
          <End></End>
        </main>
        {/* <div
          id="hider"
          style={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            bottom: "0px",
            left: "0px",
            pointerEvents: "none",
            opacity: "1",
            transitionDuration: ".5s",
            background: "linear-gradient(180deg, #000b1500 50%, #000b15 100%)",
          }}
        ></div> */}
      </div>
    </>
  )
}
