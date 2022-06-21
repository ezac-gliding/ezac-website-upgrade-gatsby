import React, { useState } from 'react';
import useScroll from 'src/hooks/useScroll';
import { Link } from 'gatsby';
import Container from 'src/components/UI/Container';
import './Header.scss';
import logo from 'src/img/EZAC_logo.svg';

export default function Header() {
  const [menuIsOpen, setMenuOpen] = useState(false);
  const scrollPosition = useScroll();

  const toggleMenu = () => {
    setMenuOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrollPosition > 0 ? 'shown' : ''}`}>
      <Container className="no-spacing">
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <button type="button" onClick={toggleMenu} className={`menu-button ${menuIsOpen ? 'open' : ''}`}>
          <span className="navicon" />
        </button>
        <nav className={`${menuIsOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link activeClassName="active" onClick={closeMenu} to="/">Home</Link>
            </li>
            <li>
              <Link activeClassName="active" onClick={closeMenu} to="/club">Onze Club</Link>
            </li>
            <li>
              <Link activeClassName="active" onClick={closeMenu} to="/prices">Tarieven</Link>
            </li>
            <li>
              <Link activeClassName="active" onClick={closeMenu} to="/contact">Contact</Link>
            </li>
            <li>
              <Link activeClassName="active" onClick={closeMenu} to="/leden">Leden</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
