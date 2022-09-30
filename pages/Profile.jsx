import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LOGOUT } from '../routes/path';

const Profile = () => {
  return (
    <Container>
      <h1> Ruta privada a </h1>
      <Button as={Link} to={LOGOUT}>
        Cerrar sesion
      </Button>
    </Container>
  );
};

export default Profile;
