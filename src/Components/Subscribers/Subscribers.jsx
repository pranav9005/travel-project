import React, { useState } from 'react';

const Subscribers = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    const btn = document.querySelector('.btn');
    btn.classList.add('clicked');
  };

  return (
    <div className="subscribe section">
      <div className="sectionContainer container">
        <h2>Subscribe Newsletter & get Latest News </h2>
        <div className="inputDiv flex">
          <input
            type="text"
            placeholder="Enter your E-mail address"
            value={email}
            onChange={handleEmailChange}
            disabled={subscribed}
            className={subscribed ? 'input--hide' : ''}
          />
          <button className={`btn ${subscribed ? 'subscribed' : ''}`} onClick={handleSubscribe}>
            {subscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
