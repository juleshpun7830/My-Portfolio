import React from "react";
import "../../css/experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import {SiHtml5} from "react-icons/si";
import {SiCss3} from "react-icons/si";
import {TbBrandJavascript} from "react-icons/tb";
import {SiBootstrap} from "react-icons/si";
import {GrReactjs} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";

function Experience() {
  return (
    <>
      <section id="experience">
        <div className="experience-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="experience-heading text-center">
                  <h5>What Skills I Have</h5>
                  <h2>My Experience</h2>
                </div>
              </div>
            </div>
            <div className="exp-boxes-wrapper">
              <div className="frontend-contents">
                <h4>Frontend Development</h4>
                <div className="row">
                <div className="experience-content col-md-4">
                  <div className="box">
                    <BsFillPatchCheckFill className="exp-icons" />
                    <div className="exp-text-box">
                      <h3>HTML5</h3>
                      <p>Intermediate</p>
                      <SiHtml5 className="exp-logo"/>
                    </div>
                  </div>
                </div>
                <div className="experience-content col-md-4">
                  <div className="box">
                    <BsFillPatchCheckFill className="exp-icons" />
                    <div className="exp-text-box">
                      <h3>CSS3</h3>
                      <p>Intermediate</p>
                      <SiCss3 className='exp-logo'/>
                    </div>
                  </div>
                </div>
                <div className="experience-content col-md-4">
                  <div className="box">
                    <BsFillPatchCheckFill className="exp-icons" />
                    <div className="exp-text-box">
                      <h3>JavaScript</h3>
                      <p>Beginner</p>
                      <TbBrandJavascript className="exp-logo"/>
                    </div>
                  </div>
                </div>
                
                </div>
                <div className="row">
                <div className="experience-content col-md-4">
                  <div className="box">
                    <BsFillPatchCheckFill className="exp-icons" />
                    <div className="exp-text-box">
                      <h3>Bootstrap</h3>
                      <p>Intermediate</p>
                      <SiBootstrap className="exp-logo"/>
                    </div>
                  </div>
                </div>
                <div className="experience-content col-md-4">
                  <div className="box">
                    <BsFillPatchCheckFill className="exp-icons" />
                    <div className="exp-text-box">
                      <h3>React</h3>
                      <p>Beginner</p>
                      <GrReactjs className="exp-logo"/>
                    </div>
                  </div>
                </div>
                <div className="experience-content col-md-4">
                  <div className="box">
                    <BsFillPatchCheckFill className="exp-icons" />
                    <div className="exp-text-box">
                      <h3>Git</h3>
                      <p>Beginner</p>
                      <BsGithub className="exp-logo"/>
                    </div>
                  </div>
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

export default Experience;
