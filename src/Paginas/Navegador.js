import React from 'react'
import { Container, Navbar ,Nav, NavDropdown} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import Logoimg from "../assets/img/sistemas opertaivos.jpg"
const Navegador = () => {
  return (
    <div>
        <Navbar expand="lg" className='bg-body-tertiary'>
          <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logoimg}
              width="70"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Software mas importantes
          </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic.navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto'>         
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/Galeria">Galeria</Nav.Link>
              <Nav.Link href="/Form">Tu opinion</Nav.Link>
              <Nav.Link href="/Acercade">Acerca del programador</Nav.Link>
              <NavDropdown title="Software de navegación" id="basic-nav-dropdown">
                <NavDropdown.Item href='/Google'>Google Chrome</NavDropdown.Item>
                <NavDropdown.Item href='/Brave'>Brave</NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="Software de sistemas" id="basic-nav-dropdown">
                <NavDropdown.Item href='/Microsoft'>Microsoft Windows</NavDropdown.Item>
                <NavDropdown.Item href='/MacOS'>MacOS</NavDropdown.Item>
                <NavDropdown.Item href='/Linux'>Linux</NavDropdown.Item>
                <NavDropdown.Item href='/Android'>Android</NavDropdown.Item>
              </NavDropdown>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr/>
        <Outlet/>
    </div>

  )
}

export default Navegador