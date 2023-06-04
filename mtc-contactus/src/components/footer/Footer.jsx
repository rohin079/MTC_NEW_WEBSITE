import React from "react";
import "./Footer.css";

const Footer = () => {
  const logos = ["instagram", "linkedin", "youtube"];

  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <img src="/logo_dark.png" alt="logo" />
        </div>

        <div className="middle">
          <div className="about-us">
            <h3>About</h3>
            <p>
              Technology is making people's lives easier. We, here at MTC are,
              constantly Innovating, Inventing and Improvising.
            </p>
          </div>
          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>
              +91 9910810462 upesmtc@gmail.com UPES Bidholi, Dehradun 248007
            </p>
          </div>
        </div>

        <div className="connect-with-us">
          <h3>Connect With Us</h3>
          <div className="social-logos">
            {logos.map((logo) => (
              <img src={`/${logo}.svg`} alt={logo} key={logo} />
            ))}
          </div>
        </div>
      </div>

      <div className="copyright">
        <div>
          <p>COPYRIGHT &#169; 2023. MICROSOFT TECHNICAL COMMUNITY.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
