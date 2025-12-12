import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  currentYear = new Date().getFullYear();

  render() {
    return (
      <footer className="footer" aria-label="Site footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo" aria-label="Recipe Book">
              <span className="footer-logo-icon" role="img" aria-label="Cooking pan">🍳</span>
              <h2 className="footer-logo-text">Recipe Book</h2>
            </div>
            <p className="footer-tagline">
              Discover delicious recipes from around the world
            </p>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <div className="footer-copyright">
              © {this.currentYear} Recipe Book. All rights reserved.
            </div>
            
            <div className="footer-links">
              <a 
                href="/Recipes" 
                className="footer-link"
                aria-label="Privacy policy"
              >
                Recipes
              </a>
              <span className="footer-link-separator" aria-hidden="true">•</span>
              <a 
                href="/about" 
                className="footer-link"
                aria-label="Terms of service"
              >
               About
              </a>
              <span className="footer-link-separator" aria-hidden="true">•</span>
              <a 
                href="/contact" 
                className="footer-link"
                aria-label="Contact us"
              >
                Contact Us
              </a>
            </div>
            
          </div>
        </div>
      </footer>
    );
  }
}
            
