import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css"
import Bcci from '../Image/BCCI_logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Ipl from '../Image/ipl_logo.png'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Form } from 'react-router-dom';
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
            BCCI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/AdminLogin">admin</Nav.Link>
              {/* <Nav.Link href="/Login">Login</Nav.Link> */}
              {/* <Button to="/AdminLogin">Admin Login</Button>
            <Button to="/Login">Sign up</Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {/* // ...................second navebar................... */}


      <Navbar expand="lg" className="body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><img className='ipl' src={Ipl} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/Teams">TEAMS</Nav.Link>
              {/* <Nav.Link href="#point">POINT TABLE</Nav.Link> */}
              <Nav.Link href="/News">NEWS</Nav.Link>
              <NavDropdown title="WINER" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Win team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  11winer
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3"></NavDropdown.Item> */}
                <NavDropdown.Divider />

              </NavDropdown>
            </Nav>
            {/* <Nav.Link className=''></Nav.Link> */}
      <Nav.Link className='search' href='/search'> Search</Nav.Link>
      
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;