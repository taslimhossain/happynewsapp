import React from 'react'
import Newslist from './Newslist';

const Bigbox = (probs) => {

    const {catname, bnews, news} = probs.newsdata;
    const {title, image} = bnews[0]
    return (
        <>
            <div className="bg-white my-5 pb-2 rounded-lg shadow-lg overflow-hidden">
                <h2 className="bg-primary p-2 text-2xl text-white">{catname}</h2>
                <div className="bignews mb-7">
                    <img src={image} alt={title} />
                    <h2 className="font-bold m-3 text-3xl text-black">{title}</h2>
                </div>
                <div className="small-news m-3">
                    {
                        news.map( (post) => ( <Newslist key={post.id} news={post} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Bigbox
