import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css"
import Bcci from '../Image/BCCI_logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Ipl from '../Image/ipl_logo.png'
import Logoipl from '../Image/main-logo.jpeg'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import Search from '../Home/Search/Search';
// import Teams from '../Teams/Teams';

// import SearchIcon from '@mui/icons-material/Search';cd



function Header() {



  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Bcci} alt="" />
            THE CRICLIFE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Link to="/AdminLogin">admin</Link> */}


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {/* // ...................second navebar................... */}


      <Navbar expand="lg" className="body-tertiary">
        <Container>
          <Navbar.Brand href="/"><img className='ipl' src={Logoipl} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link to="/">HOME</Link>
              <Link to="/Teams">TEAMS</Link>
              {/* <Nav.Link href="#point">POINT TABLE</Nav.Link> */}
              <Link to="/News">NEWS</Link>
              {/* <NavDropdown title="MATCHES PREDICTION" id="basic-nav-dropdown">
                <Link to="/win-team" className="dropdown-item">Win team</Link>
                <Link to="/playing-11" className="dropdown-item">Playing 11</Link>
                <NavDropdown.Divider />
              </NavDropdown> */}

            </Nav>
            {/* <Nav.Link className=''></Nav.Link> */}
            <Link className='search' to='/search'> Search</Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;