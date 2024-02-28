import React, {useEffect, useState} from 'react';
import './MainImage.css';

const MainImage = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true);
    }, [])

    return (
        <div className='main-image'>
        <img src="/images/pool.jpg "alt="poolpic"/>
        </div>
    )

}

export default MainImage;