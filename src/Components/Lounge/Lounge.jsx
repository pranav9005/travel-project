import React from 'react'
import imagegrid from '../../Assets/Untitled_design__1_-removebg-preview.png'

const Lounge = () => {
  return (
    <div className='lounge container section'>
        <div className="textDiv">
          <h2>Unaccompanied minor lounge</h2>
        </div>
      <div className="sectionContainer grid">

        <div className="imgDiv">
          <img src={imagegrid} />
        </div>


        <div className="grids grid">

          <div className="singleGrid">
            <span className='gridTitle'>
              Care on the flight
            </span>
            <p>
              You can also tell airlines from your phone and book flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Help through the airpot
            </span>
            <p>
              You can also tell airlines from your phone and book flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Priority boarding
            </span>
            <p>
              You can also tell airlines from your phone and book flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Chauffer-drive service
            </span>
            <p>
              You can also tell airlines from your phone and book flight ticket to one of your favorite destinations.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Lounge