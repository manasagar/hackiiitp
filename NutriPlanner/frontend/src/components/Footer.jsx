import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import '../styles/footer.css'

export const Footer = () => {
  return (
    <div className="footer-container">
    <div className="footer-section">
      <h3>Got any questions?</h3>
      <h4>Contact Us</h4>
      <p>Email: info@example.com</p>
      <p>Phone: +123 456 7890</p>
    </div>

    <div className="footer-section">
      <h4>Follow Us</h4>
      <p>Stay connected on social media for updates and tips!</p>
      <div className="social-icons">
        <a href="#" target="_blank"><BsFacebook/></a>
        <a href="#" target="_blank"><BsTwitterX/></a>
        <a href="#" target="_blank"><BsInstagram/></a>
        <a href="#" target="_blank"><BsLinkedin/></a>
      </div>
    </div>
  </div>
  )
}

