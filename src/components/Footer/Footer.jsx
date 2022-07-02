import React from 'react'
import Logos from '../../img/logo.png'
import Youtube from '../../icons/youtube.png'
import Twitter from '../../icons/twitter.png'
import Instagram from '../../icons/instagram.png'
import Meta from '../../icons/meta.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__head flexs">
            <div className="container">
                <div className="footer__head_col ">
                <div className="footer__head_col-left">
                    <div className="account">
                        <h3 className="account_myaccount">My Account</h3>
                        <ul>
                            <li><a href="#">Overview</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Account information</a></li>
                        </ul>
                    </div>
                    <div className="store">
                        <h3 className="store_myaccount">Store</h3>
                        <ul>
                            <li><a href="#">Security Notice</a></li>
                            <li><a href="#">Location & Hours</a></li>
                            <li><a href="#">Rentals</a></li>
                            <li><a href="#">Privacy Notice</a></li>
                        </ul> 
                    </div>
                </div>
                <div className="footer__head_col-right">
                    <div className="footer__head_col-right__logo">
                        <img src={Logos} alt="Logos" />
                    </div>
                    <div className="footer__head_col-right__icons">
                        <a href='#' className="box_icon">
                            <img src={Youtube} alt="YoutubeIcon" />
                        </a>
                        <a className="box_icon">
                            <img src={Twitter} alt="TwitterIcon" />
                        </a>
                        <a className="box_icon">
                            <img src={Instagram} alt="InstagramIcon" />
                        </a>
                        <a className="box_icon">
                            <img src={Meta} alt="MetaIcon" />
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="footer__foot">
            <div className="container">
              <p>©2021 Music Store</p>
            </div>
        </div>
    </div>
  )
}

export default Footer