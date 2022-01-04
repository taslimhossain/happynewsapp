import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from '../Loader';

const Single = () => {

    const [news, setNews] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://somoyersonglap.ae/wp-json/wp/v2/posts/${id}`)
        .then( res => res.json())
        .then( data => setNews(data))
    }, [])


    return (
        news?.title ? ( <div className="container mb-20 mt-10 py-3 ">
            <div className="lg:flex lg:items-center lg:justify-between p-4 shadow-lg rounded-lg">
                <div className="efef">
                    <div className="flex-1 min-w-0">
                        { news.news_subtitle? ( <h4 className="mb-3 text-2xl text-primary">{news.news_subtitle}</h4> ) : '' }
                        <h2 className="text-4xl font-bold leading-normal text-gray-900">{news.title?.rendered}</h2>
                         <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <img src={news.authorphoto} alt={news.newsauthor} className="border-2 mr-3 rounded-full w-16 h-16" />
                                <p className="text-2xl text-gray-500">{news.newsauthor}</p>
                            </div>

                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                প্রকাশ: {news.news_time}
                            </div>
                        </div>
                    </div>
                 </div>
                    <div className="image mt-3 mb-6"><img src={news.newsimages} alt={news.title?.rendered} className="w-100" /></div>
                    <div className="content leading-8" dangerouslySetInnerHTML={{__html: news.content?.rendered}}>
                    </div>
            </div>
        </div> ) : <Loader />
    )
}

export default Single
