import About from "@/components/About/About"
import Hero from "@/components/Hero/Hero"
import styles from "@/app/page.module.css"
import Work from "@/components/Work/Work"
import Project from "@/components/Project/Project"
import End from "@/components/EndSection/End"

export default function Home() {
  return (
    <>
      <div id="widContainer" className={styles.twoColumns}>
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
      </div>
    </>
  )
}
