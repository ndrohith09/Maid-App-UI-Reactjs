import React from 'react';
import { FiPhone, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const contact_component = () => {
    return (
        <>
        <div class="container" style={{ marginTop: "3%" }}>
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="container">
              <div class="base_header">
                <span>
                  <small class="bor_header_left"></small>CONTACT
                  <small class="bor_header_right"></small>
                </span>
                <h3>Have any queries?</h3>
              </div>
              <div class="base_footer">
                <br />
                <ul style={{ listStyle: "none" }}>
                  <li class="contact-icons">
                    <FiPhone />
                    <label class="form-label">+91 1234567890</label>
                  </li>
                  <li class="contact-icons">
                    <FiMail />
                    <label class="form-label">homietouch@gmail.com</label>
                  </li>
                  <li class="contact-icons">
                    <IoLocationOutline />
                    <label class="form-label">Bangalore</label>
                  </li>
                </ul>
                <br />
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.184892414549!2d80.15149541523002!3d13.023894990821558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260fb2933cd77%3A0xb7048e30ac58feb3!2sSwamy&#39;s%20School!5e0!3m2!1sen!2sin!4v1631255609690!5m2!1sen!2sin"
                style={{ border: 0, width: "100%", height: "55vh" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <br />
      </>
    )
}

export default contact_component
