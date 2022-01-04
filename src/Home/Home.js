import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import Homebox from './Homebox'

const Home = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://somoyersonglap.ae/wp-json/news/v1/home')
        .then( res => res.json())
        .then( data => setNews(data))
    }, [])
console.log(news.length)
    return (
            news.length !== 0 ? ( <div className="container mb-20">
                {
                    news.map((box, i) => (<Homebox key = {i} type={box.type} boxdata = {box}  /> ))
                }
            </div> ) : <Loader />
    )
}

export default Home
