import React from 'react'
import Mobile from '../../img/Mobile.png'
const Lessons = () => {
    return (
        <div className='container'>
            <div className='lesson'>
                <div className="lesson__img">
                    <img src={Mobile} alt="MobileImg" />
                </div>
                <div className="lesson__free">
                    <h1 className="lesson__free_title">FREE GUITAR LESSONS!</h1>
                    <p className="lesson__free_text">
                        Purchase any guitar over $499.99 and recieve a one-hour guitar lesson free.  
                    </p>
                    <button type='button' className='lesson__free_btn button'>LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Lessons
