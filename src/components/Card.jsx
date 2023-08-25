import React from 'react'
import styles from "../style/cardstyle.module.css"
import Image from 'next/image'
export default function Card({data,i}) {
  return (
    <div className={styles.card} key={i}>
    <div className={styles.imgcontainer}>
      <Image src={data.data.images.items[0].sources[0].url} alt='dummyImg' fill={true} className={styles.img}></Image>
      <span className={styles.playicon}><i className="fas fa-play"></i>
      </span>
    </div>
    <h2>{data.data.name.slice(0,10)}</h2>
    <p className={styles.desc}>{data.data.description.slice(0,20)+"..."}</p>
  </div>
  )
}
