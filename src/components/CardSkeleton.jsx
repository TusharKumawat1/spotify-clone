import React from 'react'
import styles from "../style/cardskeleton.module.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function CardSkeleton({cards}) {
    return (
        <>
        {Array(cards).fill(0).map((item,i)=>{
            return <div key={i}className={styles.skeletonContainer}>

            <Skeleton className={styles.skeletonImg} />

            <Skeleton className={styles.skeletonText} count={2}/>

        </div>
        })}
            
        </>
    )
}
