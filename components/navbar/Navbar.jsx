import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../components/inmuebles/img/logo.png';

import { LOGIN, REGISTER } from '../../routes/path';
import { Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
export const NavigationBar = () => {
  // const {user,token} = useContext(AuthContext);
  let user;
  return (
    <NavBar collapseOnSelect expand="lg" bg="transparent">
      <Container>
        <NavBar.Brand as={Link} to={'/'}>
          <img
            src={logo}
            alt=""
            width="60"
            height="auto"
            className="d-inline-block align-top"
          />
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="responsive-navbar-nav" />
        <NavBar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Alquilar</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#terminos">Términos y condiciones</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={LOGIN}>
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link as={Link} to={REGISTER}>
              Registrarse
            </Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};
