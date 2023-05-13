import React from 'react'

import { TiSocialFacebook } from 'react-icons/ti'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            {/* <img src="" className='logo' /> */}
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
            <AiFillYoutube className='icon' />
            <FaPinterestP className='icon' />
          </div>
        </div>

        <div className="footerLink">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-In</a>
          </li>
          <li>
            <a href="">Manage Your Booking</a>
          </li>
        </div>

        <div className="footerLink">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to </a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our Communities</a>
          </li>
        </div>

        <div className="footerLink">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Chauffuer</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programme Rules</a>
          </li>
        </div>
      </div>


      <div className="copyRightDiv flex">
        <p>Pranav Chauhan | Developed by <a href="https://emailto-pranavc344@gmail.com"  target='_blank'>Pranav Chauhan</a></p>
      </div>
    </div>
  )
}

export default Footer