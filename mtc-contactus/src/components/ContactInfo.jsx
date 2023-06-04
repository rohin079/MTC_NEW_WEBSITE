import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-heading" data-aos="fade-up">
        <h2>Meet us</h2>
        <div />
      </div>
      <div className="contact-info" data-aos="fade-up">
        <div className="map">
          <iframe
            className="mapbox"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6881.421745368433!2d77.966833!3d30.415944000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22d3ae324c238e3c!2sUPES%20-%20University%20of%20Petroleum%20and%20Energy%20Studies!5e0!3m2!1sen!2sin!4v1618552395040!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="contact-details">
          <div>
            <img src="/phone-solid.svg" alt="phone" />
            <p>+91 9910810462</p>
          </div>
          <div className="envelope">
            <img src="/envelope-solid.svg" alt="envelope" />
            <p>upesmtc@gmail.com</p>
          </div>
          <div>
            <img src="/map.svg" alt="map" />
            <p>
              UPES Bidholi,
              <br /> Dehradun 248007
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
