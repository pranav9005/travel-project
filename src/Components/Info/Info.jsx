import React from 'react'
import { RxCalendar } from 'react-icons/rx'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs'

import img1 from '../../Assets/Untitled_design-removebg-preview.png'


const Info = () => {
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 className="title">Travel to make memories all around the world</h2>
          <button className='btn'>
            View All
          </button>
        </div>

        <div className="contentDiv flex">
          <div className="cardsDiv grid">
            <div className="singleCard grid">
              <div className="iconDiv flex ">
                <RxCalendar className='icon' />
              </div>
              <span className="cardTitle">Book & Relax</span>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>

            <div className="singleCard grid">
              <div className="iconDiv flex colorOne">
                <BsBookmarkCheck className='icon' />
              </div>
              <span className="cardTitle">Smart Checklist</span>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>

            <div className="singleCard grid">
              <div className="iconDiv flex colorTwo">
                <BsShieldCheck className='icon' />
              </div>
              <span className="cardTitle">Save More</span>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>
          </div>

          <div className="imagesDiv">
            <div className="img ">
              <img className='img oval1' src={img1} alt="photo1" />
            </div>
          </div>
        </div>

        {/* <div className="featuresDiv grid">
          <div className="feature grid">
            <span className="featureTitle">24/7 Customer Support</span>
            <p>We provide 24/7 customer support for all your travel needs, whether it's booking a flight, hotel, or rental car.</p>
          </div>

          <div className="feature grid">
            <span className="featureTitle">Expert Travel Advice</span>
            <p>Our team of expert travel advisors can help you plan your dream vacation, with tips on the best destinations, attractions, and more.</p>
          </div>

          <div className="feature grid">
            <span className="featureTitle">Exclusive Deals</span>
            <p>We offer exclusive deals and discounts on flights, hotels, and vacation packages, so you can save money while making memories.</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Info
