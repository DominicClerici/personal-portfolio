import Image from "next/image"
import arrow from "@/app/arrow.webp"
import styles from "./Module.module.css"

const Module = ({ img, date, title, desc, link, skills, subtitle, logo }) => {
  return (
    <a href={link} target="_blank">
      <div className={`${styles.container} hoverFade`}>
        <div className={`${styles.leftCont} ${date && styles.date}`}>
          {date && <span className={styles.dates}>{date}</span>}
          {img && (
            <div className={styles.imgCont}>
              <Image src={img} alt={`Image for ${title}`}></Image>
            </div>
          )}
        </div>
        <div className={styles.rightCont}>
          <span className={styles.rowCenter}>
            <h3 className={styles.title}>{title}</h3>
            <Image
              className={styles.externalLink}
              src={arrow}
              height={30}
              width={30}
              alt="External Link"
            ></Image>
          </span>
          {subtitle && <h4 className={styles.subTitle}>{subtitle}</h4>}

          <p className={styles.desc}>{desc}</p>
          {skills && (
            <div className={styles.row}>
              {skills.map((e, i) => {
                return (
                  <span className={styles.skill} key={i + "sk"}>
                    {e}
                  </span>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </a>
  )
}

export default Module
