import React from 'react';
import { inmuebles, useFetch } from '../../../services/inmueble';
import Property from '../Property/Property';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

const PropertyList = () => {
  //const {status, data} = useFetch();
  return (
    <Container className="mx-auto py-4">
      <Row xs={1} md={2} className="g-4">
        {inmuebles.map((inmueble) => (
          <Property inmueble={inmueble} key={inmueble.description} />
        ))}
      </Row>
    </Container>
  );
};

export default PropertyList;
