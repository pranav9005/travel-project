import React from 'react';

import card from "./cards/pexels-aleksandar-pasaric-2041556.jpg";
import card1 from "./cards/pexels-alex-azabache-3185488.jpg";
import card2 from "./cards/pexels-anas-hinde-4000924.jpg";
import card3 from "./cards/pexels-aubin-kirch-13000537.jpg";
import card4 from "./cards/pexels-isaac-mitchell-14367792.jpg";
import card5 from "./cards/pexels-tim-gouw-139769.jpg";
import card6 from "./cards/pexels-vt-nor-13215038.jpg";


const Carousel = () => {
  return (
    <div className="cardscontainer">
      <h2>Bootstrap Image Carousel</h2>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            <img src={card} alt="Los Angeles" />
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
              <p>LA is always so much fun!</p>
            </div>
          </div>

          <div className="item">
            <img src={card1} alt="Chicago" />
            <div className="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>

          <div className="item">
            <img src={card2} alt="New York" />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>

        </div>

        {/* Left and right controls */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;