import React from 'react';
import { Button, Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LOGIN, PRIVATE } from '../routes/path';

const Home = () => {
  return (
    <Container>
      <h1 className="text-center">Inmobiliaria Proyect 🔥</h1>
      <Stack gap="2" className="col-md-5 mx-auto">
        <Button as={Link} to={LOGIN}>
          Iniciar Sesión
        </Button>
        <Button as={Link} to={PRIVATE}>
          Profile
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
