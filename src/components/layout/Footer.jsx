import React from 'react'
import { AiFillInstagram,AiFillFacebook, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <nav className='footer'>
      <div className='footer_section'>
        <h2>FOOD DARBAR</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @food_darbar</strong>
      </div>

      <aside className='social_media'>
        <h4>Follow Us</h4>

        <a href="https://www.facebook.com/suraj.kabirath">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/surajkabirath__/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/surajkabirath">
          <AiFillGithub />
        </a>
      </aside>
    </nav>
  );


}

export default Footer