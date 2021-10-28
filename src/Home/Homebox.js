import React from 'react'
import Bigbox from '../Catbox/Bigbox';
import Smallbox from '../Catbox/Smallbox';

const Homebox = (probs) => {
    const { type} = probs;
    const news = probs.boxdata;

    if(type === 'bigbox'){
        return <Bigbox newsdata = {news} />
    }

    if(type === 'smallbox'){
        return <Smallbox newsdata = {news} />
    }
    return ''
}

export default Homebox
