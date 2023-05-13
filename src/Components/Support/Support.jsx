import React from 'react'
import gridImage from '../../Assets/pexels-grafixartphoto-samir-belhamra-4254555.jpg'
import gridImage1 from '../../Assets/pexels-jaime-reimer-2662116.jpg'
import gridImage2 from '../../Assets/pexels-janiere-fernandez-2652986.jpg'

const Support = () => {
  return (
    <div className='support container section'>
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey!</p>
        </div>


        <div className="infoDiv grid">

          <div className="textDiv grid">

            <div className="singleInfo">
              <span className='number'>01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>
            
            <div className="singleInfo">
              <span className='number colorOne'>02</span>
              <h4>Chauffer services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>

            <div className="singleInfo">
              <span className='number colorTwo'>03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>

          </div>

          {/* <div className="imgDiv">
            <img src={gridImage}/>
            <img src={gridImage1}/>
            <img src={gridImage2}/>
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default Support