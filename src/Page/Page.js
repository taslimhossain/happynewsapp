import React, { useEffect, useState } from 'react'
import Loader from '../Loader';

const Page = () => {

    const [categorys, setCategory] = useState([])

    useEffect(() => {
        fetch(`https://somoyersonglap.ae/wp-json/news/v1/category`)
        .then( res => res.json())
        .then( data => setCategory(data))
    }, [])

    console.log(categorys)
    return (
         categorys.length != 0 ? ( <div className="container mb-20 mt-10 py-3 ">
            <div className="p-4 shadow-lg rounded-lg">
                Hello
                <div className="grid grid-rows-4 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-pink rounded-lg">
                    {
                        categorys.map( (category) => console.log('hello') )
                    }
                    <div className="p-4 rounded-lg shadow-lg bg-pink-500">01</div>
                    <div className="p-4 rounded-lg shadow-lg bg-pink-500">02</div>
                    <div className="p-4 rounded-lg shadow-lg bg-pink-500">03</div>
                    <div className="p-4 rounded-lg shadow-lg bg-pink-500">04</div>
                    <div className="p-4 rounded-lg shadow-lg bg-pink-500">05</div>
                    <div className="p-4 rounded-lg shadow-lg bg-pink-500">06</div>
                    <div className="p-4 rounded-lg shadow-lg bg-pink-500">07</div>
                    <div className="p-4 rounded-lg shadow-lg bg-pink-500">08</div>
                    <div className="p-4 rounded-lg shadow-lg bg-pink-500">09</div>
                </div>


            </div>
        </div> ) : <Loader />
    )
}

export default Page

