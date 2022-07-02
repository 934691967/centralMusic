import React, { useState, useRef } from 'react'
import Logo from '../../img/logo.png'
import Buy from '../../icons/buy.png'
import Woman from '../../icons/woman.png'
import Menu from '../../icons/Menu.png'
import Close from '../../icons/close1.png'
const Navbar = () => {

    const element = useRef(null)

    const handle = event => {
        element.current.classList.toggle("active")
        console.log(element)
    }

    return (
        <div className='banner'>
            <div className="container">
                <div className="banner__navbar flexs">
                    <div className="banner__navbar_left">
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div ref={element} className="list">
                            <ul>
                                <li><a href="#">Guitars</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Storage</a></li>
                                <li><a href="#">Lessons</a></li>
                                <li><a href="#">Repairs</a></li>
                            </ul>
                            <button className="close" onClick={handle}>
                                <img src={Close} alt="CloseImg" />
                            </button>
                        </div>
                    </div>
                    <div className="banner__navbar_right">
                        <div className="banner__navbar_right-buy">
                            <img src={Buy} alt="BuyImg" />
                        </div>
                        <div className="banner__navbar_right-woman">
                            <img src={Woman} alt="womanImg" />
                        </div>
                        <button className="banner__navbar_right-menu" onClick={handle}>
                            <img src={Menu} alt="MenuBtn" />
                        </button>
                    </div>
                </div>
                <div className="banner__main">
                    <div className="banner__main_text">
                        <h1 className='banner__main_text-title'>Fullfilling dreams with strings attached</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
