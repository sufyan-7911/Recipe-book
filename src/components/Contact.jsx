import React, { Component } from "react";
import "./contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", submitted: false };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    if (name && email && message) {
      this.setState({ submitted: true });
      setTimeout(
        () =>
          this.setState({ name: "", email: "", message: "", submitted: false }),
        3000
      );
    } else {
      alert("Please fill all fields!");
    }
  };

  render() {
    const { name, email, message, submitted } = this.state;
    return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Share your thoughts, feedback, or
          questions.
        </p>

        <div className="contact-info">
          <a style={{ textDecoration: 'none' }}
            href="https://www.google.com/maps/place/LA+DIGITAL+Agency/@31.4687313,74.3097211,17z/data=!3m1!4b1!4m6!3m5!1s0x391903189e731513:0xf6e14a8f97617ac9!8m2!3d31.4687268!4d74.312296!16s%2Fg%2F11x0drbcxr?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="info-card-link"
          >
            <div className="info-card">
              
              <h3>Our Location</h3>
              <p>
                LA digital agency ,<br />
                faisal town L.H.R
              </p>
            </div>
          </a>

          <div className="info-card">
            
            <h3>Phone Number</h3>
            <p>
              03207906250
              <br />
              Mon-Fri: 9AM-6PM
            </p>
          </div>

          <div className="info-card">
           
            <h3>Email Address</h3>
            <p>sb07911786@gmail.com.com</p>
          </div>
        </div>
        <br />
        <br />
        <br />

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
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
            <label className="form-label">Your Message</label>
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
