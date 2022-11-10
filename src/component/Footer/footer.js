import React from 'react'
import '../../css/footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {BsTwitter} from 'react-icons/bs';

function Footer() {
  return (
    <footer className='footer-section' id='footer'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h2>Julesh Pun</h2>
            </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <ul className='footer-lists'>
              <li><a href='#'>Home</a></li>
              <li><a href='#profile'>About</a></li>
              <li><a href='#experience'>Experience</a></li>
              <li><a href='#project'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='footer-social-links'>
              <a href='https://facebook.com' target="_blank"><FaFacebookF/></a>
              <a href='https://instagram.com' target="_blank"><GrInstagram/></a>
              <a href='https://twitter.com' target="_blank"><BsTwitter/></a>
            </div>
            <div className='footer-copyright'>
              <small>&copy; JULESH PUN. All rights reserved.</small>
            </div>
          </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer