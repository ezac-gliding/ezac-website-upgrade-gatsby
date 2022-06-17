import React from 'react';
import { Link } from 'gatsby';
import fbImage from 'src/img/fb.svg';
import instaImage from 'src/img/insta.svg';
import './Footer.scss';

export default () => {

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="logo-and-nav">
          <nav>
            <ul>
              <li>
                <Link activeClassName="active" to="/">Home</Link>
              </li>
              <li>
                <Link activeClassName="active" to="/programs">Programs</Link>
              </li>
              <li>
                <Link activeClassName="active" to="/instructors">Academy</Link>
              </li>
              <li>
                <Link activeClassName="active" to="/shop">Shop</Link>
              </li>
              <li>
                <Link activeClassName="active" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-side">
          <div className="socials">
            <h2>Follow us</h2>
            <a href="https://www.facebook.com/BjjGent/"><img src={fbImage} alt="Facebook" /></a>
            <a href="https://www.instagram.com/bjj_gent/"><img src={instaImage} alt="Instagram" /></a>
          </div>
          <div className="disclaimer">
            <p>Justaasweg 5, 4571 NB Axel</p>
            <p>&copy; EZAC Axel 2023</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
