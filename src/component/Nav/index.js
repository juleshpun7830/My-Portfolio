import "../../css/nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import { useState } from "react";

function NavBar() {
  //   useEffect(() =>{
  //   const list = document.querySelectorAll('.list')
  //   function activeLink(){
  //     list.forEach((item)=>
  //     item.classList.remove('active')
  //     );
  //     this.classList.add('active');
  //     list.forEach((item)=>
  //     item.addEventListener('click',activeLink));
  //   }
  // },[])
 const [Activenav, setActiveNav] = useState ('#')

  return (
    <>
      <nav className="navigation-section">
        <div className="container">
          {/* <div className="row d-none">
            <div className="col-md-6 mx-auto">
              <div className="nav-bar">
                <ul>
                  <li className="list active">
                    <a className="" href="www.google.com">
                      <span className="icon">
                        <AiOutlineHome />
                      </span>
                      <span className="text">Home</span>
                    </a>
                  </li>
                  <li>
                    <a className="" href="www.google.com">
                      <span className="icon">
                        <BiUser />
                      </span>
                      <span className="text">Profile</span>
                    </a>
                  </li>
                  <li>
                    <a className="" href="www.google.com">
                      <span className="icon">
                        <AiOutlineFileText />
                      </span>
                      <span className="text">Experience</span>
                    </a>
                  </li>
                  <li>
                    <a className="" href="www.google.com">
                      <span className="icon">
                        <GrWorkshop />
                      </span>
                      <span className="text">Services</span>
                    </a>
                  </li>
                  <li>
                    <a className="" href="www.google.com">
                      <span className="icon">
                        <MdContactMail />
                      </span>
                      <span className="text">Contact</span>
                    </a>
                  </li>
                </ul>
                <div className="indicator"></div>
              </div>
            </div>
          </div> */}

          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div className="nav-bar-2">
                <a onClick={() => setActiveNav ('#')} className={Activenav === '#' ? 'active' : ''} href="#home">
                  <AiOutlineHome />
                </a>

                <a href="#profile" onClick={() => setActiveNav ('#profile')} className={Activenav === '#profile' ? 'active' : ''}>
                  <BiUser />
                </a>

                <a href="#experience" onClick={() => setActiveNav ('#experience')} className={Activenav === '#experience' ? 'active' : ''}>
                  <AiOutlineFileText />
                </a>

                <a href="#project" onClick={() => setActiveNav ('#project')} className={Activenav === '#project' ? 'active' : ''}>
                  <AiOutlineFundProjectionScreen />
                </a>

                <a href="#contact" onClick={() => setActiveNav ('#contact')} className={Activenav === '#contact' ? 'active' : ''}>
                  <MdContactMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
