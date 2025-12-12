import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="simple-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">🍳</span>
            <span className="logo-text">Recipe Book</span>
          </div>
          <p className="footer-message">Discover delicious recipes from around the world</p>
          <div className="footer-copyright">
            © 2024 Recipe Book. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}
            
