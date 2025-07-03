import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Images/logo.jpg';
import './nav.css';

import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentPath = location.pathname;

  return (
    <Navbar collapseOnSelect expand="lg" className={`nav-H ${scrolled ? 'nav-scrolled' : ''}`}>
      <Container className="Header">
        <Navbar.Brand as={Link} to="/" className="nav-logo">
          <img src={Logo} alt="logo" className="nav-logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={currentPath === '/' ? 'link active-link' : 'link'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/About" className={currentPath === '/About' ? 'link active-link' : 'link'}>About</Nav.Link>
            <Nav.Link as={Link} to="/Server" className={currentPath === '/Server' ? 'link active-link' : 'link'}>Services</Nav.Link>
            <Nav.Link as={Link} to="/Careers" className={currentPath === '/Careers' ? 'link active-link' : 'link'}>Careers</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className={currentPath === '/Contact' ? 'link active-link' : 'link'}>Contact</Nav.Link>
          </Nav>
          <Nav.Link href="#memes">
            <button className='bon'>Call Us</button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
