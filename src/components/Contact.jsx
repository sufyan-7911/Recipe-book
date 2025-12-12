import React, { Component } from 'react';
import './contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '', submitted: false };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    if (name && email && message) {
      this.setState({ submitted: true });
      setTimeout(() => this.setState({ name: '', email: '', message: '', submitted: false }), 3000);
    } else {
      alert('Please fill all fields!');
    }
  };

  render() {
    const { name, email, message, submitted } = this.state;
    return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Share your thoughts, feedback, or questions.</p>
        
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Our Location</h3>
            <p>LA digital agency ,<br />
            faisal town L.H.R</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone Number</h3>
            <p>03207906250<br />Mon-Fri: 9AM-6PM</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email Address</h3>
            <p>sb07911786@gmail.com.com</p>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              <span className="form-icon"></span>
              Your Name
            </label>
            <input 
              name="name" 
              value={name} 
              onChange={this.handleChange} 
              placeholder="Enter your full name" 
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">
              <span className="form-icon"></span>
              Email Address
            </label>
            <input 
              name="email" 
              type="email"
              value={email} 
              onChange={this.handleChange} 
              placeholder="your.email@example.com" 
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">
              <span className="form-icon"></span>
              Your Message
            </label>
            <textarea 
              name="message" 
              value={message} 
              onChange={this.handleChange} 
              placeholder="Share your thoughts, feedback, or questions with us..." 
              required
            />
          </div>
          
          <button type="submit">Send Message</button>
          
          {submitted && (
            <p className="success-message">
              Message sent successfully! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    );
  }
}