import React from "react";
import "../../css/work.css";
import Work from "../../images/work.png";

function Projects() {
  return (
    <>
      <section className="my-projects" id="project">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="work-heading-wrap">
                <h2>Projects</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <article className="work-items">
                <div className="work-item-image">
                  <img src={Work} alt="work" className="img-fluid" />
                </div>
                <h3>INCA</h3>
                <div className="work-item-links">
                <a className="common-btn-1" href="https://gist.github.com/" target="_blank">
                  Github
                </a>
                <a className="common-btn-2" href="https://dribbble.com/shots/popular/web-design" target="_blank">
                  Live Demo
                </a>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="work-items">
                <div className="work-item-image">
                  <img src={Work} alt="work" className="img-fluid" />
                </div>
                <h3>MHA</h3>
                <div className="work-item-links">
                <a className="common-btn-1" href="https://gist.github.com/" target="_blank">
                  Github
                </a>
                <a className="common-btn-2" href="https://dribbble.com/shots/popular/web-design" target="_blank">
                  Live Demo
                </a>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="work-items">
                <div className="work-item-image">
                  <img src={Work} alt="work" className="img-fluid" />
                </div>
                <h3>NutraZik</h3>
                <div className="work-item-links">
                <a className="common-btn-1" href="https://gist.github.com/" target="_blank">
                  Github
                </a>
                <a className="common-btn-2" href="https://dribbble.com/shots/popular/web-design" target="_blank">
                  Live Demo
                </a>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="work-items">
                <div className="work-item-image">
                  <img src={Work} alt="work" className="img-fluid" />
                </div>
                <h3>Title</h3>
                <div className="work-item-links">
                <a className="common-btn-1" href="https://gist.github.com/" target="_blank">
                  Github
                </a>
                <a className="common-btn-2" href="https://dribbble.com/shots/popular/web-design" target="_blank">
                  Live Demo
                </a>
                </div>
              </article>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <article className="work-items">
                <div className="work-item-image">
                  <img src={Work} alt="work" className="img-fluid" />
                </div>
                <h3>Title</h3>
                <div className="work-item-links">
                <a className="common-btn-1" href="https://gist.github.com/" target="_blank">
                  Github
                </a>
                <a className="common-btn-2" href="https://dribbble.com/shots/popular/web-design" target="_blank">
                  Live Demo
                </a>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="work-items">
                <div className="work-item-image">
                  <img src={Work} alt="work" className="img-fluid" />
                </div>
                <h3>Title</h3>
                <div className="work-item-links">
                <a className="common-btn-1" href="https://gist.github.com/" target="_blank">
                  Github
                </a>
                <a className="common-btn-2" href="https://dribbble.com/shots/popular/web-design" target="_blank">
                  Live Demo
                </a>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="work-items">
                <div className="work-item-image">
                  <img src={Work} alt="work" className="img-fluid" />
                </div>
                <h3>Title</h3>
                <div className="work-item-links">
                <a className="common-btn-1" href="https://gist.github.com/" target="_blank">
                  Github
                </a>
                <a className="common-btn-2" href="https://dribbble.com/shots/popular/web-design" target="_blank">
                  Live Demo
                </a>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="work-items">
                <div className="work-item-image">
                  <img src={Work} alt="work" className="img-fluid" />
                </div>
                <h3>Title</h3>
                <div className="work-item-links">
                <a className="common-btn-1" href="https://gist.github.com/" target="_blank">
                  Github
                </a>
                <a className="common-btn-2" href="https://dribbble.com/shots/popular/web-design" target="_blank">
                  Live Demo
                </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
