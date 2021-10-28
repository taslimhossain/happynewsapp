import React, { useState, useEffect } from 'react'
import Homebox from './Homebox'

const Home = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://somoyersonglap.ae/wp-json/news/v1/home')
        .then( res => res.json())
        .then( data => setNews(data))
    }, [])
    console.log(news);

    return (
        <>
            <div className="container mb-20">
                {
                    news.map((box, i) => (<Homebox key = {i} type={box.type} boxdata = {box}  /> ))
                }
            </div>
        </>
    )
}

export default Home
