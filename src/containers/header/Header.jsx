import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Although any assistance for travel is appreciated, the idea of indulging in such luxury is unappealing. I have no inclination towards exercising any form of blessing. Instead, the joy of altering my routine and attaching myself to lively events brings me indulgence. Over the years, I have learned to allow myself to be more spontaneous and free-spirited.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Enter your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>3,200 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;