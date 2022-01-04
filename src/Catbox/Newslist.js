import React from 'react'
import { Link } from 'react-router-dom'

const Newslist = (probs) => {
    const {id, title, details, image} = probs.news
    return (
        <Link to ={`details/${id}`}>
            <div className="flex gap-5 items-center mb-3 shadow">
                <img src={image} alt={title} className="h-20" />
                <h3 className="text-xl">{title}</h3>
            </div>
        </Link>
    )
}

export default Newslist
