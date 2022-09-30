import React from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container, Button } from 'react-bootstrap';

const SearchBar = () => {
  const [filter, setFilter] = useState({
    typeContract: '',
    numbeOfAmbients: '',
    price: '',
    city: '',
  });
  const handleChange = (e) => {
    setFilter((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    console.log(filter);
  };

  const submitSearch = () => {
    console.log(filter);
  };

  return (
    <Container>
      <Form>
        <Row xs={1} md={6}>
          <Col>
            <Form.Control
              placeholder="¿A donde quieres mudarte?"
              d="city"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Select
              placeholder="Tipo de inmueble"
              id="optionProperty"
              onChange={handleChange}
            >
              <option value="apartment">Departamento</option>
              <option value="hostel">Hostel</option>
              <option value="house">Casa</option>
              <option value="ph">PH</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select id="typeContract" onChange={handleChange}>
              <option value="comprar">Comprar</option>
              <option value="alquilar">Alquilar</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select id="numbeOfAmbients" onChange={handleChange}>
              <option value="1">1 ambiente</option>
              <option value="2">2 ambientes</option>
              <option value="3">3 ambientes</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Control
              placeholder="Precio"
              id="price"
              type="number"
            ></Form.Control>
          </Col>
          <Col xs="auto">
            <Button variant="outline-success" onClick={() => submitSearch()}>
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchBar;
