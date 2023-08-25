"use client"
import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from '../components/CardSkeleton'
export default function page() {
    const [text, settext] = useState(false)
    const getAccessToken =async () => {
        const client_id="fc6b0906c7a042c08ea96f2713a21a58"
        const client_secret="0fcd3f86fc6d4df7b2a1d150974bf765"
        const redirect="http://localhost:3000/"
        const apiUrl="https://accounts.spotify.com/authorize"
        const scope=[
        "user-read-email",
        "user-read-private"	,
        "ugc-image-upload","user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "app-remote-control",
        "streaming",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-private",
        "playlist-modify-public",
        "user-read-playback-position",
        "user-top-read",
        "user-read-recently-played"]
        window.location.href=`${apiUrl}?client_id=${client_id}&redirect_uri=${redirect}&scope=${scope.join(" ")}&response_type=token&show_dailog=true`;
    }
    return (
        <div>
            <button onClick={getAccessToken}>Access token</button>
         <CardSkeleton/>
        </div>
    )
}
