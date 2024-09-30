import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'


function Footer() {
  return (
    <footer>
        <div>
            <a href=""><FaLinkedin /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaFacebook /></a>
        </div>
        <p>&copy; 2024 | Izaack Kuria</p>
    </footer>
  )
}

export default Footer
