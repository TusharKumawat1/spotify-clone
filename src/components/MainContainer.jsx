"use client"
import React, { useEffect ,useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import styles from '../style/maincontainer.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './CardSkeleton';
import Card from './Card';
import Footer from './Footer';
export default function MainContainer() {
  
  const [playlist, setplaylist] = useState([])
  const [loading, setloading] = useState(true)
  const token="BQBNoBlOIMRTqGxefxQcDfLjmi99ykgPB4sKslYTk8w61T_u_J7J1S1pbacVibVQfsPSX8afdGloJeWf9-fQtC8rnDbaFxuEO02aAGVoLuUCQOGZhOVEjRMCpR0jZrLyPqlCP86bGyt6FtA3t4IJwCiK9kXnYEsKFtn9SyW2VhFzMg-WAu5MPdkgjUFGUtbhlFJGCvyAsjxhCZ1-EWeMo0qf4cAb4w_UH-jIlX8_vrh9DGb0yU7QZmZm1LN-ho8K9nf6VMHQmo7lCqGIlbVADhlrrmhzDXCi21J5Pz3cc6R0kAqcFb6t"
  useEffect(() => {
    const id="4aawyAB9vmqN3uQ7FjRGTy"
    const getData=async()=>{

        const res=await fetch(`https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`,{
          headers:{
           	'X-RapidAPI-Key': 'f0f45b997amsha7b35f26024dfd5p186199jsn59b58a399b85',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        })
        const data=await res.json()
        console.log(data.playlists.items[1])
        setplaylist(data.playlists.items)
        setloading(false)
      }
      getData();
     
  }, [])
  
  return (
    <div className={styles.maincontainer}>
      <nav className={styles.mainnav}>
        <div className={styles.anglecontainer}>
          <span className={styles.angle}><i className="fas fa-angle-left" ></i></span>
          <span className={styles.angle}><i className="fas fa-angle-right" ></i></span>
        </div>
        <div className={styles.btncontainer}>
          <button className={styles.signupbtn}>Sign up</button>
          <button className={styles.logbtn}>Login</button>
        </div>
      </nav>
      <main className={styles.mainhero}>
        <h1>Spotify Playlist  </h1>
        <div className={styles.playlistcontainer}>
        {loading&&<CardSkeleton cards={10}/>}
        {playlist.map((data,i)=>{
           return <Card data={data} i={i} key={i}/>
        })}
          
        </div>
      </main>
      <Footer/>
    </div>
  )
}
