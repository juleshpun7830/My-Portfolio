import React from 'react'
import '../../css/header.css';
import Julesh from '../../images/julesh.png';
import {FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import {BsFillArrowDownCircleFill} from 'react-icons/bs';
import CV from '../../assets/cv.pdf';

function Header() {
  return (
    <header id='home'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
       <div className='header-wrap text-center'>
        <div className='header-heading-wrapper'>
        <h5>Hello I'm </h5>
         <h1 className='header-person-name'>Julesh Pun </h1> 
         <h4 className='text-light'>Frontend Developer</h4>
        </div>
        <div className='header-head-btns-wrapper'>
        <a href={CV} download className='common-btn-1 me-3'>Download CV</a>
        <a href='#contact' className='common-btn-2'>Let's Talk</a>
        </div>
        </div>
        </div>
        </div>
    </div>

    <div className='home-wrap'>
    <div className='container'>
    <div className='row align-items-center'>
      <div className='col-md-4'>
       <div className='home-left-side-icons'>
        <a target='_blank' href='https://www.linkedin.com/home' className='social-link'> <FaLinkedin/> </a>
        <a target='_blank' href='https://gist.github.com/' className='social-link'> <BsGithub/> </a>
        <a target='_blank' href='https://www.instagram.com/' className='social-link'> <GrInstagram/> </a>
       </div>
      </div>
      <div className='col-md-4'>
        <div className='home-center-image'>
      <img className='img-fluid' src={Julesh} alt=''/>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='home-right-scroll-down-icon'>
        <p className='scroll-down-arrow'>Scroll Down
        <a className='scroll-down-icon' href='#footer'> <BsFillArrowDownCircleFill/> </a>
        </p>
        </div>
        </div>
    </div>

    <div className='search'>

    <div className="search-box">
      
    </div>
    </div>
    </div>
    </div>
    </header>
  )
}

export default Header