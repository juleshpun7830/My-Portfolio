import React from "react";
import "../../css/about.css";
import Me from "../../images/me.jpg";
import {FaAward} from 'react-icons/fa';
import {VscRootFolder} from 'react-icons/vsc';
import {FaUserTie} from 'react-icons/fa';

function Profile() {
  return (
    <>
      <section id="profile">
        <div className="container">
          <div className="about-me-section text-center">
            <div className="row">
              <div className="col-md-12">
                <div className="about-me-heading">
                  <h5>Get to Know</h5>
                  <h2>About Me</h2>
                </div>
              </div>
            </div>
            <div className="row py-5 my-5">
              <div className="col-md-5">
                <div className="about-me">
<div className="about-me-image">
<img src={Me} alt="Human-image" className="img-fluid"/>
</div>
</div>
              </div>
              <div className="col-md-7">
                <div className="about-me-content-wrapper px-4">
                <div className="about-me-content">
                    <div className="about-me-card">
                        <article className="about-card-wrap">
                        <FaAward className="about-icon"/>
                        <h5>Experience</h5>
                        <small>1+ Year Working</small>
                        </article>
                    </div>
                </div>

                <div className="about-me-content">
                    <div className="about-me-card">
                        <article className="about-card-wrap">
                        <VscRootFolder className='about-icon'/>
                        <h5>Projects</h5>
                        <small>1+ Year Working</small>
                        </article>
                    </div>
                </div>

                <div className="about-me-content">
                    <div className="about-me-card">
                        <article className="about-card-wrap">
                        <FaUserTie className="about-icon"/>
                        <h5>Clients</h5>
                        <small>1+ Year Working</small>
                        </article>
                    </div>
                </div>
                </div>
                <div className="small-info px-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur soluta aliquam accusamus provident, voluptates, autem cum beatae tempora doloremque obcaecati quaerat. Quisquam nesciunt omnis beatae laborum laboriosam asperiores rerum facilis blanditiis. Id eligendi ea quidem nobis, blanditiis distinctio sapiente dignissimos enim, hic fugiat rem, laboriosam et. Aliquam, sint ex.</p>
                    <div className="d-flex justify-content-start">
                <a href="#contact" className="common-btn-2">Let's Talk</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
