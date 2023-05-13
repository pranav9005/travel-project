import React from 'react'
import home from '../../Assets/maldiveshome.jpg'

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${home})` }}>
      <div className='mainText'>
        <h1>create everlasting memories with us</h1>
      </div>
    </div>
  )
}

export default Home;
