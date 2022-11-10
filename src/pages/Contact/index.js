import React from "react";
import "../../css/contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_sprmm2q', 'template_nm90ube', form.current, '_mWMxsdbQPjwtV1Db')
//   }
// }

function ContactUs() {
  const form = useRef();
  const sendEmail = (e) => {
    console.log('insidethis method')
    
    e.preventDefault();
    emailjs.sendForm('service_sprmm2q', 'template_nm90ube', form.current, '_mWMxsdbQPjwtV1Db')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-heading">
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="contact-left-wrapper">
                <div className="contact-options">
                  
                  <article className="contact-option">
                    <HiOutlineMail className="contact-option-icon" />
                    <h4>Email</h4>
                    <h5>dummy@gmail.com</h5>
                    <a
                      href="mailto:juleshpun67@gmail.com"
                      className="contact-send"
                      target="_blank"
                    >
                      Send a message
                    </a>
                  </article>
                  <article className="contact-option">
                    <RiMessengerLine className="contact-option-icon" />
                    <h4>Messenger</h4>
                    <h5>dummyperson</h5>
                    <a
                      href="https://m.me/jase.julesh"
                      className="contact-send"
                      target="_blank"
                    >
                      Send a message
                    </a>
                  </article>
                  <article className="contact-option">
                    <BsWhatsapp className="contact-option-icon" />
                    <h4>WhatsApp</h4>
                    <h5>+91 99-99-99 9999</h5>
                    <a
                      href="https://wa.me/917830128995"
                      className="contact-send"
                      target="_blank"
                    >
                      Send a message
                    </a>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-right-wrapper">
              <form ref={form} onSubmit={sendEmail}>
                  <div className="contact-form">
                    <input
                      type="text"
                      name="to_name"
                      placeholder="Your Full Name"
                    required />
                    <input
                      type="email"
                      name="from_name"
                      placeholder="Your Email"
                    required />
                    <textarea
                      name="message"
                      placeholder="Your Message..."
                      rows="7"
                    required ></textarea>
                    <button  className="common-btn-2">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
