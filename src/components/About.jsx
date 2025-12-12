import React, { Component } from 'react';
import './about.css';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>🍽️ About Recipe Book</h1>
        <p>Your Kitchen Companion</p>
        <div>
          <h2>Our Story</h2>
          <p>Recipe Book was born to make cooking accessible for everyone...</p>
        </div>
        <div>
          <h2>What We Offer</h2>
          <ul className='hh'>
            <li>🥗 1000+ Recipes</li>
            <li>👨‍🍳 Step-by-Step Instructions</li>
            <li>⏱️ Quick & Easy Meals</li>
            <li>🌎 Global Cuisine</li>
            <li>📱 Mobile-Friendly</li>
          </ul>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>To inspire people to cook at home and share joy!</p>
        </div>
      </div>
    );
  }
}
