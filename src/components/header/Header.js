import React, { useState } from 'react';
import useScroll from 'src/hooks/useScroll';
import { Link } from 'gatsby';
import Container from 'src/components/UI/Container';
import './Header.scss';
import logo from 'src/img/EZAC_logo.svg';

export default ({
  lightMode,
}) => {
  const [menuIsOpen, setMenuOpen] = useState(false);
  const scrollPosition = useScroll();

  const toggleMenu = () => {
    setMenuOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const style = {
    backgroundColor: scrollPosition > 0 ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
  };

  return (
    <header className={`site-header ${scrollPosition > 0 ? 'shown' : ''} ${lightMode ? 'light' : ''}`}>
      <Container className="no-spacing">
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <button onClick={toggleMenu} className={`menu-button ${menuIsOpen ? 'open' : ''}`}>
          <span className={`navicon ${lightMode ? 'light' : ''}`}/>
        </button>
        <nav className={`${menuIsOpen ? 'open' : ''} ${lightMode ? 'light' : ''}`}>
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
  )
}
