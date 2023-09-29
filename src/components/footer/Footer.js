import React from 'react';
import { Link } from 'gatsby';
import fbImage from 'src/img/fb.svg';
import instaImage from 'src/img/insta.svg';
import logo from 'src/img/EZAC_logo.svg';
import './Footer.scss';

export default () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="logo-and-nav">
        <nav>
          <ul>
            <li>
              <Link activeClassName="active" to="/">Home</Link>
            </li>
            <li>
              <Link activeClassName="active" to="/club">Onze Club</Link>
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
        </div>
        <div className="disclaimer">
          <p>Justaasweg 5, 4571 NB Axel</p>
          <p>&copy; EZAC Axel 2023</p>
        </div>
      </div>
    </div>
  </footer>
)
