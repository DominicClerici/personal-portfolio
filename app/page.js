import About from "@/components/About/About"
import Hero from "@/components/Hero/Hero"
import styles from "@/app/page.module.css"
import Work from "@/components/Work/Work"
import Project from "@/components/Project/Project"
import BackgroundEffect from "@/components/BackgroundEffect/BackgroundEffect"

export default function Home() {
  return (
    <>
      <BackgroundEffect></BackgroundEffect>
      <div className={styles.fullscreenCont}>
        <div className={styles.twoColumns}>
          <header className={`${styles.equalCol}`}>
            <Hero></Hero>
          </header>
          <main className={`${styles.content} ${styles.equalCol}`}>
            <About></About>
            <Work></Work>
            <Project></Project>
          </main>
        </div>
      </div>
    </>
  )
}
