import React from 'react';
import { Link } from 'gatsby';
import fbImage from 'src/img/fb.svg';
import instaImage from 'src/img/insta.svg';
import youtubeImage from 'src/img/youtube.svg';
import logo from 'src/img/EZAC_logo.svg';
import './Footer.scss';

export default () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="logo-and-nav">
        <div className="logo">
          <Link to="/">
            <img className="header-logo" src={logo} alt="logo" />
          </Link>
          <p className="eye-catcher">Eerste Zeeuws Vlaamse Aero Club</p>
          <div className="disclaimer">
            <p>Justaasweg 5, 4571 NB Axel</p>
            <p>&copy; EZAC Axel 2023</p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link activeClassName="active" to="/">Home</Link>
            </li>
            <li>
              <Link activeClassName="active" to="/club">Onze Club</Link>
            </li>
            <li>
              <Link activeClassName="active" to="/book-a-flight">Meevliegen</Link>
            </li>
            <li>
              <Link activeClassName="active" to="/prices">Tarieven</Link>
            </li>
            <li>
              <Link activeClassName="active" to="/contact">Contact</Link>
            </li>
            <li>
              <a href="https://ezac.nl">Leden</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <div className="socials">
          <h3>Follow us</h3>
          <a href="https://nl-nl.facebook.com/ezaczweefvliegclub/"><img src={fbImage} alt="Facebook" /></a>
          <a href="https://www.instagram.com/ezac_zweefvliegclub"><img src={instaImage} alt="Instagram" /></a>
          <a href="https://www.youtube.com/@ezaczweefvliegclub5682"><img src={youtubeImage} alt="YouTube" /></a>
        </div>
      </div>
    </div>
  </footer>
)
