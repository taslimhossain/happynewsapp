import React from 'react'
import Newslist from './Newslist';

const Smallbox = (probs) => {
    const {catname, news} = probs.newsdata;
    return (
        <>
            <div className="bg-white my-5 pb-2 rounded-lg shadow-lg overflow-hidden">
                <h2 className="bg-primary p-2 text-2xl text-white">{catname}</h2>
                <div className="small-news m-3">
                    {
                        news.map( (post) => ( <Newslist key={post.id} news={post} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Smallbox
